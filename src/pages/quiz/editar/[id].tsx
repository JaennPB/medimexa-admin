import React, {useState, useEffect} from 'react'
import DashboardCard from "@/components/DashboardCard";
import DrawerContent from "@/components/DrawerContent";
import NavBar from "@/components/NavBar";
import {userQuery} from '@/firebase/models/User';
import { Inter } from "next/font/google";
import Quiz, {quizQuery} from '@/firebase/models/Quiz';
import {categoryQuery} from '@/firebase/models/Category';
import {quizTypeQuery} from '@/firebase/models/QuizType';
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
  const [categories, setCategories] = useState<any>([]);


  useEffect(()=>{
    id && quizQuery.find(id).then(quizQuery.first).then(setQuiz)
  },[id])

  useEffect(()=>{
    quizTypeQuery.where('name','==','mexaquiz').then(quizTypeQuery.first).then(setQuizType)
    categoryQuery.all().then(categoryQuery.toArray).then(setCategories)
  },[])

  const [fields, setFields] = useState<any>([])

  useEffect(()=>{


    console.log(quiz)
    setFields([
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
      placeholder:"rol",
      required:true,
      options: categories.map((role:any,index:number)=><option key={index} value={role.id}>{role.name}</option>),
      defaultValue: quiz.data?.category_id,

    },
    ])

  },[quiz, categories]);


  const saveQuiz=(data:any,setLoading:any)=>{

    AuthService.onAuth((user:any)=>{
      if(user){
        data.created_by = user.uid
        data.type_id= quizType.data.id;

        const quiz = new Quiz(data)

        quiz.save().then(()=>{
          setLoading(false)
          toast.success("Usuario creado correctamente")
          router.push('/mexaquiz');
        })
      } 
    })
  }

  return (
    <main className={`bg-base-200 h-screen w-screen ${inter.className}`}>
      <DrawerContent>
        <NavBar />
        <DashboardCard>
           <h1>Nuevo Quiz </h1>
    <Builder  fields={fields} onClick={saveQuiz} />     
        </DashboardCard>
      </DrawerContent>
    </main>
  );
}
