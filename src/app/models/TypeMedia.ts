import ITypeMedia from '../interfaces/TypeMedia';
import Model from './orm/Model';
import Query from './orm/Query';
import {roleQuery} from './Role';

class TypeMedia  extends Model {

	constructor(TypeMedia: ITypeMedia) {
		super('type_medias', TypeMedia);
	}

}

class TypeMediaQuery extends Query {
	constructor() {
		super('type_medias', TypeMedia);
	}
}

const typeMediaQuery = new TypeMediaQuery();

export {
	typeMediaQuery,
}
export default TypeMedia;