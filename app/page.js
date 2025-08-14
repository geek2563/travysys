import Hero from "./home/Hero";
import PartnersSection from "./home/PartnersSection";
import TestimonialsSection from "./home/TestimonialsSection";
import TagUsSection from "./home/TagUsSection";
import ToursActivitiesSection from "./home/ToursActivitiesSection";
import TravelGuides from "./home/TravelGuides";
import HandpickedCollections from "./home/HandpickedCollections";
import SeasonalPicks from "./home/SeasonalPicks";
import ComingSoonAI from "./home/ComingSoonAI";
import OfferSection from "./home/OfferSection";
import Banner from "./home/Banner";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <ToursTravels /> */}
      <ToursActivitiesSection />
      {/* <TourismBoardAlliances /> */}
      <ComingSoonAI />
      <Banner />
      <TravelGuides />
      <HandpickedCollections />
      <OfferSection />
      <SeasonalPicks />
      <PartnersSection />
      <TestimonialsSection />
      {/* <TagUsSection /> */}
    </>
  );
}
