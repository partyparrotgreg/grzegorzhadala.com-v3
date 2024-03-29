"use client";

import { SectionGrid } from "../shared/section-grid";
import { TextDescription } from "../shared/text-description";
import { UnderlineLink } from "../shared/underline-link";

export const SectionFooter = () => {
  return (
    <div className="mb-12">
      <div className="section-padding section-gap flex flex-col">
        <div>Some text...</div>
        <SectionGrid>
          <TextDescription
            className="col-span-4"
            label={"Current"}
            items={["Sei Labs, LLC", "Senior Product Designer"]}
          />
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
    </div>
  );
};
