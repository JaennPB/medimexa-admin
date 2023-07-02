import React, {useState, useEffect} from 'react'
import DashboardCard from "@/components/DashboardCard";
import DrawerContent from "@/components/DrawerContent";
import NavBar from "@/components/NavBar";
import { Inter } from "next/font/google";
import User from '@/firebase/models/User';
import Question, {questionQuery} from '@/firebase/models/Question';
import Builder from '@/components/forms';
import {toast} from 'react-toastify';
import { useRouter } from 'next/router'
const inter = Inter({ subsets: ["latin"] });

 


export default function Home() {


  const router = useRouter();

  const  quiz_id  = router.query.quiz_id;

  const [fields, setFields] = useState<any>([])
  const [questions, setQuestions] = useState<any>([]);

  useEffect(()=>{
    quiz_id && questionQuery.where('quiz_id','==', quiz_id).then(questionQuery.toArray).then(setQuestions);
  },[quiz_id])


  useEffect(()=>{

    setFields([
    {
      name:'name',
      placeholder:"Pregunta",
      required:true,
      textarea:true,
    },    
    {
      name:'hint',
      placeholder:"pista",
    },
    {
      name:'optional',
      placeholder:"Opcional",
      options : [<option key={0} value={1}>Si</option>,<option key={1} value={0}>No</option>],
      required:true,
    },     
    {
      name:'question_id',
      placeholder:"Pregunta padre",
      options : questions.map((question:any)=><option key={0} value={question.id}>{question.name}</option>),
    },
    {
      name:'options',
      placeholder:"Opciones",
      answers:true,
      required:true
    },
    {
      name:'correct',
      placeholder:"Respuesta correcta",
      required:true,
    },    

    ])

  },[questions]);


  const saveQuestion=(data:any,setLoading:any)=>{

      data.quiz_id= quiz_id;
      const user = new Question(data)

      user.save().then(()=>{
        setLoading(false)
        toast.success("Caso creado correctamente")
        router.back();
      })
  }

  return (
    <main className={`bg-base-200 h-screen w-screen ${inter.className}`}>
      <DrawerContent>
        <NavBar />
        <DashboardCard>
           <h1>Nuevo usuario </h1>
    <Builder  fields={fields} onClick={saveQuestion} />     
        </DashboardCard>
      </DrawerContent>
    </main>
  );
}
