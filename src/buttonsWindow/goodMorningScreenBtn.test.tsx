import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from '../App';
import { currentTime } from '../utility/currentTime';
import { firstEntry } from '../welcome/showWelcomeComponent';

describe('testing App component', () => {
  it('display Good morning buttonsWindow', () => {
    jest.spyOn(currentTime, 'isMorning').mockReturnValue(true);
    jest.spyOn(firstEntry, 'wasUsed').mockReturnValue(true);

    render(<App />);

    // screen.debug();
    expect(screen.getByText('Good morning!!!')).toBeInTheDocument();
  });
  it('display Plan your meal buttonsWindow', () => {
    jest.spyOn(currentTime, 'isMorning').mockReturnValue(false);
    jest.spyOn(firstEntry, 'wasUsed').mockReturnValue(true);

    render(<App />);

    // screen.debug();
    expect(screen.getByText('Plan your meals')).toBeInTheDocument();
  });
  it('display ListOfMeals after clicking goodMorning buttonsWindow', () => {
    jest.spyOn(currentTime, 'isMorning').mockReturnValue(true);
    jest.spyOn(firstEntry, 'wasUsed').mockReturnValue(true);

    render(<App />);
    const goodMorningBtn = screen.getByText('Good morning!!!');
    fireEvent.click(goodMorningBtn);
    // screen.debug();
    expect(screen.getByText('End the day')).toBeInTheDocument();
  });
  // it('goodMorning buttonsWindow should not display after clicking goodMorning buttonsWindow', () => {
  //   jest.spyOn(currentTime, 'isMorning').mockReturnValue(true);
  //   jest.spyOn(firstEntry, 'wasUsed').mockReturnValue(true);
  //
  //   render(<App />);
  //   const goodMorningBtn = screen.getByText('Good morning!!!');
  //   fireEvent.click(goodMorningBtn);
  //   screen.debug();
  //   expect(screen.queryByText('Good morning!!!')).not.toBeInTheDocument();
  // });
});
