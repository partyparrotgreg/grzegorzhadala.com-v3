import {
  TypographyH2,
  TypographyHero,
  TypographyP,
} from "@/components/typography";
import { SectionTitle } from "@/components/typography/section-title";
import { Button } from "@/components/ui/button";
import { request } from "@/lib/dato";
import { isHeading, isParagraph } from "datocms-structured-text-utils";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
// TODO: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
// TODO: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image

import { FlowGrid } from "@/components/project/flow-grid";
import DatoImage from "@/components/shared/dato-image";
import { UISwiper } from "@/components/ui/swiper";
import { cn } from "@/lib/utils";
import {
  StructuredText,
  StructuredTextDocument,
  renderNodeRule,
} from "react-datocms/structured-text";
import { SwiperOptions } from "swiper/types";
import query from "./page.graphql";

const getProjectData = async (slug: string) => await request(query, { slug });

export default async function Project({
  params,
}: {
  params: { slug: string };
}) {
  const { project } = await getProjectData(params.slug);

  return !project ? (
    <div>Loading...</div>
  ) : (
    <div data-scroll-section>
      <SectionTitle
        action={
          project.client ?? <Link href={project.client?.website} target="_blank">
            <Button size={"sm"} variant={"outline"}>
              Website <ArrowUpRight size={16} className="ml-2" />
            </Button>
          </Link>
        }
      >
        <Link href={"/projects"}>
          <Button size={"icon"} variant={"ghost"}>
            <ArrowLeft />
          </Button>
        </Link>{" "}
        {project.client?.company}
      </SectionTitle>

      <div className="relative z-50 bg-background">
        <div className="content-padding space-y-12">
          <TypographyHero>{project?.projectName}</TypographyHero>
          <div className="grid sm:grid-cols-4 gap-8">
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="text-brand font-normal uppercase">Expertise</div>
              {project.skills.map(({ name, id }) => (
                <TypographyP key={id}>{name}</TypographyP>
              ))}
            </div>
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="text-brand font-normal uppercase">Industry</div>
              <TypographyP>Web3</TypographyP>
              <TypographyP>DeFi</TypographyP>
            </div>
            <div className="flex-col justify-start items-start gap-2 flex col-span-2">
              <div className="text-brand font-normal uppercase">About</div>
              <TypographyP>{project.summary}</TypographyP>
            </div>
          </div>
        </div>
        <div
          className={cn(
            "bg-muted",
            "z-0 w-full aspect-square lg:aspect-video h-full p-24"
          )}
          style={{
            backgroundColor: project.color?.hex,
          }}
        >
          <DatoImage
            pictureClassName="relative object-cover w-full h-full"
            layout="responsive"
            fragment={project.cover.responsiveImage}
          />
        </div>
        {/* <HomeFeature index={0} p={clientsLogos.length} isOdd={false} /> */}

        {/* <FlowGrid /> */}
        <div className="structured-text-container">
          <StructuredText
            customNodeRules={[
              renderNodeRule(isHeading, ({ adapter: {}, children, key }) => {
                return <TypographyH2 key={key}>{children}</TypographyH2>;
              }),
              renderNodeRule(
                isParagraph,
                ({ adapter: {}, children, key, ancestors }) => {
                  return <TypographyP key={key}>{children}</TypographyP>;
                }
              ),
            ]}
            // customMarkRules={[
            //   // convert "strong" marks into <b> tags
            //   renderMarkRule("strong", ({ mark, children, key }) => {
            //     return <strong key={key}>{children}</strong>;
            //   }),
            // ]}
            data={project?.body as StructuredTextDocument}
            renderBlock={({ record }) => {
              if (record.__typename === "FlowBlockRecord") {
                return (
                  <div className="full-width">
                    <FlowGrid
                      images={record.images}
                      title={record.title}
                      description={record.description}
                    />
                  </div>
                );
              }
              if (record.__typename === "MobileStackRecord") {
                const swiperOptions: SwiperOptions = {
                  breakpoints: {
                    // when window width is >= 320px
                    320: {
                      slidesPerView: 1.2,
                    },
                    // when window width is >= 480px
                    480: {
                      slidesPerView: 2.2,
                    },
                    // when window width is >= 640px
                    640: {
                      slidesPerView: 3.2,
                    },
                    1000: {
                      slidesPerView: 4.2,
                    },
                  },
                };
                return (
                  <div
                    className="flex flex-col relative border-border"
                    style={{
                      borderBlockStartWidth: "1px",
                      borderBlockEndWidth: "1px",
                    }}
                  >
                    <div className="grow flex w-full relative col-span-6   user-select-none">
                      <UISwiper
                        pagination={true}
                        spaceBetween={0}
                        {...swiperOptions}
                        items={record.images.map(({ responsiveImage }) => (
                          <div key={responsiveImage.src} className="m-6">
                            <DatoImage
                              pictureClassName="rounded-3xl pointer-events-none user-select-none"
                              key={responsiveImage.src}
                              layout="responsive"
                              fragment={responsiveImage}
                            />
                          </div>
                        ))}
                      />
                    </div>
                  </div>
                );
              }

              return (
                <div className="bg-brand">{JSON.stringify(record)} asasd</div>
              );
            }}
          />
        </div>
      </div>
    </div>
  );
}
