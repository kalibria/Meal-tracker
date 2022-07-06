import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from '../App';
import { currentTime } from '../utility/currentTime';
import { firstEntry } from '../welcome/showWelcomeComponent';

describe('testing App component', () => {
  it('display Good morning buttonWindow', () => {
    jest.spyOn(currentTime, 'isMorning').mockReturnValue(true);
    jest.spyOn(firstEntry, 'wasUsed').mockReturnValue(true);

    render(<App />);

    // screen.debug();
    expect(screen.getByText('Good morning!!!')).toBeInTheDocument();
  });
  it('display Plan your meal buttonWindow', () => {
    jest.spyOn(currentTime, 'isMorning').mockReturnValue(false);
    jest.spyOn(firstEntry, 'wasUsed').mockReturnValue(true);

    render(<App />);

    screen.debug();
    expect(screen.getByText('Plan your meals')).toBeInTheDocument();
  });
  // it('display only meals', () => {
  //   jest.spyOn(currentTime, 'isMorning').mockReturnValue(false);
  //   jest.spyOn(firstEntry, 'wasUsed').mockReturnValue(true);
  //
  //   render(<App />);
  //
  //   // screen.debug();
  //   expect(screen.getByText('Meals')).toBeInTheDocument();
  // });
  it('display ListOfMeals after clicking goodMorning buttonWindow', () => {
    jest.spyOn(currentTime, 'isMorning').mockReturnValue(true);
    jest.spyOn(firstEntry, 'wasUsed').mockReturnValue(true);

    render(<App />);
    const goodMorningBtn = screen.getByText('Good morning!!!');
    fireEvent.click(goodMorningBtn);
    // screen.debug();
    expect(screen.getByText('Meals')).toBeInTheDocument();
  });
  it('goodMorning buttonWindow should not display after clicking goodMorning buttonWindow', () => {
    jest.spyOn(currentTime, 'isMorning').mockReturnValue(true);
    jest.spyOn(firstEntry, 'wasUsed').mockReturnValue(true);

    render(<App />);
    const goodMorningBtn = screen.getByText('Good morning!!!');
    fireEvent.click(goodMorningBtn);
    screen.debug();
    expect(screen.queryByText('Good morning!!!')).not.toBeInTheDocument();
  });
});
