import React , {useState, useEffect} from "react";

interface Props {
  description: string;
  columns: Any,
  data:Array,

}

function Table({ description, columns, data, model=false}) {


  const [thead , setThead] = useState([]);
  const [rows , setRows] = useState([]);


  useEffect(()=>{

    let callback = columns;

    if(model) {
      callback= model=>columns(model.data, model)
    }
    let dataMapped =  data? data.map(callback): [];

    let heads = [];
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

  },[data, columns])



const renderTable=()=>{

  const _rows = rows.map((row,index) => (
        <tr  key={'tbody-tr-'+index}>
        {
            thead.map((column)=>(<td key={'tbody-tr-td-'+column.key}>{row[column.key]}</td>))
        }
        </tr>
    ))

    if (_rows.length<1) {
        _rows.push(<tr><td>No hay informacion</td></tr>)
    }

    return _rows;
}
  return (
    <div className="overflow-x-auto mt-1 h-auto max-h-[39rem]">
      <table className="table w-full">
        <thead>
         <tr className="bg-primary">
            {thead.map(column => <th  className="text-center bg-primary text-primary-content" onClick={()=>makeOrder(column.key)} key={'thead-tr-'+column.key}>{column.name}</th>)}
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
