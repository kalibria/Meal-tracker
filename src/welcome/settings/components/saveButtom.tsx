import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import style from '../../welcom.module.css';

export default function SaveButton() {
  return (
    <Stack direction='row' spacing={2} className={style.saveButton}>
      <Button variant='outlined'>Save</Button>
    </Stack>
  );
}
