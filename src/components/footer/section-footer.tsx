"use client";

import { SectionGrid } from "../shared/section-grid";
import { TextDescription } from "../shared/text-description";
import { UnderlineLink } from "../shared/underline-link";

export const SectionFooter = () => {
  return (
    <div className="flex flex-col gap-16">
      <SectionGrid>
        <TextDescription
          className="col-span-4"
          label={"Connect"}
          items={[
            <UnderlineLink
              href="https://www.linkedin.com/in/greghadala/"
              key="email"
            >
              grzegorz.hadala@gmail.com
            </UnderlineLink>,
            <UnderlineLink
              href="https://www.linkedin.com/in/greghadala/"
              key="linkedin"
            >
              LinkedIn
            </UnderlineLink>,
          ]}
        />
      </SectionGrid>
    </div>
  );
};
