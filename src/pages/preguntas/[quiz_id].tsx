import React, {useState, useEffect} from 'react'
import DashboardCard from "@/components/DashboardCard";
import DrawerContent from "@/components/DrawerContent";
import NavBar from "@/components/NavBar";
import {userQuery} from '@/firebase/models/User';
import { Inter } from "next/font/google";
import {questionQuery} from '@/firebase/models/Question';
import {quizTypeQuery} from '@/firebase/models/QuizType';
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

  const [data, setData] = useState([]);


  useEffect(()=>{
    quiz_id && questionQuery.where('quiz_id','==', quiz_id).then(setData)
  },[quiz_id])


  const columns = (row,model)=>{

    return {
      pregunta:row.name,
      opcional: parseInt(row.optional)?'Si':'No',
      Opciones:Object.keys(row.options).length,
      _: <div className="text-center w-80">
            <Edit path={`/preguntas/editar/${row.id}`} title={"Editar pregunta"}/>
            <Delete model={model} data={data} setData={setData}/>
      </div>
    }
  }

  return (
    <main className={`bg-base-200 h-screen w-screen ${inter.className}`}>
      <ModalCreateNew
        description="Crear nueva pregunta."
        path={quiz_id && "/preguntas/nuevo/"+quiz_id}
      />
      <DrawerContent>
        <NavBar />
        <DashboardCard>
           <h1>Preguntas</h1>
          <NewItemCard
            title="Preguntas"
            description="Nuevea pregunta"
          />
            <Table description="Preguntas" data={data} model={true} columns={columns} />     
        </DashboardCard>
      </DrawerContent>
    </main>
  );
}
