import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import './App.css';
import MainPainel from './components/main-painel/MainPainel';
import UserProfile from './components/user-profile/UserProfile';
import Graphics from './components/graphics/Graphics';

function App() {
  return (
    <div className="App">
      <Card>
        <CardContent>
          <div className="painel-structure">
            <MainPainel />
            <UserProfile />
          </div>
          <Graphics />
        </CardContent>
      </Card>
    </div>
   
  );
}

export default App;
