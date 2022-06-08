import React from 'react';
import './App.css';
import { WelcomeComponent } from './welcome/welcomeComponent';
import { FirstUsing } from './welcome/showWelcomeComponent';

const firstEntry = new FirstUsing();
function App() {
  return firstEntry.wasUsed() ? (
    <div>Not first entry</div>
  ) : (
    <WelcomeComponent />
  );
}

export default App;
