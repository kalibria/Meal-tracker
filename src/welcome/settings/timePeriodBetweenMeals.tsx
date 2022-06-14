import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useContext } from 'react';
import { MyContext } from '../../context/context';

export default function TimePeriodBetweenMeals() {
  const { hours, minutes } = useContext(MyContext);
  console.log('minutes', minutes);
  const optionHour = hours.map((hour) => (
    <option key={hour} value={hour}>
      {hour}
    </option>
  ));
  const optionMinute = minutes.map((min) => (
    <option key={min} value={min}>
      {min}
    </option>
  ));

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor='grouped-native-select'>Hours</InputLabel>
        <Select
          native
          defaultValue=''
          id='grouped-native-select'
          label='Grouping'
        >
          <option aria-label='None' value='' />
          {optionHour}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor='grouped-native-select2'>Minutes</InputLabel>
        <Select
          native
          defaultValue=''
          id='grouped-native-select2'
          label='Grouping'
        >
          <option aria-label='None' value='' />
          {optionMinute}
        </Select>
      </FormControl>
    </div>
  );
}
