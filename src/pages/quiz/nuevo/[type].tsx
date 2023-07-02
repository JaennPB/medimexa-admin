import React, {useState, useEffect} from 'react'
import DashboardCard from "@/components/DashboardCard";
import DrawerContent from "@/components/DrawerContent";
import NavBar from "@/components/NavBar";
import {userQuery} from '@/firebase/models/User';
import { Inter } from "next/font/google";
import Quiz from '@/firebase/models/Quiz';
import {quizTypeQuery} from '@/firebase/models/QuizType';
import Builder from '@/components/forms';
import {toast} from 'react-toastify';
import {useRouter} from 'next/router';
const inter = Inter({ subsets: ["latin"] });
import AuthService from '@/firebase/services/auth'
import SelectCategory from '@/components/SelectCategory/index';


export default function Home() {

  const router = useRouter();

  const {type} = router.query;


  const [quizType, setQuizType] = useState<any>({});
  const [categories, setCategories] = useState<any>([]);

  useEffect(()=>{
    type && quizTypeQuery.where('name','==',type).then(quizTypeQuery.first).then(setQuizType)
  },[type])


  const [fields, setFields] = useState<any>([])

  useEffect(()=>{

    setFields([
    {
      name:'name',
      placeholder:"nombre",
      required:true,
    },      
    {
      name:'body',
      placeholder:"Descripcion larga",
      required:true,
      textarea:true,
    },
     {
      name:'category_id',
      placeholder:"Categoria",
      required:true,
      category:true,
    },   
    ])

  },[categories]);


  const saveQuiz=(data:any,setLoading:any)=>{

    AuthService.onAuth((user:any)=>{
      if(user){
        data.created_by = user.uid
        data.type_id= quizType.data.id;

        const quiz = new Quiz(data)

        quiz.save().then(()=>{
          setLoading(false)
          toast.success("Usuario creado correctamente")
          router.back();
        })
      } 
    })
  }

  return (
    <main className={`bg-base-200 h-screen w-screen ${inter.className}`}>
      <DrawerContent>
        <NavBar />
        <DashboardCard>
           <h1>Nuevo Quiz: {type} </h1>
            <Builder  fields={fields} onClick={saveQuiz} />     
        </DashboardCard>
      </DrawerContent>
    </main>
  );
}
