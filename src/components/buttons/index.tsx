import React from "react";
import {useRouter} from 'next/navigation';
import {toast} from 'react-toastify'



export const Edit =({path, title="Editar"})=>{
  const route = useRouter()

  return <span
      className="btn btn-secondary mr-2"
      onClick={()=>route.push(path)}
    >
        {title}
    </span>
  
}


export const Delete=({model, data, setData})=>{

  const deleteButton =()=>{
    model.delete().then(res=>{
      setData(data.filter(item=>model.data.id!=item.data.id))
      toast.success("Elemento borrado correctamente")

    })
  }
  return <span
    className="btn bg-red-500"
    onClick={deleteButton}
    >Eliminar</span>
}