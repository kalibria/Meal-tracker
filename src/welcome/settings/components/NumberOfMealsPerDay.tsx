import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { numberOfMealsPerDay } from '../../../redux/selectors';
import { numberCheck } from '../numberCheck';
import { Error } from './error';
import style from '../../welcom.module.css';

interface Props {
  numberMeals: string;
  setNumberMeals: React.Dispatch<React.SetStateAction<string>>;
}

export default function NumberOfMealsPerDay({
  numberMeals,
  setNumberMeals,
}: Props) {
  const handleChangeNumberOfMeals = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNumberMeals(event.target.value);
  };

  return (
    <>
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
          size='small'
          variant='outlined'
          value={numberMeals}
          onChange={handleChangeNumberOfMeals}
          className={style.textField}
        />
      </Box>
      {!numberCheck(numberMeals) ? <Error /> : null}
    </>
  );
}
