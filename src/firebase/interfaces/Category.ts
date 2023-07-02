interface Category {
	readonly id?:string;

	name:string;
	category_id?:string;
	
	readonly created_at?:Date;
	updated_at?:Date;
	deleted_at?:Date;
}

export default Category;