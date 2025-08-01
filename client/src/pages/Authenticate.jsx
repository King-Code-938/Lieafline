import { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';

function AuthForm() {
  const [mode, setMode] = useState('login');
  const [form, setForm] = useState({ username: '', email: '', inviteCode: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate an API call
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }}>
      <h2>{mode === 'login' ? 'Login' : 'Register'}</h2>
      <input type='email' placeholder='Email' value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
      {mode === 'register' && (
        <>
          <input type='text' placeholder='Username' value={form.username} onChange={e => setForm({ ...form, username: e.target.value })} />
          <input
            type='text'
            placeholder='Invite Code'
            value={form.inviteCode}
            onChange={e => setForm({ ...form, inviteCode: e.target.value })}
          />
        </>
      )}
      <input type='password' placeholder='Password' value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
      <button className='auth' type='submit' disabled={isLoading}>
        {isLoading ? 'Loading...' : mode}
      </button>
      <p
        onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
        style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}>
        {mode === 'login' ? 'Create an account' : 'Back to login'}
      </p>
      {mode === 'login' && (
        <p>
          Forgot your password? <Link to='/forgot-password'>Reset It</Link>
        </p>
      )}
    </form>
  );
}

export default AuthForm;
