import Image from "next/image";
import Footer from "../components/Footer";
import Working from "@/components/Working";

export default function Home() {
  return (
    <div className="font-grotesque">
      <Working />
      <Footer/>
    </div>
  );
}
