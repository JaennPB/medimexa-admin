import IQuestion from '../interfaces/Question';
import Model from './orm/Model';
import Query from './orm/Query';
import {roleQuery} from './Role';
		import MediaService from '../services/media';

class Question  extends Model {

	media:any;
	
	constructor(Question: IQuestion) {
		super('questions', Question);
		this.media =new MediaService(this.data.id)

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