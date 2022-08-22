import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { minutes, time } from '../../settings/time';
import {
  selectEditMealOrderNumber,
  selectMealsList,
} from '../../redux/selectors';
import { batch, useDispatch, useSelector } from 'react-redux';
import { IMealBL } from '../mealsManager';
import { timeManager } from '../../utility/time.manager';
import { setNewHourAfterEdit, setNewMinutesAfterEdit } from '../mealsSlice';
import { useEffect } from 'react';

export const ModalWindowWithTime = () => {
  const dispatch = useDispatch();

  const mealListSelector: IMealBL[] = useSelector(selectMealsList);
  const editMealNumberSelector = useSelector(selectEditMealOrderNumber);

  const editMealTimeMS = mealListSelector[editMealNumberSelector - 1].mealTime;

  const editMealTimeUI = timeManager.timeFromBLToUI(editMealTimeMS);
  const editMealHourUI = editMealTimeUI.slice(0, 2);
  const editMealMinutesUI = editMealTimeUI.slice(5, 7);

  const [mealHour, setMealHour] = React.useState(editMealHourUI);

  const [mealMinutes, setMealMinutes] = React.useState(editMealMinutesUI);

  useEffect(() => {
    batch(() => {
      dispatch(setNewMinutesAfterEdit(mealHour));
      dispatch(setNewMinutesAfterEdit(mealMinutes));
    });
  }, [mealHour, mealMinutes, dispatch]);

  const listOfHours = time.convertMinutes(time.prepareHoursForModalWindow());
  const listOfMinutes = minutes;

  const handleHoursChange = (event: SelectChangeEvent) => {
    setMealHour(event.target.value);
    dispatch(setNewHourAfterEdit(event.target.value));
  };
  const handleMinutesChange = (event: SelectChangeEvent) => {
    setMealMinutes(event.target.value);
    dispatch(setNewMinutesAfterEdit(event.target.value));
  };

  const menuHourItems = listOfHours.map((item) => {
    return (
      <MenuItem key={item} value={item}>
        {item}
      </MenuItem>
    );
  });
  const menuMinutesItems = listOfMinutes.map((item) => {
    return (
      <MenuItem key={item} value={item}>
        {item}
      </MenuItem>
    );
  });

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
        <InputLabel id='hours-select-small'>Hours</InputLabel>
        <Select
          labelId='hours-select-small'
          id='hours-select-small'
          value={mealHour}
          label='Hours'
          onChange={handleHoursChange}
        >
          <MenuItem value={mealHour}>
            <em>{mealHour}</em>
          </MenuItem>
          {menuHourItems}
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
        <InputLabel id='minutes-select-small'>Minutes</InputLabel>
        <Select
          labelId='minutes-select-small'
          id='minutes-select-small'
          value={mealMinutes}
          label='Minutes'
          onChange={handleMinutesChange}
        >
          <MenuItem value={mealMinutes}>
            <em>{mealMinutes}</em>
          </MenuItem>
          {menuMinutesItems}
        </Select>
      </FormControl>
    </div>
  );
};
