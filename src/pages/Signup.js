import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import { useAction, useStore } from 'easy-peasy';
import AuthLayout from '../layouts/AuthLayout';
import { Input, Button } from '../components/common';

function Signup() {
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(false);

  const { email, password, confirmPassword } = useStore(
    state => state.auth.form,
  );
  const { isValid } = useStore(state => state.auth);

  const {
    setFormType,
    signupWithEmail,
    setEmail,
    setPassword,
    setConfirmPassword,
  } = useAction(dispatch => ({
    setFormType: dispatch.auth.setFormType,
    signupWithEmail: dispatch.auth.signupWithEmail,

    setEmail: dispatch.auth.setEmail,
    setPassword: dispatch.auth.setPassword,
    setConfirmPassword: dispatch.auth.setConfirmPassword,
  }));

  async function handleSignup(e) {
    e.preventDefault();
    setPending(true);
    try {
      await signupWithEmail();
      navigate('/');
    } catch (error) {
      setError(error);
    } finally {
      setPending(false);
    }
  }

  useEffect(() => {
    setFormType('signup');
  }, []);

  return (
    <AuthLayout>
      <h3>Signup</h3>
      <form onSubmit={handleSignup} className="auth-form">
        <Input
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="email"
        />
        <Input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="password"
        />

        <Input
          type="password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          placeholder="confirm password"
        />

        {pending && <div style={{ margin: '10px' }}>{pending}</div>}

        <Button
          onClick={handleSignup}
          disabled={!isValid || pending}
          loading={pending}
        >
          Signup
        </Button>
      </form>
      <Link to="/login">Login</Link>
      {error && (
        <div style={{ color: 'tomato', margin: '10px' }}>{error.message}</div>
      )}
    </AuthLayout>
  );
}

export default Signup;
