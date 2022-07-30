import { MealsManagerBL } from './Meals';
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

  describe('Meal list', () => {
    beforeEach(() => {
      jest.spyOn(localStorage, 'getItem').mockReturnValue(
        JSON.stringify({
          timeBetweenMeals: { id: 1, time: 120 },
          numberOfMealsPerDay: { id: 2, time: '6' },
          numberOfMinutesToFirstMeal: { id: 3, time: '20' },
        })
      );

      jest.useFakeTimers();
      jest.setSystemTime(new Date('2022-07-29 09:00'));
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it('should generate first meal at current time plus time before first meal (default is 20 min)', () => {
      const mockLS = new LocalStorage(false);
      const mockMealManager = new MealsManagerBL(mockLS);

      const [firstMeal] = mockMealManager.getMealListBL();

      expect(
        new Date(firstMeal.mealTime).toLocaleTimeString('ru-RU')
      ).toContain('09:20');
    });

    it('should place second meal 2h after first meal', () => {
      const mockLS = new LocalStorage(false);
      const mockMealManager = new MealsManagerBL(mockLS);

      const [, secondMeal] = mockMealManager.getMealListBL();

      expect(
        new Date(secondMeal.mealTime).toLocaleTimeString('ru-RU')
      ).toContain('11:20');
    });

    test('first meal should have order number 1', () => {
      const mockLS = new LocalStorage(false);
      const mockMealManager = new MealsManagerBL(mockLS);

      const [firstMeal, ...otherMeals] = mockMealManager.getMealListBL();
      const lastMeal = otherMeals.at(-1);

      expect(firstMeal.number).toBe(1);
      expect(lastMeal?.number).toBe(6);
    });
  });
});
