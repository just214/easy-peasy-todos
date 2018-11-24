import { effect, select } from 'easy-peasy';

const state = {
  isChecked: false,
  isAuthed: false,
  userData: null,
  // * The form data is shared between the Login, Signup, and ResetPassword components.
  // * Otherwise, I would keep the form state in the component.
  form: {
    type: '',
    email: '',
    password: '',
    confirmPassword: '',
  },
};

const actions = {
  setAuthState: (state, payload) => ({ ...state, ...payload }),

  // * the formType is used below to determine how to validate the form values
  // * since Login and ResetPassword do not use all of the form values.
  setFormType: (state, type) => {
    state.form.type = type;
  },
  setEmail: (state, payload) => {
    state.form.email = payload;
  },
  setPassword: (state, payload) => {
    state.form.password = payload;
  },
  setConfirmPassword: (state, payload) => {
    state.form.confirmPassword = payload;
  },
};

var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const selectors = {
  isValid: select(state => {
    const { type, email, password, confirmPassword } = state.form;

    // * If we are in the ResetPassword form, we are only dealing
    // * with the email form value.
    if (type === 'reset-password' && re.test(email.toLowerCase())) {
      return true;
    }

    // * If we are in the Signup form, then we want to
    // * make sure that the password and confirmPassword form values match.
    if (type === 'signup' && !confirmPassword) {
      return false;
    }

    if (type === 'signup' && password !== confirmPassword) {
      return false;
    }

    // * These validations apply to both the Login and Signup forms.

    if (!email || !password) {
      return false;
    }

    if (!re.test(email.toLowerCase())) {
      return false;
    }

    if (password.length < 6) {
      return false;
    }

    return true;
  }),
};

const effects = {
  // * The auth listener will fire any time that the authentication state changes.
  // * If there is no user, we flip the isAuthed boolean value, which forces a
  // * redirect back to the /login path.
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

  sendPasswordResetEmail: effect((dispatch, payload, getState, injections) => {
    const { auth } = injections;
    const { email } = getState().auth.form;
    return auth().sendPasswordResetEmail(email);
  }),

  logout: effect((dispatch, payload, getState, injections) => {
    const { auth } = injections;
    return auth().signOut();
  }),
};

export default {
  ...state,
  ...actions,
  ...selectors,
  ...effects,
};
