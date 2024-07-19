import { request } from "@/lib/dato";
import { StructuredText as StructuredTextType } from "datocms-structured-text-utils/dist/types/types";
import { Image as ReactDatocmsImage, ResponsiveImageType } from "react-datocms";

import { Hero } from "@/components/home/hero";
import { BackButton } from "@/components/project/back-button";
import { ProjectTextFormatter } from "@/components/project/project-text-formatter";
import { PageProgress } from "@/components/shared/page-progress";
import { SkillsRender } from "@/components/shared/skills-render";
import { SkillRecord } from "@/gql/graphql";
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
    <div className="flex flex-col relative">
      <BackButton />
      <PageProgress />
      <div
        className="aspect-[16/10] overflow-hidden relative"
        style={{
          backgroundColor: project.color?.hex,
        }}
      >
        <ReactDatocmsImage
          data={cover.responsiveImage as ResponsiveImageType}
          lazyLoad
          className="w-full h-auto absolute z-10 scale-75 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 group-hover:scale-[0.8] transition-all filter drop-shadow-2xl "
        />
      </div>
      <Hero
        text={project?.summary as string}
        callout={project?.client?.company as string}
      />
      <div className="content-padding grid grid-cols-1 lg:grid-cols-3">
        <div className="flex flex-col gap-2">
          <div className="font-semibold" key="role">
            Role
          </div>
          <div key="role" className="text-foreground/75">
            {project.role?.role}
          </div>
          <div key="year" className="text-foreground/75">
            {new Date(project.role?.start).getFullYear()} —{" "}
            {new Date(project.role?.end).getFullYear()}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-semibold">Expertise</div>
          <div>
            <SkillsRender skills={project.skills as SkillRecord[]} isVertical />
          </div>
        </div>
      </div>

      <ProjectTextFormatter body={project.body as StructuredTextType} />
    </div>
  );
}
