import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function TimePeriodBetweenMeals() {
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor='grouped-native-select'>Hour</InputLabel>
        <Select
          native
          defaultValue=''
          id='grouped-native-select'
          label='Grouping'
        >
          <option aria-label='None' value='' />

          <option value={1}>Option 1</option>
          <option value={2}>Option 2</option>

          <option value={3}>Option 3</option>
          <option value={4}>Option 4</option>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor='grouped-select'>Grouping</InputLabel>
        <Select defaultValue='' id='grouped-select' label='Grouping'>
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <ListSubheader>Category 1</ListSubheader>
          <MenuItem value={1}>Option 1</MenuItem>
          <MenuItem value={2}>Option 2</MenuItem>
          <ListSubheader>Category 2</ListSubheader>
          <MenuItem value={3}>Option 3</MenuItem>
          <MenuItem value={4}>Option 4</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
