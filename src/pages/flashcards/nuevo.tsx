import React, {useState, useEffect} from 'react'
import DashboardCard from "@/components/DashboardCard";
import DrawerContent from "@/components/DrawerContent";
import NavBar from "@/components/NavBar";
import { Inter } from "next/font/google";
import Flashcard from '@/firebase/models/Flashcard';
import Builder from '@/components/forms';
import {toast} from 'react-toastify';
import {useRouter} from 'next/router';
const inter = Inter({ subsets: ["latin"] });


export default function Home() {

  const router = useRouter();




  const [fields, setFields] = useState<any>([])

  useEffect(()=>{

    setFields([
     {
      name:'question',
      placeholder:"Pregunta",
      required:true,
    },
       {
      name:'answer',
      placeholder:"Respuesta",
      required:true,
    },      
    {
      name:'hint',
      placeholder:"Pista",
      required:false,
    },

     {
      name:'category_id',
      placeholder:"Categoria",
      required:true,
      category:true,
    },   
    ])

  },[]);


  const saveFlashcards=(data:any,setLoading:any)=>{
    
    const flashcard = new Flashcard(data)
    flashcard.save().then(()=>{
      setLoading(false)
      toast.success("Flashcard creada correctamente")
      router.push('/flashcards/editar/'+flashcard.data.id);
    })
      
  }

  return (
    <main className={`bg-base-200 h-screen w-screen ${inter.className}`}>
      <DrawerContent>
        <NavBar />
        <DashboardCard>
            <Builder  fields={fields} onClick={saveFlashcards} />     
        </DashboardCard>
      </DrawerContent>
    </main>
  );
}
