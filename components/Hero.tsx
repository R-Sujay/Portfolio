"use client";

import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useSetRecoilState } from "recoil";
import { selectedAtom } from "@/atoms/HeaderItem";
import AnimateText from "@/components/AnimateText";
import { urlForImage } from "@/sanity/lib/image";
import { HeroType } from "@/typings";

interface Props {
  hero: HeroType;
}

function Hero({ hero }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const setSelected = useSetRecoilState(selectedAtom);
  const placeholderText = [
    { type: "heading1", text: hero.name, style: "text-6xl font-semibold" },
  ];

  useEffect(() => {
    if (isInView) {
      setSelected(0);
    }
  }, [isInView]);

  return (
    <main className="container flex items-center" id="about" ref={ref}>
      <div className="relative w-[50%]">
        <h1 className="text-2xl font-semibold text-gray-400">Hi, I'm</h1>
        <motion.div
          className="App"
          initial="hidden"
          animate={"visible"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.025,
              },
            },
          }}
        >
          {placeholderText.map((item, index) => {
            return (
              <AnimateText
                {...item}
                key={index}
                hiddenColor="#d946ef"
                visibleColor="rgb(99, 102,  241)"
              />
            );
          })}
        </motion.div>
        <p className="mb-4 max-w-lg flex-row font-code text-base text-gray-500">
          {"<"}
          <span className="text-indigo-500">sujay</span>
          {">"}
          <Typewriter words={hero.desc} loop={1} typeSpeed={7} cursor />
          {"</"}
          <span className="text-indigo-500">sujay</span>
          {">"}
        </p>
        <div className="mt-3 flex space-x-4">
          <button className="rounded-2xl bg-indigo-500 px-8 py-4 text-sm font-semibold text-white shadow-2xl dark:bg-indigo-700">
            Contact me
          </button>
          <button className="slide-btn group h-14 rounded-2xl px-8 py-4 text-sm font-semibold text-indigo-500">
            View Resume
            <span className="slide-main" />
          </button>
        </div>
      </div>

      <div className="relative flex-1 items-center justify-center">
        <div className="relative flex items-center justify-center lg:ml-[30%]">
          <div className="relative h-96 w-96 animate-heroImage rounded-full bg-white shadow-2xl lg:h-[400px] lg:w-[400px]">
            <Image
              src={urlForImage(hero.profile)}
              fill={true}
              className="rounded-full object-cover"
              priority={true}
              alt={hero.profile.alt}
            />
          </div>
          <div className="hero_imageBorder h-[450px] w-[450px]" />
          <div className="hero_imageBorder h-[500px] w-[500px]" />
        </div>
        <div className="absolute -z-10 h-[410px] w-[410px] overflow-hidden rounded-full lg:left-[10%] lg:top-5 lg:h-[450px] lg:w-[450px]">
          <div className="relative flex h-full w-full items-center justify-center">
            <div className="absolute -z-10 h-[500px] w-[250px] animate-spin bg-gradient-to-r from-violet-500 to-fuchsia-500 lg:h-full lg:w-full"></div>
            <div className="hidden h-[375px] w-[375px] rounded-full bg-white dark:bg-[#13192d] lg:block"></div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
