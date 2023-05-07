interface Ticket {
	readonly id?:string;

	readonly user_id:string;
	readonly user_support_id?:string;
	question:string;
	ticket_type_id:string;
	status_id:string;

	readonly created_at?:Date;
	updated_at?:Date;
	deleted_at?:Date;
}

export default Ticket;