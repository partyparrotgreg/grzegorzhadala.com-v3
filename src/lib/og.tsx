import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const brandColor = "hsl(9, 100%, 58%)";

export async function generateOgImage(title: string, subtitle?: string) {
  const fontBold = await readFile(
    join(process.cwd(), "src/app/fonts/safiro/safiro-bold-webfont.ttf"),
  );
  const fontRegular = await readFile(
    join(process.cwd(), "src/app/fonts/safiro/safiro-regular-webfont.ttf"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          background: brandColor,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "60px 80px",
          fontFamily: "Safiro",
        }}
      >
        {subtitle && (
          <div
            style={{
              fontSize: 28,
              color: "rgba(0, 0, 0, 0.6)",
              marginBottom: 16,
              fontWeight: 400,
            }}
          >
            {subtitle}
          </div>
        )}
        <div
          style={{
            fontSize: title.length > 40 ? 52 : 64,
            fontWeight: 700,
            color: "black",
            lineHeight: 1.15,
          }}
        >
          {title}
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Safiro", data: fontRegular, style: "normal" as const, weight: 400 as const },
        { name: "Safiro", data: fontBold, style: "normal" as const, weight: 700 as const },
      ],
    },
  );
}
