# DEFECTS

## DEFECT-001: Practice Form accepts invalid email

- Title: Invalid email accepted on form submission
- Area: Forms
- Severity: Major
- Priority: High
- Justification: A primary flow accepts invalid data and impacts data integrity.

### Steps to Reproduce
1. Open `https://demoqa.com/automation-practice-form`
2. Fill required fields with valid data
3. Enter `invalid-email` in the email field
4. Click Submit

### Expected Result
The system should block submission and display a validation message.

### Actual Result
The form is submitted without validating email format.

### Evidence
Optional: attach screenshot/video/execution link.
