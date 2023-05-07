import IQuizType from '../interfaces/QuizType';
import Model from './orm/Model';
import Query from './orm/Query';
import {roleQuery} from './Role';

class QuizType  extends Model {

	constructor(QuizType: IQuizType) {
		super('quiz_types', QuizType);
	}

}

class QuizTypeQuery extends Query {
	constructor() {
		super('quiz_types', QuizType);
	}
}

const quizTypeQuery = new QuizTypeQuery();

export {
	quizTypeQuery,
}
export default QuizType;