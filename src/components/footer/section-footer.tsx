"use client";

import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import { TextDescription } from "../shared/text-description";
import { UnderlineLink } from "../shared/underline-link";
import { BlockSectionTitle } from "../blocks/block-section-title";

export const SectionFooter = () => {
  return (
    <>
      <BlockSectionTitle action={<button>Go up</button>}>
        Connect
      </BlockSectionTitle>
      <div className="flex flex-col gap-16 lg:grid lg:grid-cols-3">
        <TextDescription
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
              LinkedIn <ArrowSquareOut />
            </UnderlineLink>,
          ]}
        />
        <TextDescription
          items={[
            <UnderlineLink href="/" key="index">
              Work
            </UnderlineLink>,
            <UnderlineLink href="/about" key="about">
              About
            </UnderlineLink>,
          ]}
        />
        <TextDescription
          items={[
            <UnderlineLink href="/" key="index">
              Work
            </UnderlineLink>,
            <UnderlineLink href="/about" key="about">
              About
            </UnderlineLink>,
          ]}
        />
      </div>
    </>
  );
};
