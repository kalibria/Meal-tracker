import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import cx from 'classnames';

import style from './settings.module.css';

interface ISaveButtonProps {
  handleSubmit: (event: React.MouseEvent) => void;
  isDisabledButton: boolean;
  classNames?: string[];
}

export const SaveButton = ({
  handleSubmit,
  isDisabledButton,
  classNames,
}: ISaveButtonProps) => {
  return (
    <Stack direction='row' spacing={2} className={style.saveButton}>
      <Button
        variant='outlined'
        onClick={handleSubmit}
        disabled={isDisabledButton}
        className={cx(classNames)}
      >
        Save
      </Button>
    </Stack>
  );
};
