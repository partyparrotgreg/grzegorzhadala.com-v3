import { Hero } from "@/components/home/hero";
import { Button } from "@/components/ui/button";
import { request } from "@/lib/dato";
import Link from "next/link";
import { Image as ReactDatocmsImage } from "react-datocms";
import query from "./page.graphql";
import { BlockSectionTitle } from "@/components/blocks/block-section-title";
const getHomeContent = async () => await request(query);

export default async function NotFound() {
  const { miniProjects } = await getHomeContent();
  return (
    <>
      <Hero />
      <h1 className="text-7xl">404</h1>
      <p>Could not find requested resource</p>
      <Link href="/">
        <Button>Go Home</Button>
      </Link>
      <BlockSectionTitle>Recent Projects</BlockSectionTitle>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {miniProjects.map((project) => (
          <div key={project.id}>
            <Link href={`/project/${project.slug}`} className="aspect-square">
              {project.cover.responsiveImage && (
                <ReactDatocmsImage
                  data={project.cover.responsiveImage}
                  lazyLoad
                  className="w-auto h-full object-cover relative z-10 hover:scale-105 transition-all filter grayscale"
                />
              )}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
