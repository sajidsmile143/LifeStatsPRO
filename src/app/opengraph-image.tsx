import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "LifeStats PRO - Advanced Age & Life Statistics Calculator";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(to bottom right, #090d16, #0f172a, #1e1b4b)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          color: "white",
          padding: "40px",
          position: "relative",
        }}
      >
        {/* Glow Effects */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(236, 72, 153, 0.3)",
            filter: "blur(80px)",
          }}
        />

        {/* Brand Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            background: "rgba(99, 102, 241, 0.2)",
            border: "1px solid rgba(99, 102, 241, 0.4)",
            padding: "10px 24px",
            borderRadius: "50px",
            color: "#a5b4fc",
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "24px",
          }}
        >
          <span>⏰</span>
          <span>LifeStats PRO</span>
        </div>

        {/* Main Title */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 900,
            textAlign: "center",
            backgroundImage: "linear-gradient(to right, #60a5fa, #c084fc, #f472b6)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: "16px",
            lineHeight: 1.1,
          }}
        >
          Advanced Age & Life Stats Clock
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "28px",
            color: "#94a3b8",
            textAlign: "center",
            maxWidth: "900px",
            lineHeight: 1.4,
          }}
        >
          Live Age Ticker • 1.2B Heartbeats • Sleeping Years • Planet Ages • Downloadable Story Card
        </div>

        {/* Domain Tag */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            fontSize: "24px",
            color: "#22d3ee",
            fontWeight: "bold",
          }}
        >
          lifestatspro.vercel.app
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
