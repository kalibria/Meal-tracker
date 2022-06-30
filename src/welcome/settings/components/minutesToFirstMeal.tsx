import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { selectMinutesFromWakingUp } from '../../../redux/selectors';

import { useSelector } from 'react-redux';

interface Props {
  minute: string;
  setMinute: React.Dispatch<string>;
}

export function MinutesToFirstMeal({ minute, setMinute }: Props) {
  const minutes = useSelector(selectMinutesFromWakingUp);
  const menuItemMinuteFromWakingUp = minutes.map((min) => (
    <MenuItem key={min} value={min}>
      {min}
    </MenuItem>
  ));

  const handleChangeMinutes = (event: SelectChangeEvent) => {
    setMinute(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
        <InputLabel id='demo-select-small'>Minutes</InputLabel>
        <Select
          labelId='demo-select-small'
          id='demo-select-small'
          value={minute}
          label='Minutes'
          onChange={handleChangeMinutes}
        >
          {menuItemMinuteFromWakingUp}
        </Select>
      </FormControl>
    </div>
  );
}
