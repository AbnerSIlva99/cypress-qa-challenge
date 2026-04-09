# Summary Report

## Approach

The test suite was designed focusing on critical user flows of the application, prioritizing quality over quantity. Key areas such as form submission, input validation, alerts, and UI components were selected to ensure meaningful coverage.

## Design Decisions

Cypress was chosen as the automation framework due to its fast execution, ease of setup, and real-time feedback capabilities.

A simplified Page Object Model (POM) approach was implemented to keep the code clean, readable, and maintainable without unnecessary abstraction.

A BasePage was created with a minimal shared responsibility (navigation), while individual page objects encapsulate only the essential actions for their respective features:

* FormsPage: handles form interactions and validations
* InputsPage: covers text input flows and validations
* AlertsPage: manages alert, confirm, and prompt interactions

This approach avoids overengineering while maintaining scalability and clarity.

## Trade-offs

Due to time constraints, not all pages and edge cases were automated. Instead, focus was placed on high-impact scenarios and representative components that reflect real user behavior.

## Challenges

Some elements required careful selector strategies to avoid flaky tests. Additionally, CAPTCHA and reCAPTCHA validations cannot be reliably automated and required alternative validation approaches.

## Observations

During testing, several functional and usability issues were identified, including:

* CAPTCHA validation failure preventing form submission
* Mandatory reCAPTCHA blocking valid user registration
* Non-interactive UI elements (tabs and radio buttons)
* Limited and inconsistent dropdown data (state and city)
* Slider component without functional impact

These issues indicate gaps in validation, usability, and component implementation.

## Results

* Total tests: 9
* Passed: 9
* Failed: 0

## Conclusion

The automation suite successfully validates key user flows and highlights important defects. The project demonstrates strong automation skills, structured test design, and a solid QA mindset through critical analysis and defect identification.
