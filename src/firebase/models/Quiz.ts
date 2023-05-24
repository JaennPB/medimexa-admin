import IQuiz from '../interfaces/Quiz';
import Model from './orm/Model';
import Query from './orm/Query';
import {roleQuery} from './Role';

class Quiz  extends Model {

	constructor(Quiz: IQuiz) {
		super('quizes', Quiz);
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