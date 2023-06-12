import DashboardCard from "@/components/DashboardCard";
import DrawerContent from "@/components/DrawerContent";
import ModalCreateNew from "@/components/ModalCreateNew";
import NavBar from "@/components/NavBar";
import NewItemCard from "@/components/NewItemCard";
import Table from "@/components/Table";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import checkUser from '@/components/login/checkUser';


export default function Home() {

  checkUser();

  return (
    <main className={`bg-base-200 h-screen w-screen ${inter.className}`}>
      <ModalCreateNew
        description="Más tarde podrás volver para completar, editar o eliminar el quiz."
        id="MEXA"
      />
      <DrawerContent>
        <NavBar />
        <DashboardCard>
          <NewItemCard title="Mexaquiz" description="Nuevo Quiz" />
          <Table description="Pregúntas" hasCategory />
        </DashboardCard>
      </DrawerContent>
    </main>
  );
}
