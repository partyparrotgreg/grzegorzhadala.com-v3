"use client";

import Markdown from "react-markdown";
import { CustomLink } from "../shared/custom-link";

export const Hero = ({
  text,
  callout,
}: {
  text?: string;
  callout?: string;
}) => {
  return (
    <div className="flex flex-col relative isolate content-padding">
      {callout && <div className="mb-4 text-foreground/75">{callout}</div>}
      <Markdown
        components={{
          p: (props) => (
            <p
              {...props}
              className="relative z-50 text-3xl lg:text-[4em] leading-[1.25em] lg:leading-[1.15em] tracking-tight font-safiro"
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
