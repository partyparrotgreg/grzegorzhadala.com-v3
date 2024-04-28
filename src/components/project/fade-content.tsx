"use client";

import { Fade } from "react-awesome-reveal";
import { getBlock } from "./get-block";

export const FadeContent = ({ record }: { record: any }) => {
  return (
    <>
      <Fade direction="up" cascade triggerOnce>
        {getBlock(record)}
      </Fade>
    </>
  );
};
