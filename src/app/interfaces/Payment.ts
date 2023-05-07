interface Payment {
	readonly id?:string;

	readonly user_id:string;
	price:number;
	readonly start_date:Date;
	readonly end_date:Date;
	payment_details:string;
	status_id:string;
	body:string;

	readonly created_at?:Date;
	updated_at?:Date;
	deleted_at?:Date;
}

export default Payment;