import ITicketType from '../interfaces/TicketType';
import Model from './orm/Model';
import Query from './orm/Query';
import {roleQuery} from './Role';

class TicketType  extends Model {

	constructor(TicketType: ITicketType) {
		super('ticket_types', TicketType);
	}

}

class TicketTypeQuery extends Query {
	constructor() {
		super('ticket_types', TicketType);
	}
}

const ticketTypeQuery = new TicketTypeQuery();

export {
	ticketTypeQuery,
}
export default TicketType;