import Categories from "@/components/Categories";
import Working from "@/components/Working";

export default function Home() {
  return (
    <div className="font-grotesque bg-white">
      <Categories />
      <div className="h-screen"></div>
      <Working />
      <div className="h-screen">A</div>
    </div>
  );
}
