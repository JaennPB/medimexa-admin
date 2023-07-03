import React, {useState, useEffect} from 'react'
import DashboardCard from "@/components/DashboardCard";
import DrawerContent from "@/components/DrawerContent";
import NavBar from "@/components/NavBar";
import {userQuery} from '@/firebase/models/User';
import { Inter } from "next/font/google";
import {questionQuery} from '@/firebase/models/Question';
import {quizTypeQuery} from '@/firebase/models/QuizType';
import {quizQuery} from '@/firebase/models/Quiz';
import Table from '@/components/Table';
import {toast} from 'react-toastify';
const inter = Inter({ subsets: ["latin"] });
import AuthService from '@/firebase/services/auth'
import NewItemCard from "@/components/NewItemCard";
import { useRouter } from 'next/router'
import ModalCreateNew from "@/components/ModalCreateNew";
import {Edit, Delete} from '@/components/buttons';



export default function Home() {

  const router = useRouter();

  const  quiz_id  = router.query.quiz_id;

  const [data, setData] = useState<any>([]);
  const [quizType, setQuizType] = useState<any>({});
  const [quiz, setQuiz] = useState<any>({});


  useEffect(()=>{

    quiz_id && quizQuery.find(quiz_id).then((quizDB:any)=>{
      questionQuery.where('quiz_id','==', quiz_id).then(setData)

      quizTypeQuery.find(quizDB.data.type_id).then(setQuizType)
    })
  },[quiz_id])



  const redirect = ()=>{
    if(quizType.data.name=='mexaquiz'){
      return  '/mexaquiz'
    }
    if(quizType.data.name=='enarm'){
      return  '/simuladores'
    }
    return '/'
  }


  const columns = (row:any,model:any)=>{

    return {
      pregunta:row.name,
      opcional: parseInt(row.optional)?'Si':'No',
      Opciones:Object.keys(row.options).length,
      _: <div className="text-center w-80">
            <Edit path={`/casos/editar/${row.id}`} title={"Editar caso"}/>
            <Delete model={model} data={data} setData={setData}/>
      </div>
    }
  }

  return (
    <main className={`bg-base-200 h-screen w-screen ${inter.className}`}>
      <ModalCreateNew
        description="Crear nuevo caso."
        path={quiz_id ? "/casos/nuevo/"+quiz_id : ''}
      />
      <DrawerContent>
        <NavBar back={redirect()}/>
        <DashboardCard>
          <NewItemCard
            title="Casos"
            description="Nuevo caso"
          />
            <Table description="Casos" data={data} model={true} columns={columns} />     
        </DashboardCard>
      </DrawerContent>
    </main>
  );
}
