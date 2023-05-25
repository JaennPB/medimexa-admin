import {storage} from '../config/firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import uniqid from 'uniqid';
import Media, {mediaQuery} from '../models/Media';
import { where } from "firebase/firestore";
import { typeMediaQuery} from '../models/TypeMedia';
import storageService from './storage';

class MediaService {


	model_id:string;

	constructor(model_id:string) {
		this.model_id= model_id;
	}


	findType= async(typeName:any)=>{
		return  await typeMediaQuery.where('name','==', typeName)
	}


	all() {
		return mediaQuery.where('model_id', '==', this.model_id)
	}

	type = async (typeName:string) =>{

		const type = await this.findType(typeName);

		return mediaQuery.whereRaw([
			where('model_id', '==', this.model_id),
			where('type_media_id', '==', type.data.id)
		])
	}

	save= async (typeName:string, file:any) =>{
		const type = (await this.findType(typeName))[0];


		return storageService.upload(file).then(async (snapshot:any)=>{

			const url = snapshot.metadata.fullPath;

			const media = new Media({
			 	'type_media_id' :type.data.id,
			 	'model_id': this.model_id,
			 	'name':file.name,
			 	'url':url

			})

			return await media.save();

		});
	}
}

export default MediaService