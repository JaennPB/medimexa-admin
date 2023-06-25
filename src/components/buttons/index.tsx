import React from "react";
import {useRouter} from 'next/navigation';
import {toast} from 'react-toastify'

type EditProps = {
  path:string,
  title?:string
}

export const Edit =({path, title="Editar"}:EditProps)=>{
  const route = useRouter()

  return <span
      className="btn btn-secondary mr-2"
      onClick={()=>route.push(path)}
    >
        {title}
    </span>
  
}

type DeleteProps = {
  model:any,
  data:any,
  setData:any
}

export const Delete=({model, data, setData}: DeleteProps)=>{

  const deleteButton =()=>{
    model.delete().then((res:any)=>{
      setData(data.filter((item:any)=>model.data.id!=item.data.id))
      toast.success("Elemento borrado correctamente")

    })
  }
  return <span
    className="btn bg-red-500"
    onClick={deleteButton}
    >Eliminar</span>
}