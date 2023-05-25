interface Media {
	readonly id?:string;

	name:string;
	url:string;
	model_id:string;
	type_media_id:string;

	readonly created_at?:Date;
	updated_at?:Date;
	deleted_at?:Date;
}

export default Media;