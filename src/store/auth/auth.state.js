const initialState = {
  isChecked: false,
  isAuthed: false,
  userData: null,
  // * the form data is shared between the Login and Signup components
  form: {
    type: '',
    email: '',
    password: '',
    confirmPassword: '',
  },
};

export default initialState;
