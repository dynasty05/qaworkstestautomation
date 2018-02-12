Feature: Contact Us Page
  As an end user
  I want a contact us page
  So that I can find out more about QAWorks exciting services!!

  Scenario Outline: Valid Submission
    Given I am on the QAWorks Site
    Then I should be able to contact QAWorks with the following information "<name>" "<email>" "<subject>" "<message>"

    Examples:
      | name      | email      | subject   | message                |
      | j.Bloggs      | j.Bloggs@qaworks.com      | test automation   | please contact me I want to find out more   |


  Scenario Outline: Incomplete form submission
    Given I am on the QAWorks Site
    When I omit one of the following information on the form "<name>" "<email>" "<subject>" "<message>"
    And I submit the form
    Then I should see an error message

    Examples:
      | name      | email      | subject   | message           |
      |       | j.Bloggs@qaworks.com      | test automation   | please contact me I want to find out more   |
      | j.Bloggs      |       | test automation   | please contact me I want to find out more   |
#      | j.Bloggs      | j.Bloggs@qaworks.com      |    | please contact me I want to find out more   |
#      | j.Bloggs      | j.Bloggs@qaworks.com      | test automation   |    |


#  Scenario: Invalid Email Address
#    Given I am on the QAWorks Site
#    And I open Contact Us Page
#    When I enter an invalid email address
#    Then I should see an error message
#
#  Scenario: Email Address Too Long
#    Given I am on the QAWorks Site
#    And I open Contact Us Page
#    When I enter an email address over 254 characters
#    Then I should see an error message
#
#  Scenario: Subject Text Too Long
#    Given I am on the QAWorks Site
#    And I open Contact Us Page
#    When I enter an email address over 254 characters
#    Then I should see an error message
#
#  Scenario: Email QA Works
#      Given I am on the QAWorks Site
#      And I open Contact Us Page
#      When I click on the Email button
#      Then I should be able to compose an email to info@qaworks.com
##    Bug in mailto address
#
#
#  Scenario: Call QA Works
#    Given I am on the QAWorks Site
#    And I open Contact Us Page
#    When I click on Call Us button
#    Then I should see a confirmation dialog
#
#
#  Scenario: Verify QA Works Email Address
#    Given I am on the QAWorks Site
#    And I open Contact Us Page
#    Then the email address displayed should be correct
#
#  Scenario: Verify QA Works Phone Number
#    Given I am on the QAWorks Site
#    And I open Contact Us Page
#    Then the phone number displayed should be correct