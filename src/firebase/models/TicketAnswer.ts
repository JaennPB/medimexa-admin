import ITicketAnswer from '../interfaces/TicketAnswer';
import Model from './orm/Model';
import Query from './orm/Query';
import {roleQuery} from './Role';

class TicketAnswer  extends Model {

	constructor(TicketAnswer: ITicketAnswer) {
		super('ticket_answers', TicketAnswer);
	}

}

class TicketAnswerQuery extends Query {
	constructor() {
		super('ticket_answers', TicketAnswer);
	}
}

const ticketAnswerQuery = new TicketAnswerQuery();

export {
	ticketAnswerQuery,
}
export default TicketAnswer;