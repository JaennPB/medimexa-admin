import IStatus from '../interfaces/Status';
import Model from './orm/Model';
import Query from './orm/Query';
import {roleQuery} from './Role';

class Status  extends Model {

	constructor(Status: IStatus) {
		super('status', Status);
	}

}

class StatusQuery extends Query {
	constructor() {
		super('status', Status);
	}
}

const statusQuery = new StatusQuery();

export {
	statusQuery,
}
export default Status;