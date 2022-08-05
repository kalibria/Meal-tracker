# Meal Tracker

## E2E tests
E2E tests automate routine checks for the most frequent and core scenarios of the app.

Tests are written in Gherkin that is integrated with Cypress to implement step definitions.

The following table specifies the core UI elements and their selectors:

| Page      | UI element                     | Selector                                      |
|-----------|--------------------------------|-----------------------------------------------|
| Welcome   | Settings button                | .settings-open                                |
|           | Plan your meals, plan your day | .meals-plan                                   |
|           |                                |                                               |
| Settings  | input - number of meals        | #setting-num-meals                            |
|           | input - interval b/w meals hrs | #setting-interval-meals-hrs                   |
|           | input - interval b/w meals min | #setting-interval-meals-min                   |
|           | input - interval to first meal | #setting-interval-breakfast                   |
|           | Save settings                  | .settings-save                                |
|           |                                |                                               |
| Meal list | Meal row                       | .meal-{id}, where id <br/>is meal from 1 to X |
|           | Meal time                      | .meal-{id} .time                              |
|           | Eat button                     | .meal-{id} .eat                               |
|           | Edit button                    | .meal-{id} .edit                              |
|           | Delete button                  | .meal-{id} .delete                            |
|           | End the day                    | .meals-end-day                                |

