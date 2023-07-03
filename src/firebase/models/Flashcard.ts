import IFlashcard from '../interfaces/Flashcard';
import Model from './orm/Model';
import Query from './orm/Query';
import {roleQuery} from './Role';
import MediaService from '../services/media';
import {categoryQuery} from './Category';



class Flashcard  extends Model {

	media:any;
	
	constructor(Flashcard: IFlashcard) {
		super('flashcards', Flashcard);
		this.media =new MediaService(this.data.id)
		this.with = {
			'category':[
				categoryQuery,
				'category_id'
			]
		}

	}		



}

class FlashcardQuery extends Query {
	constructor() {
		super('flashcards', Flashcard);
	}
}

const flashcardQuery = new FlashcardQuery();

export {
	flashcardQuery,
}
export default Flashcard;