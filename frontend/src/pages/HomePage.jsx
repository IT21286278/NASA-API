import video from '../assets/space.mp4';

export default function HomePage() {
  return (
    <div className="relative h-screen">
      <video autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">HomePage</div>
    </div>
  );
}
