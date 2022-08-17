import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { minutes, time } from '../../settings/time';
import { editMealOrderNumber, mealsList } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { IMealBL } from '../mealsManager';
import { timeManager } from '../../utility/time.manager';

export const ModalWindowWithTime = () => {
  const mealListSelector: IMealBL[] = useSelector(mealsList);
  const editMealNumberSelector = useSelector(editMealOrderNumber);

  const editMealTimeMS = mealListSelector[editMealNumberSelector - 1].mealTime;

  const editMealTimeUI = timeManager.timeFromBLToUI(editMealTimeMS);
  const editMealHourUI = editMealTimeUI.slice(0, 2);
  const editMealMinutesUI = editMealTimeUI.slice(5, 7);

  const [currentHour, setCurrentHour] = React.useState(editMealHourUI);

  const [currentMinutes, setCurrentMinutes] = React.useState(editMealMinutesUI);

  const listOfHours = time.convertMinutes(time.prepareHoursForModalWindow());
  const listOfMinutes = minutes;

  const handleHoursChange = (event: SelectChangeEvent) => {
    setCurrentHour(event.target.value);
  };
  const handleMinutesChange = (event: SelectChangeEvent) => {
    setCurrentMinutes(event.target.value);
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
          value={currentHour}
          label='Hours'
          onChange={handleHoursChange}
        >
          <MenuItem value={currentHour}>
            <em>{currentHour}</em>
          </MenuItem>
          {menuHourItems}
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
        <InputLabel id='minutes-select-small'>Minutes</InputLabel>
        <Select
          labelId='minutes-select-small'
          id='minutes-select-small'
          value={currentMinutes}
          label='Minutes'
          onChange={handleMinutesChange}
        >
          <MenuItem value={currentMinutes}>
            <em>{currentMinutes}</em>
          </MenuItem>
          {menuMinutesItems}
        </Select>
      </FormControl>
    </div>
  );
};
