import React, {useState, useEffect} from 'react'
import DashboardCard from "@/components/DashboardCard";
import DrawerContent from "@/components/DrawerContent";
import ModalCreateNew from "@/components/ModalCreateNew";
import ModalDelete from "@/components/ModalDelete";
import NavBar from "@/components/NavBar";
import NewItemCard from "@/components/NewItemCard";
import Table from "@/components/Table";
import {categoryQuery} from '@/firebase/models/Category';
import {Edit, Delete} from '@/components/buttons';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {


  const [data, setData] = useState<any>([]);


  useEffect(()=>{
    categoryQuery.where('category_id','==', null).then(setData)
  },[])

  const columns = (row:any, model)=>{

    console.log(Edit)

    return {
      nombre:row.name,
      _: <div className="text-center w-80">
            <Edit path={`/categorias/editar/${row.id}`} />
            <Edit path={`/categorias/${row.id}`} title='Ver subcategorias' />
            <Delete model={model} data={data} setData={setData} />
      </div>
    }
  }
  return (
    <main className={`bg-base-200 h-screen w-screen ${inter.className}`}>
      <ModalCreateNew
        description="Crear nueva categoria."
        path="categorias/nuevo"
      />
      <ModalDelete />
      <DrawerContent>
        <NavBar />
        <DashboardCard>
          <NewItemCard
            title="Categorias"
            description="Nueva categoria"
          />
          <Table description="Categorias" model={true} data={data} columns={columns} />
        </DashboardCard>
      </DrawerContent>
    </main>
  );
}
