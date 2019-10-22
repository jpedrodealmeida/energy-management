import React from 'react';

import './App.css';
import MainPainel from './components/main-painel/MainPainel';
import UserProfile from './components/user-profile/UserProfile';
import Graphics from './components/graphics/Graphics';

function App() {
  return (
    <div className="App">
      <MainPainel />
      <UserProfile />
      <Graphics />
    </div>
  );
}

export default App;
