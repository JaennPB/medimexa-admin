// @ts-nocheck comment at the top of the file
import {
  documentId
} from "firebase/firestore";

class Collect {


  constructor(items: any) {
    for(let k in items) {
      this[k] = items[k]
    }
  }

  first(){
    return this[0] || null
  }

  async with(model:any){
    const withable = this[0].with;

    if(withable[model]) {
      const query = withable[model][0];
      const foreign_key = withable[model][1];
      const id = withable[model][2] ?? documentId();

      const ids = this.pluck(foreign_key);
      const collect = await query.where(id,'in',ids);

      return this.map((item:any)=>{
        item.data[model] = collect.find('id', item.data[foreign_key])[0] ?? null;
        return item;
      })

    }

    return this;

  }


  find(search:string, value:any) {
    return this.toArray().filter((item:any)=>item[search]===value);
  }


  pluck(key:string) {
    return Object.values(this.map((item:any)=>item.data[key]));
  }

  toArray(){
    let array = [];
    for (let k in Object.keys(this)) {
      array[k] = this[k].data
    }

    return array;
  }

  filter(cb:any){
    let array = [];
    for (let k in Object.keys(this)) {
      array[k] = this[k]
    }

    return new Collect(array.filter(cb));
  }

  map(cb:any){
    let array = [];
    for (let k in Object.keys(this)) {
      array[k] = this[k]
    }

    return new Collect(array.map(cb));
  }
}

export default Collect;
