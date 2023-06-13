import React, {useState, useEffect} from 'react'
import DashboardCard from "@/components/DashboardCard";
import DrawerContent from "@/components/DrawerContent";
import NavBar from "@/components/NavBar";
import {userQuery} from '@/firebase/models/User';
import { Inter } from "next/font/google";
import User from '@/firebase/models/User';
import {roleQuery} from '@/firebase/models/Role';
import Builder from '@/components/forms';
import {toast} from 'react-toastify';
import {useRouter} from 'next/navigation';
const inter = Inter({ subsets: ["latin"] });




export default function Home() {


  const router = useRouter();

  const [fields, setFields] = useState([])
  const [roles, setRoles] = useState([]);

  useEffect(()=>{
    roleQuery.all().then(roleQuery.toArray).then(setRoles);
  },[])


  useEffect(()=>{


    setFields([
    {
      name:'name',
      placeholder:"nombre",
      required:true,
    },    
    {
      name:'lastname',
      placeholder:"apellido",
      required:true,
    },
    {
      name:'email',
      placeholder:"correo",
      required:true,
    },    
    {
      name:'password',
      placeholder:"password",
      required:true,
    },    
    {
      name:'role_id',
      placeholder:"rol",
      required:true,
      options : roles.map(role=><option value={role.id}>{role.name}</option>),
      defaultValue:roles[1]?.id ?? null
    }
    ])

  },[roles]);


  const saveUser=(data,setLoading)=>{

      const user = new User(data)

      user.save().then(()=>{
        setLoading(false)
        toast.success("Usuario creado correctamente")
        router.push('/usuarios');
      })
  }

  return (
    <main className={`bg-base-200 h-screen w-screen ${inter.className}`}>
      <DrawerContent>
        <NavBar />
        <DashboardCard>
           <h1>Nuevo usuario </h1>
    <Builder  fields={fields} onClick={saveUser} />     
        </DashboardCard>
      </DrawerContent>
    </main>
  );
}
