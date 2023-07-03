interface Flashcard {
	readonly id?:string;

	question:string;
	answers:string;
	hint?:string;
	category_id:string;

	readonly created_at?:Date;
	updated_at?:Date;
	deleted_at?:Date;
}

export default Flashcard;