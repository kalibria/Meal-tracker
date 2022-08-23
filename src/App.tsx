import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import { FirstRouteEl } from './routeElements/firstRouteEl';
import { SecondRuteEl } from './routeElements/secondRouteEl';
import { WindowWithButton } from './buttonsWindow/WindowWithButton';

import { SettingsList } from './settings/components/settingsList';
import { ListOfMeals } from './list-of-meals/ListOfMeals';
import { KnownRoutes } from './enumsForApp';
import ModalWindow from './list-of-meals/modal/ModalWindow';
import { ModalWindowWithTime } from './list-of-meals/modal/ModalWindowWithTime';
import { batch, useDispatch, useSelector } from 'react-redux';
import {
  setEatenMeal,
  setNewTimeAfterEditMeal,
  updateMealsAfterChangeMealTime,
} from './list-of-meals/mealsSlice';
import {
  selectEditMealOrderNumber,
  selectHourAfterEdit,
  selectMealsList,
  selectMinutesAfterEdit,
} from './redux/selectors';
import { myLocalStorage } from './utility/LocalStorage';
import { currentTime } from './utility/currentTime';

function App() {
  const dispatch = useDispatch();
  const newHours = useSelector(selectHourAfterEdit);
  const newMinutes = useSelector(selectMinutesAfterEdit);
  const listMealReduxSelector = useSelector(selectMealsList);

  const editMealOrderNumber = useSelector(selectEditMealOrderNumber);

  console.log(
    'listMealReduxSelector[editMealOrderNumber - 1]',
    listMealReduxSelector[editMealOrderNumber - 1]
  );

  const [showModal, setShowModal] = useState(false);

  const handleCloseBtn = () => {
    setShowModal(false);

    dispatch(
      setNewTimeAfterEditMeal({
        hour: newHours,
        minutes: newMinutes,
      })
    );

    dispatch(updateMealsAfterChangeMealTime());

    const editMealBL = myLocalStorage.getMealListBL()[editMealOrderNumber - 1];
    console.log('mealTime', editMealBL.mealTime);
    console.log('currentTime', currentTime.getCurrentTime());

    if (editMealBL.mealTime <= currentTime.getCurrentTime()) {
      dispatch(setEatenMeal());
    }
  };

  myLocalStorage.setMealListBL(listMealReduxSelector);

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
        <ModalWindow showModal={showModal} onClose={handleCloseBtn}>
          <ModalWindowWithTime />
        </ModalWindow>
      )}
    </>
  );
}

export default App;
