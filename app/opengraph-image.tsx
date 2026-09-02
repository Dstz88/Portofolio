import { ImageResponse } from "next/og";

export const alt =
  "Dhesta Irham Prasetya, Web Developer dan UI/UX Designer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#050505",
          color: "#f5f7f8",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px 80px",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#6EE7F9",
            height: 8,
            left: 0,
            position: "absolute",
            top: 0,
            width: "100%",
          }}
        />

        <div
          style={{
            alignItems: "center",
            color: "#6EE7F9",
            display: "flex",
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          Portfolio 2026
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 800,
              letterSpacing: -4,
              lineHeight: 1,
              maxWidth: 980,
            }}
          >
            Dhesta Irham Prasetya
          </div>
          <div
            style={{
              color: "#b8c0c5",
              display: "flex",
              fontSize: 34,
              lineHeight: 1.2,
              marginTop: 28,
            }}
          >
            Web Developer &amp; UI/UX Designer
          </div>
        </div>

        <div
          style={{
            alignItems: "center",
            borderTop: "1px solid #263238",
            display: "flex",
            fontSize: 22,
            justifyContent: "space-between",
            paddingTop: 26,
          }}
        >
          <span style={{ color: "#8d989e" }}>Indonesia</span>
          <span style={{ color: "#6EE7F9" }}>portofolio-dhesta.vercel.app</span>
        </div>
      </div>
    ),
    size
  );
}
