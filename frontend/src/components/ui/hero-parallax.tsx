"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  m,
  useScroll,
  useTransform,
  useSpring,
  type MotionValue,
} from "framer-motion";

type Product = {
  title: string;
  link: string;
  thumbnail: string;
};

export const HeroParallax = ({
  products,
  title = "The Ultimate development studio",
  description = "We build beautiful products with the latest technologies and frameworks.",
}: {
  products: Product[];
  title?: string;
  description?: string;
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Optimize spring settings (lower stiffness/damping calculation updates for smoother thread execution)
  const springConfig = { stiffness: 100, damping: 20, mass: 0.5 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 600]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -600]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [10, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.4, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [12, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-400, 300]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="relative flex h-[190vh] flex-col self-auto overflow-hidden py-20 antialiased [perspective:800px] [transform-style:preserve-3d] sm:h-[220vh] sm:py-24 lg:h-[240vh] lg:py-32"
    >
      <Header title={title} description={description} />
      <m.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="will-change-transform"
      >
        <m.div className="mb-6 flex flex-row-reverse space-x-4 space-x-reverse sm:mb-10 sm:space-x-8 lg:mb-14 lg:space-x-12">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </m.div>
        <m.div className="mb-6 flex flex-row space-x-4 sm:mb-10 sm:space-x-8 lg:mb-14 lg:space-x-12">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </m.div>
        <m.div className="flex flex-row-reverse space-x-4 space-x-reverse sm:space-x-8 lg:space-x-12">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </m.div>
      </m.div>
    </div>
  );
};

export const Header = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="relative left-0 top-0 mx-auto w-full max-w-6xl px-6 py-10 md:py-20">
      <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-cyan-300/80">
        Portfolio
      </p>
      <h1 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-zinc-100 md:text-5xl">
        {title}
      </h1>
      <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-500 md:text-base">
        {description}
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: Product;
  translate: MotionValue<number>;
}) => {
  return (
    <m.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -10,
      }}
      key={product.title}
      className="group/product relative h-48 w-[16rem] shrink-0 overflow-hidden rounded-lg border border-white/[0.08] bg-zinc-900 shadow-xl shadow-black/20 sm:h-64 sm:w-[22rem] lg:h-72 lg:w-[26rem] will-change-transform"
    >
      <Link
        href={product.link}
        className="block h-full group-hover/product:shadow-2xl"
      >
        <Image
          src={product.thumbnail}
          fill
          loading="lazy"
          sizes="(max-width: 640px) 256px, (max-width: 1024px) 352px, 416px"
          className="absolute inset-0 h-full w-full object-cover object-left-top transition-transform duration-500 group-hover/product:scale-105"
          alt={product.title}
        />
      </Link>
      <div className="pointer-events-none absolute inset-0 h-full w-full bg-black opacity-0 transition-opacity duration-300 group-hover/product:opacity-70"></div>
      <h2 className="absolute bottom-4 left-4 max-w-[80%] text-sm font-semibold text-white opacity-0 transition-opacity duration-300 group-hover/product:opacity-100">
        {product.title}
      </h2>
    </m.div>
  );
};
