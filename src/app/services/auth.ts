import {auth} from '../config/firebase';
import { 
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	sendPasswordResetEmail,
	updatePassword,
	deleteUser,
	signOut
} from "firebase/auth";


class AuthService {

	user:any;

	constructor() {
		this.user =auth.currentUser;
	}

	register(email:string, password:string) {
		return createUserWithEmailAndPassword(auth, email, password)
	}

	login(email:string, password:string) {
		return signInWithEmailAndPassword(auth, email, password).then((userCredential:any)=>{
			localStorage.setItem('user', JSON.stringify(userCredential.user));
		})
	}

	signOut() {
		return signOut(auth)
	}

	resetPassword (email:string) {
		return sendPasswordResetEmail(auth, email);
	}

	changePassword (password:string) {
		return updatePassword(this.user, password)
	}

	deleteAccount () {
		return deleteUser(this.user);
	}

	getUser() {
		return this.user
	}


}

export default (new AuthService());