import React, {useState, useEffect} from 'react'
import DashboardCard from "@/components/DashboardCard";
import DrawerContent from "@/components/DrawerContent";
import NavBar from "@/components/NavBar";
import {userQuery} from '@/firebase/models/User';
import { Inter } from "next/font/google";
import Quiz, {quizQuery} from '@/firebase/models/Quiz';
import  {quizTypeQuery} from '@/firebase/models/QuizType';
import {categoryQuery} from '@/firebase/models/Category';
import Builder from '@/components/forms';
import {toast} from 'react-toastify';
const inter = Inter({ subsets: ["latin"] });
import AuthService from '@/firebase/services/auth'
import { useRouter } from 'next/router'




export default function Home() {

  const router = useRouter();

  const  id  = router.query.id;

  const [quizType, setQuizType] = useState<any>({});
  const [quiz, setQuiz] = useState<any>({});

  useEffect(()=>{
    id && quizQuery.find(id).then(setQuiz)
  },[id])


  useEffect(()=>{
    quiz.data?.id  && quizTypeQuery.find(quiz.data.type_id).then(setQuizType)
  },[quiz])

  const redirect = ()=>{
    if(quizType.data?.name=='mexaquiz'){
      return  '/mexaquiz'
    }
    if(quizType.data?.name=='enarm'){
      return  '/simuladores'
    }
    return '/'
  }

  const [fields, setFields] = useState<any>([])

  useEffect(()=>{

    quiz.data?.id && setFields([
      {
        name:'name',
        placeholder:"nombre",
        required:true,
        defaultValue: quiz.data?.name,
      },      
      {
        name:'body',
        placeholder:"Descripcion larga",
        required:true,
        textarea:true,
        defaultValue: quiz.data?.body,
      },    
       {
        name:'category_id',
        placeholder:"Categoria",
        required:true,
        category:true,
        defaultValue:quiz.data?.category_id
      },   
    ])

  },[quiz]);


  const saveQuiz=(data:any,setLoading:any)=>{

    AuthService.onAuth((user:any)=>{
      if(user){
        data.created_by = user.uid
        data.type_id= quizType.data.id;

        const quiz = new Quiz(data)

        quiz.save().then(async ()=>{
          setLoading(false)
          toast.success("Usuario creado correctamente")
          router.push(redirect());
        })
      } 
    })
  }

  return (
    <main className={`bg-base-200 h-screen w-screen ${inter.className}`}>
      <DrawerContent>
        <NavBar back={redirect()} />
        <DashboardCard>
           <h1>Nuevo Quiz </h1>
    <Builder  fields={fields} onClick={saveQuiz} />     
        </DashboardCard>
      </DrawerContent>
    </main>
  );
}
