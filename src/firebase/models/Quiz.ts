import IQuiz from '../interfaces/Quiz';
import Model from './orm/Model';
import Query from './orm/Query';
import {roleQuery} from './Role';
import {categoryQuery} from './Category';

class Quiz  extends Model {

	with:any;
	constructor(Quiz: IQuiz) {
		super('quizes', Quiz);
		this.with = {
			'category':[
				categoryQuery,
				'category_id'
			]
		}
		
	}


}

class QuizQuery extends Query {
	constructor() {
		super('quizes', Quiz);
	}
}

const quizQuery = new QuizQuery();

export {
	quizQuery,
}
export default Quiz;