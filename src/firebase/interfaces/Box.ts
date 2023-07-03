interface Ticket {
	readonly id?:string;

	name:string;
	days:number;

	readonly created_at?:Date;
	updated_at?:Date;
	deleted_at?:Date;
}

export default Ticket;