import { ProjectRecord } from "@/gql/graphql";
import { request } from "@/lib/dato";
import { StructuredText as StructuredTextType } from "datocms-structured-text-utils/dist/types/types";
import { Image as ReactDatocmsImage, ResponsiveImageType } from "react-datocms";

import { ProjectHero } from "@/components/project/project-hero";
import { ProjectTextFormatter } from "@/components/project/project-text-formatter";
import type { Metadata } from "next";
import query from "./page.graphql";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const response = await request(query, { slug });

  return {
    title: `${response.project?.client?.company}: ${response.project?.projectName} - by Grzegorz Hadala`,
    description: response.project?.summary,

    openGraph: {
      images: [response.project?.cover.responsiveImage?.src as string],
    },
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
    <div className="flex flex-col gap-12 overflow-hidden">
      <ProjectHero project={project as ProjectRecord} />
      <div className="overflow-hidden">
        <ReactDatocmsImage
          data={cover.responsiveImage as ResponsiveImageType}
          lazyLoad
          layout="responsive"
        />
      </div>

      <ProjectTextFormatter body={project.body as StructuredTextType} />
    </div>
  );
}

