// import * as React from 'react';
//
// import { useNavigate } from 'react-router-dom';
// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
// import style from './settings.module.css';
// import { useDispatch, batch, useSelector } from 'react-redux';
//
// import {
//   setNumberOfMealsPerDay,
//   setNumberOfMinutesToFirstMeal,
//   setTimeBetweenMeals,
// } from '../settingsSlice';
//
// import { myLocalStorage } from '../../utility/setLocalStorage';
// import { validation } from '../../utility/validation';
// import { selectSettings } from '../../redux/selectors';
// import { firstEntry } from '../../welcome/showWelcomeComponent';
// import { useEffect } from 'react';
//
// interface Props {
//   hourBetweenMeals: string;
//   minuteBetweenMeals: string;
//   numberMeals: string;
//   minuteToFirstMeal: string;
//   numberCheck: boolean;
// }
//
// export default function SaveButton({
//   hourBetweenMeals,
//   minuteBetweenMeals,
//   numberMeals,
//   minuteToFirstMeal,
//   numberCheck,
// }: Props) {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//
//   const goToWindowWithBtn = () => {
//     navigate('/button');
//   };
//   const isEmptyString = validation.isEmptyString(
//     hourBetweenMeals,
//     minuteBetweenMeals
//   );
//
//   const isDisabledButton = validation.isDisabledSaveButton(
//     isEmptyString,
//     numberCheck
//   );
//
//   const handleSubmit = () => {
//     batch(() => {
//       dispatch(
//         setTimeBetweenMeals({
//           hours: Number(hourBetweenMeals),
//           minutes: Number(minuteBetweenMeals),
//         })
//       );
//       dispatch(setNumberOfMealsPerDay(Number(numberMeals)));
//       dispatch(setNumberOfMinutesToFirstMeal(minuteToFirstMeal));
//     });
//     firstEntry.markAsUsed();
//     goToWindowWithBtn();
//   };
//   const settings = useSelector(selectSettings);
//
//   useEffect(() => {
//     myLocalStorage.saveSettings(settings);
//   });
//
//   return (
//     <Stack direction='row' spacing={2} className={style.saveButton}>
//       <Button
//         variant='outlined'
//         onClick={handleSubmit}
//         disabled={isDisabledButton}
//       >
//         Save
//       </Button>
//     </Stack>
//   );
// }

import * as React from 'react';

import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import style from './settings.module.css';
import { useDispatch, batch, useSelector } from 'react-redux';

import {
  setNumberOfMealsPerDay,
  setNumberOfMinutesToFirstMeal,
  setTimeBetweenMeals,
} from '../settingsSlice';

import { myLocalStorage } from '../../utility/LocalStorage';
import { validation } from '../../utility/validation';
import { selectSettings } from '../../redux/selectors';
import { firstEntry } from '../../welcome/showWelcomeComponent';
import { currentTime } from '../../utility/currentTime';
import { SaveButton } from './SaveButton';

interface Props {
  hourBetweenMeals: string;
  minuteBetweenMeals: string;
  numberMeals: string;
  minuteToFirstMeal: string;
  numberCheck: boolean;
}

export interface INewSettings {
  timeBetweenMeals: { id: number; time: number };
  numberOfMealsPerDay: { id: number; time: string };
  numberOfMinutesToFirstMeal: { id: number; time: string };
}
export function WrapperForSaveButton({
  hourBetweenMeals,
  minuteBetweenMeals,
  numberMeals,
  minuteToFirstMeal,
  numberCheck,
}: Props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToWindowWithBtn = () => {
    navigate('/button');
  };
  const isEmptyString = validation.isEmptyString(
    hourBetweenMeals,
    minuteBetweenMeals
  );

  const isDisabledButton = validation.isDisabledSaveButton(
    isEmptyString,
    numberCheck
  );
  const settings = useSelector(selectSettings);

  const handleSubmit = () => {
    const timeBetweenMeals = currentTime.setTimeBetweenMealsInMin(
      hourBetweenMeals,
      minuteBetweenMeals
    );

    const newSettings: INewSettings = {
      ...settings,
      timeBetweenMeals: {
        id: settings.timeBetweenMeals.id,
        time: timeBetweenMeals,
      },
      numberOfMealsPerDay: {
        id: settings.numberOfMealsPerDay.id,
        time: numberMeals,
      },
      numberOfMinutesToFirstMeal: {
        id: settings.numberOfMinutesToFirstMeal.id,
        time: minuteToFirstMeal,
      },
    };
    myLocalStorage.saveSettings(newSettings);
    const settingsFromDb = myLocalStorage.getSettings();

    if (!settingsFromDb) {
      return;
    } else {
      batch(() => {
        dispatch(setTimeBetweenMeals(settingsFromDb.timeBetweenMeals.time));
        dispatch(
          setNumberOfMealsPerDay(settingsFromDb.numberOfMealsPerDay.time)
        );
        dispatch(
          setNumberOfMinutesToFirstMeal(
            settingsFromDb.numberOfMinutesToFirstMeal.time
          )
        );
      });
    }

    firstEntry.markAsUsed();
    goToWindowWithBtn();
  };

  return (
    <SaveButton
      handleSubmit={handleSubmit}
      isDisabledButton={isDisabledButton}
      classNames={['settings-save']}
    />
  );
}
