import ITicket from '../interfaces/Ticket';
import Model from './orm/Model';
import Query from './orm/Query';
import {roleQuery} from './Role';

class Ticket  extends Model {

	constructor(Ticket: ITicket) {
		super('tickets', Ticket);
	}

}

class TicketQuery extends Query {
	constructor() {
		super('tickets', Ticket);
	}
}

const ticketQuery = new TicketQuery();

export {
	ticketQuery,
}
export default Ticket;