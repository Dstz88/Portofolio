"use client";

import { forwardRef } from "react";

const SequenceCanvas = forwardRef<HTMLCanvasElement>((_, ref) => {
  return (
    <>
      <canvas
        ref={ref}
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/60 pointer-events-none z-[1]" />
    </>
  );
});

SequenceCanvas.displayName = "SequenceCanvas";
export default SequenceCanvas;
