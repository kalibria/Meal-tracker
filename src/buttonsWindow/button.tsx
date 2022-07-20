import React from 'react';

interface IButton {
  text?: string;
  handleClick(): void;
  dataTest?: string;
  className?: string;
  children?: React.ReactNode;
}

export const Button = ({ text, handleClick, dataTest, children }: IButton) => {
  return (
    <button onClick={handleClick} data-testid={dataTest}>
      {text}
      {children}
    </button>
  );
};
