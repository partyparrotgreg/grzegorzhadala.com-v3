import { generateOgImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "Greg Hadala — Design Engineer";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return generateOgImage("Greg Hadala", "Design Engineer — Fintech & Web3");
}
