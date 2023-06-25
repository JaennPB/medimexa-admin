import React, {useState, useEffect} from 'react'
import DashboardCard from "@/components/DashboardCard";
import DrawerContent from "@/components/DrawerContent";
import NavBar from "@/components/NavBar";
import Category, {categoryQuery} from '@/firebase/models/Category';
import { Inter } from "next/font/google";
import Builder from '@/components/forms';
import {toast} from 'react-toastify';
import {useRouter} from 'next/navigation';
const inter = Inter({ subsets: ["latin"] });




export default function Home() {


  const router = useRouter();

  const [fields, setFields] = useState<any>([])
  const [categories, setCategories] = useState<any>([]);

  useEffect(()=>{
    categoryQuery.all().then(categoryQuery.toArray).then(setCategories);

  },[])


  useEffect(()=>{

    let cats= categories.map((role:any, index:number)=><option key={index} value={role.id}>{role.name}</option>);

    console.log(cats);

    setFields([
    {
      name:'name',
      placeholder:"nombre",
      required:true,
    },    
    {
      name:'description',
      placeholder:"Descripcion",
      required:true,
    },
    {
      name:'category_id',
      placeholder:"rol",
      options : cats,
    }
    ])

  },[categories]);


  const saveCategory=(data:any,setLoading:any)=>{

      const category = new Category(data)

      category.save().then(()=>{
        setLoading(false)
        toast.success("Categoria creada correctamente")
        router.push('/categorias');
      })
  }

  return (
    <main className={`bg-base-200 h-screen w-screen ${inter.className}`}>
      <DrawerContent>
        <NavBar />
        <DashboardCard>
           <h1>Nuevo usuario </h1>
    <Builder  fields={fields} onClick={saveCategory} />     
        </DashboardCard>
      </DrawerContent>
    </main>
  );
}
