import IRole from '../interfaces/Role';
import Model from './orm/Model';
import Query from './orm/Query';

class Role  extends Model {

	constructor(Role: IRole) {
		super('roles', Role);
	}
}

class RoleQuery extends Query {
	constructor() {
		super('roles', Role);
	}
}

const roleQuery = new RoleQuery();

export {
	roleQuery
}
export default Role;