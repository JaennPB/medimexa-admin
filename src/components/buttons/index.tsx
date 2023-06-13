import React from "react";
import {useRouter} from 'next/navigation';




export const Edit =({path})=>{
  const route = useRouter()

  return <span
      className="btn btn-secondary btn-wide"
      onClick={()=>route.push(path)}
    >
        Editar
    </span>
  
}
