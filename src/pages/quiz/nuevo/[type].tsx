import React, {useState, useEffect} from 'react'
import DashboardCard from "@/components/DashboardCard";
import DrawerContent from "@/components/DrawerContent";
import NavBar from "@/components/NavBar";
import {userQuery} from '@/firebase/models/User';
import { Inter } from "next/font/google";
import Quiz from '@/firebase/models/Quiz';
import {categoryQuery} from '@/firebase/models/Category';
import {quizTypeQuery} from '@/firebase/models/QuizType';
import Builder from '@/components/forms';
import {toast} from 'react-toastify';
import {useRouter} from 'next/router';
const inter = Inter({ subsets: ["latin"] });
import AuthService from '@/firebase/services/auth'



export default function Home() {

  const router = useRouter();

  const {type} = router.query;


  const [quizType, setQuizType] = useState({});
  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    type && quizTypeQuery.where('name','==',type).then(quizTypeQuery.first).then(setQuizType)
    type && categoryQuery.all().then(categoryQuery.toArray).then(setCategories)
  },[type])


  const [fields, setFields] = useState([])

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
      options: categories.map(role=><option value={role.id}>{role.name}</option>)
    },
    ])

  },[categories]);


  const saveQuiz=(data,setLoading)=>{

    AuthService.onAuth((user)=>{
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
