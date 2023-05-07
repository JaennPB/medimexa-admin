import IMedia from '../interfaces/Media';
import Model from './orm/Model';
import Query from './orm/Query';
import {roleQuery} from './Role';
import StorageService from '../services/storage';

class Media  extends Model {

	constructor(Media: IMedia) {
		super('medias', Media, {

			_delete: async()=>{
				return await StorageService.delete(this.data.url);
			}
		});
	}

	getUrl() {
	  return StorageService.getFile(this.data.url)
	}
}

class MediaQuery extends Query {
	constructor() {
		super('medias', Media);
	}
}

const mediaQuery = new MediaQuery();

export {
	mediaQuery,
}
export default Media;