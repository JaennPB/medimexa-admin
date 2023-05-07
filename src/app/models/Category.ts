import ICategory from '../interfaces/Category';
import Model from './orm/Model';
import Query from './orm/Query';
import {roleQuery} from './Role';

class Category  extends Model {

	constructor(Category: ICategory) {
		super('categories', Category);
	}

}

class CategoryQuery extends Query {
	constructor() {
		super('categories', Category);
	}
}

const categoryQuery = new CategoryQuery();

export {
	categoryQuery,
}
export default Category;