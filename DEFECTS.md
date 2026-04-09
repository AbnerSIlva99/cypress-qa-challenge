# Defects Report

## 2. Registration fails even with valid data due to reCAPTCHA requirement

### Steps to Reproduce:

1. Navigate to https://demoqa.com/register
2. Fill all required fields with valid data:

   * First Name
   * Last Name
   * Username
   * Password (meeting all requirements)
3. Click on "Register"

### Expected Result:

The user should be successfully registered when all required fields are filled with valid data.

### Actual Result:

An error message is displayed:
**"Please verify reCaptcha to register!"**
The registration is blocked even though all form fields are valid.

### Severity:

High

### Priority:

High

### Impact:

This issue prevents users from completing the registration process, directly impacting usability and blocking access to the system.

### Evidence:

![Registration Error](./screenshots/registration-error.png)

### Notes:

The system enforces reCAPTCHA validation but does not provide proper guidance or fallback, which may cause confusion for users and block valid registrations.
