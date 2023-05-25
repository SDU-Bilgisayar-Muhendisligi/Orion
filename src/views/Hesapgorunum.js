import React, { useState } from "react";

function Hesapgorunum() {
  const [userInfo, setUserInfo] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSubmit} className="w-1/2 p-4">
        <label className="block mb-2 font-bold">Kullanıcı adı:</label>
        <input
          type="text"
          name="username"
          onChange={(event) =>
            setUserInfo({ ...userInfo, username: event.target.value })
          }
          className="w-full p-2 mb-4 border border-gray-400 rounded"
        />

        <label className="block mb-2 font-bold">E-posta:</label>
        <input
          type="email"
          name="email"
          onChange={(event) =>
            setUserInfo({ ...userInfo, email: event.target.value })
          }
          className="w-full p-2 mb-4 border border-gray-400 rounded"
        />

        <label className="block mb-2 font-bold">Doğum tarihi:</label>
        <input
          type="date"
          name="dob"
          onChange={(event) =>
            setUserInfo({ ...userInfo, dob: event.target.value })
          }
          className="w-full p-2 mb-4 border border-gray-400 rounded"
        />

        <label className="block mb-2 font-bold">Ülke veya bölge:</label>
        <input
          type="text"
          name="country"
          onChange={(event) =>
            setUserInfo({ ...userInfo, country: event.target.value })
          }
          className="w-full p-2 mb-4 border border-gray-400 rounded"
        />

        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Kaydet
        </button>
      </form>

      {submitted && (
        <div className="w-1/2 p-4 mt-4 border border-gray-400 rounded">
          <p className="mb-2">
            <span className="font-bold">Kullanıcı adı:</span> {userInfo.username}
          </p>
          <p className="mb-2">
            <span className="font-bold">E-posta:</span> {userInfo.email}
          </p>
          <p className="mb-2">
            <span className="font-bold">Doğum tarihi:</span> {userInfo.dob}
          </p>
          <p className="mb-2">
            <span className="font-bold">Ülke veya bölge:</span> {userInfo.country}
          </p>
        </div>
      )}
    </div>
  );
}

export default Hesapgorunum;