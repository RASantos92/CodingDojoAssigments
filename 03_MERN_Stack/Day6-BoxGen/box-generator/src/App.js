import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import BoxenContext from './contexts/BoxenContext';
import BoxWrapper from './components/BoxWrapper'
import FormWrapper from './components/FormWrapper'


// simply setting up a provider for the info that's passed. Calling this BoxContext.Provider.
function App() {
  const [boxen, setBoxen] = useState([]);
  const [color, setColor] = useState("");

  return (
    <BoxenContext.Provider value={{color, setColor, boxen, setBoxen}}>
      <FormWrapper />
      <BoxWrapper />

    </BoxenContext.Provider>
  );
}

export default App;




