# Data Structures Plan

## Overview:
- This plan defines the structure and organization of data storage for FIRDS modules.

## Primary Tables:
### Instrument Reference Data Table:
- Store complete instrument reference data records.
- Include metadata fields such as ISIN, name, trade details, and classification codes.

### Reporting Files Table:
- Maintain details of all submitted reports:
  - Submission timestamp.
  - Validation status.
  - Originating entity.

### RCA Data Table:
- Track key regulatory compliance indicators (RCA):
  - Include mappings to MIC codes and validation results.

### Consistency Validations Table:
- Store results from consistency checks between reference data tables.

## Auxiliary Tables:
### Annual Turnover View:
- Aggregate data for annual financial instrument turnover calculations.

### Error Tables:
- Record error logs from RCA reassessment processes and invalid submissions.

### Non-Working Days Table:
- Store official holiday schedules for jurisdictions and trading venues.

## Optimization Strategies:
- Leverage indexing for high-frequency query fields such as ISIN and validation status.
- Implement partitioning mechanisms to manage historical data retention efficiently.

## Workflow Integration:
- Ensure seamless synchronization of data tables across modules:
  - Reference data processing.
  - Validation checks.
  - Distribution files.

## Backup & Recovery:
- Establish automated backups for primary data tables to avoid information loss during system errors.
- Enable fast recovery options to minimize downtime.