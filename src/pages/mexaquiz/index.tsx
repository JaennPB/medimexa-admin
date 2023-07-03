import react, {useState, useEffect} from 'react';
import DashboardCard from "@/components/DashboardCard";
import DrawerContent from "@/components/DrawerContent";
import ModalCreateNew from "@/components/ModalCreateNew";
import NavBar from "@/components/NavBar";
import NewItemCard from "@/components/NewItemCard";
import Table from "@/components/Table";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import checkUser from '@/components/login/checkUser';
import {quizTypeQuery} from '@/firebase/models/QuizType';
import {quizQuery} from '@/firebase/models/Quiz';
import {Edit, Delete} from '@/components/buttons';

export default function Home() {

  checkUser();



  const [data, setData] = useState<any>([]);
  const [quizType, setQuizType] = useState<any>({});
  const [quizes, setQuizes] = useState<any>([]);

  useEffect(()=>{

    quizTypeQuery.where('name','==','mexaquiz').then((collect:any)=>collect.first()).then(setQuizType)
  },[])

  useEffect(()=>{

    quizType.data?.id && quizQuery.where('type_id','==',quizType.data.id)
    .then((collect:any)=>collect.with('category'))
    .then(setData)
  },[quizType])

  const columns = (row:any, model:any)=>{

    console.log(row)
    return {
      nombre:row.name,
      categoria:row.category?.name ||'-' ,
      _: <div className="text-center w-80">
            <Edit path={`/quiz/editar/${row.id}`} />
            <Edit path={`/casos/${row.id}`} title={"Ver casos"}/>
            <Delete model={model} data={data} setData={setData}/>
      </div>
    }
  }

  return (
    <main className={`bg-base-200 h-screen w-screen ${inter.className}`}>
      <ModalCreateNew
        description="Más tarde podrás volver para completar, editar o eliminar el quiz."
        path="quiz/nuevo/mexaquiz"
      />
      <DrawerContent>
        <NavBar />
        <DashboardCard>
          <NewItemCard title="Mexaquiz" description="Nuevo Quiz" />
          <Table description="Pregúntas"  model={true} data={data} columns={columns}  />
        </DashboardCard>
      </DrawerContent>
    </main>
  );
}
