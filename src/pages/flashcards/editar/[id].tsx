import React, {useState, useEffect} from 'react'
import DashboardCard from "@/components/DashboardCard";
import DrawerContent from "@/components/DrawerContent";
import NavBar from "@/components/NavBar";
import { Inter } from "next/font/google";
import Flashcard, {flashcardQuery} from '@/firebase/models/Flashcard';
import Builder from '@/components/forms';
import {toast} from 'react-toastify';
import {useRouter} from 'next/router';
const inter = Inter({ subsets: ["latin"] });
import SelectCategory from '@/components/SelectCategory/index';
import Media from '@/components/Media';

export default function Home() {


  const router = useRouter();
  const {id} = router.query;
  const [flashcard, setFlashcard] = useState<any>({});


  useEffect(()=>{
    id && flashcardQuery.find(id).then(setFlashcard);
  },[id])

  const [fields, setFields] = useState<any>([])

  useEffect(()=>{

    flashcard.data?.id && setFields([
     {
      name:'question',
      placeholder:"Pregunta",
      required:true,
      defaultValue: flashcard.data?.question
    },
       {
      name:'answer',
      placeholder:"Respuesta",
      required:true,
      defaultValue: flashcard.data?.answer

    },      
    {
      name:'hint',
      placeholder:"Pista",
      required:false,
      defaultValue: flashcard.data?.hint

    },

     {
      name:'category_id',
      placeholder:"Categoria",
      required:true,
      category:true,
      defaultValue: flashcard.data?.category_id
    },   
    ])

  },[flashcard]);


  const saveFlashcards=(data:any,setLoading:any)=>{
    
    flashcard.data = {
      ...flashcard.data,
      ...data
    }
    flashcard.update().then(()=>{
      setLoading(false)
      toast.success("Flashcard editada correctamente")
      router.push('/flashcards');
    })
      
  }

  return (
    <main className={`bg-base-200 h-screen w-screen ${inter.className}`}>
      <DrawerContent>
        <NavBar />
        <DashboardCard>
            <Builder  fields={fields} onClick={saveFlashcards} /> 
            <Media  model={flashcard} />    
        </DashboardCard>
      </DrawerContent>
    </main>
  );
}
