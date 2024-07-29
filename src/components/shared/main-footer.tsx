import { FooterRecord } from "@/gql/graphql";
import { ArrowUpRight } from "lucide-react";
import { BlockSectionTitle } from "../blocks/block-section-title";
import { CustomLink } from "./custom-link";
import { FooterActions } from "./footer-actions";

export const MainFooter = ({ footer }: { footer: FooterRecord }) => {
  const { links, hiringText } = footer;
  return (
    <div className="bg-foreground text-background h-dvh flex flex-col justify-between relative">
      <BlockSectionTitle action={<FooterActions />}>Connect</BlockSectionTitle>
      <div className="content-padding flex flex-col justify-end h-full">
        <p className="relative z-50 text-3xl lg:text-[4em] leading-[1.25em] lg:leading-[1.15em]">
          Find me on
        </p>
        <div className="flex flex-col lg:flex-row grid-gaps">
          {links &&
            links.map((link) => (
              <CustomLink
                key={link.id}
                href={link.url}
                target={link.external ? "_blank" : "_self"}
                className="lg:justify-start justify-between items-center"
              >
                {link.title}{" "}
                {link.external && <ArrowUpRight className="ml-2 h-4 w-4" />}
              </CustomLink>
            ))}
        </div>
        <div className="flex flex-col">
          <p className="text-muted-foreground">
            Copyright © {new Date().getFullYear()} by Grzegorz Hadala. All
            assets, artworks, and screenshots are copyright of their respective
            owners.
          </p>
        </div>
      </div>
      {hiringText && (
        <div className="bg-brand text-black content-padding">
          <p className="relative z-50 text-3xl lg:text-[4em] leading-[1.25em] lg:leading-[1.15em] mb-12 md:mb-0">
            {hiringText as string}
          </p>
        </div>
      )}
    </div>
  );
};
