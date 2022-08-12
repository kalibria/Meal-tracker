import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { time } from '../settings/time';
import { timeManager } from '../utility/time.manager';
import { currentTime } from '../utility/currentTime';

export default function ModalWindowWithTime() {
  const [hour, setHour] = React.useState(
    currentTime.getCurrentHours().toString()
  );

  const listOfHours = time.convertMinutes(time.prepareHoursForModalWindow());

  const handleChange = (event: SelectChangeEvent) => {
    setHour(event.target.value);
  };

  const menuHourItems = listOfHours.map((item) => {
    return (
      <MenuItem key={item} value={item}>
        {item}
      </MenuItem>
    );
  });

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
      <InputLabel id='demo-select-small'>Hours</InputLabel>
      <Select
        labelId='demo-select-small'
        id='demo-select-small'
        value={hour}
        label='Hours'
        onChange={handleChange}
      >
        <MenuItem value={hour}>
          <em>{hour}</em>
        </MenuItem>
        {menuHourItems}
      </Select>
    </FormControl>
  );
}
