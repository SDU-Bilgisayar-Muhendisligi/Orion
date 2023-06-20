import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function Login() {
  const { t } = useTranslation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(data => {
        // handle successful login
      })
      .catch(error => {
        // handle login error
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4">{t("login")}</h2>
      <label>
      {t("user-name")}
        <input type="text" value={username} className='text-black' onChange={event => setUsername(event.target.value)} />
      </label>
      <label>
      {t("password")}
        <input type="password" value={password}  className='text-black' onChange={event => setPassword(event.target.value)} />
      </label>
      <button type="submit">{t("login")}</button>
    </form>
  );
}

export default Login;