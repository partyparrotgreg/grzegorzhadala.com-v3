import { request } from "@/lib/dato";
import { StructuredText as StructuredTextType } from "datocms-structured-text-utils/dist/types/types";
import { Image as ReactDatocmsImage, ResponsiveImageType } from "react-datocms";

import { Hero } from "@/components/home/hero";
import { ProjectTextFormatter } from "@/components/project/project-text-formatter";
import { MainFooter } from "@/components/shared/main-footer";
import { PageProgress } from "@/components/shared/page-progress";
import { SkillsRender } from "@/components/shared/skills-render";
import { FooterRecord, SkillRecord } from "@/gql/graphql";
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
  const { project, footer } = await getProjectData(params.slug);

  if (!project) return null;

  const { cover } = project;

  return (
    <>
      <div className="flex flex-col relative">
        <PageProgress />
        <div
          className=" overflow-hidden relative cover-padding"
          style={{
            backgroundColor: project.color?.hex,
          }}
        >
          <ReactDatocmsImage
            data={cover.responsiveImage as ResponsiveImageType}
            lazyLoad
          />
        </div>
        <Hero
          text={project?.summary as string}
          callout={project?.projectName as string}
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
              {new Date(project.role?.start).getFullYear()}{" "}
              {project.role?.end ? (
                <>— {new Date(project.role?.end).getFullYear()}</>
              ) : (
                <>— Current</>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-semibold">Expertise</div>
            <div>
              <SkillsRender
                skills={project.skills as SkillRecord[]}
                isVertical
              />
            </div>
          </div>
        </div>

        <ProjectTextFormatter body={project.body as StructuredTextType} />
      </div>
      <MainFooter footer={footer as FooterRecord} />
    </>
  );
}
