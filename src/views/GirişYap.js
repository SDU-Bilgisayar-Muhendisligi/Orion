import React, { useState, useEffect } from 'react';


function Login() {
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
      <h2 className="text-2xl font-bold mb-4">Giriş Yap</h2>
      <label>
        Kullanıcı Adı:
        <input type="text" value={username} onChange={event => setUsername(event.target.value)} />
      </label>
      <label>
        Şifre:
        <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
      </label>
      <button type="submit">Giriş Yap</button>
    </form>
  );
}

export default Login;