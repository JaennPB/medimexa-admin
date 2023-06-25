import React, {useState, useEffect} from 'react'
import DashboardCard from "@/components/DashboardCard";
import DrawerContent from "@/components/DrawerContent";
import NavBar from "@/components/NavBar";
import { Inter } from "next/font/google";
import User,{userQuery} from '@/firebase/models/User';
import {roleQuery} from '@/firebase/models/Role';
import Builder from '@/components/forms';
import {toast} from 'react-toastify';
import { useRouter } from 'next/router'
const inter = Inter({ subsets: ["latin"] });




export default function Home() {


  const router = useRouter();

  const  id  = router.query.id;

  const [fields, setFields] = useState<any>([])
  const [roles, setRoles] = useState<any>([]);
  const [user, setUser] = useState<any>({});
  useEffect(()=>{
    roleQuery.all().then(roleQuery.toArray).then(setRoles);
  },[])

  useEffect(()=>{

    id && userQuery.find(id).then(setUser)

  },[id])


  useEffect(()=>{


    setFields([
    {
      name:'name',
      placeholder:"nombre",
      required:true,
      defaultValue:user.data?.name

    },    
    {
      name:'lastname',
      placeholder:"apellido",
      required:true,
      defaultValue:user.data?.lastname

    },
    {
      name:'role_id',
      placeholder:"rol",
      required:true,
      options : roles.map((role:any,index:number)=><option key={index} selected={user.data?.role_id===role.id ? true : false} value={role.id}>{role.name}</option>),
      defaultValue:user.data?.role_id
    }
    ])

  },[roles, user]);


  const saveUser=(data:any,setLoading:any)=>{

      user.data.name = data.name;
      user.data.lastname = data.lastname;
      user.role_id = data.role_id;

      user.update().then(()=>{
        setLoading(false)
        toast.success("Usuario editado correctamente")
        router.push('/usuarios');
      })
  }

  return (
    <main className={`bg-base-200 h-screen w-screen ${inter.className}`}>
      <DrawerContent>
        <NavBar />
        <DashboardCard>
          <h1>Editar usuario </h1>
          <Builder  fields={fields} onClick={saveUser} />     
        </DashboardCard>
      </DrawerContent>
    </main>
  );
}
