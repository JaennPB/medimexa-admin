import LoginCard from "@/components/LoginCard";
import NavBar from "@/components/NavBar";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`bg-base-200 h-screen w-screen ${inter.className}`}>
      <NavBar />
      <div className="p-6 h-[93vh]">
        <div className="card bg-base-100 shadow-xl h-full ">
          <div className="card-body">
            <h2 className="card-title">Crear Simulador ENARM</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div>
    </main>
  );
}
