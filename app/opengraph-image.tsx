import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "GeoArq — Arquitetura, Urbanismo e Regularização Imobiliária";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #faf7f0 0%, #e3ead6 100%)",
          color: "#1a1f18",
          position: "relative",
        }}
      >
        {/* Top: brand */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: 64,
              height: 64,
              background: "#2f5233",
              borderRadius: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#faf7f0",
              fontSize: 36,
              fontFamily: "serif",
              fontStyle: "italic",
              fontWeight: 300,
            }}
          >
            G
          </div>
          <div
            style={{
              fontSize: 22,
              fontWeight: 500,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#6b7064",
            }}
          >
            GeoArq
          </div>
        </div>

        {/* Center: headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <div
            style={{
              fontSize: 88,
              fontFamily: "serif",
              fontWeight: 400,
              lineHeight: 1.04,
              letterSpacing: "-0.02em",
              maxWidth: "900px",
              color: "#1a1f18",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Arquitetura, urbanismo</span>
            <span>
              e{" "}
              <span style={{ color: "#2f5233", fontStyle: "italic" }}>
                regularização
              </span>{" "}
              imobiliária.
            </span>
          </div>
        </div>

        {/* Bottom: meta */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#6b7064",
            fontSize: 18,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          <span>geoarq.com.br</span>
          <span>São Paulo · BR</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
