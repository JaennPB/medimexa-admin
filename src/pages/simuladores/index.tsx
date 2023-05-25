import DashboardCard from "@/components/DashboardCard";
import DrawerContent from "@/components/DrawerContent";
import ModalCreateNew from "@/components/ModalCreateNew";
import ModalDelete from "@/components/ModalDelete";
import ModalEdit from "@/components/ModalEdit";
import NavBar from "@/components/NavBar";
import NewItemCard from "@/components/NewItemCard";
import Table from "@/components/Table";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`bg-base-200 h-screen w-screen ${inter.className}`}>
      <ModalCreateNew
        description="Más tarde podrás volver para completar, editar o eliminar el simulador."
        id="SIM"
      />
      <ModalEdit />
      <ModalDelete />
      <DrawerContent>
        <NavBar />
        <DashboardCard>
          <NewItemCard
            title="Simuladores ENARM"
            description="Nuevo Simulador"
          />
          <Table description="Pregúntas" />
        </DashboardCard>
      </DrawerContent>
    </main>
  );
}
