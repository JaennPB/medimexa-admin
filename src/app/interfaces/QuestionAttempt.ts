interface Payment {
	readonly id?:string;

	attempt_id:string;
	question_id:string;
	optional:boolean;

	readonly created_at?:Date;
	updated_at?:Date;
	deleted_at?:Date;
}

export default Payment;