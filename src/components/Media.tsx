import { useRouter } from "next/navigation";
import React, {useEffect, useState} from "react";

type props = {
  media?:any
}

function Media({model=false} : props) {


  const [medias, setMedias] = useState<any>([]);
  const [reload, setReload] = useState<any>(1);

  useEffect(()=>{


    model?.media && model.media.all().then((medias:any)=>{
       setMedias(Object.values(medias))
    })
  },[model, reload])



  const onChange = (e:any)=>{
    model.media.save(e.target.files[0]).then(()=>setReload(reload+1))
  }

  const open=async(media:any)=>{

    const url = await media.getUrl();
    window.open(url)
  }

 return (
    <div className="p-3">
    <p className="text-xl">Multimedia</p>

    {model?.data?.id ? 

    (<div className="flex justify-between">
      <span className="label-text ">
        Subir imagen (opcional)
      </span>
      <input
        type="file"
        onChange={onChange}
        className="file-input file-input-bordered file-input-success w-full max-w-xs mb-10"
      />
    </div>) : 'Crea un registro para continuar' }



    <table  className="table w-full" >
    <thead>
      <tr>
        <th>Nombre</th>
        <th></th>
      </tr>
    </thead>

    <tbody>
    {medias.map(media=><tr>
      <td> {media.data.name}</td>
      <td>  <button className="btn btn-sm" onClick={()=>open(media)}> ver</button>  </td>
     
      </tr>)}

    </tbody>

    </table>
    </div>
  );
 
}

export default Media;
