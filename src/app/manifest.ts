import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Greg Hadala - Design & Development",
    short_name: "Greg Hadala",
    description: "TBD",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#FF4828",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
