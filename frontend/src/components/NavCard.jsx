export default function NavCard({ title, image, description, onClick }) {
  return (
    <div
      className="max-w-sm bg-opacity-30 rounded overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer bg-white border-2 border-red-500"
      onClick={onClick}
    >
      <img className="w-full h-80 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">{title}</div>
        <p className="text-gray-800 font-bold text-base">{description}</p>
      </div>
    </div>
  );
}
