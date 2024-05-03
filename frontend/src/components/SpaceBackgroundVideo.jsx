import video from '../assets/space.mp4';

export default function SpaceBackgroundVideo() {
  return (
    <div className="video-background">
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
