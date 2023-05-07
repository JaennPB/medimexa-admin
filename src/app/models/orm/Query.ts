import { collection, addDoc , updateDoc, onSnapshot,doc, deleteDoc, getDoc, query, where, getDocs} from "firebase/firestore";
import db from './../../config/firebase';

const q = query(collection(db, "cities"), where("capital", "==", true));

class Query  {

	table:string;
	model:any;

	constructor(table:string,model:any) {
		this.table = table;
		this.model = model;
	}


	find=(id:any)=>{
		return getDoc(doc(db, this.table, id)).then((doc:any)=>{
			let data = doc.data();
			if(data) {
				data = {
					id:doc.id,
					...doc.data(),
				}
				if(data.deleted_at==null) {
					return new (<any>this.model)(data);
				}
			}

			throw 'No se encontro el usuario'
		});
	}


	all=()=>{
		return getDocs(collection(db,this.table)).then((snapshot:any)=>{

			return snapshot.docs.filter(this.filterDoc).map(this.mapDoc)
		})
	}

	
	where=(key:any, sign:any, value:any) =>{
		const collect = collection(db, this.table);

		const q = query(collect, where(key, sign, value));

		return getDocs(q).then((snapshot:any)=>{
			return snapshot.docs.filter(this.filterDoc).map(this.mapDoc)
		})
	}

	whereRaw=(wheres:any) =>{
		const collect = collection(db, this.table);

		const q = query(collect, ...wheres );

		return getDocs(q).then((snapshot:any)=>{
			return snapshot.docs.filter(this.filterDoc).map(this.mapDoc)
		})
	}

	
	subscribe=(setValue:any, setError:any=null)=>{

		if(!setError) {
			setError = ()=>{}
		}

		return onSnapshot(
			collection(db, this.table),
			(snapshot:any) => {

				let docs =  snapshot.docs.filter(this.filterDoc).map(this.mapDoc)

				setValue(docs)
			},
			(error) => {
				setError(Error);
				console.log(error);

			}
		);
	}


	private filterDoc = (doc:any) => {
		return doc.data().deleted_at==null;
	}

	private mapDoc=(doc:any) => {
		return new (<any>this.model)({...doc.data(), id: doc.id})
	}



}


export default Query;