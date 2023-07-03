import react, {useState, useEffect} from 'react';
import DashboardCard from "@/components/DashboardCard";
import DrawerContent from "@/components/DrawerContent";
import ModalCreateNew from "@/components/ModalCreateNew";
import NavBar from "@/components/NavBar";
import NewItemCard from "@/components/NewItemCard";
import Table from "@/components/Table";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import checkUser from '@/components/login/checkUser';
import {flashcardQuery} from '@/firebase/models/Flashcard';
import {Edit, Delete} from '@/components/buttons';

export default function Home() {

  checkUser();



  const [data, setData] = useState<any>([]);

  useEffect(()=>{

    flashcardQuery.all()
    .then((collect:any)=>collect.with('category'))
    .then(setData)
  },[])


  const columns = (row:any, model:any)=>{

    return {
      pregunta:row.question,
      respuesta:row.answer,
      categoria:row.category?.name || '-',
      _: <div className="text-center w-80">
            <Edit path={`/flashcards/editar/${row.id}`} />
            <Delete model={model} data={data} setData={setData}/>
      </div>
    }
  }

  return (
    <main className={`bg-base-200 h-screen w-screen ${inter.className}`}>
      <ModalCreateNew
        description="Más tarde podrás volver para completar, editar o eliminar el quiz."
        path="flashcards/nuevo"
      />
      <DrawerContent>
        <NavBar />
        <DashboardCard>
          <NewItemCard title="Flashcards" description="Nueva flashcards" />
          <Table description="Flashcards"  model={true} data={data} columns={columns}  />
        </DashboardCard>
      </DrawerContent>
    </main>
  );
}
