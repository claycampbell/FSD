# Instruments Reference Data Processing Plan

## Processing Phases:
### On-the-Fly Processing:
- Implement real-time processing for incoming reference data records.
- Update necessary data structures immediately upon receipt.

### End-of-Day Processing:
- Execute batches for processing aggregated reference data records.
- Apply updates to RCA reassessment results and synchronize consistent reference data.

## Data Structures:
- Maintain tables for:
  - Received Reference Data.
  - RCA Data (tracking regulatory compliance indicators).
  - Consistent Reference Data (validated records).
- Data structures for mapping instrument activity must include:
  - New and on-time records.
  - RCA reassessment inputs and error outputs.

## Reference Data Content Validation:
- Implement validation logic based on criteria outlined in Table 33.
- Ensure all received fields match the expected formats and data ranges.

## Use Cases:
### Updating Received Reference Data Table:
- Implement functionality for processing updates to newest reference data records.
  
### Updating RCA Data Table:
- Validate and process data updates relating to RCA reassessment results.

### RCA Determination Logic:
- Implement rules for RCA determination, including:
  - Immediate RCA matching during on-the-fly processing.
  - Comprehensive RCA determination during end-of-day processing.

## Consistency Validation:
- Perform checks to identify logical inconsistencies across reference data tables.
- Resolve invalid entries and provide file feedback.

## File Feedback Logic:
- Generate detailed reports on rejected and accepted files, ensuring transparency for submitting entities.