import HomeBackgroundVideo from '../components/HomeBackgroundVideo';
import NavCard from '../components/NavCard';
import Navbar from '../components/Navbar';

export default function HomePage() {
  const cards = [
    {
      title: 'Picture of the Day',
      image:
        'https://www.nasa.gov/wp-content/uploads/2023/07/stsci-01h530br24bzmxsy06pcr4e1ec.jpg?w=985',
      description:
        'Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured.',
      link: '/picture-of-the-day', // replace with actual link
    },
    {
      title: 'Explore Mars',
      image: 'https://facts.net/wp-content/uploads/2023/05/Mars-730x451.jpeg',
      description:
        "Explore the Red Planet through the eyes of NASA's rovers. Dive into the landscapes and discoveries of Mars.",
      link: '/explore-mars', // replace with actual link
    },
    {
      title: 'Earth Imagery',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqanxkw6kTPdD8Cryy0sEB6pj5wZXVnLM7lw&s', // replace with actual path
      description:
        "View Earth from space every day. Browse incredible images captured from NASA's satellites.",
      link: '/earth-imagery', // replace with actual link
    },
  ];

  return (
    <div
      className="min-h-screen bg-gray-100 pt-[66px]"
      style={{ marginTop: '50px' }}
    >
      {' '}
      {/* Adjust the pt value based on actual navbar height */}
      <Navbar />
      <div className="mt-8 p-8 grid grid-cols-1 md:grid-cols-3 gap-4 z-10 relative justify-items-center">
        {cards.map((card, index) => (
          <NavCard
            key={index}
            title={card.title}
            image={card.image}
            description={card.description}
            onClick={() => (window.location.href = card.link)}
          />
        ))}
      </div>
      <HomeBackgroundVideo />
    </div>
  );
}
