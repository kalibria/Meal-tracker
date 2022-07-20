import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import { ListOfMeals } from './list-of-meals/ListOfMeals';
import { FirstRouteEl } from './routeElements/firstRouteEl';
import { SecondRuteEl } from './routeElements/secondRouteEl';
import { WindowWithButton } from './buttonsWindow/WindowWithButton';

import { SettingsList } from './settings/components/settingsList';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<FirstRouteEl />} />
          <Route path='/secondEl' element={<SecondRuteEl />} />
          <Route path='/button' element={<WindowWithButton />} />
          <Route path='/settings' element={<SettingsList />} />

          <Route path='/mealList' element={<ListOfMeals />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
