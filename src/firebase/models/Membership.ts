import IMembership from '../interfaces/Membership';
import Model from './orm/Model';
import Query from './orm/Query';
import {roleQuery} from './Role';

class Membership  extends Model {

	constructor(Membership: IMembership) {
		super('memberships', Membership);
	}


}

class MembershipQuery extends Query {
	constructor() {
		super('memberships', Membership);
	}
}

const membershipQuery = new MembershipQuery();

export {
	membershipQuery,
}
export default Membership;