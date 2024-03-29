import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { useSnackbar } from 'notistack';

import { FirstRouteEl } from './routeElements/firstRouteEl';
import { SecondRuteEl } from './routeElements/secondRouteEl';
import { WindowWithButton } from './buttonsWindow/WindowWithButton';

import { SettingsList } from './settings/components/settingsList';
import { ListOfMeals } from './list-of-meals/ListOfMeals';
import { KnownRoutes } from './enumsForApp';
import ModalWindow from './list-of-meals/modal/ModalWindow';
import { ModalWindowWithTime } from './list-of-meals/modal/ModalWindowWithTime';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeList,
  isSetNewMeal,
  setEatenMeal,
  setNewTimeAfterEditMeal,
  updateMealsAfterChangeMealTime,
} from './list-of-meals/mealsSlice';
import {
  selectCopyMealsList,
  selectEditMealOrderNumber,
  selectHourAfterEdit,
  selectIsSetNewMealTime,
  selectMealsList,
  selectMinutesAfterEdit,
  selectNewTime,
} from './redux/selectors';
import { myLocalStorage } from './utility/LocalStorage';
import { currentTime } from './utility/currentTime';
import { validationMealTime } from './utility/validationMealTime';

function App() {
  const dispatch = useDispatch();
  const newHours = useSelector(selectHourAfterEdit);
  const newMinutes = useSelector(selectMinutesAfterEdit);
  const listMealReduxSelector = useSelector(selectMealsList);
  const copyMealsRedux = useSelector(selectCopyMealsList);
  const newTimeBl = useSelector(selectNewTime);
  const editMealOrderNumber = useSelector(selectEditMealOrderNumber);
  const isMealTimeCorrect = useSelector(selectIsSetNewMealTime);

  const [showModal, setShowModal] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const message = 'Next meal time must be after the last eaten meal’s time';

  const handleCloseBtn = () => {
    setShowModal(false);

    if (isMealTimeCorrect) {
      enqueueSnackbar(message, {
        variant: 'warning',
        autoHideDuration: 5000,
        preventDuplicate: true,
      });
    }

    const newTimeGreaterPrev = validationMealTime.isNewTimeGreaterPrev(
      listMealReduxSelector[editMealOrderNumber - 1].mealTime,
      copyMealsRedux[editMealOrderNumber - 1].mealTime
    );

    dispatch(changeList(newTimeGreaterPrev));

    const isSetNewMealTime = validationMealTime.isCurrMealLaterThanPrev(
      listMealReduxSelector,
      editMealOrderNumber,
      newTimeBl
    );

    dispatch(isSetNewMeal(isSetNewMealTime));

    if (isSetNewMealTime) {
      dispatch(
        setNewTimeAfterEditMeal({
          hour: newHours,
          minutes: newMinutes,
        })
      );
    }

    if (isSetNewMealTime) {
      dispatch(updateMealsAfterChangeMealTime());
    }

    const editMealBL = myLocalStorage.getMealListBL()[editMealOrderNumber - 1];

    const conditionForSetEatenMeal =
      editMealBL.mealTime <= currentTime.getCurrentTime() && isSetNewMealTime;

    if (conditionForSetEatenMeal) {
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
