import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';
import { currentTime } from './utility/currentTime';
import { firstEntry } from './welcome/showWelcomeComponent';

describe('testing App component', () => {
  it('display Good morning button', () => {
    jest.spyOn(currentTime, 'isMorning').mockReturnValue(true);
    jest.spyOn(firstEntry, 'wasUsed').mockReturnValue(true);

    render(<App />);

    // screen.debug();
    expect(screen.getByText('Good morning!!!')).toBeInTheDocument();
  });
  it('display ListOfMeals after clicking goodMorning button', () => {
    jest.spyOn(currentTime, 'isMorning').mockReturnValue(true);
    jest.spyOn(firstEntry, 'wasUsed').mockReturnValue(true);

    render(<App />);
    const goodMorningBtn = screen.getByText('Good morning!!!');
    fireEvent.click(goodMorningBtn);
    screen.debug();
    expect(screen.getByText('Meals')).toBeInTheDocument();
  });
});
