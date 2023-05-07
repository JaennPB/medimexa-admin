import IAttempt from '../interfaces/Attempt';
import Model from './orm/Model';
import Query from './orm/Query';
import {roleQuery} from './Role';

class Attempt  extends Model {

	constructor(Attempt: IAttempt) {
		super('attempts', Attempt);
	}

}

class AttemptQuery extends Query {
	constructor() {
		super('attempts', Attempt);
	}
}

const attemptQuery = new AttemptQuery();

export {
	attemptQuery,
}
export default Attempt;