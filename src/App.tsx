import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import { FirstRouteEl } from './routeElements/firstRouteEl';
import { SecondRuteEl } from './routeElements/secondRouteEl';
import { WindowWithButton } from './buttonsWindow/WindowWithButton';

import { SettingsList } from './settings/components/settingsList';
import { ListOfMeals } from './list-of-meals/ListOfMeals';
import { KnownRoutes } from './enumsForApp';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={KnownRoutes.START_PAGE} element={<FirstRouteEl />} />
          <Route path={KnownRoutes.WELCOME} element={<SecondRuteEl />} />
          <Route
            path={KnownRoutes.PLANE_MEALS}
            element={<WindowWithButton />}
          />
          <Route path={KnownRoutes.SETTINGS} element={<SettingsList />} />

          <Route path={KnownRoutes.MEAL_LIST} element={<ListOfMeals />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
