import Spline from "@splinetool/react-spline";
import { Suspense, forwardRef } from "react";

export const SplineThingy = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <Suspense
      fallback={
        <div className="fixed inset-0 grid place-content-center z-50">
          Loading...
        </div>
      }
    >
      <Spline
        className="w-full h-full"
        {...props}
        scene="https://prod.spline.design/plHJQRE-KDTz88pQ/scene.splinecode"
        ref={ref}
      />
    </Suspense>
  );
});

SplineThingy.displayName = "SplineThingy";
