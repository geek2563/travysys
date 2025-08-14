import TourCard from "./TourCard";

export default function CategorySection({ title, tours }) {
  return (
    <div className="px-4 my-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-[#043226]">{title}</h2>
        <button className="text-sm text-[#043226] border border-[#043226] px-3 py-1 rounded hover:bg-[#043226] hover:text-white transition">
          View All →
        </button>
      </div>
      <div className="flex flex-wrap gap-4">
        {tours.map((tour, index) => (
          <TourCard key={index} {...tour} />
        ))}
      </div>
    </div>
  );
}
