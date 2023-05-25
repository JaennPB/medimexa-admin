interface QuizType {
	readonly id?:string;

	name:string;
	
	readonly created_at?:Date;
	updated_at?:Date;
	deleted_at?:Date;
}

export default QuizType;