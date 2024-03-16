import Spline from "@splinetool/react-spline";
import { FC, Suspense, forwardRef } from "react";

export const SplineThingy = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Spline
        {...props}
        scene="https://prod.spline.design/plHJQRE-KDTz88pQ/scene.splinecode"
        ref={ref}
      />
    </Suspense>
  );
});

SplineThingy.displayName = "SplineThingy";
