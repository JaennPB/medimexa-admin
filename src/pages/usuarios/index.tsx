import React, {useState, useEffect} from 'react'
import DashboardCard from "@/components/DashboardCard";
import DrawerContent from "@/components/DrawerContent";
import ModalCreateNew from "@/components/ModalCreateNew";
import ModalDelete from "@/components/ModalDelete";
import {Edit} from '@/components/buttons';
import NavBar from "@/components/NavBar";
import NewItemCard from "@/components/NewItemCard";
import Table from "@/components/Table";
import {userQuery} from '@/firebase/models/User';

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {


  const [data, setData] = useState([]);


  useEffect(()=>{

    userQuery.all().then(userQuery.toArray).then(setData)

  },[])

  const columns = (row)=>{

    console.log(Edit)

    return {
      id:row.id,
      nombre:row.name+" "+row.lastname,
      email:row.email,
      _: <div className="text-center w-80">
            <Edit path={`/usuarios/editar/${row.id}`} />
      </div>
    }
  }
  return (
    <main className={`bg-base-200 h-screen w-screen ${inter.className}`}>
      <ModalCreateNew
        description="Crear nuevo usuario."
        id="USER"
      />
      <ModalDelete />
      <DrawerContent>
        <NavBar />
        <DashboardCard>
          <NewItemCard
            title="Usuarios"
            description="Nuevo usuario"
          />
          <Table description="Pregúntas" data={data} columns={columns} />
        </DashboardCard>
      </DrawerContent>
    </main>
  );
}
