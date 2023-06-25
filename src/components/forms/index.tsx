import React, {useState, useEffect, useRef} from "react"
import {toast} from 'react-toastify';

const Builder=({fields,message,onClick, confirm=true, labels=true, validations=false})=> {
    
  let initialState=useRef({});

  const loadInitialState=()=>{
      let tempFields= initialState.current;
      for(let k in fields){
      tempFields[fields[k].name]=fields[k].defaultValue ||''
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
      let typeofname =(typeof data[field.name]) ;
      if(typeofname == 'string' || typeofname=='number'){
        if(data[field.name].toString().trim()===''){
          field.noValid=true;
          invalid=true;
          field.noValidMessage = 'Es requerido';
        } else {
          field.noValid=false;
        }
      } else {
        if(Object.keys(data[field.name]).length) {
            field.noValid=false;       
        } else {
          invalid=true;
          field.noValid=true;       

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





  const checkReadOnly = (field) =>  field.readonly? ' (No se puede editar)' : (field.required ? '' : ' (opcional)');
  const fieldOrEmpty = (field, empty='') => field || empty;
  const trueOrFalse = (field) => {
    if (field) {
      return parseInt(field);
    }

    return 0;
  }


  const handleOptionsChange = (option, field, e) =>{
    let options = data[field.name] || {};

    if(e.target.value.trim()==""){
      return;
    }
    options[option] = e.target.value,

    setData({
      ...data,
      [field.name]: options
    })
  }


  const setDefaultValue = (field, option) =>{
    let val ='';
    if(field.defaultValue){
      val= field.defaultValue[option] ||''
    }

    return val;
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
            let type= field.type || "text";

            if(field.date) {
              type="date"
            } 
            if(field.number) {
              type="number"
            } 


            if(field.password) {
              type="password"
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
              className={"input input-bordered input-primary w-full mb-6 "+ field.className ||'' }
            />


            if(field.options) {
              formInput= <select 
              type={type} 
              readOnly={readonly}  
              min={fieldOrEmpty(field.min)} 
              key={'input'+field.name}
              placeholder={fieldOrEmpty(field.placeholder)+ checkReadOnly(field) }
              name={field.name}
              defaultValue={field.defaultValue || '' }
              value={data[name]}
              onChange={handleChange}
              className={"input input-bordered input-primary w-full mb-6 "+ field.className ||'' }
            >
            <option>{field.placeholder} (Elige una opcion)</option>
            {field.options}
            </select>
            }


            if(field.textarea) {
               formInput= <textarea 
                type={type} 
                rows={6}
                readOnly={readonly}  
                min={fieldOrEmpty(field.min)} 
                key={'input'+field.name}
                placeholder={fieldOrEmpty(field.placeholder)+ checkReadOnly(field) }
                name={field.name}
                defaultValue={field.defaultValue || '' }
                value={data[name]}
                onChange={handleChange}
                className={"input input-bordered input-primary w-full mb-6 "+ field.className ||'' }
            ></textarea>
                         
            }


        

            if(field.answers) {
              formInput = <div className="border-dashed border-2 border-gray-500 p-5">
                <input 
                style={{marginBottom:12}}
                defaultValue={setDefaultValue(field,'a')}
                type="input" 
                placeholder="Opcion A"
                key={'input-opcion-1-'+field.name}
                onChange={(e)=>handleOptionsChange('a',field,e)}
                className={"input input-bordered input-primary w-full  mb-6 "+ field.className ||'' }
              />
                <input 
                style={{marginBottom:12}}
                defaultValue={setDefaultValue(field,'b')}
                type="input" 
                placeholder="Opcion B"
                key={'input-opcion-1-'+field.name}
                onChange={(e)=>handleOptionsChange('b',field,e)}
                className={"input input-bordered input-primary w-full  mb-6 "+ field.className ||'' }
              />
                <input 
                style={{marginBottom:12}}
                defaultValue={setDefaultValue(field,'c')}
                type="input" 
                placeholder="Opcion C"
                key={'input-opcion-1-'+field.name}
                onChange={(e)=>handleOptionsChange('c',field,e)}
                className={"input input-bordered input-primary w-full  mb-6 "+ field.className ||'' }
              />
                              <input 
                style={{marginBottom:12}}
                defaultValue={setDefaultValue(field,'d')}
                type="input" 
                placeholder="Opcion D"
                key={'input-opcion-1-'+field.name}
                onChange={(e)=>handleOptionsChange('d',field,e)}
                className={"input input-bordered input-primary w-full  mb-6 "+ field.className ||'' }
              />
                              <input 
                style={{marginBottom:12}}
                defaultValue={setDefaultValue(field,'e')}
                type="input" 
                placeholder="Opcion E"
                key={'input-opcion-1-'+field.name}
                onChange={(e)=>handleOptionsChange('e',field,e)}
                className={"input input-bordered input-primary w-full  mb-6 "+ field.className ||'' }
              />
                              <input 
                style={{marginBottom:12}}
                defaultValue={setDefaultValue(field,'f')}
                type="input" 
                placeholder="Opcion F"
                key={'input-opcion-1-'+field.name}
                onChange={(e)=>handleOptionsChange('f',field,e)}
                className={"input input-bordered input-primary w-full  mb-6 "+ field.className ||'' }
              />
            </div>
          
            }

            return(
                <>
                    {labels && <span>{field.placeholder}</span>}
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