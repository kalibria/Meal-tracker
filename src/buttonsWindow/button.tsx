import React from 'react';

interface IGoodMorningScreenBtn {
  text?: string;
  handleClick(): void;
  dataTest?: string;
  className?: string;
  children?: React.ReactNode;
}

export const Button = ({
  text,
  handleClick,
  dataTest,
  children,
}: IGoodMorningScreenBtn) => {
  return (
    <button onClick={handleClick} data-testid={dataTest}>
      {text}
      {children}
    </button>
  );
};
