import video from '../assets/Moonvid.mp4';

export default function HomeBackgroundVideo() {
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
          top: 0,
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
