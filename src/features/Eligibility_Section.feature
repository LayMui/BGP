Feature: Eligibility Section
    In order to know the eligiblity for the business grant 
    As an Applicant Tan
    Tan should be able to answer a set of Yes/No Eligibility questions in the Eligibility page.

  Background:
    Given Tan is at the portal page

  @us1ac1
  Scenario Outline: There should be 4 questions
    In order to know the eligiblity for the business grant 
    As an Applicant Tan
    Tan should see 4 questions in the Eligibility page.

    The section should contain 4 questions:
    1)      Is the applicant registered in Singapore?
    2)      Is the applicant's group sales turnover less than or equal to S$100m or
    is the applicant's group employment size less than or equal to 200?
    3)      Does the applicant have at least 30% local equity?
    4)      Are all the following statements true for this project? *
    The applicant has not started work on this project
    The applicant has not made any payment to any supplier, vendor, or third party prior to applying for this grant
    The applicant has not signed any contractual agreement with any supplier, vendor, or third party prior to applying for this grant
    When he login with "<nric>", "<name>", "<uen>" and "<role>"
    And he selects new grant, sector "<sector>", development "<development>" and functional area "<functional>" to create the draft form
    When he proceed to enter the application form
    Then he should see 4 questions in the eligibility section

    Examples:
      | nric | name | uen | role | sector | development | functional |
      | S1234567A | Tan Ah Kow | BDPQEDEMO | Acceptor | IT | International Expansion | Market Readiness Assistance |

  @us1ac2
  Scenario Outline: Each question can be answered using Yes or No with a radio button
    In order to gather information from the applicant on the eligiblity for the business grant 
    As an Applicant Tan
    Tan should see that each questions in the Eligibility page can be answered by Yes or No
    When he login with "<nric>", "<name>", "<uen>" and "<role>"
    And he selects new grant, sector "<sector>", development "<development>" and functional area "<functional>" to create the draft form
    When he proceed to enter the application form
    Then he will see 4 set of Yes and No radio buttons for selection

    Examples:
      | nric | name | uen | role | sector | development | functional |
      | S1234567A | Tan Ah Kow | BDPQEDEMO | Acceptor | IT |  International Expansion | Market Readiness Assistance |

  @us1ac3
  Scenario Outline: Answering No for any of the questions should display a warning message.
    In order to inform applicant of answering No to the questions for the eligiblity to the business grant 
    As an Applicant Tan
    Tan should be able to answer No for any of the questions with a display warning message  ‘Visit Smart Advisor on the SME Portal for more information on other government assistance.
    When he login with "<nric>", "<name>", "<uen>" and "<role>"
    And he selects new grant, sector "<sector>", development "<development>" and functional area "<functional>" to create the draft form
    And he proceed to enter the application form
    And he select No for question "<question>"
    Then he should see a warning message

    Examples:
      | nric | name | uen | role | sector | development | functional | question |
      | S1234567A | Tan Ah Kow | BDPQEDEMO | Acceptor | IT | International Expansion | Market Readiness Assistance | 1 |

  @us1ac4
  Scenario Outline: Clicking the link in the warning message will launch a web url page
    In order to direct applicant to the FAQ for the No answer to the questions for the eligiblity to the business grant 
    As an Applicant Tan
    Tan should be able to launch a web url page from the warning message FAQ link
    When he login with "<nric>", "<name>", "<uen>" and "<role>"
    And he selects new grant, sector ""<sector>", development "<development>" and functional area "<functional>" to create the draft form
    And he proceed to enter the application form
    Then he should see 4 questions in the eligibility section
    When he select No for question "<question>"
    Then he should see a warning message with the FAQ link
    When he click on the FAQ link
    Then he should be redirected to the web url "<url>" in another window tab

    Examples:
      | nric | name | uen | role | sector | development | functional | question | url |
      | S1234567A | Tan Ah Kow | BDPQEDEMO | Acceptor | IT | International Expansion | Market Readiness Assistance | 1 | https://www.ifaq.gov.sg/BGP/apps/fcd_faqmain.aspx#FAQ_1111145 |

  @us1ac5
  Scenario Outline: Clicking ‘Save’ will Applicant’s eligibility inputs and refreshing the page should reload the saved values.
    In order to save the applicant's input for the eligiblity to the business grant 
    As an Applicant Tan
    Tan should be able to click save to save his inputs and see the saved values in the refresh page
    When he login with "<nric>", "<name>", "<uen>" and "<role>"
    And he selects new grant, sector "<sector>", development "<development>" and functional area "<functional>" to create the draft form
    And he proceed to enter the application form
    And he select Yes to all 4 questions and click Save to save all his inputs
    Then he should be able to save all the inputs
    When he refresh the eligibility page
    Then he should see the saved values in the refresh page

    Examples:
      | nric | name | uen | role | sector | development | functional |
      | S1234567A | Tan Ah Kow | BDPQEDEMO | Acceptor | IT | International Expansion |  Market Readiness Assistance |
