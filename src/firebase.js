import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const app = firebase.initializeApp({
	apiKey: 'AIzaSyBlKkfZaVJfFz3SfeTk13MXCibuD2SkPvs',
	authDomain: 'voteapp-d3b5e.firebaseapp.com',
	projectId: 'voteapp-d3b5e',
	storageBucket: 'voteapp-d3b5e.appspot.com',
	messagingSenderId: '674624623162',
	appId: '1:674624623162:web:ddcb32fa3186e5c9ab5b03',
});

const db = app.firestore();

export const auth = app.auth();
export { app, db };
