import { createStore } from 'easy-peasy';
import { auth, db } from '../firebase.config';
import authStore from './auth';
import todosStore from './todos';

const store = createStore(
  { auth: authStore, todos: todosStore },
  // * The Firebase autn and db references are injected into the store.
  // * Not sure if there are any disadvantages to this approach.
  { injections: { auth, db } },
);

export default store;
