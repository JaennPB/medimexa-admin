import DashboardCard from "@/components/DashboardCard";
import DrawerContent from "@/components/DrawerContent";
import ModalCreateNew from "@/components/ModalCreateNew";
import NavBar from "@/components/NavBar";
import NewItemCard from "@/components/NewItemCard";
import Table from "@/components/Table";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`bg-base-200 h-screen w-screen ${inter.className}`}>
      <ModalCreateNew
        description="Más tarde podrás volver para completar, editar o eliminar la baraja."
        path="quiz/nuevo"
      />
      <DrawerContent>
        <NavBar />
        <DashboardCard>
          <NewItemCard title="Flashcards" description="Nueva Baraja" />
          <Table description="Barajas" hasCategory />
        </DashboardCard>
      </DrawerContent>
    </main>
  );
}
