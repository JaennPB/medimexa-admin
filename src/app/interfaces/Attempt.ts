interface Intent {
	readonly id?:string;

	user_id:string;
	quiz_id:string;
	score?:string;
	status_id:string;	

	readonly created_at?:Date;
	updated_at?:Date;
	deleted_at?:Date;
}

export default Intent;