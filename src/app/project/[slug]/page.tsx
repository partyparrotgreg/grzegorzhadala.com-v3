import { Button } from "@/components/ui/button";
import { request } from "@/lib/dato";
import Link from "next/link";

import { SectionGrid } from "@/components/shared/section-grid";
import { SkillsRender } from "@/components/shared/skills-render";
import { BigDescription } from "@/components/typography/big-description";
import { SkillRecord } from "@/gql/graphql";
import { Image as ReactDatocmsImage, ResponsiveImageType } from "react-datocms";

import { ArrowUpRight, X } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import query from "./page.graphql";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const response = await request(query, { slug });

  // optionally access and extend (rather than replace) parent metadata

  return {
    title: response.project?.projectName,
    openGraph: {
      images: [],
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

  const { role, projectName, summary, client, skills, cover, slug } = project;

  generateMetadata({ params: { slug } });

  return (
    <div className="section-padding section-gap flex flex-col">
      <div className="relative flex flex-row justify-between items-center">
        <div className="text-foreground flex flex-row gap-2">
          <div className="text-5xl tracking-tighter">
            {new Date(role?.end).getFullYear()}
          </div>
          <div className="-space-y-1 flex flex-col justify-center">
            <div className="text-base uppercase opacity-70">
              {client?.company}
            </div>
            <div className="text-base uppercase opacity-70">{role?.role}</div>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          {project.client?.website && (
            <Link href={new URL(project.client?.website)} target="_blank">
              <Button variant={"default"}>
                Website <ArrowUpRight className="ml-2" />
              </Button>
            </Link>
          )}
          <Link href={`/`}>
            <Button size={"icon"} variant={"ghost"}>
              <X />
            </Button>
          </Link>
        </div>
      </div>
      <h1 className="text-6xl text-foreground">{projectName}</h1>
      <SectionGrid>
        <div className="col-start-5 col-span-8">
          <BigDescription>{summary}</BigDescription>
        </div>
        <div className="col-start-5 col-span-8">
          {skills && <SkillsRender skills={skills as SkillRecord[]} />}
        </div>
      </SectionGrid>
      <div className="rounded-2xl overflow-hidden">
        <ReactDatocmsImage
          data={cover.responsiveImage as ResponsiveImageType}
          lazyLoad
          layout="responsive"
          className="scale-110 hover:scale-100 transition-all duration-300 ease-in-out"
        />
      </div>
    </div>
  );
}
