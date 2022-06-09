import React from 'react';
import './App.css';
import { WelcomeComponent } from './welcome/welcomeComponent';
import { firstEntry } from './welcome/showWelcomeComponent';

function App() {
  return firstEntry.wasUsed() ? (
    <div>Not first entry</div>
  ) : (
    <WelcomeComponent />
  );
}

export default App;
