import React, {useState, useEffect} from 'react'
import DashboardCard from "@/components/DashboardCard";
import DrawerContent from "@/components/DrawerContent";
import ModalCreateNew from "@/components/ModalCreateNew";
import ModalDelete from "@/components/ModalDelete";
import {Edit} from '@/components/buttons';
import NavBar from "@/components/NavBar";
import NewItemCard from "@/components/NewItemCard";
import Table from "@/components/Table";
import {categoryQuery} from '@/firebase/models/Category';

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {


  const [data, setData] = useState<any>([]);


  useEffect(()=>{
    categoryQuery.all().then(categoryQuery.toArray).then(setData)
  },[])

  const columns = (row:any)=>{

    console.log(Edit)

    return {
      nombre:row.name,
      descripcion:row.description,
      _: <div className="text-center w-80">
            <Edit path={`/categorias/editar/${row.id}`} />
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
          <Table description="Categorias" data={data} columns={columns} />
        </DashboardCard>
      </DrawerContent>
    </main>
  );
}
