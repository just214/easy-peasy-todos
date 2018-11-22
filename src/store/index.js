import { createStore } from 'easy-peasy';
import { auth } from '../firebase.config';
import authStore from './auth/auth.store';

const store = createStore({ auth: authStore }, { injections: { auth } });

export default store;
