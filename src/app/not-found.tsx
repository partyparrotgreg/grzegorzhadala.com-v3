import { Hero } from "@/components/home/hero";
import { CustomLink } from "@/components/shared/custom-link";

export default async function NotFound() {
  return (
    <>
      <Hero text={"404"} callout={"Could not find requested resource"} />

      <CustomLink href="/">Home</CustomLink>
    </>
  );
}
