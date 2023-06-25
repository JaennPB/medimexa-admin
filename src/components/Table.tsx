import React , {useState, useEffect} from "react";

interface Props {
  description: string;
  columns: any,
  data:any,
  model?:any

}

function Table({ description, columns, data, model=false}: Props) {

  const [thead , setThead] = useState<any>([]);
  const [rows , setRows] = useState<any>([]);


  useEffect(()=>{

    let callback = columns;

    if(model) {
      callback= (model:any)=>columns(model.data, model)
    }
    let dataMapped =  data? data.map(callback): Array();

    let heads = Array();
    for(let k in dataMapped[0]) {
      heads.push({
        key: k.toString().replaceAll(' ','_'),
        name: k.toString().toUpperCase().replaceAll('_',' '),
      })
    }

    if(heads.length<1) {
      heads.push({
        key:'',
        name:'',
      })
    }

    setThead(heads);
    setRows(dataMapped);

  },[data, columns, model])



const renderTable=()=>{

  const _rows = rows.map((row:any,index:number) => (
        <tr  key={'tbody-tr-'+index}>
        {
            thead.map((column:any)=>(<td key={'tbody-tr-td-'+column.key}>{row[column.key]}</td>))
        }
        </tr>
    ))

    if (_rows.length<1) {
        _rows.push(<tr key={0}><td>No hay informacion</td></tr>)
    }

    return _rows;
}
  return (
    <div className="overflow-x-auto mt-1 h-auto max-h-[39rem]">
      <table className="table w-full">
        <thead>
         <tr className="bg-primary">
            {thead.map((column:any) => <th  className="text-center bg-primary text-primary-content" key={'thead-tr-'+column.key}>{column.name}</th>)}
          </tr>
        </thead>
        <tbody>
          {renderTable()}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
