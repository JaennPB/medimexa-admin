import IBox from '../interfaces/Box';
import Model from './orm/Model';
import Query from './orm/Query';
import {roleQuery} from './Role';

class Box  extends Model {

	constructor(Box: IBox) {
		super('boxes', Box);
	}

}

class BoxQuery extends Query {
	constructor() {
		super('boxes', Box);
	}
}

const boxQuery = new BoxQuery();

export {
	boxQuery,
}
export default Box;