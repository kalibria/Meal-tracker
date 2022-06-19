import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import style from '../../welcom.module.css';

export default function SaveButton() {
  const handleSubmit = () => {
    console.log('btn');
  };
  return (
    <Stack direction='row' spacing={2} className={style.saveButton}>
      <Button variant='outlined' onClick={handleSubmit}>
        Save
      </Button>
    </Stack>
  );
}
