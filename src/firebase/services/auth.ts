import {auth} from '../config/firebase';

import { 
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	sendPasswordResetEmail,
	updatePassword,
	deleteUser,
	signOut,
	onAuthStateChanged
} from "firebase/auth";


class AuthService {

	user:any;

	constructor() {
	}

	register(email:string, password:string) {
		return createUserWithEmailAndPassword(auth, email, password)
	}

	login(email:string, password:string) {
		return signInWithEmailAndPassword(auth, email, password).then((userCredential:any)=>{
			return userCredential;
		})
	}

	signOut() {
		signOut(auth)
	}

	resetPassword (email:string) {
		return sendPasswordResetEmail(auth, email);
	}

	changePassword (password:string) {
		return updatePassword(auth.currentUser, password)
	}

	deleteAccount () {
		return deleteUser(auth.currentUser);
	}

	getUser() {
		return auth.currentUser;
	}


	onAuth(fn:any) {
		onAuthStateChanged(auth,fn);
	}




}

const authService= (new AuthService());
export default authService;
