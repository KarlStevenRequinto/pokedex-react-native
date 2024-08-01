Feature: HomeScreen

  Scenario: Displaying a list of Pokemon
    Given I am on the Home screen
    When the list of Pokemon is loaded
    Then I should see 20 Pokemon items

  Scenario: Navigating to DetailScreen
    Given I am on the Home screen
    When I tap on a Pokemon item
    Then I should navigate to the Detail screen
