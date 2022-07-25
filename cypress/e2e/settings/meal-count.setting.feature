Feature: Settings on initial app usage
  Background:
    Given I never used the application before

  Scenario: Settings button should be visible in the application
    When I visit the application
    Then I see Settings button on front page

#  Scenario: Allowed number of meals
#    When I visit the application
#    And I go to app settings
#    And I set number of meals to 4
#    Then I do not see any error
#    And I am able to save settings
#
#  Scenario: Allowed number of meals
#    When I visit the application
#    And I go to app settings
#    And I set number of meals to 2
#    Then I see error saying "Minimum number is 3 maximum 24"
#    And I am not able to save settings
