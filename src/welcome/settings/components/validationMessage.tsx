import React from 'react';
import { Error } from './error';

interface Props {
  numberCheck: boolean;
}

export const ValidationMessage = ({ numberCheck }: Props) => {
  return <>{!numberCheck ? <Error /> : null}</>;
};
