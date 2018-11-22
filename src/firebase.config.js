import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyB2j3_JfYw7rPQ2ce6fRzoFMfa0nfRUH0U',
  authDomain: 'easy-peasy-app.firebaseapp.com',
  databaseURL: 'https://easy-peasy-app.firebaseio.com',
  projectId: 'easy-peasy-app',
  storageBucket: 'easy-peasy-app.appspot.com',
  messagingSenderId: '412756702107',
};
firebase.initializeApp(config);

const db = firebase.firestore();

const settings = { /* your settings... */ timestampsInSnapshots: true };
db.settings(settings);

const { auth } = firebase;

export { db, auth };
