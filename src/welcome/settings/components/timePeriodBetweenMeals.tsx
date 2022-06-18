import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { MyContext } from '../../../context/context';
import { useContext } from 'react';

export default function TimePeriodBetweenMeals() {
  const [hour, setHour] = React.useState('');
  const [minute, setMinute] = React.useState('');
  const { hours, minutes } = useContext(MyContext);

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
    setHour(event.target.value);
  };

  const handleChangeMinutes = (event: SelectChangeEvent) => {
    setMinute(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
        <InputLabel id='demo-select-small'>Hours</InputLabel>
        <Select
          labelId='demo-select-small'
          id='demo-select-small'
          value={hour}
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
          value={minute}
          label='Minutes'
          onChange={handleChangeMinutes}
        >
          {menuItemMinute}
        </Select>
      </FormControl>
    </div>
  );
}
