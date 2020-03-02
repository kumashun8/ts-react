import React, { useState } from 'react';
import Hello from './components/Hello';

const App = () => {
  const [name, setName] = useState('Peter');
  return (
    <div>
      <Hello message={`Hello, I am ${name}.`} />
    </div>
  );
};

export default App;
