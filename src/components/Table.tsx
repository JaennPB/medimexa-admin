import React , {useState, useEffect} from "react";

interface Props {
  description: string;
  columns: Any,
  data:Array,

}

function Table({ description, columns, data}) {


  const [thead , setThead] = useState([]);
  const [rows , setRows] = useState([]);


  useEffect(()=>{

    let dataMapped = data.map(columns);

    let heads = [];
    for(let k in dataMapped[0]) {
      heads.push({
        key: k.toString().replaceAll(' ','_'),
        name: k.toString().toUpperCase().replaceAll('_',' '),
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

    if (_rows.lengh<1) {
        _rows.push(<Tr><Td>No hay informacion</Td></Tr>)
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
