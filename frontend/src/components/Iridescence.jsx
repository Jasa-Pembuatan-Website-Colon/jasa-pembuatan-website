import { Renderer, Program, Mesh, Color, Triangle } from "ogl";
import { useEffect, useRef, useState } from "react";

import "./Iridescence.css";

const vertexShader = `
attribute vec2 uv;
attribute vec2 position;

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`;

const fragmentShader = `
precision highp float;

uniform float uTime;
uniform vec3 uColor;
uniform vec3 uResolution;
uniform vec2 uMouse;
uniform float uAmplitude;
uniform float uSpeed;

varying vec2 vUv;

void main() {
  float mr = min(uResolution.x, uResolution.y);
  vec2 uv = (vUv.xy * 2.0 - 1.0) * uResolution.xy / mr;

  uv += (uMouse - vec2(0.5)) * uAmplitude;

  float d = -uTime * 0.5 * uSpeed;
  float a = 0.0;
  for (float i = 0.0; i < 8.0; ++i) {
    a += cos(i - d - a * uv.x);
    d += sin(uv.y * i + a);
  }
  d += uTime * 0.5 * uSpeed;
  vec3 col = vec3(cos(uv * vec2(d, a)) * 0.6 + 0.4, cos(a + d) * 0.5 + 0.5);
  col = cos(col * cos(vec3(d, a, 2.5)) * 0.5 + 0.5) * uColor;
  gl_FragColor = vec4(col, 1.0);
}
`;

export default function Iridescence({
  color = [1, 1, 1],
  speed = 1.0,
  amplitude = 0.1,
  mouseReact = true,
  ...rest
}) {
  const ctnDom = useRef(null);
  const mousePos = useRef({ x: 0.5, y: 0.5 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!ctnDom.current) return;
    const ctn = ctnDom.current;

    let renderer;
    let program;
    let animateId;
    let idleHandle;

    function start() {
      renderer = new Renderer();
      const gl = renderer.gl;
      gl.clearColor(1, 1, 1, 1);

      function resize() {
        const scale = 1;
        renderer.setSize(ctn.offsetWidth * scale, ctn.offsetHeight * scale);
        if (program) {
          program.uniforms.uResolution.value = new Color(
            gl.canvas.width,
            gl.canvas.height,
            gl.canvas.width / gl.canvas.height,
          );
        }
      }
      window.addEventListener("resize", resize, false);
      resize();

      const geometry = new Triangle(gl);
      program = new Program(gl, {
        vertex: vertexShader,
        fragment: fragmentShader,
        uniforms: {
          uTime: { value: 0 },
          uColor: { value: new Color(...color) },
          uResolution: {
            value: new Color(
              gl.canvas.width,
              gl.canvas.height,
              gl.canvas.width / gl.canvas.height,
            ),
          },
          uMouse: {
            value: new Float32Array([mousePos.current.x, mousePos.current.y]),
          },
          uAmplitude: { value: amplitude },
          uSpeed: { value: speed },
        },
      });

      const mesh = new Mesh(gl, { geometry, program });

      function update(t) {
        animateId = requestAnimationFrame(update);
        program.uniforms.uTime.value = t * 0.001;
        renderer.render({ scene: mesh });
      }

      // Prepare canvas but don't attach it immediately — this allows CSS fallback to show first
      const canvas = renderer.gl && renderer.gl.canvas;
      if (canvas) {
        // Style the canvas to be absolute and cover the container, and hidden initially
        canvas.style.position = "absolute";
        canvas.style.left = "0";
        canvas.style.top = "0";
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.style.inset = "0";
        canvas.style.opacity = "0";
        canvas.style.transition = "opacity 400ms ease";
        canvas.style.pointerEvents = "none";
        canvas.style.zIndex = "0";

        ctn.appendChild(canvas);

        // Start render loop after canvas is in DOM
        animateId = requestAnimationFrame(update);

        // Fade-in when first frame is ready
        // Use a microtask to ensure initial paint of CSS background happened
        requestAnimationFrame(() => {
          // small timeout to avoid Jank
          setTimeout(() => {
            canvas.style.opacity = "1";
            setIsLoaded(true);
          }, 50);
        });
      }

      function handleMouseMove(e) {
        const rect = ctn.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = 1.0 - (e.clientY - rect.top) / rect.height;
        mousePos.current = { x, y };
        if (program) {
          program.uniforms.uMouse.value[0] = x;
          program.uniforms.uMouse.value[1] = y;
        }
      }
      if (mouseReact) {
        ctn.addEventListener("mousemove", handleMouseMove);
      }

      // Cleanup function
      const cleanup = () => {
        cancelAnimationFrame(animateId);
        window.removeEventListener("resize", resize);
        if (mouseReact) {
          ctn.removeEventListener("mousemove", handleMouseMove);
        }
        if (
          renderer &&
          renderer.gl &&
          renderer.gl.canvas &&
          renderer.gl.canvas.parentNode === ctn
        ) {
          ctn.removeChild(renderer.gl.canvas);
          renderer.gl.getExtension("WEBGL_lose_context")?.loseContext();
        }
      };

      return cleanup;
    }

    // Schedule start on idle to avoid blocking LCP; fallback to timeout
    if ("requestIdleCallback" in window) {
      idleHandle = requestIdleCallback(start, { timeout: 1000 });
    } else {
      idleHandle = setTimeout(start, 200);
    }

    return () => {
      if ("cancelIdleCallback" in window && idleHandle) {
        cancelIdleCallback(idleHandle);
      } else if (idleHandle) {
        clearTimeout(idleHandle);
      }
    };
  }, [color, speed, amplitude, mouseReact]);

  return (
    <div
      ref={ctnDom}
      className="iridescence-container"
      {...rest}
      data-loaded={isLoaded}
    />
  );
}
