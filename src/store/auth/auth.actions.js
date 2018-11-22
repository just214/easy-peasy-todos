import { effect } from 'easy-peasy';

export default {
  startAuthListener: effect((dispatch, payload, getState, injections) => {
    const { auth } = injections;
    auth().onAuthStateChanged(user => {
      if (user) {
        dispatch.auth.setAuthState({
          isChecked: true,
          isAuthed: true,
          userData: user,
        });
      } else {
        dispatch.auth.setAuthState({
          isChecked: true,
          isAuthed: false,
          userData: null,
        });
      }
    });
  }),

  loginWithEmail: effect(async (dispatch, payload, getState, injections) => {
    const { auth } = injections;
    const { email, password } = getState().auth.form;
    return auth().signInWithEmailAndPassword(email, password);
  }),

  signupWithEmail: effect((dispatch, payload, getState, injections) => {
    const { auth } = injections;
    const { email, password } = getState().auth.form;
    return auth().createUserWithEmailAndPassword(email, password);
  }),

  logout: effect((dispatch, payload, getState, injections) => {
    const { auth } = injections;
    return auth().signOut();
  }),
};
