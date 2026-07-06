"use client";
import React from "react";
import { m } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Spotlight Component — Diadaptasi dari Aceternity UI
 * Efek sorotan cahaya yang bergerak halus secara horizontal
 * Mendukung prop `fill` untuk warna dan `className` untuk posisi kustom
 *
 * PERBAIKAN: Ditambahkan blur ekstrem + opacity rendah agar cahaya
 * terlihat natural tanpa garis tajam/silang.
 */
export const Spotlight = ({ className, fill = "white" }) => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
    >
      {/* ====== BEAM KIRI — sorotan dari kiri atas ====== */}
      <m.div
        animate={{ x: [0, 80, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-screen h-screen z-40 pointer-events-none"
      >
        {/* Beam utama — blur ekstrem agar tidak membentuk garis tajam */}
        <div
          style={{
            transform: "translateY(-350px) rotate(-45deg)",
            background: `radial-gradient(68.54% 68.72% at 55.02% 31.46%, ${fill} 0, ${fill} 90%, ${fill} 60%)`,
            opacity: 0.06,
            width: "560px",
            height: "1380px",
            filter: "blur(80px)",
          }}
          className="absolute top-0 left-0"
        />
        {/* Beam sekunder — lebih tipis, blur lebih besar */}
        <div
          style={{
            transform: "rotate(-45deg) translate(5%, -50%)",
            background: `radial-gradient(50% 50% at 50% 50%, ${fill} 0, ${fill} 80%, transparent 100%)`,
            opacity: 0.20,
            width: "240px",
            height: "1380px",
            filter: "blur(100px)",
          }}
          className="absolute top-0 left-0 origin-top-left"
        />
        {/* Beam tersier — paling halus, blur maksimal */}
        <div
          style={{
            transform: "rotate(-45deg) translate(-180%, -70%)",
            background: `radial-gradient(50% 50% at 50% 50%, ${fill} 0, ${fill} 80%, transparent 100%)`,
            opacity: 0.03,
            width: "240px",
            height: "1380px",
            filter: "blur(120px)",
          }}
          className="absolute top-0 left-0 origin-top-left"
        />
      </m.div>

      {/* ====== BEAM KANAN — bergerak berlawanan arah ====== */}
      <m.div
        animate={{ rotateX: [0, 50, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-screen h-screen z-40 pointer-events-none"
      >
        <div
          style={{
            transform: "translateY(-350px) rotate(70deg)",
            background: `radial-gradient(68.54% 68.72% at 55.02% 31.46%, ${fill} 0, ${fill} 50%, ${fill} 80%)`,
            opacity: 0.45,
            width: "160px",
            height: "1250px",
            filter: "blur(45px)",
          }}
          className="absolute top-0 right-0 rounded-md"
        />
        <div
          style={{
            transform: "rotate(45deg) translate(-5%, -50%)",
            background: `radial-gradient(50% 50% at 50% 50%, ${fill} 0, ${fill} 80%, transparent 100%)`,
            opacity: 0.20,
            width: "240px",
            height: "1380px",
            filter: "blur(100px)",
          }}
          className="absolute top-0 right-0 origin-top-right"
        />
        <div
          style={{
            transform: "rotate(45deg) translate(180%, -70%)",
            background: `radial-gradient(50% 50% at 50% 50%, ${fill} 0, ${fill} 80%, transparent 100%)`,
            opacity: 0.03,
            width: "240px",
            height: "1380px",
            filter: "blur(120px)",
          }}
          className="absolute top-0 right-0 origin-top-right"
        />
      </m.div>
    </m.div>
  );
};
