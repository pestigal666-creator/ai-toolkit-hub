import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const runtime = "edge";
export const alt = "AI ToolKit Hub - Free AI Prompt Generator and Best AI Tools Directory";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#020617",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#c4b5fd", letterSpacing: 4 }}>
          FREE AI TOOLS AND PROMPTS
        </div>
        <div style={{ display: "flex", fontSize: 88, fontWeight: 800, marginTop: 24 }}>{SITE.name}</div>
        <div style={{ display: "flex", fontSize: 36, color: "#cbd5e1", marginTop: 24 }}>
          Free AI Prompt Generator and Best AI Tools Directory
        </div>
      </div>
    ),
    { ...size }
  );
}
