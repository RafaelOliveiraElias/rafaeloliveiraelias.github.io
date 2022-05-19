
import React, { useState } from 'react';
import AppContext from './AppContext';

function Provider({ children }) {
  const [language, setLanguage] = useState('pt');
  const contextValue = {
    language, setLanguage
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;