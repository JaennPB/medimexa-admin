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
  const  id  = router?.query?.id?.[0] || 0;


  const [fields, setFields] = useState<any>([])
  const [categories, setCategories] = useState<any>([]);

  useEffect(()=>{
     categoryQuery.all().then(categoryQuery.toArray).then(setCategories);
  },[])


  useEffect(()=>{

    let cats= categories.map((role:any, index:number)=><option key={index} value={role.id}>{role.name}</option>);

    setFields([
    {
      name:'name',
      placeholder:"nombre",
      required:true,
    },    
    {
      name:'category_id',
      placeholder:"Categoria superior",
      options : cats,
      defaultValue: id || null
    }
    ])

  },[categories]);


  const saveCategory=(data:any,setLoading:any)=>{
      data.category_id = data.category_id || null;
      const category = new Category(data)

      category.save().then(()=>{
        setLoading(false)
        toast.success("Categoria creada correctamente")
        router.back();
      })
  }

  return (
    <main className={`bg-base-200 h-screen w-screen ${inter.className}`}>
      <DrawerContent>
        <NavBar />
        <DashboardCard>
    <Builder  fields={fields} onClick={saveCategory} />     
        </DashboardCard>
      </DrawerContent>
    </main>
  );
}
