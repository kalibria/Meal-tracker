import { timeManager } from './time.manager';

describe('TimeManager', () => {
  describe('latestMealTime', () => {
    const localStorageMock = {
      getItem: jest.fn().mockImplementation((key) => {
        if (key === 'settings') {
          return JSON.stringify({
            timeBetweenMeals: { id: 1, time: 120 },
            numberOfMealsPerDay: { id: 2, time: '6' },
            numberOfMinutesToFirstMeal: { id: 3, time: '20' },
          });
        }

        return null;
      }),
    };

    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
    });

    beforeEach(() => {
      jest.spyOn(localStorage, 'getItem').mockReturnValue(
        JSON.stringify({
          timeBetweenMeals: { id: 1, time: 120 },
          numberOfMealsPerDay: { id: 2, time: '6' },
          numberOfMinutesToFirstMeal: { id: 3, time: '20' },
        })
      );
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it('if last meal time after 21:00 extra meal time should be 23:20 by default', () => {
      jest.useFakeTimers();
      const mock2100 = 1662487200000;
      const mock2320 = 1662495600000;
      const mock2105 = 1662487500000;
      jest.setSystemTime(mock2105);

      jest.spyOn(timeManager, 'timeFromUIToBL').mockReturnValueOnce(mock2100);
      jest.spyOn(timeManager, 'timeFromUIToBL').mockReturnValueOnce(mock2320);

      const result = timeManager.latestMealTime(mock2105);

      expect(result).toBe(mock2320);
    });

    it('if last meal time 20:30 extra meal time should be 22:30', () => {
      jest.useFakeTimers();
      const mock2100 = 1662487200000;
      const mock2320 = 1662495600000;
      const mock2230 = 1662492600000;
      const mock2030 = 1662485400000;
      jest.setSystemTime(mock2030);

      jest.spyOn(timeManager, 'timeFromUIToBL').mockReturnValueOnce(mock2100);
      jest.spyOn(timeManager, 'timeFromUIToBL').mockReturnValueOnce(mock2320);

      const result = timeManager.latestMealTime(mock2030);

      expect(result).toBe(mock2230);
    });
  });
});
