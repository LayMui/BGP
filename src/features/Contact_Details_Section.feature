Feature: Contact Details Section
    In order to send notification to the contact for application result
    As an Applicant Tan
    Tan should be able to input values for the Main Contact Person and Letter of Offeree in the Contact Details page.

  Background:
    Given Tan has login at the portal
      | nric | name | uen | role | 
      | S1234567A | Tan Ah Kow | BDPQEDEMO | Acceptor | 

    And he has selected the sector, development and functional area for the new grants
      | sector | development | functional |
      | IT | International Expansion |  Market Readiness Assistance |

    And he has filled in the Eligibility section

  @us2ac1
  Scenario: The page contains a ‘Main Contact Person’ subsection
    In order to input the contact details 
    As a applicant Tan
    Tan should see the page contains a ‘Main Contact Person’ subsection with the following
    inputs:
    ● Name
    ● Job Title
    ● Contact No 
    ● Email
    ● Alternate Contact Person’s Email
    ● Mailing Address
    When he click Next on the Eligibility section page
    Then he should go to the Contact Details page

  @us2ac2
  Scenario Outline: The Mailing Address input should be able to take in a valid postal code
    In order to mail the application result to the applicant's mailing address
    As a applicant Tan
    Tan should see that the Mailing Address input take in a valid postal code
    which auto-populates the ‘Blk/Hse No.’ and ‘Street details’ from an external API
    (One-map).
    When he click Next on the Eligibility section page
    And he enter the valid postal code "<postal_code>"
    Then he should see the system auto-populate blk with "<blk>" and street details "<street>"

    Examples:
      | postal_code | blk | street |
      | 670406 | 406 | FAJAR ROAD |

  @us2ac3
  Scenario Outline: There should be a checkbox ‘Same as registered address in Company Profile’
    In order to save the applicant from having to enter the same address as the registered address 
    As a applicant Tan
    Tan should see that there is alternate option of a checkbox ‘Same as registered address in
    Company Profile’ which will auto-populate Mailing Address details from the
    Applicant’s Company Profile.
    When he click Next on the Eligibility section page
    Then he should see a checkbox option same as registered address in company profile
    When he click on the checkbox option to indicate same as registered address in company profile
    Then he should see the mailing address auto-populate with postal code "<postal_code>" blk "<blk>" street "<street>" level "<level>" and unit "<unit>"

    Examples:
      | postal_code | blk | street | level | unit |
      | 453123 | 45 | CHOA CHU KANG CENTRAL | 03 | 19 |

  @us2ac4
  Scenario: The page should also contains a ‘Letter of Offer Addressee’ subsection
    In order to input the contact details
    As a applicant Tan
    Tan should see the page also contains a Letter of Offeree subsection with the 
    following inputs:
    ● Name
    ● Job Title 
    ● Email
    When he click Next on the Eligibility section page
    And he should see the Contact Details page also contains the Letter of Offeree subsection
   

  @us2ac5
  Scenario Outline: There should be an option ‘Same as main contact person’
    In order to input the contact details 
    As a applicant Tan
    Tan should see an option 'Same as main contact person' which will populate the subsection in AC 4 
    with details from the ‘Main Contact Person’ in AC 1.
    When he click Next on the Eligibility section page
    Then he should see an option same as main contact person
    When he enter the contact details name "<name>" job title "<job_title>" contact no "<contact_no>" email "<email>" alternate email "<alternate_email>"
    And he click the option same as main contact person
    Then he should see the Letter of Offeree subsection auto-populate with name "<name>" job title "<job_title>" and email "<email>"

    Examples:
      | name | job_title | contact_no | email | alternate_email |
      | Tan Ah Kow | Manager | 98765432 | tan@hotmail.com | tan@gmail.com |

  @us2ac6
  Scenario Outline: Clicking ‘Save’ will save contact details and refreshing the page should reload the saved values.
    In order to save the applicant's input for the contact details 
    As an Applicant Tan
    Tan should be able to click save to save his contact details inputs and see the saved values in the refresh page
    When he click Next on the Eligibility section page
    And he enter the contact details name "<name>" job title "<job_title>" contact no "<contact_no>" email "<email>" alternate email "<alternate_email>" 
    And he select the 2 checkbox options to populate
    And he click to save his contact details
    Then he should able to save his contact details
    When he refresh the contact detail page
    Then he should see the page refreshed with the saved values name "<name>" job title "<job_title>" contact no "<contact_no>" email "<email>" alternate email "<alternate_email>" postal code "<postal_code>" blk "<blk>" street "<street>" level "<level>" unit "<unit>"

    Examples:
      | name | job_title | contact_no | email | alternate_email | postal_code | blk | street | level | unit |
      | Tan Ah Kow | Manager | 98765432 | tan@hotmail.com | tan@gmail.com | 453123 | 45 | CHOA CHU KANG CENTRAL | 03 | 19 |

  @us2ac7
  Scenario Outline: The secondary email address should not be the same as the primary email address
    In order to have alternate email address that is different from the primary email 
    As a applicant Tan
    Tan should see an inline alert message when he enter the same primary email address in the alternative email address field
    When he click Next on the Eligibility section page
    And he enter the contact details name "<name>" job title "<job_title>" contact no "<contact_no>" and the same email "<email>" for both email and alternate email field
    Then he should see an alert message that the alternate email should be different from the primary email

    Examples:
      | name | job_title | contact_no | email | alternate_email |
      | Tan Ah Kow | Manager | 86432124 | tan@hotmail.com | tan@hotmail.com |
