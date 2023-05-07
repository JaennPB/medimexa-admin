import IQuestion from '../interfaces/Question';
import Model from './orm/Model';
import Query from './orm/Query';
import {roleQuery} from './Role';

class Question  extends Model {

	constructor(Question: IQuestion) {
		super('questions', Question);
	}

}

class QuestionQuery extends Query {
	constructor() {
		super('questions', Question);
	}
}

const questionQuery = new QuestionQuery();

export {
	questionQuery,
}
export default Question;