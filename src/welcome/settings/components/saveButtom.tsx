import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import style from '../../welcom.module.css';

interface Props {
  hourBetweenMeals: string;
  minuteBetweenMeals: string;
  numberMeals: string;
  minuteToFirstMeal: string;
}

export default function SaveButton({
  hourBetweenMeals,
  minuteBetweenMeals,
  numberMeals,
  minuteToFirstMeal,
}: Props) {
  const handleSubmit = () => {
    console.log('props', typeof hourBetweenMeals);
  };
  return (
    <Stack direction='row' spacing={2} className={style.saveButton}>
      <Button variant='outlined' onClick={handleSubmit}>
        Save
      </Button>
    </Stack>
  );
}
