import NavBar from "@/components/NavBar";
import NewItemCard from "@/components/NewItemCard";
import Table from "@/components/Table";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`bg-base-200 h-screen w-screen ${inter.className}`}>
      <NavBar />
      <div className="p-6 h-[93vh]">
        <div className="card bg-base-100 shadow-xl h-full ">
          <div className="card-body justify-around">
            <h2 className="card-title">Simuladores ENARM</h2>
            <Table />
            <NewItemCard />
          </div>
        </div>
      </div>
    </main>
  );
}
