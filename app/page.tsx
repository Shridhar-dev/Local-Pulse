import Categories from "@/components/Categories";
import Image from "next/image";
import Footer from "../components/Footer";
import Working from "@/components/Working";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";

export default function Home() {
  return (
    <div className="font-grotesque bg-white">
      <Hero/>
      <Categories />
      <Featured/>
      <Working />
      <Footer/>
    </div>
  );
}
