import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import { FirstRouteEl } from './routeElements/firstRouteEl';
import { SecondRuteEl } from './routeElements/secondRouteEl';
import { WindowWithButton } from './buttonsWindow/WindowWithButton';

import { SettingsList } from './settings/components/settingsList';
import { ListOfMeals } from './list-of-meals/ListOfMeals';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<FirstRouteEl />} />
          <Route path='/welcome' element={<SecondRuteEl />} />
          <Route path='/planYourMeals' element={<WindowWithButton />} />
          <Route path='/settings' element={<SettingsList />} />

          <Route path='/mealList' element={<ListOfMeals />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
