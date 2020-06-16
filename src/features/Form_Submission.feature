Feature: Form Submission
    In order to review and submit the application form after filling up all mandatory fields in all form sections
    As an Applicant Tan
    Tan should be able to review and then submit his My Grant Application.

  Background:
    Given Tan has login at the portal
      | nric | name | uen | role | 
      | S1234567A | Tan Ah Kow | BDPQEDEMO | Acceptor | 
    And he has selected the sector, development and functional area for the new grants
      | sector | development | functional |
      | IT | International Expansion |  Market Readiness Assistance |
    And he has filled in the first 2 sections
       | name | job_title | contact_no | email | alternate_email | 
       | Tan Ah Kow | Manager | 98765432 | tan@hotmail.com | tan@gmail.com |
    And he has filled in the proposal form
      | project_title | start_date | end_date | project_description | activity | target_market | 
      | Participate in F1 formula | 20 Jun 2020 | 02 Sep 2020 | auto racing activity | Market Entry | Singapore |
    And he has filled in the business impact form
      | FY_endDate | overseas_sales | overseas_investments | rationale | non_tangible_benefits| 
       | 30 Jun 2020 | 23000,25000,24000,30000 | 23000,23000,23000,23000 | to increase revenue | publicity |
    And he has provided detail of the cost
      | category | rental_duration_months | rental_cost | 
      | office rental | 2 | 190000 |

  @us3ac1
  Scenario: Clicking on the Review should bring the Applicant to a read-only summary page.
    In order to see a summary of the review before submission
    As an Applicant Tan
    Tan should be taken to a read-only summary page upon clicking the Review’ button in the ‘Declare and Review’ section
    When he has filled in the declaration form
    And he click on the Review button
    Then he should able to see a read only summary page

  @us3ac2
  Scenario: A validation error should trigger for missing mandatory input and the form should redirect to the missing input sections.
    In order to ensure all mandatory fields are filled in and guide user to the missing fields
    As an Applicant Tan
    Tan should be see a validation error trigger for any missing mandatory input and being redirect to the missing input sections
    When he did not fill in the mandatory fields for activity and target market in the proposal form
    And he has filled in the declaration form
    And he click on the Review button
    Then he should see validation error for the mandatory field at the proposal form
    And he should be redirected to the proposal page

  @us3ac3
  Scenario: The read-only summary page should contain all the details previously filled in each form section.
    In order to to review all the details filled in the form section in the summary 
    As an Applicant Tan
    Tan should be see a read-only summary page correctly contains all the details filled in previously
    When he has filled in the declaration form
    And he click on the Review button
    Then he should able to see a read only summary page correctly contains all the details filled in previously

  @us3ac4
  Scenario: A final ‘Consent and Acknowledgement’ checkbox at the bottom
    In order to have a confirmation on the read only summary 
    As an Applicant Tan
    Tan should be see a final consent and acknowledgement checkbox at the bottom of the read-only summary page
    When he has filled in the declaration form
    And he click on the Review button
    Then he should see a final consent and acknowledgement checkbox at the bottom
