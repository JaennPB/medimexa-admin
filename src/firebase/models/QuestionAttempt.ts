import IQuestionAttempt from '../interfaces/QuestionAttempt';
import Model from './orm/Model';
import Query from './orm/Query';
import {roleQuery} from './Role';

class QuestionAttempt  extends Model {

	constructor(QuestionAttempt: IQuestionAttempt) {
		super('question_attempts', QuestionAttempt);
	}

}

class QuestionAttemptQuery extends Query {
	constructor() {
		super('question_attempts', QuestionAttempt);
	}
}

const questionAttemptQuery = new QuestionAttemptQuery();

export {
	questionAttemptQuery,
}
export default QuestionAttempt;