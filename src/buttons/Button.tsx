import React from 'react';
import cx from 'classnames';

export interface IButton {
  text?: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  dataTest?: string;
  classNames?: string[];
  children?: React.ReactNode;
  disabled?: boolean;
}

export const Button = ({
  text,
  handleClick,
  dataTest,
  children,
  classNames,
  disabled,
}: IButton) => {
  return (
    <button
      onClick={handleClick}
      data-testid={dataTest}
      className={cx(classNames)}
      disabled={disabled}
    >
      {text}
      {children}
    </button>
  );
};
