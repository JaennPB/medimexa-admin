// @ts-nocheck comment at the top of the file
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

		let typeMedia = (await this.findType(typeName));
		typeMedia = typeMedia.first()

		return mediaQuery.whereRaw([
			where('model_id', '==', this.model_id),
			where('type_media_id', '==', typeMedia.data.id)
		])
	}


	detect = (file)=>{

		const ext= file.name.split('.').pop().toLowerCase()

		if(ext.includes('doc')){
			return 'document'
		}
		if(ext.includes('pdf')){
			return 'pdf'
		}

		if(ext.includes('jp') ||
			ext.includes('png') ||
			ext.includes('webp') ||
			ext.includes('gif') ){
			return 'imagen'
		}
		return 'otro';
	}

	save= async (file:any) =>{

		const typeName = this.detect(file);

		let typeMedia = (await this.findType(typeName));
		typeMedia = typeMedia.first()


		return storageService.upload(file).then(async (snapshot:any)=>{

			const url = snapshot.metadata.fullPath;
			const media = new Media({
			 	'type_media_id' :typeMedia.data.id,
			 	'model_id': this.model_id,
			 	'name':file.name,
			 	'url':url
			})

			return await media.save();

		});
	}
}

export default MediaService