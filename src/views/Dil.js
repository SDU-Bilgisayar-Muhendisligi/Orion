import React, { useState } from 'react';
import { useEffect } from 'react';
import { useTranslation } from "react-i18next"

function Dil() {
  const [selectedLanguage, setSelectedLanguage] = useState('tr');
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage]);

  function handleLanguageChange(event) {
    setSelectedLanguage(event.target.value);
  }

  return (
    <div className="flex items-center space-x-2">
      <h1>{t("hello")}</h1>
      <label>
        <input
          type="radio"
          value="tr"
          checked={selectedLanguage === 'tr'}
          onChange={handleLanguageChange}
          className="mr-1"
        />
        {t("turkish")}
      </label>
      <label>
        <input
          type="radio"
          value="en"
          checked={selectedLanguage === 'en'}
          onChange={handleLanguageChange}
          className="mr-1"
        />
        {t("english")}
      </label>
      <div style={{ width: '10px' }}></div> {/* Mesafe eklenen kısım */}
    </div>
  );
}

function MainComponent() {
  const [selectedLanguage, setSelectedLanguage] = useState('turkish');

  function handleLanguageChange(language) {
    setSelectedLanguage(language);
  }

  return (
    <div>
      <h1>{selectedLanguage === 'turkish' ? 'Merhaba' : 'Hello'}</h1>
      <Dil onLanguageChange={handleLanguageChange} />
    </div>
  );
}

export default Dil;
