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

  const client = project?.client?.company;
  const name = project?.projectName ?? "Project";
  const pageName = client ? `${client}: ${name}` : name;

  return generateOgImage(pageName);
}
