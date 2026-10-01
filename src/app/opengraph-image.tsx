import { ImageResponse } from 'next/og';
import { LOGO_G_PATH, LOGO_T_PATH, LOGO_VIEWBOX } from '@/components/site/logo-mark';

export const alt = 'Georgi Tsvetanski: Simulation, XR and Gameplay Systems';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/** The default share card for every page: logo, name, role and one line, on the site's dark theme. */
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 64,
          padding: '0 96px',
          backgroundColor: '#0b1018',
          backgroundImage:
            'radial-gradient(circle at 85% 80%, rgba(255,123,26,0.18), transparent 45%), radial-gradient(circle at 70% 20%, rgba(30,210,243,0.14), transparent 45%)',
          color: '#f3f3f3',
          fontFamily: 'sans-serif',
        }}
      >
        <svg width="260" height="260" viewBox={LOGO_VIEWBOX}>
          <path fill="#f3f3f3" d={LOGO_G_PATH} />
          <path fill="#ff7b1a" d={LOGO_T_PATH} />
        </svg>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: '-2px', lineHeight: 1 }}>Georgi Tsvetanski</div>
          <div style={{ marginTop: 22, fontSize: 26, letterSpacing: '6px', color: '#1ed2f3' }}>SIMULATION · XR · GAMEPLAY SYSTEMS</div>
          <div style={{ marginTop: 28, fontSize: 32, color: 'rgba(243,243,243,0.82)', maxWidth: 640 }}>
            I build interactive experiences that bridge research and play.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
