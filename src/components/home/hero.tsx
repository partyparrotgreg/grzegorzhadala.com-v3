"use client";

import Markdown from "react-markdown";
import { CustomLink } from "../shared/custom-link";

export type HeroProps = {
  text: string | null | undefined;
  callout?: string | null | undefined;
};

export const Hero = ({ text, callout }: HeroProps) => {

  return (
    <div className="flex flex-col relative isolate content-padding">
      {callout && <p className="text-lg">{callout}</p>}
      <Markdown
        components={{
          p: (props) => (
            <p
              {...props}
              className="relative z-50 text-2xl lg:text-[2.5em] leading-[1.25em] lg:leading-[1.15em] tracking-tight font-safiro max-w-7xl"
            />
          ),
          strong: (props) => (
            <strong {...props} className="text-brand font-normal" />
          ),
          a: (props) => (
            <CustomLink {...props} target="_blank" className="text-blue-600" />
          ),
        }}
      >
        {text}
      </Markdown>
    </div>
  );
};
