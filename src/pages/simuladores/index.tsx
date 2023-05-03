import DashboardCard from "@/components/DashboardCard";
import NavBar from "@/components/NavBar";
import NewItemCard from "@/components/NewItemCard";
import Table from "@/components/Table";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`bg-base-200 h-screen w-screen ${inter.className}`}>
      <NavBar />
      <DashboardCard>
        <NewItemCard title="Simuladores ENARM" />
        <Table description="Pregúntas" />
      </DashboardCard>
    </main>
  );
}
