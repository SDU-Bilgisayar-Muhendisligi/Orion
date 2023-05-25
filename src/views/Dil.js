import React, { useState } from 'react';

function Dil() {
  const [selectedLanguage, setSelectedLanguage] = useState('turkish');

  function handleLanguageChange(event) {
    setSelectedLanguage(event.target.value);
  }

  return (
    <div className="flex items-center space-x-2">
      <label>
        <input
          type="radio"
          value="turkish"
          checked={selectedLanguage === 'turkish'}
          onChange={handleLanguageChange}
          className="mr-1"
        />
        Türkçe
      </label>
      <label>
        <input
          type="radio"
          value="english"
          checked={selectedLanguage === 'english'}
          onChange={handleLanguageChange}
          className="mr-1"
        />
        İngilizce
      </label>
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

export default Dil