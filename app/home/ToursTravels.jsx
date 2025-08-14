import TabsSwitcher from "./tourtravels/TabsSwitcher";
import LocationSlider from "./tourtravels/LocationSlider";
import CategorySection from "./tourtravels/CategorySection";

export default function ToursTravels() {
  const europe = [
    {
      image: "/images/europe1.jpg",
      title: "Switzerland & Italy",
      price: "1,43,200",
      duration: "6 Days & 5 Nights",
    },
    {
      image: "/images/europe2.jpg",
      title: "Northern Lights, Finland",
      price: "2,91,000",
      duration: "6 Days & 5 Nights",
    },
  ];

  const maldives = [
    {
      image: "/images/maldives1.jpg",
      title: "NODE Maldives Resort",
      price: "85,000",
      duration: "4 Days & 3 Nights",
    },
  ];

  return (
    <main className="bg-[#EEF0F3] min-h-screen">
      <TabsSwitcher />
      <LocationSlider />
      <CategorySection title="Europe" tours={europe} />
      <CategorySection title="Maldives" tours={maldives} />
    </main>
  );
}
