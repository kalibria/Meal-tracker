import React from 'react';
import { currentTime } from './currentTime';

afterEach(() => {
  jest.useRealTimers();
});

describe('testing getting time', () => {
  describe('testing isMorning method of currentTime class ', () => {
    it('should return false if hours more than 11', () => {
      const fakeTime = new Date('Jul 1 2022 11:01');
      jest.useFakeTimers().setSystemTime(fakeTime);

      const fakeHours = fakeTime.getHours();
      const isMorning = currentTime.isMorning(fakeHours);
      expect(isMorning).toBe(false);
    });
    it('should return true if hours less than 11', () => {
      const fakeTime = new Date('Jul 1 2022 10:59');
      jest.useFakeTimers().setSystemTime(fakeTime);

      const fakeHours = fakeTime.getHours();
      const isMorning = currentTime.isMorning(fakeHours);
      expect(isMorning).toBe(true);
    });
    it('should return false if hours equals 11', () => {
      const fakeTime = new Date('Jul 1 2022 11:00');
      jest.useFakeTimers().setSystemTime(fakeTime);

      const fakeHours = fakeTime.getHours();
      const isMorning = currentTime.isMorning(fakeHours);
      expect(isMorning).toBe(false);
    });
    it('should return true if hours equals 4', () => {
      const fakeTime = new Date('Jul 1 2022 04:00');
      jest.useFakeTimers().setSystemTime(fakeTime);

      const fakeHours = fakeTime.getHours();
      const isMorning = currentTime.isMorning(fakeHours);
      expect(isMorning).toBe(true);
    });
  });
});
