import { generateOgImage, ogSize, ogContentType } from "@/lib/og";
import { request } from "@/lib/dato";
import query from "./page.graphql";

export const alt = "Project by Greg Hadala";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { project } = await request(query, { slug });

  const title = project?.projectName ?? "Project";
  const subtitle = project?.client?.company ?? "Greg Hadala";

  return generateOgImage(title, subtitle);
}
