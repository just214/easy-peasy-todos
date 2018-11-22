import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import { useAction, useStore } from 'easy-peasy';
import AuthLayout from '../layouts/AuthLayout';

function Login() {
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(false);

  const { email, password } = useStore(state => state.auth.form);
  const { isValid } = useStore(state => state.auth);
  const actions = useAction(dispatch => ({
    setFormType: dispatch.auth.setFormType,
    loginWithEmail: dispatch.auth.loginWithEmail,
    setEmail: dispatch.auth.setEmail,
    setPassword: dispatch.auth.setPassword,
  }));

  useEffect(() => {
    actions.setFormType('login');
  }, []);

  async function handleLogin(e) {
    e.preventDefault();
    setPending(true);
    try {
      await actions.loginWithEmail();
      navigate('/');
    } catch (error) {
      setError(error);
    } finally {
      setPending(false);
    }
  }

  return (
    <AuthLayout>
      <h3>Login</h3>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={email}
          onChange={e => actions.setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          type="password"
          value={password}
          onChange={e => actions.setPassword(e.target.value)}
          placeholder="password"
        />

        {error && (
          <div style={{ color: 'tomato', margin: '10px' }}>{error.message}</div>
        )}

        {pending && <div style={{ margin: '10px' }}>{pending}</div>}

        <button
          type="submit"
          onClick={handleLogin}
          disabled={!isValid || pending}
        >
          Login
        </button>
      </form>
      <Link to="/signup">Signup</Link>
    </AuthLayout>
  );
}

export default Login;
