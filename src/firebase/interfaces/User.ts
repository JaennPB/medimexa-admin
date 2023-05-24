interface User {
	readonly id?:string;

	name:string;
	lastname:string;
	email:string;
	about_me?:string;
	password?:string;
	role_id:string;

	readonly created_at?:Date;
	updated_at?:Date;
	deleted_at?:Date;
}

export default User;