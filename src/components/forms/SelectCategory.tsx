import React, {useState, useEffect} from "react";
import {categoryQuery} from '@/firebase/models/Category';
type props = {

  name:string,
  defaultValue:any;
  onChange:any;
}
function SelectCategory({name, defaultValue, onChange}:props) {

  const [categories, setCategories] = useState<any>([]);
  const [value, setValue] = useState<any>(defaultValue);

  const setCats = (cat:any, categories:any)=>{

    cat.categories = categories.filter((cat2:any)=>cat2.category_id===cat.id);
    cat.categories = cat.categories.map((cat2:any)=>setCats(cat2,categories))

    return cat;
  }

  useEffect(()=>{
      categoryQuery.all().then(categoryQuery.toArray).then((categories:any)=>{
        let cats = categories.filter((cat:any)=>cat.category_id===null);    
        return  cats.map((cat:any)=>setCats(cat,categories));
      }).then(setCategories)
  },[])

  const onHandleChange=(e:any)=>{
    setValue(e.target.value);
    onChange(e)
  }

  const renderOption =(cat:any, index:number)=>{
    return <div key={index}>
        <input checked={value===cat.id} type="radio" id={cat.id} name={name} value={cat.id} onChange={onHandleChange}/>
        <label htmlFor={cat.id}>{cat.name}</label>

        <fieldset className="ml-6">
        {cat.categories && cat.categories.map(renderOption)}
        </fieldset>
      </div>

  }


  return <fieldset className="border-black p-3 border-solid border-2 max-h-80 overflow-scroll">
      <legend>Selecciona una categoria</legend>
     {categories.map(renderOption)}
    
    
  </fieldset>

}

export default SelectCategory;
