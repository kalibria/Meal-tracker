import { mealsManagerBL, MealsManagerBL } from './mealsManager';

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

  describe('Meal list', () => {
    it('should generate first meal at current time plus time before first meal (default is 20 min)', () => {
      const mockMealManager = new MealsManagerBL();

      const [firstMeal] = mockMealManager.generateMealListBL();

      expect(
        new Date(firstMeal.mealTime).toLocaleTimeString('ru-RU')
      ).toContain('09:20');
    });

    it('should place second meal 2h after first meal', () => {
      const mockMealManager = new MealsManagerBL();

      const [, secondMeal] = mockMealManager.generateMealListBL();

      expect(
        new Date(secondMeal.mealTime).toLocaleTimeString('ru-RU')
      ).toContain('11:20');
    });

    test('first meal should have order number 1', () => {
      const mockMealManager = new MealsManagerBL();

      const [firstMeal, ...otherMeals] = mockMealManager.generateMealListBL();
      const lastMeal = otherMeals.at(-1);

      expect(firstMeal.number).toBe(1);
      expect(lastMeal?.number).toBe(6);
    });
  });

  describe.only('updateMealTime', () => {
    const meals = [
      {
        number: 1,
        mealTime: 1660997505596, // 15:11 GMT+3
        eaten: false,
        edit: false,
        delete: false,
      },
      {
        number: 2,
        mealTime: 1661004705596, // 17:11 GMT+3
        eaten: false,
        edit: false,
        delete: false,
      },
      {
        number: 3,
        mealTime: 1661011905596, // 19:11 GMT+3
        eaten: false,
        edit: false,
        delete: false,
      },
      {
        number: 4,
        mealTime: 1661019105596,
        eaten: false,
        edit: false,
        delete: false,
      },
      {
        number: 5,
        mealTime: 1661026305596,
        eaten: false,
        edit: false,
        delete: false,
      },
      {
        number: 6,
        mealTime: 1661033505596,
        eaten: false,
        edit: false,
        delete: false,
      },
    ];

    describe('set meal 2 time to 17:12', () => {
      it('should set meal 3 time to 19:12 and meal 4 time to 21:12', () => {
        const copiedMeals = [...meals];

        const oldTime = copiedMeals[1].mealTime;

        copiedMeals[1].mealTime = oldTime + 60000;

        const updatedList = mealsManagerBL.updateMealTime(copiedMeals, 2);

        expect(
          new Date(updatedList[2].mealTime).toLocaleTimeString('ru-RU')
        ).toContain('19:12');

        expect(
          new Date(updatedList[3].mealTime).toLocaleTimeString('ru-RU')
        ).toContain('21:12');
      });
    });
  });
});
