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

  const  question_id  = router.query.question_id;

  const [fields, setFields] = useState<any>([])
  const [questions, setQuestions] = useState<any>([]);
  const [question, setQuestion] = useState<any>([]);

  useEffect(()=>{
    question_id && questionQuery.find(question_id).then(setQuestion);
  },[question_id])  

  useEffect(()=>{
    question.data?.id && questionQuery.where('quiz_id', '==', question.data.quiz_id)
    .then(questionQuery.toArray).then(setQuestions);
  },[question])


  useEffect(()=>{

    question.data?.id && setFields([
    {
      name:'name',
      placeholder:"Pregunta",
      required:true,
      defaultValue:question.data?.name
    },    
    {
      name:'hint',
      placeholder:"pista",
      defaultValue:question.data?.hint
    },
    {
      name:'optional',
      placeholder:"Opcional",
      options : [<option key={0} value={1}>Si</option>,<option key={1} value={0}>No</option>],
      required:true,
      defaultValue:parseInt(question.data?.optional)
    },     
    {
      name:'question_id',
      placeholder:"Pregunta padre",
      options : questions.map((question:any)=><option key={0} value={question.id}>{question.name}</option>),
      defaultValue:question.data?.question_id 
    },
    {
      name:'options',
      placeholder:"Opciones",
      answers:true,
      required:true,
      defaultValue:question.data?.options
    },
    {
      name:'correct',
      placeholder:"Respuesta correcta",
      required:true,
      defaultValue:question.data?.correct
    },    

    ])

  },[questions]);


  const saveQuestion=(data:any,setLoading:any)=>{

      question.data = {
        ...question.data,
        ...data
      }

      question.update().then(()=>{
        setLoading(false)
        toast.success("Usuario creado correctamente")
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
