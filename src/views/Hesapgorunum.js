import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

function Hesapgorunum() {
  const [userInfo, setUserInfo] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSubmit} className="w-1/2 p-4">
        <label className="block mb-2 font-bold">{t("user-name")} </label>
        <input
          type="text"
          name="username"
          onChange={(event) =>
            setUserInfo({ ...userInfo, username: event.target.value })
          }
          className="w-full p-2 mb-4 border text-black"
        />

        <label className="block mb-2 font-bold">E-mail</label>
        <input
          type="email"
          name="email"
          onChange={(event) =>
            setUserInfo({ ...userInfo, email: event.target.value })
          }
          className="w-full p-2 mb-4 border text-black"
        />

        <label className="block mb-2 font-bold">{t("date-of-birth")}</label>
        <input
          type="date"
          name="dob"
          onChange={(event) =>
            setUserInfo({ ...userInfo, dob: event.target.value })
          }
          className="w-full p-2 mb-4 border text-black"
        />

        <label className="block mb-2 font-bold">{t("country-or-region")}</label>
        <input
          type="text"
          name="country"
          onChange={(event) =>
            setUserInfo({ ...userInfo, country: event.target.value })
          }
          className="w-full p-2 mb-4 border text-black"
        />

        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          {t("save")}
        </button>
      </form>

      {submitted && (
        <div className="max-w-sm mx-auto mt-4 p-8 border border-gray-400 rounded">
          <p className="mb-2">
            <span className="font-bold">{t("user-name")}:</span> {userInfo.username}
          </p>
          <p className="mb-2">
            <span className="font-bold">E-mail:</span> {userInfo.email}
          </p>
          <p className="mb-2">
            <span className="font-bold">{t("date-of-birth")}:</span> {userInfo.dob}
          </p>
          <p className="mb-2">
            <span className="font-bold">{t("country-or-region")}:</span> {userInfo.country}
          </p>
        </div>
      )}
    </div>
  );
}

export default Hesapgorunum;