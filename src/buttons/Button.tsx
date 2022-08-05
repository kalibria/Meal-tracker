import React from 'react';
import cx from 'classnames';

export interface IButton {
  text?: string;
  handleClick(): void;
  dataTest?: string;
  classNames?: string[];
  children?: React.ReactNode;
}

export const Button = ({
  text,
  handleClick,
  dataTest,
  children,
  classNames,
}: IButton) => {
  return (
    <button
      onClick={handleClick}
      data-testid={dataTest}
      className={cx(classNames)}
    >
      {text}
      {children}
    </button>
  );
};
