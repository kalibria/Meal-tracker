import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import style from './settings.module.css';

interface IProps {
  handleSubmit: (event: React.MouseEvent) => void;
  isDisabledButton: boolean;
}

export const SaveButton = ({ handleSubmit, isDisabledButton }: IProps) => {
  return (
    <Stack direction='row' spacing={2} className={style.saveButton}>
      <Button
        variant='outlined'
        onClick={handleSubmit}
        disabled={isDisabledButton}
      >
        Save
      </Button>
    </Stack>
  );
};
