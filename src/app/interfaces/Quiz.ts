interface Quiz {
	readonly id?:string;

	name:string;
	category_id:string;
	created_by?:string;
	type_id:string;
	body:string;

	readonly created_at?:Date;
	updated_at?:Date;
	deleted_at?:Date;
}

export default Quiz;