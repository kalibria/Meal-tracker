import { IMealBL } from './mealsManager';
import { MealMapper } from './meal.mapper';

describe('Meal Mapper', () => {
  describe('isEatButtonDisabled', () => {
    const exampleMeals: IMealBL[] = [
      {
        number: 1,
        mealTime: 1660049820000,
        eaten: false,
        edit: false,
        delete: false,
      },
      {
        number: 2,
        mealTime: 1660057920000,
        eaten: false,
        edit: false,
        delete: false,
      },
      {
        number: 3,
        mealTime: 1660066020000,
        eaten: false,
        edit: false,
        delete: false,
      },
      {
        number: 4,
        mealTime: 1660074120000,
        eaten: false,
        edit: false,
        delete: false,
      },
      {
        number: 5,
        mealTime: 1659995820000,
        eaten: false,
        edit: false,
        delete: false,
      },
    ];

    it('should make Eat btn on the first meal enabled if no other meal is eaten', () => {
      const mockMeals = [...exampleMeals];
      const firstEatBtnDisabled = MealMapper.isEatButtonDisabled(
        mockMeals[0],
        mockMeals
      );

      const secondEatBtnDisabled = MealMapper.isEatButtonDisabled(
        mockMeals[1],
        mockMeals
      );

      const lastMealEatBtnDisabled = MealMapper.isEatButtonDisabled(
        mockMeals.at(-1)!,
        mockMeals
      );

      expect(firstEatBtnDisabled).toBe(false);
      expect(secondEatBtnDisabled).toBe(true);
      expect(lastMealEatBtnDisabled).toBe(true);
    });

    it('should make Eat btn on the second meal enabled if the first meal was eaten', () => {
      const mockMeals = [...exampleMeals];
      mockMeals[0].eaten = true;

      const firstEatBtnDisabled = MealMapper.isEatButtonDisabled(
        mockMeals[0],
        mockMeals
      );
      const secondEatBtnDisabled = MealMapper.isEatButtonDisabled(
        mockMeals[1],
        mockMeals
      );

      expect(firstEatBtnDisabled).toBe(true);
      expect(secondEatBtnDisabled).toBe(false);
    });

    it('should make Eat btn on the last meal disabled if it is eaten', () => {
      const mockMeals = [...exampleMeals].reduce((acc: IMealBL[], meal) => {
        meal.eaten = true;

        return acc;
      }, []);

      const lastMeal = mockMeals.at(-1);

      if (lastMeal) {
        const lastEatBtnDisabled = MealMapper.isEatButtonDisabled(
          lastMeal,
          mockMeals
        );

        expect(lastEatBtnDisabled).toBe(true);
      }
    });
  });
});
