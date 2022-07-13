import React from 'react';
import {
  useNavigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';

import { ListOfMeals } from './list-of-meals/listOfMeals';
import { FirstRouteEl } from './routeElements/firstRouteEl';
import { SecondRuteEl } from './routeElements/secondRouteEl';
import { WindowWithButton } from './buttonsWindow/windowWithButton';
import { Button } from './buttonsWindow/button';
import classes from '../src/welcome/welcom.module.css';
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
