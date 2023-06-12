import React, {useState, useEffect, useRef} from "react"
import {toast} from 'react-toastify';

const Builder=({fields,message,onClick, confirm=true, validations=false})=> {
    
  let initialState=useRef({});

  const loadInitialState=()=>{
      let tempFields= initialState.current;
      for(let k in fields){
      tempFields[fields[k].name]=fields[k].defaultValue?.toString()||''
    }
    initialState.current=tempFields;
  }

  loadInitialState();

  const [data, setData] = useState(initialState.current);
  const [inputs, setInputs] = useState(fields);
  const [loading, setLoading] = useState(false);


  useEffect(()=>{
    setData(initialState.current);
    setInputs(fields);
  },[fields, initialState]);


  const handleChange = (e)=>{
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const checkRequired=(field,invalid)=>{
    if(field.required){
      if((typeof data[field.name]) == 'string'){
        if(data[field.name].trim()===''){
          field.noValid=true;
          invalid=true;
          field.noValidMessage = 'Es requerido';
        }
      }
    }
    return {field, invalid};
  }

  const checkValidations = (field, invalid) =>{
    if (validations) {
      const test = validations[field.name] || false;
      if (test) {
        if (!test.fn(data[field.name])) {
          field.noValid=true;
          field.noValidMessage =test.message;           
        }
      }
    }
    return {field, invalid};
  }

  const handleClick = ()=>{

    let invalid =false;



    let newIinputs =inputs.map(field=>{

      let result = checkRequired(field, invalid);
      field = result.field;
      invalid= result.invalid;
 
      result = checkValidations(field, invalid);
      field = result.field;
      invalid= result.invalid;

      return field;
    })



    if(invalid){
      toast.error("Tienes algunos errores");
      setInputs(newIinputs);
    }
    else{
      let _data = {};

      for (let key in data) {
        if(data[key]!=="") {
          _data[key] = data[key];
        }
      }

      setLoading(true);
      onClick(_data, setLoading);
    }

  }

  const setFile = (e, field)=>{
    let _data = {target:{}};
    _data.target.name = field.name;
    _data.target.value = e.target.files[0];
    handleChange(_data);
  }





  const checkReadOnly = (field) =>  field.readonly? ' (No se puede editar)' : ' (Opcional)';
  const fieldOrEmpty = (field, empty='') => field || empty;
  const trueOrFalse = (field) => {
    if (field) {
      return parseInt(field);
    }

    return 0;
  }



    return (
      <>
        {
          inputs.map(field=>{
            const { name }= field;

            let readonly = false;

            if (field.readonly) {
              readonly=true;
            }
            let type="text";

            if(field.date) {
              type="date"
            } 
            if(field.number) {
              type="number"
            } 

            if(data[field.name]==null)
              return null;



            let formInput=<input 
              type={type} 
              readOnly={readonly}  
              min={fieldOrEmpty(field.min)} 
              key={'input'+field.name}
              placeholder={fieldOrEmpty(field.placeholder)+ checkReadOnly(field) }
              name={field.name}
              defaultValue={field.defaultValue || '' }
              value={data[name]}
              onChange={handleChange}
              className={"input input-bordered input-primary w-full max-w-xs mb-6"+ field.className ||'' }
            />



        



            return(
                <>
                    {formInput}
                    {field.noValid && <small key={'small'+field.name} style={{color:"red"}}>{field.noValidMessage}</small>}
                  </>
              )

            })
        }


        <button
              className="btn btn-primary btn-block"
              onClick={handleClick} 
            >
              {loading ? 'Cargando...' : 'Guardar'}
          </button>
      

         
        
      </>
    )
  }
export default Builder