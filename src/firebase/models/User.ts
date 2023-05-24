import IUser from '../interfaces/User';
import Model from './orm/Model';
import Query from './orm/Query';
import {roleQuery} from './Role';
import AuthService from '../services/auth';
import MediaService from '../services/media';

class User  extends Model {

	media: any;
	constructor(user: IUser) {	
		super('users', user, {
			_save: async()=>{						

				const password = this.data.password;
				this.unset('password');
				return AuthService.register(this.data.email, password)
			},

			_update: async()=>{
				if(this.old.email!= this.data.email) {

				}

				this.unset('password');
			},

			_delete: async()=>{
				this.data.email+= ('_'+Date.now());
			}
		});

		this.media =new MediaService(this.data.id)

	}


	unset(key:string) {
		if(this.data[key]!=undefined){
			delete this.data[key];
		}
	}

	role() {
		return roleQuery.find(this.data.role_id);
	}

	


}

class UserQuery extends Query {
	constructor() {
		super('users', User);
	}
}

const userQuery = new UserQuery();

export {
	userQuery,
}
export default User;