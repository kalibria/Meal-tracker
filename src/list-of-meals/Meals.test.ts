import { MealsManagerBL, mealsManagerBL } from './Meals';
import { LocalStorage } from '../utility/LocalStorage';

describe('MealsManager', () => {
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

  describe('accumulateAllMealsTimes', () => {
    beforeEach(() => {
      jest.useFakeTimers();
      jest.setSystemTime(new Date('2022-07-29 09:00'));
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it('should output correct times of first three meals per day', () => {
      jest.spyOn(global.localStorage, 'getItem').mockReturnValue(
        JSON.stringify({
          timeBetweenMeals: { id: 1, time: 120 },
          numberOfMealsPerDay: { id: 2, time: '6' },
          numberOfMinutesToFirstMeal: { id: 3, time: '20' },
        })
      );

      const mockLS = new LocalStorage(false);
      const mockMealManager = new MealsManagerBL(mockLS);

      const [firstMealTime, secondMealTime, thirdMealTime] =
        mockMealManager.accumulateAllMealsTimes();

      expect(new Date(firstMealTime).toLocaleTimeString('ru-RU')).toContain(
        '09:00'
      );

      expect(new Date(secondMealTime).toLocaleTimeString('ru-RU')).toContain(
        '11:00'
      );

      expect(new Date(thirdMealTime).toLocaleTimeString('ru-RU')).toContain(
        '13:00'
      );
    });
  });
});
