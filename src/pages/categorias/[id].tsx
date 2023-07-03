import React, {useState, useEffect} from 'react'
import DashboardCard from "@/components/DashboardCard";
import DrawerContent from "@/components/DrawerContent";
import ModalCreateNew from "@/components/ModalCreateNew";
import ModalDelete from "@/components/ModalDelete";
import {Edit, Delete} from '@/components/buttons';
import NavBar from "@/components/NavBar";
import NewItemCard from "@/components/NewItemCard";
import Table from "@/components/Table";
import {categoryQuery} from '@/firebase/models/Category';
import { Inter } from "next/font/google";
import { useRouter } from 'next/router'


const inter = Inter({ subsets: ["latin"] });

export default function Home() {


  const router = useRouter();
  const  id  = router.query.id;

  const [data, setData] = useState<any>([]);


  useEffect(()=>{
    id && categoryQuery.where('category_id','==', id).then(setData);
  },[id])

  const columns = (row:any, model:any)=>{

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
        description="Crear nueva subcategoria."
        path={id? "/categorias/nuevo/"+id:''}
      />
      <ModalDelete />
      <DrawerContent>
        <NavBar />
        <DashboardCard>
          <NewItemCard
            title="Subcategorias"
            description="Nueva subcategoria"
          />
          <Table description="Subcategorias" model={true} data={data} columns={columns} />
        </DashboardCard>
      </DrawerContent>
    </main>
  );
}
