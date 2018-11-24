import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import { useAction, useStore } from 'easy-peasy';
import AuthLayout from '../layouts/AuthLayout';
import { Input, Button } from '../components/common';

function Login() {
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const { email } = useStore(state => state.auth.form);
  const { isValid } = useStore(state => state.auth);
  const authActions = useAction(dispatch => dispatch.auth);

  useEffect(() => {
    authActions.setFormType('reset-password');
  }, []);

  async function handleResetPassword(e) {
    e.preventDefault();
    setPending(true);
    try {
      await authActions.sendPasswordResetEmail();
      setShowSuccessMessage(true);
    } catch (error) {
      setError(error);
    } finally {
      setPending(false);
    }
  }

  return (
    <AuthLayout>
      <h3>Reset Password</h3>
      <form onSubmit={handleResetPassword} className="auth-form">
        <Input
          type="text"
          value={email}
          onChange={e => authActions.setEmail(e.target.value)}
          placeholder="email"
        />

        <Button
          type="submit"
          onClick={handleResetPassword}
          disabled={!isValid || pending}
          loading={pending}
        >
          Send reset link
        </Button>
      </form>
      <Link to="/login">Back to Login</Link>

      {showSuccessMessage && (
        <div>
          An email was sent to {email} with a link to reset your password.
        </div>
      )}
      {error && (
        <div style={{ color: 'tomato', margin: '10px' }}>{error.message}</div>
      )}
    </AuthLayout>
  );
}

export default Login;
