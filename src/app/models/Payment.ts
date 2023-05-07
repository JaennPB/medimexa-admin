import IPayment from '../interfaces/Payment';
import Model from './orm/Model';
import Query from './orm/Query';
import {roleQuery} from './Role';

class Payment  extends Model {

	constructor(Payment: IPayment) {
		super('payments', Payment);
	}

}

class PaymentQuery extends Query {
	constructor() {
		super('payments', Payment);
	}
}

const paymentQuery = new PaymentQuery();

export {
	paymentQuery,
}
export default Payment;