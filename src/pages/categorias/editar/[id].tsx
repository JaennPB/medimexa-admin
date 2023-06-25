import React, {useState, useEffect} from 'react'
import DashboardCard from "@/components/DashboardCard";
import DrawerContent from "@/components/DrawerContent";
import NavBar from "@/components/NavBar";
import Category, {categoryQuery} from '@/firebase/models/Category';
import { Inter } from "next/font/google";
import Builder from '@/components/forms';
import {toast} from 'react-toastify';
const inter = Inter({ subsets: ["latin"] });
import { useRouter } from 'next/router'




export default function Home() {

  const router = useRouter();
  const  id  = router.query.id;



  const [category, setCategory] = useState<any>({})
  const [fields, setFields] = useState<any>([])
  const [categories, setCategories] = useState<any>([]);

  useEffect(()=>{
    id && categoryQuery.find(id).then(setCategory)
  },[id])



  useEffect(()=>{
    categoryQuery.all().then(categoryQuery.toArray).then(setCategories);
  },[])


  useEffect(()=>{

    let cats= categories.map((role:any)=><option key={role.id} value={role.id}>{role.name}</option>);

    console.log(cats);

    setFields([
    {
      name:'name',
      placeholder:"nombre",
      required:true,
      defaultValue: category.data?.name,
    },    
    {
      name:'description',
      placeholder:"Descripcion",
      required:true,
      defaultValue: category.data?.description,
    },
    {
      name:'category_id',
      placeholder:"rol",
      options : cats,
      defaultValue: category.data?.category_id || null
    }
    ])

  },[categories]);


  const updateCategory=(data:any,setLoading:any)=>{

      category.data.name = data.name;
      category.data.category_id = data.category_id ?? null;
      category.data.description = data.description;

      category.update().then(()=>{
        setLoading(false)
        toast.success("Categoria actualizada correctamente")
        router.push('/categorias');
      })
  }

  return (
    <main className={`bg-base-200 h-screen w-screen ${inter.className}`}>
      <DrawerContent>
        <NavBar />
        <DashboardCard>
           <h1>Nuevo usuario </h1>
    <Builder  fields={fields} onClick={updateCategory} />     
        </DashboardCard>
      </DrawerContent>
    </main>
  );
}
