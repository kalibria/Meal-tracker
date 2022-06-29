import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import style from '../../welcom.module.css';
import { ValidationMessage } from './validationMessage';

export interface Props {
  numberMeals: string;
  setNumberMeals: React.Dispatch<React.SetStateAction<string>>;
  numberCheck: boolean;
  setNumberCheck: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NumberOfMealsPerDay({
  numberMeals,
  setNumberMeals,
  numberCheck,
  setNumberCheck,
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
      <ValidationMessage
        numberMeals={numberMeals}
        numberCheck={numberCheck}
        setNumberCheck={setNumberCheck}
      />
    </>
  );
}
