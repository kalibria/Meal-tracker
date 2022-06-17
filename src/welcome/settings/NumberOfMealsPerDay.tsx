import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { numberOfMealsPErDay } from '../../redux/selectors';
import { ChangeEventHandler } from 'react';
import { InputProps as StandardInputProps } from '@mui/material/Input/Input';

export default function NumberOfMealsPerDay() {
  const [numberMeals, setNumberMeals] = React.useState(
    numberOfMealsPErDay.toString()
  );
  const handleChangeNumberOfMeals = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNumberMeals(event.target.value);
  };

  return (
    <Box
      component='form'
      sx={{
        '& > :not(style)': { m: 1, width: 120 },
      }}
      noValidate
      autoComplete='off'
    >
      <TextField
        type={'number'}
        id='outlined-basic'
        variant='outlined'
        value={numberMeals}
        onChange={handleChangeNumberOfMeals}
      />
    </Box>
  );
}
