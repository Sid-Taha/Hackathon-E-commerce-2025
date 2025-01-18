import CardSection from "@/components/CardSection";
import CategoryShowcase from "@/components/CategoryShowcase";
import Featured from "@/components/Featured";
import FlightEssentials from "@/components/FlightEssentials";
import GearUp from "@/components/GearUp";
import HelloNikeApp from "@/components/HelloNikeApp";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import { fetchData } from "@/script/migration";
import { shipEngine } from "@/services/shipengine";

export default async function Home() {
  
  await fetchData()
  
  return (
    <div className="mt-[99px]">
      {/* <HelloNikeApp/>

      <div className="px-[48px]">
        <Hero/>
      </div>

      <CardSection/>

      <div className="px-[48px]">
        <Featured/>
        <GearUp/>
        <FlightEssentials/>
        <CategoryShowcase/>
        <Navigation/>
      </div> */}
    </div>
  );
}
