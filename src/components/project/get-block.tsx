import {
  BeforeAfterBlockRecord,
  ClientRecord,
  ExperienceListBlockRecord,
  ExperienceRecord,
  FeaturephotoblockRecord,
  FlowBlockRecord,
  ProcessListBlockRecord,
  ProjectListBlockRecord,
  ProjectOverviewBlockRecord,
  SectionBlockRecord,
  SliderShowcaseBlockRecord,
  StatListRecord,
} from "@/gql/graphql";
import { Image as ReactDatocmsImage, ResponsiveImageType } from "react-datocms";
import { BlockBeforeAfter } from "../blocks/block-before-after";
import { BlockFeaturePhoto } from "../blocks/block-feature-photo";
import { BlockProcessList } from "../blocks/block-process-list";
import { BlockProjectOverview } from "../blocks/block-project-overview";
import { BlockProjectSlider } from "../blocks/block-project-slider";
import { BlockSectionTitle } from "../blocks/block-section-title";
import { BlockClients } from "../blocks/block-clients";
import { ExperienceList } from "../shared/experience-list";
import { BlockStats } from "../blocks/block-stats";
import { BlockProjectList } from "./block-project-list";

export const getBlock = (record: any) => {
  switch (record.__typename) {
    case "ProjectListBlockRecord":
      const projectList = record as ProjectListBlockRecord;
      return <BlockProjectList projects={projectList.projects} />;
    case "StatListRecord": {
      const statsBlock = record as StatListRecord;
      return <BlockStats block={statsBlock} />;
    }
    case "ExperienceListBlockRecord":
      const block = record as ExperienceListBlockRecord;
      return (
        <ExperienceList experiences={block.experiences as ExperienceRecord[]} />
      );
    case "ClientsBlockRecord":
      const clients = record.clients as ClientRecord[];
      return <BlockClients clients={clients as ClientRecord[]} />;
    case "FeaturephotoblockRecord":
      const featuredPhoto = record as FeaturephotoblockRecord;
      return <BlockFeaturePhoto block={featuredPhoto} />;
    case "ProjectOverviewBlockRecord":
      const projectOverview = record as ProjectOverviewBlockRecord;
      return <BlockProjectOverview block={projectOverview} />;
    case "ProcessListBlockRecord":
      const processList = record as ProcessListBlockRecord;
      return <BlockProcessList block={processList} />;
    case "SliderShowcaseBlockRecord":
      const slider = record as SliderShowcaseBlockRecord;
      return <BlockProjectSlider blocks={slider.blocks} />;
    case "SectionBlockRecord":
      const entry = record as SectionBlockRecord;
      return (
        <BlockSectionTitle action={entry.subtitle}>
          {entry.sectionTitle}
        </BlockSectionTitle>
      );
    case "BeforeAfterBlockRecord":
      return <BlockBeforeAfter block={record as BeforeAfterBlockRecord} />;
    case "FlowBlockRecord":
      const description = record.description as FlowBlockRecord["description"];
      const images = record.images as FlowBlockRecord["images"];

      return (
        <div className="flex flex-col overflow-hidden">
          <div className="p-8">{description}</div>
          <div className="grid md:grid-cols-3">
            {images.map((image, index) => (
              <div key={image.id + "_" + index} className="flex flex-col">
                <div>{image.title}</div>
                <ReactDatocmsImage
                  data={image.responsiveImage as ResponsiveImageType}
                />
              </div>
            ))}
          </div>
        </div>
      );
    default:
      return <div>cos nie dziala</div>;
  }
};
