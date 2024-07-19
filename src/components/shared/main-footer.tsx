import { FooterRecord } from "@/gql/graphql";
import { ArrowUpRight } from "lucide-react";
import { BlockSectionTitle } from "../blocks/block-section-title";
import { Hero } from "../home/hero";
import { CustomLink } from "./custom-link";
import { FooterActions } from "./footer-actions";

export const MainFooter = ({ footer }: { footer: FooterRecord }) => {
  const { links, hiringText } = footer;
  return (
    <div>
      <BlockSectionTitle action={<FooterActions />}>Connect</BlockSectionTitle>
      <div className="flex flex-col lg:flex-row content-padding ">
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
      <div className="flex flex-col content-padding">
        <p className="text-muted-foreground text-sm">
          Copyright © {new Date().getFullYear()} by Grzegorz Hadala. All assets,
          artworks, and screenshots are copyright of their respective owners.
        </p>
      </div>
      {hiringText && (
        <div className="bg-brand text-black lg:pb-0 pb-16">
          <Hero text={hiringText as string} />
        </div>
      )}
    </div>
  );
};
