# ESMA Business Administrator Tools Plan

## Use Cases:
### Setting Termination Dates:
- Implement functionality to allow administrators to submit requests for termination dates of specific instruments.
- Termination dates must comply with validation rules, ensuring no conflicts with active instruments.

### Changing RCA_MIC:
- Develop tools for submitting requests to change RCA_MIC assignments for instruments.
- Ensure validation checks prevent duplicate or incorrect RCA_MIC assignment.

## User Interface Elements:
### Design Requirements:
- Create forms for submitting termination dates and RCA_MIC changes.
- Provide dropdown menus for instrument selection and validation feedback.

### Navigation:
- Design intuitive navigation for administrators to switch between tools effortlessly.

## Data Validation Rules:
- Validate all user inputs:
  - Termination dates must fall within permissible ranges for each instrument's life cycle.
  - RCA_MIC changes must reference valid and active RCA_MIC codes.
- Ensure business logic adheres to ESMA guidelines for instrument termination and RCA_MIC management.