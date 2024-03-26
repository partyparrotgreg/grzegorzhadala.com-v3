"use client";

import { gsap } from "gsap";

import { SlowMo } from "gsap/EasePack";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(
  ScrollTrigger,
  Observer,
  ScrollToPlugin,
  EaselPlugin,
  TextPlugin,
  SlowMo,
  useGSAP
);

export const GsapTest = () => {
  const ref = useRef(null);

  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top center",
        end: "bottom center",
        markers: true,
        scrub: true,
      },
    });
    gsap.to(ref.current, {
      x: 100,
      width: 200,
      duration: 2,
      scrollTrigger: {
        trigger: ref.current,
        start: "top center",
        end: "bottom center",
        markers: true,
        scrub: true,
      },
    });
  });

  return (
    <div ref={ref} className="bg-brand h-16 w-9">
      gsap test
    </div>
  );
};
