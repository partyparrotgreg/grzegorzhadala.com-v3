import { request } from "@/lib/dato";
import { StructuredText as StructuredTextType } from "datocms-structured-text-utils/dist/types/types";
import { Image as ReactDatocmsImage, ResponsiveImageType } from "react-datocms";

import { ProjectTextFormatter } from "@/components/project/project-text-formatter";
import { MainFooter } from "@/components/shared/main-footer";
import { PageProgress } from "@/components/shared/page-progress";
import { SkillsRender } from "@/components/shared/skills-render";
import { FooterRecord, SkillRecord } from "@/gql/graphql";
import type { Metadata } from "next";
import query from "./page.graphql";
import { Hero } from "@/components/home/hero";
import { JsonLdScript, projectJsonLd } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site-config";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
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
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { project, footer } = await getProjectData(slug);

  if (!project) return null;

  const { cover } = project;

  const jsonLd = projectJsonLd({
    name: project.projectName,
    description: project.summary,
    url: `${siteConfig.url}/project/${project.slug}`,
    image: cover.responsiveImage?.src ?? cover.url,
    dateCreated: project.role?.start,
    dateModified: project.role?.end ?? undefined,
    skills: project.skills?.map((s) => s.name).filter(Boolean) as string[],
    client: project.client
      ? {
          name: project.client.company,
          url: project.client.website ?? undefined,
          logo: project.client.logo?.[0]?.url,
        }
      : undefined,
  });

  return (
    <>
      <div className="flex flex-col relative">
        <JsonLdScript data={jsonLd} />
        <PageProgress />
        <div
          className=" overflow-hidden relative cover-padding bg-brand"
        >
          <ReactDatocmsImage
            data={cover.responsiveImage as ResponsiveImageType}
            className="filter drop-shadow-lg"
          />
        </div>

        <Hero
          text={project?.summary}
          callout={project?.projectName}
        />
        <div className="content-padding grid grid-cols-1 lg:grid-cols-3">
          <div className="flex flex-col gap-2">
            <div className="font-semibold">Role</div>
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
