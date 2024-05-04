import video from '../assets/EarthVid2.mp4';
export default function EarthImgBackgroundVideo() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0">
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'fixed',
          width: '100%',
          left: 0,
          top: 60,
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
