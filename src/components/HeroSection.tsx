"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";

const TOTAL_FRAMES = 40;
const FRAME_DURATION = 50; // ~10fps

export default function HeroSection() {
  const { t } = useTranslation();
  const imgRef = useRef<HTMLImageElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Pre-cargar todas las imágenes
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises: Promise<void>[] = [];

      for (let i = 1; i <= TOTAL_FRAMES; i++) {
        const frameNumber = i.toString().padStart(3, "0");
        const src = `/assets/frames/ezgif-frame-${frameNumber}.jpg`;

        const promise = new Promise<void>((resolve) => {
          const img = new window.Image();
          img.decoding = "async";
          img.fetchPriority = i <= 10 ? "high" : "low";
          img.onload = () => {
            img
              .decode()
              .then(() => resolve())
              .catch(() => resolve());
          };
          img.onerror = () => resolve();
          img.src = src;
        });

        imagePromises.push(promise);
      }

      await Promise.all(imagePromises);
      setImagesLoaded(true);
    };

    preloadImages();
  }, []);

  // Animación una sola vez, se detiene en el último frame
  useEffect(() => {
    if (!imagesLoaded) return;

    let frameIndex = 1;
    const interval = setInterval(() => {
      if (imgRef.current) {
        imgRef.current.src = getFrameSrc(frameIndex);
      }
      if (frameIndex >= TOTAL_FRAMES) {
        clearInterval(interval);
        return;
      }
      frameIndex += 1;
    }, FRAME_DURATION);

    return () => clearInterval(interval);
  }, [imagesLoaded]);

  const getFrameSrc = (frame: number): string => {
    const frameNumber = frame.toString().padStart(3, "0");
    return `/assets/frames/ezgif-frame-${frameNumber}.jpg`;
  };

  return (
    <section className="w-full flex flex-col lg:block lg:relative lg:min-h-[90vh] overflow-hidden">
      {/* Frame — mobile: bloque arriba, desktop: fondo absoluto */}
      <div className="w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:absolute lg:inset-0 lg:-z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={imgRef}
          src={getFrameSrc(1)}
          alt="Hero background"
          className="w-full h-full object-cover"
          style={{
            backfaceVisibility: "hidden",
            transform: "translateZ(0)",
          }}
        />
      </div>

      {/* Texto — mobile: debajo del frame, desktop: overlay izquierda */}
      <div className="relative z-10 w-full px-4 py-8 lg:min-h-[90vh] lg:flex lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-sm text-left"
        >
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 drop-shadow leading-snug">
            &ldquo;{t("hero.welcome")}&rdquo;
          </h1>
          <p className="text-base md:text-lg text-gray-700 mb-8">
            {t("hero.description")}
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#about"
              className="px-6 py-3 bg-gray-900 text-white rounded-md font-medium hover:bg-gray-800 transition-colors text-center shadow-lg"
            >
              {t("hero.exploreWork")}
            </a>
            <a
              href="mailto:elvisreyxd@gmail.com"
              className="px-6 py-3 bg-white/60 text-gray-900 border border-gray-300 rounded-md font-medium hover:bg-white/80 transition-colors text-center backdrop-blur-sm"
            >
              {t("hero.getInTouch")}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
