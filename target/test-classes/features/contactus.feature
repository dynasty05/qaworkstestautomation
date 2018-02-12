Feature: Contact Us Page
  As an end user
  I want a contact us page
  So that I can find out more about QAWorks exciting services!!

#  Scenario Outline: Valid Submission
#    Given I am on the QAWorks Site
#    Then I should be able to contact QAWorks with the following information "<name>" "<email>" "<subject>" "<message>"
#
#    Examples:
#      | name      | email      | subject   | message                |
#      | j.Bloggs      | j.Bloggs@qaworks.com      | test automation   | please contact me I want to find out more   |


  Scenario Outline: Incomplete form submission
    Given I am on the QAWorks Site
    When I omit one of the following information on the form "<name>" "<email>" "<subject>" "<message>"
    And I submit the form
    Then I should see an error message

    Examples:
      | name      | email      | subject   | message           |
      |       | j.Bloggs@qaworks.com      | test automation   | please contact me I want to find out more   |
#      | j.Bloggs      | ""      | test automation   | please contact me I want to find out more   |
#      | j.Bloggs      | j.Bloggs@qaworks.com      | ""   | please contact me I want to find out more   |
#      | j.Bloggs      | j.Bloggs@qaworks.com      | test automation   | ""   |

