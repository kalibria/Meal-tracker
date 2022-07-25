import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { hours, minutes, time } from '../time';
interface Props {
  hourBetweenMeals: number;
  minuteBetweenMeals: number;
  setHourBetweenMeals: React.Dispatch<React.SetStateAction<number>>;
  setMinuteBetweenMeals: React.Dispatch<React.SetStateAction<number>>;
}

export default function TimePeriodBetweenMeals({
  hourBetweenMeals,
  setHourBetweenMeals,
  minuteBetweenMeals,
  setMinuteBetweenMeals,
}: Props) {
  const menuItemHour = hours.map((hour) => (
    <MenuItem key={hour} value={hour}>
      {hour}
    </MenuItem>
  ));

  const menuItemMinute = minutes.map((min) => (
    <MenuItem key={min} value={min}>
      {min}
    </MenuItem>
  ));

  const handleChangeHours = (event: SelectChangeEvent) => {
    setHourBetweenMeals(+event.target.value);
  };

  const handleChangeMinutes = (event: SelectChangeEvent) => {
    setMinuteBetweenMeals(+event.target.value);
  };

  console.log({ hourBetweenMeals });
  console.log({ minuteBetweenMeals });

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
        <InputLabel id='demo-select-small'>Hours</InputLabel>
        <Select
          labelId='demo-select-small'
          id='demo-select-small'
          value={hourBetweenMeals.toString()}
          label='Hours'
          onChange={handleChangeHours}
        >
          {menuItemHour}
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
        <InputLabel id='demo-select-small'>Minutes</InputLabel>
        <Select
          labelId='demo-select-small'
          id='demo-select-small'
          value={time.convertMinute(minuteBetweenMeals)}
          label='Minutes'
          onChange={handleChangeMinutes}
        >
          {menuItemMinute}
        </Select>
      </FormControl>
    </div>
  );
}
