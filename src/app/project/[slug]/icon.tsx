import { ImageResponse } from "next/og";
import { getProjectData } from "./page";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default async function Icon({ params }: { params: { slug: string } }) {
  const { project } = await getProjectData(params.slug);

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: project?.color?.hex || "#000",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          borderRadius: "100%",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "block",
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: "#FE390C",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
        <div
          style={{
            fontSize: 28,
            color: "white",
            fontWeight: "900",
            position: "relative",
            transform: "translateY(5px) translateX(5px)",
          }}
        >
          {project?.client?.company?.charAt(0)}
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
