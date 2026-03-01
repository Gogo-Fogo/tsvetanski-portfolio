import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Georgi Tsvetanski — Spatial Interaction Prototyper & Simulation Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F7F6F3',
          fontFamily: 'Arial, Helvetica, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: 960,
            height: 390,
            backgroundColor: '#FFFFFF',
            borderRadius: 48,
            border: '2px solid #E6E3DE',
            padding: '60px',
          }}
        >
          <p
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: '#111111',
              margin: 0,
              letterSpacing: '-1px',
              lineHeight: 1.1,
            }}
          >
            Georgi Tsvetanski
          </p>
          <p
            style={{
              fontSize: 28,
              fontWeight: 400,
              color: '#5A5A5A',
              margin: '16px 0 0 0',
            }}
          >
            Spatial Interaction Prototyper · Simulation Engineer
          </p>
          <p
            style={{
              fontSize: 18,
              fontWeight: 500,
              color: '#8A8A8A',
              margin: '24px 0 0 0',
              letterSpacing: '6px',
            }}
          >
            XR · HUMAN FACTORS · SYSTEMS
          </p>
        </div>
      </div>
    ),
    { ...size }
  );
}
