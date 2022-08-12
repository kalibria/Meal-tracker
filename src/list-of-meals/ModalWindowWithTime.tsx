import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { minutes, time } from '../settings/time';
import { currentTime } from '../utility/currentTime';

export default function ModalWindowWithTime() {
  const [currentHour, setCurrentHour] = React.useState(
    currentTime.getCurrentHours().toString()
  );
  const [currentMinutes, setCurrentMinutes] = React.useState(
    currentTime.getCurrentMinutes().toString()
  );

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
}
