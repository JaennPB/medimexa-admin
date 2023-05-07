interface Role {
	readonly id?:string;

	name:string;

	readonly created_at?:Date;
	updated_at?:Date;
	deleted_at?:Date;
}

export default Role;