interface Membership {
	readonly id?:string;

	name:string;
	price:number;
	months:number;
	body:string;

	readonly created_at?:Date;
	updated_at?:Date;
	deleted_at?:Date;
}

export default Membership;