import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { MutableRefObject } from "react";

export const animatePageIn = ({
  elements,
}: {
  elements: MutableRefObject<HTMLElement[]>;
}) => {
  if (elements.current.length === 0) return;
  const items = elements.current.map((el) => el);

  const tl = gsap.timeline();

  tl.set(items, {
    yPercent: 0,
  }).to(items, {
    yPercent: 100,
    stagger: 0.2,
  });
};

export const animatePageOut = ({
  router,
  elements,
}: {
  router: AppRouterInstance;
  elements: MutableRefObject<HTMLElement[]>;
}) => {
  const tl = gsap.timeline();
  const items = elements.current.map((el) => el);
  tl.set(items, {
    yPercent: -100,
  }).to(items, {
    yPercent: 0,
    stagger: 0.2,
    onComplete: () => {
      router.push(href);
    },
  });
};
