Feature:  MatchinGengine functionality test

@smoke
    Scenario: TEST CASES 1:
    Given I am on MatchinGengine home page
    Then I Verify that home page is displayed successfully
    When I Expand 'Modules Icon' in the header section
    When I click on 'Repertoire Management Modules' from the meneu
    When I Scroll to the 'Additional Feature' section
    When I Click on 'Product Supported'
    Then I Verify 'Producted Supported' list is visible


