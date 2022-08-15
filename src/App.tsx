import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import { FirstRouteEl } from './routeElements/firstRouteEl';
import { SecondRuteEl } from './routeElements/secondRouteEl';
import { WindowWithButton } from './buttonsWindow/WindowWithButton';

import { SettingsList } from './settings/components/settingsList';
import { ListOfMeals } from './list-of-meals/ListOfMeals';
import { KnownRoutes } from './enumsForApp';
import ModalWindow from './list-of-meals/madal/ModalWindow';
import { ModalWindowWithTime } from './list-of-meals/madal/ModalWindowWithTime';

function App() {
  const [showModal, setShowModal] = useState(false);

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

          <Route
            path={KnownRoutes.MEAL_LIST}
            element={<ListOfMeals setShowModal={setShowModal} />}
          />
        </Routes>
      </Router>
      <div id='modal'></div>
      {showModal && (
        <ModalWindow showModal={showModal} onClose={() => setShowModal(false)}>
          <ModalWindowWithTime />
        </ModalWindow>
      )}
    </>
  );
}

export default App;
