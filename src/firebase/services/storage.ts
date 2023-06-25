import {storage} from '../config/firebase';
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import uniqid from 'uniqid';





class Storage {


	ref(route:any) {
		return ref(storage, route);
	}
	
	upload(file:any) {

		const extension = file.name.split('.').pop();
		const name = uniqid();

		const storageRef = this.ref(`${name}.${extension}`);
		return uploadBytes(storageRef, file )
	}

	getFile(route:any){
		const ref = this.ref(route);
		return getDownloadURL(ref)
	}

	delete(route:any){
		const ref = this.ref(route);
		return deleteObject(ref)
	}
}

const storageService =(new Storage());
export default storageService;
