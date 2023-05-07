interface TicketAnswer {
	readonly id?:string;

	readonly user_id:string;
	readonly answer:string;
	readonly ticket_id:string;

	readonly created_at?:Date;
	updated_at?:Date;
	deleted_at?:Date;
}

export default TicketAnswer;