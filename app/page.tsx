import Categories from "@/components/Categories";
import Footer from "../components/Footer";
import Working from "@/components/Working";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import MostSearched from "@/components/MostSearched";

export default function Home() {
  return (
    <div className="font-grotesque bg-white">
      <Hero/>
      <MostSearched />
      <Categories />
      <Working />
      <Featured/>
      <Footer/>
    </div>
  );
}
