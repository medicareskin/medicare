import {ImageResponse} from 'next/og';
export const alt='Medicare Skin & Cosmetic Clinic — Dermatologist-led care in South Bengaluru';
export const size={width:1200,height:630};export const contentType='image/png';
export default function Image(){
  return new ImageResponse(
    (
      <div
        style={{
          background: '#F8F6F2',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 74,
          color: '#153F39',
        }}
      >
        <div style={{fontSize: 34, color: '#C5A174', display: 'flex'}}>
          Medicare Skin
        </div>
        <div
          style={{
            fontSize: 64,
            marginTop: 30,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div>Dermatologist-Led Skin,</div>
          <div>Hair & Aesthetic Care</div>
        </div>
        <div style={{fontSize: 25, color: '#34465B', marginTop: 26, display: 'flex'}}>
          South Bengaluru · Near Yelachenahalli Metro
        </div>
      </div>
    ),
    {...size}
  );
}
