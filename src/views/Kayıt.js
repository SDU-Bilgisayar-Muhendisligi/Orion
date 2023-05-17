import React, { useState } from 'react';
function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-4 p-8 border border-gray-300 rounded-md">
      <h2 className="text-2xl font-bold mb-4">Kayıt Ol</h2>
      <div className="mb-4">
        <label htmlFor="username" className="block font-medium text-gray-700">Kullanıcı Adı</label>
        <input
          type="text"
          id="username"
          name="username"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block font-medium text-gray-700">Mail</label>
        <input
          type="password"
          id="password"
          name="password"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="username" className="block font-medium text-gray-700">Şifre</label>
        <input
          type="text"
          id="username"
          name="username"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50">
        Kayıt Ol
      </button>
    </form>
  );
}

export default Register;
