import React from 'react';

interface IGoodMorningScreenBtn {
  text: string;
  handleClick(): void;
  dataTest?: string;
}

export const Button = ({
  text,
  handleClick,
  dataTest,
}: IGoodMorningScreenBtn) => {
  return (
    <button onClick={handleClick} data-testid={dataTest}>
      {text}
    </button>
  );
};
