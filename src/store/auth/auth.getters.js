import { select } from 'easy-peasy';

var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default {
  isValid: select(state => {
    const { type, email, password, confirmPassword } = state.form;

    if (!email || !password) {
      return false;
    }

    if (!re.test(email.toLowerCase())) {
      return false;
    }

    if (password.length < 6) {
      return false;
    }

    if (type === 'signup' && !confirmPassword) {
      return false;
    }

    if (type === 'signup' && password !== confirmPassword) {
      return false;
    }

    return true;
  }),
};
