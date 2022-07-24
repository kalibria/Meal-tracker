Feature: Settings
  Scenario: Settings button should be visible in the application
    Given I never used the application before
    When I visit the application
    Then I see Settings button
