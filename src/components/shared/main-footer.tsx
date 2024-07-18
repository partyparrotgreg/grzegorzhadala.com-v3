import { ArrowUpRight } from "lucide-react";
import { BlockSectionTitle } from "../blocks/block-section-title";
import { Hero } from "../home/hero";
import { CustomLink } from "./custom-link";
import { FooterActions } from "./footer-actions";

export const MainFooter = () => {
  return (
    <div>
      <BlockSectionTitle action={<FooterActions />}>Connect</BlockSectionTitle>
      <div className="gap-8 flex flex-row content-padding">
        <CustomLink
          href="https://www.linkedin.com/in/grzegorzhadala/"
          target="_blank"
        >
          LinkedIn <ArrowUpRight className="ml-2 h-4 w-4" />
        </CustomLink>
        <CustomLink href="https://figma.com/@greghadala" target="_blank">
          Figma <ArrowUpRight className="ml-2 h-4 w-4" />
        </CustomLink>
        <CustomLink href="https://github.com/partyparrotgreg" target="_blank">
          Github <ArrowUpRight className="ml-2 h-4 w-4" />
        </CustomLink>
      </div>
      <div className="flex flex-col content-padding">
        <p className="text-muted-foreground text-xs">
          Copyright © {new Date().getFullYear()} by Grzegorz Hadala. All assets,
          artworks, and screenshots are copyright of their respective owners.
        </p>
      </div>
      <div className="bg-brand text-black lg:pb-0 pb-16">
        <Hero text="I am available for hire." />
      </div>
    </div>
  );
};
