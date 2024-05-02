"use client";

import { useSiteNavigation } from "@/hooks/useSiteNavigation";
import { ArrowLineUp, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { BlockSectionTitle } from "../blocks/block-section-title";
import { UnderlineLink } from "../shared/underline-link";
import { Button } from "../ui/button";
import posthog from "posthog-js";

const NAV_ICON_SIZE = 14;

export const SectionFooter = () => {
  const { navItems } = useSiteNavigation();

  return (
    <>
      <BlockSectionTitle
        action={
          <Button
            size={"icon"}
            variant={"filled"}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              posthog.capture("footer_back_to_top_clicked");
            }}
          >
            <ArrowLineUp size={NAV_ICON_SIZE} />
          </Button>
        }
      >
        Connect
      </BlockSectionTitle>
      <div className="flex flex-col gap-16 lg:grid lg:grid-cols-3 place-items-start mb-24">
        <div className="gap-4 flex flex-row">
          <UnderlineLink href="https://www.linkedin.com/in/greghadala/">
            LinkedIn <ArrowUpRight size={NAV_ICON_SIZE} />
          </UnderlineLink>
          <UnderlineLink href="https://figma.com/@greghadala">
            Figma <ArrowUpRight size={NAV_ICON_SIZE} />
          </UnderlineLink>
        </div>
        <div className="gap-4 flex flex-row">
          {navItems.map(({ href, label }) => (
            <UnderlineLink href={href} key={href}>
              {label}
            </UnderlineLink>
          ))}
        </div>
        <div>
          <p className="text-muted-foreground">
            Copyright © {new Date().getFullYear()} by Grzegorz Hadala. All
            assets, artworks, and screenshots are copyright of their respective
            owners.
          </p>
        </div>
      </div>
    </>
  );
};
