"use client";

import Spline from "@splinetool/react-spline";

export const SplineWrapper = ({ src }: { src: string }) => {
  return <Spline scene={src} />;
};
