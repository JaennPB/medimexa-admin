interface Question {
	readonly id?:string;

	name:string;
	hint?:string;
	optional:boolean;
	question_id?:string;
	options:[],
	quiz_id:string;
	correct:string;


	readonly created_at?:Date;
	updated_at?:Date;
	deleted_at?:Date;
}

export default Question;