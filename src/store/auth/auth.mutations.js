export default {
  setAuthState: (state, payload) => ({ ...state, ...payload }),

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
