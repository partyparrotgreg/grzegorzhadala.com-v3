import { request } from "@/lib/dato";
import { StructuredText as StructuredTextType } from "datocms-structured-text-utils/dist/types/types";
import { Image as ReactDatocmsImage, ResponsiveImageType } from "react-datocms";

import { ProjectHero } from "@/components/project/project-hero";
import { ProjectTextFormatter } from "@/components/project/project-text-formatter";
import type { Metadata } from "next";
import query from "./page.graphql";

type ProjectPageProps = {
  params: { slug: string };
};

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const slug = params.slug;
  const response = await request(query, { slug });

  return {
    title: `${response.project?.client?.company}: ${response.project?.projectName} - by Greg Hadala`,
    description: response.project?.summary,
  };
}

const getProjectData = async (slug: string) => await request(query, { slug });

// TODO: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
// TODO: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const { project } = await getProjectData(params.slug);

  if (!project) return null;

  const { cover } = project;

  return (
    <div className="flex flex-col gap-12">
      <ProjectHero project={project} />
      <ReactDatocmsImage
        data={cover.responsiveImage as ResponsiveImageType}
        lazyLoad
        layout="responsive"
        className="filter drop-shadow-2xl"
      />
      <ProjectTextFormatter body={project.body as StructuredTextType} />
    </div>
  );
}
