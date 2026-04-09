# Defects Report

## 1. CAPTCHA validation fails even with correct input

### Steps to Reproduce
1. Navigate to `https://toolsqa.com/selenium-training/#enroll-form`
2. Fill all required fields with valid data
3. Enter the CAPTCHA code displayed on the screen
4. Click the `SEND` button

### Expected Result
The form should be successfully submitted when a valid CAPTCHA is entered.

### Actual Result
An error message is displayed:
`Sorry! Unable to verify that you are human.`

### Severity
High

### Priority
High

### Impact
This issue blocks users from completing the registration process, directly affecting user experience and potential conversions.

### Evidence
![CAPTCHA Bug](./screenshots/captcha-error.png)

### Notes
The CAPTCHA validation appears to be unreliable or incorrectly implemented, preventing valid submissions.
