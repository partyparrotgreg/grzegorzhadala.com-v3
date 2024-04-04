import { ProjectRecord } from "@/gql/graphql";
import { request } from "@/lib/dato";
import { StructuredText as StructuredTextType } from "datocms-structured-text-utils/dist/types/types";
import { Image as ReactDatocmsImage, ResponsiveImageType } from "react-datocms";

import { ProjectHero } from "@/components/project/project-hero";
import { ProjectTextFormatter } from "@/components/project/project-text-formatter";
import { SectionTitle } from "@/components/shared/section-title";
import { ThemedImage } from "@/components/shared/themed-image";
import { ThemedImageType } from "@/types";
import {
  Code,
  Compass,
  FigmaLogo,
  NotionLogo,
  UserFocus,
} from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import query from "./page.graphql";
import { cn } from "@/lib/utils";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const response = await request(query, { slug });

  return {
    title: `${response.project?.projectName} - Grzegorz Hadala`,
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

  const { cover, slug, client } = project;

  generateMetadata({ params: { slug } });

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
      <SectionTitle>Case study</SectionTitle>
      <div className="flex flex-col gap-6 lg:grid lg:grid-cols-3 relative">
        <div>
          <ThemedImage
            images={client?.logo as ThemedImageType[]}
            className="h-16 w-auto"
          />
        </div>
        <div className="col-span-2 space-y-8 pt-24 pb-24">
          <p className="text-2xl max-w-[60ch]  leading-8">
            Rolla&apos;s DeFi options trading platform simplifies the trading
            experience for less crypto-savvy users without compromising on the
            depth and authenticity of the trading experience. The team followed
            a user-centric approach, developed a cohesive design system, and
            rapidly coded and tested the platform. The resulting landing page,
            responsive web application, and Android & iOS app provide a
            consistent experience with real-time data and user-friendly
            interfaces.
          </p>
        </div>
      </div>
      <SectionTitle>Process</SectionTitle>
      {requirements.map(({ Icon, title, description }, index) => {
        const isLastItem = index === requirements.length - 1;
        return (
          <div
            key={index}
            className={cn(
              isLastItem ? "" : "border-b",
              "flex flex-col gap-6 lg:grid lg:grid-cols-3  pb-8 relative"
            )}
          >
            <div className="absolute top-0 right-0 lg:static">
              <Icon size={32} weight="light" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">{title}</h2>
            </div>
            <div>
              <p className="leading-7">{description}</p>
            </div>
          </div>
        );
      })}
      <ProjectTextFormatter body={project.body as StructuredTextType} />
    </div>
  );
}

const requirements = [
  {
    Icon: Compass,
    title: "Discovery",
    description:
      "In the rapidly evolving world of cryptocurrency, there's a vast audience spectrum ranging from highly experienced traders to novices. While there are platforms catering to the former with intricate tools and interfaces, the latter often finds themselves overwhelmed. The challenge was to create a platform that simplifies the trading experience for those who are less crypto-savvy, without compromising on the depth and authenticity of the trading experience.",
  },
  {
    Icon: NotionLogo,
    title: "Requirements",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla necessitatibus cupiditate quidem illo optio. Ex facilis consectetur sit vitae itaque impedit fugiat necessitatibus perspiciatis assumenda error, recusandae nobis enim dolores.",
  },
  {
    Icon: FigmaLogo,
    title: "Design & Prototyping",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla necessitatibus cupiditate quidem illo optio. Ex facilis consectetur sit vitae itaque impedit fugiat necessitatibus perspiciatis assumenda error, recusandae nobis enim dolores.",
  },
  {
    Icon: UserFocus,
    title: "Testing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla necessitatibus cupiditate quidem illo optio. Ex facilis consectetur sit vitae itaque impedit fugiat necessitatibus perspiciatis assumenda error, recusandae nobis enim dolores.",
  },
  {
    Icon: Code,
    title: "Implementation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla necessitatibus cupiditate quidem illo optio. Ex facilis consectetur sit vitae itaque impedit fugiat necessitatibus perspiciatis assumenda error, recusandae nobis enim dolores.",
  },
];
