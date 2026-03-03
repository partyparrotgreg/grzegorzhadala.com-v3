import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const brandColor = "hsl(9, 100%, 58%)";
const bio =
  "Design Engineer specializing in Fintech & Web3 products. Nearly 20 years in, he designs and builds production React code, design systems, and AI-augmented workflows — making complex things feel simple.";

export async function generateOgImage(pageName?: string) {
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
          justifyContent: "space-between",
          padding: "50px",
          fontFamily: "Safiro",
          color: "white",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 24,
              marginBottom: 16,
            }}
          >
            Greg Hadala
          </div>
          <div
            style={{
              fontSize: 42,
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            {bio}
          </div>
        </div>
        {pageName && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                borderTop: "1px solid rgba(255, 255, 255, 0.4)",
                paddingTop: 24,
                fontSize: 28,
                fontWeight: 700,
              }}
            >
              {pageName}
            </div>
          </div>
        )}
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
