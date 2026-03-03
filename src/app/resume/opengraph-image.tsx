import { generateOgImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "Resume — Greg Hadala";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return generateOgImage("Resume", "Greg Hadala — Design Engineer");
}
