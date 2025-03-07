<!-- image -->

## Functional Specification Document FIRDS - Reference Data

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## ESMA REGULAR USE

Date: 24 March 2022 ESMA 65-08-9568

## Document control:

| Version    | Date                          | Author                                                                                                        |   Comments |
|------------|-------------------------------|---------------------------------------------------------------------------------------------------------------|------------|
| 17/03/2015 | Peter Lefterov                | First draft                                                                                                   |       0.1  |
| 27/04/2015 | Peter Lefterov                | Update based on internal feedback                                                                             |       0.2  |
| 08/05/2015 | Peter Lefterov  &amp; al.         | First draft for Task Forces review                                                                            |       0.3  |
| 26/06/2015 | Peter Lefterov,  Cyril Minoux | Updates based on the updated BRD                                                                              |       0.4  |
| 13/08/2015 | Peter Lefterov                | Updates based on the updated BRD                                                                              |       0.5  |
| 27/08/2015 | Peter Lefterov                | Updates based on the updated BRD                                                                              |       0.6  |
| 07/10/2015 | Xavier Suraud                 | Updates based on internal review and NCA comments                                                             |       0.7  |
| 10/11/2015 | Xavier Suraud                 | Updates based on updated BRD, internal review and  NCA comments                                               |       0.8  |
| 04/12/2015 | Xavier Suraud                 | Updates based on updated BRD, internal review and  NCA comments                                               |       0.9  |
| 11/01/2016 | Xavier Suraud                 | Updates based on internal review and NCA comments                                                             |       0.1  |
| 19/01/2016 | Xavier Suraud                 | Updates based on internal review and NCA comments.  Draft for ITMG comments.                                  |       0.11 |
| 26/01/2016 | Xavier Suraud                 | Updates based on internal review and NCA comments.                                                            |       0.12 |
| 17/02/2016 | Xavier Suraud                 | Updates based on internal review and NCA comments.                                                            |       0.13 |
| 22/02/2016 | Xavier Suraud                 | Updates based on internal review and NCA comments.                                                            |       0.13 |
| 02/03/2016 | Xavier Suraud                 | Updates based on internal review and NCA comments.                                                            |       0.14 |
| 25/03/2016 | Xavier Suraud                 | Updates based on internal review and NCA comments.                                                            |       0.15 |
| 02/04/2016 |                               | Submission for ITMG approval.                                                                                 |       1    |
| 22/06/2016 | Xavier Suraud                 | Updates following start of implementation  Addition of transition of RCA information from current  RDS system |       1.1  |
| 18/08/2016 | Xavier Suraud                 | Updates following start of implementation and NCA  comments.                                                  |       1.2  |

ESMA • CS 60747 - 201 - 203 rue de Bercy • 75012 • Paris France • Tel. +33 (0) 1 58 36 43 21 • www.esma.europa.eu

<!-- image -->

## ESMA REGULAR USE

Date: 24 March 2022 ESMA 65-08-9568

| 1.3        | 25/08/2016           | Xavier Suraud                                                                                                                                                                                                                                                                                                                   |   Version for ITMG approval following August Task  Force meeting |
|------------|----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| 05/10/2016 | Xavier Suraud        | Updates following September Task Force request to  update error codes, implementation feedback and  feedback from Delegated Project Board on data  publication                                                                                                                                                                  |                                                             1.4  |
| 14/11/2016 | Xavier Suraud  &amp; al. | Version for ITMG approval following October Task  Force meeting                                                                                                                                                                                                                                                                 |                                                             1.5  |
| 06/03/2017 | ESMA                 | Version for Task Force Review                                                                                                                                                                                                                                                                                                   |                                                             1.6  |
| 20/03/2017 | ESMA                 | Version following 08/March Task Force                                                                                                                                                                                                                                                                                           |                                                             1.7  |
| 27/04/2017 | ESMA                 | Candidate version for ITMG approval                                                                                                                                                                                                                                                                                             |                                                             1.8  |
| 19/06/2017 | ESMA                 | Version for ITMG approval                                                                                                                                                                                                                                                                                                       |                                                             1.9  |
| 22/01/2018 | ESMA                 | Change 102 Change of LEI-CDF format by September  / October release  Change 142 Split reminder files in case more than  500k records  Change 130 Refine dates validations (UTC time zone)  Change 131 Updated configuration of tables like  MIC\_MAPPING  Change 110 Register statistics on rejections / errors to               |                                                             1.1  |
| 06/03/2018 | ESMA                 | the instruments' full name  Change 59 Distribute non-working days file to NCAs  Change 154 Support very granular CFI-based  validation rules  Change 134 Move RCA determination to post- processing phase  Change 167 Flag the MIC of the RCA record in the  published files  Change 169 / 170 / 171 Improvements in RCA manual |                                                             1.11 |

<!-- image -->

## ESMA REGULAR USE

Date: 24 March 2022 ESMA 65-08-9568

|   1.12 | 08/05/2018   | ESMA   | Change 130 (Refine dates validations - UTC time  zone) to be implemented at the level of the XML  Schema as per 14/March Task Force feedback  Change 177 Use the same sequence number within  split FULINS and DLTINS file naming conventions  References to updated XML Schema  Possibility to configure the amount of historical data   |
|--------|--------------|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|   1.13 | 12/10/2018   | ESMA   | Change 193 Address issue related to  PublishedFromDate &gt; PublishedToDate  Change 194 Re-compute RCA record when RCA MIC  termination date is reached  Change 195 Extend date validation to fields 9 and 10  Change 200 Improve LEI data validation to allow  correction on terminated instruments                                         |
|   1.14 | 04/02/2019   | ESMA   | Version containing only the changes related to  terminated records approved by ITMG on 27/Nov/2018  Change 188: RCA record should change to a MIC  which trades the instrument, even in the case when no  MIC within RCA jurisdiction still trade the instrument  Change 194: Re-compute RCA record when RCA MIC                          |
|   1.15 | 08/04/2019   | ESMA   | Change 188 / 194: in case of RCA MIC change, the  terminated record should be distributed in the delta file                                                                                                                                                                                                                               |

ESMA • CS 60747 - 201 - 203 rue de Bercy • 75012 • Paris France • Tel. +33 (0) 1 58 36 43 21 • www.esma.europa.eu

<!-- image -->

## ESMA REGULAR USE

Date: 24 March 2022 ESMA 65-08-9568

|      |            |      | Change 214: Yearly RCA reassessment should give  precedence to Regulated Markets over MTFs  Change 227: Do not propagate RCA to instruments  that are terminated on all Trading Venues  Introduction of a 'withdrawn' flag to support Brexit  operations                                                                                                                                                                                                                   |
|------|------------|------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1.16 | 19/04/2019 | ESMA | Update following feedback from the 10/April Markets IT  Task Force  Update of UC 3.3.6.2 (normal flow) to incorporate                                                                                                                                                                                                                                                                                                                                                      |
| 1.17 | 14/06/2019 | ESMA | keep track of the history of RCA-MIC  Ability to apply yearly RCA reassessment results on a  date different from 1/April through system's  configuration parameters   Ability to define the list of ISINs which should undergo  Yearly RCA reassessment                                                                                                                                                                                                                    |
| 2    | 13/12/2019 | ESMA | consistency warning message  CR #217: Tool for ESMA Data Managers to adjust the  RCA-MIC  CR #230: Disregard MICs which have terminated an  ISIN when performing RCA determination - Yearly  RCA re-assessment and/or RCA +RCA\_RECORD  +RCA\_MIC  CR #191: Tool for ESMA Data Managers to set  termination date  CR #200: Improve LEI data validation to allow Trading  Venues to send corrections on terminated instruments  CR  #216: Introduce a CFI-code filter for the |
| 2.1  | 20/01/2020 | ESMA | CR #245: Rework PublishedFrom / PublishedTo dates  CR #237: Publish latest status of a record even if not  active anymore                                                                                                                                                                                                                                                                                                                                                  |

ESMA • CS 60747 - 201 - 203 rue de Bercy • 75012 • Paris France • Tel. +33 (0) 1 58 36 43 21 • www.esma.europa.eu

<!-- image -->

## ESMA REGULAR USE

Date: 24 March 2022 ESMA 65-08-9568

| 2.2        | 11/02/2020   | ESMA                                                                                                                                                                                                                                                                                                                 |   CR #196: Flag records that went to  CONSISTENT\_INSTRUMENTS  CR #243: Interface with SWIFT for country codes and  currencies |
|------------|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|
| 20/03/2020 | ESMA         | CR #202: Cancellation of instruments                                                                                                                                                                                                                                                                                 |                                                                                                                           2.3 |
| 23/03/2020 | ESMA         | CR #202: Cancellation of instruments   (Addition of FDBCAN file)                                                                                                                                                                                                                                                     |                                                                                                                           2.4 |
| 25/08/2020 | ESMA         | CR #202: Cancellation of instruments   (Incorporated final FIRDS base messages following  SWIFT evaluation)                                                                                                                                                                                                          |                                                                                                                           2.5 |
| 17/09/2020 | ESMA         | CR #202: Cancellation of instruments - Updated  (Incorporated final FIRDS base messages following  SWIFT evaluation)                                                                                                                                                                                                 |                                                                                                                           2.6 |
| 27/08/2021 | ESMA         | Full alignment of the following sections with the system  implementations: 2, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 6 and  16                                                                                                                                                                                                |                                                                                                                           2.7 |
| 17/12/2021 | ESMA         | CR #250 - GLEIF XSD 2.2 update  CR #252 - Ability to report empty DATNWD for entities  opened 24/7  CR #254 - Yearly RCA reassessment should cancel  pending manual RCA change requests  FIRDS 2022 (Phase #2)  CR item #249 - For instruments which CFI code  matches the Equity / Equity-like RCA rule, select the |                                                                                                                           2.8 |
| 18/01/2022 | ESMA         | RCA-MIC as the MIC with highest turnover  CR item #279 - ISO 10383 release 2.0 (updated  SWIFT MIC release 2.0)  CR item #284 - Second step confirmation to auto- update FIRDS MICS db table  CR item #289 - Update consistency validation  warnings  Minor updates related to                                       |                                                                                                                           2.9 |
| 24/03/2022 | ESMA         | 3.3.6.9 Determine the RCA record for Equity/Equity-like  instruments  3.8.1.5 Update MIC reference data table  3.8.2.4 Update Reporting calendar for TV/SI on a yearly  basis  3.10.5 Create and distribute MIC Full file                                                                                            |                                                                                                                           2.1 |

<!-- image -->

## ESMA REGULAR USE

Date: 24 March 2022 ESMA 65-08-9568

## Distribution List:

| Name                                    | Department   | Role                    |
|-----------------------------------------|--------------|-------------------------|
| Markets Department                      | Review       | Lukasz Popko            |
| Risk Analysis and  Economics Department | Review       | Laura Ionita            |
| Risk Analysis and  Economics Department | Review       | Lucia Resca             |
| Resources Department                    | Review       | Kalomoiris Konstantinos |

## Reference documents:

|   Ref | Title                                                                                           | Version    | Author                                   | Date             |
|-------|-------------------------------------------------------------------------------------------------|------------|------------------------------------------|------------------|
|     1 | MiFID II - Directive 2014/65/EU  of the European Parliament  and of the Council of 15 May  2014 | 2014/65/EU | European  Parliament  Council of  Europe | 15 May 2014      |
|     2 | ESMA-2015-MDSC-1  BRD Reference Data                                                            | 1          | ESMA                                     | 17 November 2015 |
|     3 | ESMA65-8-882 BRD  Reference Data                                                                | 3.1        | ESMA                                     | 09 February 2022 |
|     4 | ESMA - Reference data  Interface                                                                | 0.3        | ESMA                                     | 07 March 2016    |

<!-- image -->

Date: 24 March 2022 ESMA 65-08-9568

## Contents

| 1. Introduction  ......................................................................................................................................................... 12   | 1. Introduction  ......................................................................................................................................................... 12   |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1.1                                                                                                                                                                             | Purpose and audience of this document............................................................................................... 12                                         |
| 1.2                                                                                                                                                                             | Definitions ............................................................................................................................................. 12                    |
| 2  System Overview  ........................................................................................................................................... 13              | 2  System Overview  ........................................................................................................................................... 13              |
| 2.1                                                                                                                                                                             | Actors  .................................................................................................................................................... 13                 |
| 2.2                                                                                                                                                                             | Components  .......................................................................................................................................... 14                       |
| 2.3                                                                                                                                                                             | Module Description ............................................................................................................................... 15                           |
| 2.4                                                                                                                                                                             | Interface Description ............................................................................................................................. 16                          |
| System Use Cases ........................................................................................................................................ 18                    | System Use Cases ........................................................................................................................................ 18                    |
| 3.1  Messaging Sequence ........................................................................................................................... 18                          | 3.1  Messaging Sequence ........................................................................................................................... 18                          |
| 3.2                                                                                                                                                                             | Data collection and Format Validation .................................................................................................. 19                                     |
| 3.2.1                                                                                                                                                                           | Use case overview ...........................................................................................................................  19                               |
| 3.2.2                                                                                                                                                                           | Upload Data  ......................................................................................................................................  19                         |
| 3.2.3                                                                                                                                                                           | Route File .........................................................................................................................................  20                        |
| 3.2.4                                                                                                                                                                           | Perform Transmission Validation  ......................................................................................................  21                                     |
| 3.2.5                                                                                                                                                                           | Perform File Format Validation  .........................................................................................................  22                                   |
| 3.2.6                                                                                                                                                                           | Provide Feedback  .............................................................................................................................  24                             |
| 3.2.7                                                                                                                                                                           | Download file ....................................................................................................................................  24                          |
| 3.3  Instruments Reference Data processing............................................................................................... 25                                    | 3.3  Instruments Reference Data processing............................................................................................... 25                                    |
| 3.3.1                                                                                                                                                                           | Use case overview ...........................................................................................................................  25                               |
| 3.3.2                                                                                                                                                                           | Instruments Reference Data records processing overview  .............................................................. 26                                                       |
| 3.3.2.1  On the fly processing phase ....................................................................................................  27                                   | 3.3.2.1  On the fly processing phase ....................................................................................................  27                                   |
| 3.3.2.2  End of day / Post-Processing phase........................................................................................  28                                         | 3.3.2.2  End of day / Post-Processing phase........................................................................................  28                                         |
| 3.3.3  Perform Reference Data Content Validation .................................................................................... 35                                        | 3.3.3  Perform Reference Data Content Validation .................................................................................... 35                                        |
| 3.3.4                                                                                                                                                                           | Update the Received Reference Data Table  .................................................................................... 36                                               |
| 3.3.5                                                                                                                                                                           | Update the RCA data table  ...............................................................................................................  39                                  |
| 3.3.6  Determine RCA ................................................................................................................................  41                       | 3.3.6  Determine RCA ................................................................................................................................  41                       |
| 3.3.6.1                                                                                                                                                                         | Overview  ..................................................................................................................................  41                                |
| 3.3.6.2                                                                                                                                                                         | Determine Applicable RCA determination rule ........................................................................ 41                                                         |
| 3.3.6.3                                                                                                                                                                         | Determine RCA based on "Date of admission to trading or date of first trade" ....................... 44                                                                         |
| 3.3.6.4                                                                                                                                                                         | Determine RCA base d on 'Date of request for admission' or 'Date of admission to trading or                                                                                     |
| date of first trade" ......................................................................................................................................  46                 | date of first trade" ......................................................................................................................................  46                 |
| 3.3.6.5  Determine RCA based on LEI .................................................................................................  48                                       | 3.3.6.5  Determine RCA based on LEI .................................................................................................  48                                       |
| 3.3.6.6                                                                                                                                                                         | Determine RCA based on the underlying ................................................................................ 49                                                       |
| 3.3.6.7                                                                                                                                                                         | Determine RCA based on reception date time ........................................................................ 51                                                          |
| 3.3.6.8                                                                                                                                                                         | Determine the RCA record of the submitted instrument  .......................................................... 52                                                             |
| 3.3.6.9                                                                                                                                                                         | Determine the RCA record for Equity/Equity-like instruments [Updated #249]  ..............  56                                                                                  |
| 3.3.6.10                                                                                                                                                                        | Update RCA of derivative instruments ................................................................................  57                                                       |
| 3.3.6.11                                                                                                                                                                        | Determine the RCA record of derivative instrument  ............................................................ 58                                                              |
| 3.3.6.12                                                                                                                                                                        | Determine the RCA based on the 'Date of Admission to trading or date of first trade' of the                                                                                     |
| underlying                                                                                                                                                                      | 59                                                                                                                                                                              |
| 3.3.6.13                                                                                                                                                                        | Transition from current Reference Data System  ................................................................. 61                                                             |

<!-- image -->

## ESMA REGULAR USE

|                                                                                                                                                                   | 3.3.6.14  Apply RCA-MIC adjustments  ...............................................................................................  64                          |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 3.3.7                                                                                                                                                             | Perform Consistency Validation on instruments reference data [Updated CR #289]  .............  65                                                                 |
| 3.3.8                                                                                                                                                             | Provide File Feedback  ......................................................................................................................  66                 |
| 3.3.9                                                                                                                                                             | End-of day processing / Apply RCA reassessment result [Updated CR #254]   ........................  68                                                            |
| 3.3.10                                                                                                                                                            | End-of day processing / Update consistent reference data table  ..................................................... 70                                          |
| 3.3.11  Generate information about rejections .............................................................................................  75                   | 3.3.11  Generate information about rejections .............................................................................................  75                   |
| 3.4  Tools for ESMA Business Administrators ............................................................................................. 76                      | 3.4  Tools for ESMA Business Administrators ............................................................................................. 76                      |
| 3.4.1                                                                                                                                                             | Submit request to set termination date  .............................................................................................  76                         |
| 3.4.2                                                                                                                                                             | Submit request to change RCA\_MIC (ESMA Data managers) ........................................................ 78                                                 |
| 3.5  RCA change Management  .................................................................................................................... 81               | 3.5  RCA change Management  .................................................................................................................... 81               |
| 3.5.1                                                                                                                                                             | Overview  ...........................................................................................................................................  81         |
| 3.5.2                                                                                                                                                             | User interface for reviewing and acting on RCA change requests and RCA changes following yearly                                                                   |
| reassessment ................................................................................................................................................  81 | reassessment ................................................................................................................................................  81 |
| 3.5.3                                                                                                                                                             | Yearly RCA Reassessment for Equities  ...........................................................................................  84                             |
| 3.5.4                                                                                                                                                             | Change of RCA\_MIC (for NCA's)   .....................................................................................................  86                         |
| 3.5.5                                                                                                                                                             | Submit request to change RCA ........................................................................................................  88                         |
| 3.5.6                                                                                                                                                             | Review and act on RCA change request.......................................................................................... 91                                 |
| 3.5.7                                                                                                                                                             | Review and act on Yearly reassessment results  .............................................................................. 94                                  |
| 3.6  Instruments Reference Data Distribution  .............................................................................................. 96                   | 3.6  Instruments Reference Data Distribution  .............................................................................................. 96                   |
| 3.6.1                                                                                                                                                             | Use Case Overview  ..........................................................................................................................  96                 |
| 3.6.2                                                                                                                                                             | Create and distribute Full File  ...........................................................................................................  96                  |
| 3.6.3                                                                                                                                                             | Create and distribute Cancellations Full File  ....................................................................................  98                           |
| 3.6.4                                                                                                                                                             | Create and distribute Delta File ........................................................................................................  99                     |
| 3.6.5                                                                                                                                                             | Create and distribute invalid records File .......................................................................................  101                           |
| 3.7  Instruments Reference Data Publication ............................................................................................ 103                      | 3.7  Instruments Reference Data Publication ............................................................................................ 103                      |
| 3.7.1                                                                                                                                                             | Overview  .........................................................................................................................................  103          |
| 3.7.2                                                                                                                                                             | Create Public full file  .......................................................................................................................  104             |
| 3.7.3                                                                                                                                                             | Create Public Cancellations full file ................................................................................................  105                       |
| 3.7.4                                                                                                                                                             | Create Public delta file  ....................................................................................................................  106               |
| 3.7.5                                                                                                                                                             | Publish instrument reference data  ..................................................................................................  107                        |
| 3.7.6                                                                                                                                                             | Search and export public instruments reference data  .................................................................... 109                                     |
| 3.7.7                                                                                                                                                             | Download Full/delta public files ......................................................................................................  111                      |
| 3.8  Additional Reference Data Management  ............................................................................................ 112                       | 3.8  Additional Reference Data Management  ............................................................................................ 112                       |
| 3.8.1  LEI and ISO Reference data Management .................................................................................... 112                             | 3.8.1  LEI and ISO Reference data Management .................................................................................... 112                             |
| 3.8.1.1  Use cases overview  ...............................................................................................................  112                 | 3.8.1.1  Use cases overview  ...............................................................................................................  112                 |
| 3.8.1.2                                                                                                                                                           | Update LEI reference data table  ............................................................................................  113                                |
| 3.8.1.3                                                                                                                                                           |                                                                                                                                                                   |
|                                                                                                                                                                   | Update Countries reference data table  ..................................................................................  114                                    |
| 3.8.1.5                                                                                                                                                           | Update MIC reference data table...........................................................................................  118                                   |
| 3.8.1.6                                                                                                                                                           | Update  'List of valid CFI codes table' ....................................................................................  121                                 |
| 3.8.2  Non-working day data Management...............................................................................................  121                        | 3.8.2  Non-working day data Management...............................................................................................  121                        |
| 3.8.2.1                                                                                                                                                           | Use cases overview  ...............................................................................................................  121                          |
| 3.8.2.2                                                                                                                                                           | Non-working day data Collection ...........................................................................................  122                                  |
| 3.8.2.3                                                                                                                                                           | Update Reporting calendar  ....................................................................................................  123                              |
| 3.8.2.4. Update Reporting calendar for TV/SI on a yearly basis [Updated CR #252]  ......................  124                                                     | 3.8.2.4. Update Reporting calendar for TV/SI on a yearly basis [Updated CR #252]  ......................  124                                                     |

<!-- image -->

## ESMA REGULAR USE

Date: 24 March 2022 ESMA 65-08-9568

4

5

| 3.9                                                                                                                                                                  | Expression of interest on indices Management .................................................................................. 126                                  |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 3.9.1                                                                                                                                                                | Use case Overview  .........................................................................................................................  126                    |
| 3.9.2  Collect expression of interest on indices ........................................................................................  126                       | 3.9.2  Collect expression of interest on indices ........................................................................................  126                       |
| 3.10  Additional Reference data distribution ................................................................................................ 129                    | 3.10  Additional Reference data distribution ................................................................................................ 129                    |
| 3.10.1  Use cases overview  ........................................................................................................................  129            | 3.10.1  Use cases overview  ........................................................................................................................  129            |
| 3.10.2 Distribute LEI Full file [Updated CR #250] ..................................................................................  129                            | 3.10.2 Distribute LEI Full file [Updated CR #250] ..................................................................................  129                            |
| 3.10.3  Create and distribute Country Full file ............................................................................................  130                    | 3.10.3  Create and distribute Country Full file ............................................................................................  130                    |
| 3.10.4  Create and distribute Currency Full file ..........................................................................................  131                     | 3.10.4  Create and distribute Currency Full file ..........................................................................................  131                     |
| 3.10.5 Create and distribute MIC Full file [Updated CR #279]  .............................................................  132                                     | 3.10.5 Create and distribute MIC Full file [Updated CR #279]  .............................................................  132                                     |
| 3.10.6  Create and distribute CFI Full file  ...................................................................................................  133                | 3.10.6  Create and distribute CFI Full file  ...................................................................................................  133                |
| 3.10.7  Create and distribute Expression of interest on indices file  ............................................................ 134                               | 3.10.7  Create and distribute Expression of interest on indices file  ............................................................ 134                               |
| 3.10.8  Create and distribute non-working days file ...................................................................................  135                         | 3.10.8  Create and distribute non-working days file ...................................................................................  135                         |
| 3.10.9 Create and distribute the previous version of LEI Full file (v2.1) [Updated CR #250]  .............  136                                                      | 3.10.9 Create and distribute the previous version of LEI Full file (v2.1) [Updated CR #250]  .............  136                                                      |
| 3.10.10. Create and distribute the previous version of MIC Full file (v1.0) [Updated CR #279]  .........  137                                                        | 3.10.10. Create and distribute the previous version of MIC Full file (v1.0) [Updated CR #279]  .........  137                                                        |
| 3.11  Monitoring ........................................................................................................................................... 138     | 3.11  Monitoring ........................................................................................................................................... 138     |
| 3.11.1  Use case Overview  .........................................................................................................................  138            | 3.11.1  Use case Overview  .........................................................................................................................  138            |
| 3.11.2  Missing/Incomplete Report Notifications ........................................................................................  138                        | 3.11.2  Missing/Incomplete Report Notifications ........................................................................................  138                        |
| 3.11.3  Monthly report generation for NCAs delegating data collection ..................................................... 141                                      | 3.11.3  Monthly report generation for NCAs delegating data collection ..................................................... 141                                      |
| 3.12  System Administration ........................................................................................................................ 143             | 3.12  System Administration ........................................................................................................................ 143             |
| 3.12.1  Use case Overview  .........................................................................................................................  143            | 3.12.1  Use case Overview  .........................................................................................................................  143            |
| 3.12.2  User management ..........................................................................................................................  143              | 3.12.2  User management ..........................................................................................................................  143              |
| 3.12.3  System monitoring  ..........................................................................................................................  144           | 3.12.3  System monitoring  ..........................................................................................................................  144           |
| 3.12.3.1                                                                                                                                                             | Process monitoring  ............................................................................................................  144                                |
| 3.12.3.2  File management monitoring  .............................................................................................  145                             | 3.12.3.2  File management monitoring  .............................................................................................  145                             |
| 3.12.4  System configuration ......................................................................................................................  146             | 3.12.4  System configuration ......................................................................................................................  146             |
| 3.12.4.1  Overview............................................................................................................................  146                  | 3.12.4.1  Overview............................................................................................................................  146                  |
| 3.12.4.2  Update internal reference data table  .................................................................................  146                               | 3.12.4.2  Update internal reference data table  .................................................................................  146                               |
| 3.12.4.3  Update internal tables related to CFI codes  ......................................................................  147                                   | 3.12.4.3  Update internal tables related to CFI codes  ......................................................................  147                                   |
| 3.12.4.4  Update ESMA attributes in ISO reference data table  ........................................................ 148                                           | 3.12.4.4  Update ESMA attributes in ISO reference data table  ........................................................ 148                                           |
| 3.12.4.5  Update ESMA attributes in Country reference data table ................................................. 149                                               | 3.12.4.5  Update ESMA attributes in Country reference data table ................................................. 149                                               |
| 3.12.4.6  Update ESMA attributes in MIC reference and Trading Venue Mapping data tables                                                                              | 3.12.4.6  Update ESMA attributes in MIC reference and Trading Venue Mapping data tables                                                                              |
| according to the Authorised Entities Interface  .........................................................................................  150                       | according to the Authorised Entities Interface  .........................................................................................  150                       |
| Interfaces ..................................................................................................................................................... 152 | Interfaces ..................................................................................................................................................... 152 |
| 4.1  Interface with Transparency System................................................................................................... 152                       | 4.1  Interface with Transparency System................................................................................................... 152                       |
| 4.1.1                                                                                                                                                                | Provide (ISIN, MIC) active at least one day during a given time period ......................................... 152                                                 |
| 4.1.2                                                                                                                                                                | Get yearly turnover data for equity instruments for a given year  .................................................... 153                                           |
| 4.1.3                                                                                                                                                                | Provide the list of (MIC, Field 11, Field 12) related to a given ISIN  ................................................ 153                                          |
| 4.1.4                                                                                                                                                                | Provide the list of (ISIN, MIC, Field 11, Field 12, RCA) active on a given day  ............................... 154                                                  |
| 4.1.5                                                                                                                                                                | Provide the MIC with earliest Field 11 for a given ISIN .................................................................. 155                                       |
| 4.2  FIRDS Reference Data view  ............................................................................................................... 156                  | 4.2  FIRDS Reference Data view  ............................................................................................................... 156                  |
| 4.3  4.4                                                                                                                                                             | FIRDS Reporting Calendar view  ......................................................................................................... 156                         |
|                                                                                                                                                                      | Interface with DIFEA ........................................................................................................................... 157                 |
| 4.5  Interface with ESMA Registers [Updated CR #284] ........................................................................... 157                                 | 4.5  Interface with ESMA Registers [Updated CR #284] ........................................................................... 157                                 |
| XML Messages ............................................................................................................................................ 160        | XML Messages ............................................................................................................................................ 160        |

<!-- image -->

## ESMA REGULAR USE

Date: 24 March 2022 ESMA 65-08-9568

| 5.1                                                                                                                                                                   | Instrument Reference Data  ................................................................................................................. 160                                                                                                                                  |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 5.2                                                                                                                                                                   | Additional Reference Data .................................................................................................................. 161                                                                                                                                  |
| 6  Data Structure  .............................................................................................................................................. 162 | 6  Data Structure  .............................................................................................................................................. 162                                                                                                             |
| 6.1  Reporting Files Table  .......................................................................................................................... 162            | 6.1  Reporting Files Table  .......................................................................................................................... 162                                                                                                                        |
| 6.2                                                                                                                                                                   | NCA reference data table ................................................................................................................... 163                                                                                                                                  |
| 6.3                                                                                                                                                                   | CFI / RCA rule mapping table ............................................................................................................. 164                                                                                                                                    |
| 6.4                                                                                                                                                                   | CFI-based validations table ................................................................................................................ 164                                                                                                                                  |
| 6.5                                                                                                                                                                   | Expression of interest on Indices reference data table  ....................................................................... 166                                                                                                                                               |
| 6.6                                                                                                                                                                   | Trading venue mapping view .............................................................................................................. 167                                                                                                                                     |
| 6.7                                                                                                                                                                   | Reporting Flow view  ............................................................................................................................ 168                                                                                                                             |
| 6.8                                                                                                                                                                   | Instrument yearly turnover view .......................................................................................................... 169                                                                                                                                    |
| 6.9                                                                                                                                                                   | RTS23 Fields table ............................................................................................................................. 170                                                                                                                              |
| 6.10                                                                                                                                                                  | Additional Field table  ........................................................................................................................... 175                                                                                                                           |
| 6.11                                                                                                                                                                  | Rejection statistics table ..................................................................................................................... 176                                                                                                                              |
| 6.12                                                                                                                                                                  | Rejected records table ........................................................................................................................ 176                                                                                                                               |
| 6.13                                                                                                                                                                  | Yearly RCA reassessment  input data table ....................................................................................... 177                                                                                                                                             |
| 6.14                                                                                                                                                                  | RCA\_MIC adjustments data table  ....................................................................................................... 177                                                                                                                                       |
| 6.15                                                                                                                                                                  | RCA\_MIC adjustments error data table  .............................................................................................. 178                                                                                                                                          |
| 6.16                                                                                                                                                                  | Set TERMINATION\_DATE error data table  ........................................................................................ 179                                                                                                                                               |
| 6.17                                                                                                                                                                  | Set TERMINATION\_DATE data table ................................................................................................ 179                                                                                                                                              |
| 6.18                                                                                                                                                                  | MIC\_UPREG\_STAGING data table  .................................................................................................... 180                                                                                                                                            |
| 7                                                                                                                                                                     |                                                                                                                                                                                                                                                                                   |
| Annex 1a: Transmission Validation Rules ................................................................................................... 181                       | Annex 1a: Transmission Validation Rules ................................................................................................... 181                                                                                                                                   |
| 8                                                                                                                                                                     | Annex 1b: Format Validation Rules ............................................................................................................. 182  Annex 1c: Reference Data Content and Consistency Validation Rules ...................................................... 183 |
| 9  10                                                                                                                                                                 | Annex 1d: Non-working Days Content Validation Rules.............................................................................. 188                                                                                                                                             |
| 11  Reminder Message code and description ................................................................................................... 188                     | 11  Reminder Message code and description ................................................................................................... 188                                                                                                                                 |
| 12                                                                                                                                                                    | Annex 2: File naming conventions  ............................................................................................................... 189                                                                                                                             |
| 13                                                                                                                                                                    | Annex 3 Business Application header ......................................................................................................... 193                                                                                                                                 |
| 14  Annex 4 Reporting calendar ........................................................................................................................ 196           | 14  Annex 4 Reporting calendar ........................................................................................................................ 196                                                                                                                       |
| 14.1                                                                                                                                                                  | Reporting Calendar Table  ................................................................................................................... 196                                                                                                                                 |
| 14.2                                                                                                                                                                  | TV/SI reporting table ........................................................................................................................... 197                                                                                                                             |
| 15  Annex 5 ISO reference data tables.............................................................................................................. 198               | 15  Annex 5 ISO reference data tables.............................................................................................................. 198                                                                                                                           |
| 15.1  Country reference data table .............................................................................................................. 198                 | 15.1  Country reference data table .............................................................................................................. 198                                                                                                                             |
| 15.2                                                                                                                                                                  | Currency reference data table ............................................................................................................ 199                                                                                                                                    |
| 15.3                                                                                                                                                                  | MIC reference data table .................................................................................................................... 200                                                                                                                                 |
| 15.5                                                                                                                                                                  | LEI reference data table  ...................................................................................................................... 203                                                                                                                              |
| 16  Annex 6 Scenarios of Instrument reference data reporting and distribution  ................................................ 204                                   | 16  Annex 6 Scenarios of Instrument reference data reporting and distribution  ................................................ 204                                                                                                                                               |
| 16.1                                                                                                                                                                  | Modified instrument reported on time ................................................................................................. 204                                                                                                                                        |
| 16.2                                                                                                                                                                  | Modified instrument reported late ....................................................................................................... 206                                                                                                                                     |
| 16.3                                                                                                                                                                  | Terminated instrument reported on time  ............................................................................................. 208                                                                                                                                         |
| 16.4                                                                                                                                                                  | Terminated instrument reported late  ................................................................................................... 210                                                                                                                                      |
| 16.5                                                                                                                                                                  | Cancelled instrument .......................................................................................................................... 212                                                                                                                               |

<!-- image -->

## Table of Figures

| Figure 1 - Components Diagram ...........................................................................................................  14        |
|------------------------------------------------------------------------------------------------------------------------------------------------------|
| Figure 2 - Message sequence diagram .................................................................................................  18            |
| Figure 3 - Data collection and format validation use cases diagram  .....................................................  19                        |
| Figure 4 - 'On the fly' processing use case diagram  ............................................................................  25                |
| Figure 5 - End-of-day / Post-processing use case diagram ..................................................................  26                      |
| Figure 6 - Determine RCA use case diagram  ........................................................................................  41              |
| Figure 7 - RCA change management use case diagram ......................................................................  81                         |
| Figure 8 - RCA Change management user interface screen ................................................................  83                          |
| Figure 9 - Instruments Reference Data Distribution use case diagram ................................................  96                             |
| Figure 10 - Instruments Reference Data Publication use case diagram  .............................................103                                |
| Figure 11 - Additional Reference Data Management ..........................................................................112                       |
| Figure 12 - Non-working day data Management use case diagram ...................................................121                                  |
| Figure 13 - Expression of interest on indices Management use case diagram ..................................126                                      |
| Figure 14 - Additional Reference data distribution use case diagram  .................................................129                            |
| Figure 15 - Monitoring use case diagram ............................................................................................138              |
| Figure 16 - System Administration use case diagram  .........................................................................143                     |
| Figure 17 - Modification Reported On-Time .......................................................................................206                 |
| Figure 18 - Modification reported late  ..................................................................................................208        |
| Figure 19 - Termination reported On-time ...........................................................................................210              |
| Figure 20 - Termination reported late ..................................................................................................212          |
| Figure 21 - Cancellation  .......................................................................................................................215 |

<!-- image -->

## Table of Tables

| Table 1 - Fields of Received Reference Data table  ...............................................................................  28                |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| Table 2 - Fields of New and On time records table ...............................................................................  29                 |
| Table 3 - Fields of RCA Data Table  .......................................................................................................  30       |
| Table 4 - Fields of RCA manual change process data table  .................................................................  32                       |
| Table 5 - Fields OF RCA Yearly Reassessment Process Data table ...................................................  32                                |
| Table 6 - Fields of Reference fields table ..............................................................................................  33         |
| Table 7 - Fields of consistent reference data table................................................................................  34               |
| Table 8 - Filter Section of RCA Change Management ..........................................................................  82                      |
| Table 9 - Filter Fields for  public search interface................................................................................109               |
| Table 10 - Filter Section of Authorised Entities Interface ....................................................................152                    |
| Table 11 - Instrument reference data message table  ..........................................................................161                     |
| Table 12 - Additional reference data message table  ...........................................................................162                    |
| Table 13 - Reporting Files table  ...........................................................................................................162      |
| Table 14 - NCA reference data table  ...................................................................................................163           |
| Table 15 - CFI / RCA rule mapping table ............................................................................................164               |
| Table 16 - CFI-based validations table  ................................................................................................165           |
| Table 17 - Expression of interest on Indices reference data table ......................................................166                           |
| Table 18 - Trading venue mapping view .............................................................................................167                |
| Table 19 - Reporting Flow view ...........................................................................................................168         |
| Table 20 - Instrument yearly turnover view .........................................................................................169               |
| Table 21 - RTS23 Fields table .............................................................................................................174        |
| Table 22 - Additional Field table ..........................................................................................................175       |
| Table 23 - Rejection Statistics Table ...................................................................................................176          |
| Table 24 - Rejected Records Table .....................................................................................................176            |
| Table 25 - Yearly RCA reassessment input table................................................................................177                     |
| Table 26 - RCA\_MIC adjustments data table ......................................................................................177                   |
| Table 27 - RCA-MIC Adjustments Error data table .............................................................................178                      |
| Table 28 - Set Termination Date Error data table................................................................................179                   |
| Table 29 - Set Termination Date data table  .........................................................................................179              |
| Table 30 - MIC\_UPREG\_STAGING data table ..................................................................................180                         |
| Table 31 - Transmission Validation Rules ...........................................................................................181               |
| Table 32 - Format Validation Rules .....................................................................................................182           |
| Table 33 - Reference Data Content and Consistency Validation Rules  ..............................................187                                 |
| Table 34 - Non-working Days Content Validation Rules .....................................................................188                         |
| Table 35 - Reminder Message code and description  ..........................................................................188                       |
| Table 36 - Incoming file naming conventions ......................................................................................190                 |
| Table 37 - Distributed file naming conventions....................................................................................191                 |
| Table 38 - File types ............................................................................................................................192 |
| Table 39 - Fields of Business Application Header  ...............................................................................195                  |
| Table 40 - Reporting Calendar table....................................................................................................196            |
| Table 41 - TV/SI Reporting table .........................................................................................................197         |
| Table 42 - Country reference data table  ..............................................................................................199            |
| Table 43 - Currency reference data table  ............................................................................................200             |
| Table 44 - MIC reference data table  ....................................................................................................202          |
| Table 45 - List of valid CFI codes table ...............................................................................................202           |
| Table 46 - Technical attributes of LEI reference data table.................................................................203                       |

<!-- image -->

## 1. Introduction

## 1.1 Purpose and audience of this document

This  document  contains  the  functional  specifications  for  the  Financial  Instruments  Reference  Data System (FIRDS).

The  intended  audience  of  this  document  is  ESMA  IT  staff  as  well  as  the  IT  Management  and Governance group (ITMG), the Markets IT Task Force (MKTTF) and the FIRDS Delegated Project Task Force (FDPTF).

This Functional Specification Document (FSD) is intended to describe the ESMA solution for collection and publication of financial instruments reference data, and implementation of the delegation of tasks signed by Delegating NCAs on reference data collection.

This document has been drafted based on the associated Business Requirements Document.

## 1.2  Definitions

| ADT                                        | Average Daily turnover                                                                                                                                                                                                                                                                                                                                                                                                                   |
|--------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| AVT                                        | Average Value of Transactions                                                                                                                                                                                                                                                                                                                                                                                                            |
| BRD                                        | Business Requirements Document                                                                                                                                                                                                                                                                                                                                                                                                           |
| CSD                                        | Central Securities Depository                                                                                                                                                                                                                                                                                                                                                                                                            |
| CFI                                        | Classification of financial instruments code as defined in ISO 10962                                                                                                                                                                                                                                                                                                                                                                     |
| FSD                                        | Functional Specifications Document (this document)                                                                                                                                                                                                                                                                                                                                                                                       |
| ITMG                                       | IT Management and Governance group                                                                                                                                                                                                                                                                                                                                                                                                       |
| ITS                                        | Implementing Technical Standards                                                                                                                                                                                                                                                                                                                                                                                                         |
| MIC                                        | Market Identifier Code as defined in ISO 10383.   Trading Venues and Systematic Internalisers must be identified by a  MIC code. In the context of this document, in accordance with RTS on  Article 27 ('trading venue' field) the MIC code must be interpreted as  'Segment MIC for the trading venue or systematic internaliser, where  available, otherwise operating MIC'.  Multilateral  as  defined  in  Art.4(22)  of  Directive |
| MTF                                        | trading  facility,  2014/65/EU                                                                                                                                                                                                                                                                                                                                                                                                           |
| NCA                                        |                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|                                            | National Competent Authority  A  National  Competent  Authority  who  has  signed  a  Delegation  Agreement with ESMA in order to delegate the task of collecting data                                                                                                                                                                                                                                                                   |
| NCA delegating data  collection            | in  their  jurisdiction  directly  from  Trading  Venues,  Systematic  Internalisers,  APAs  and  CTPs  for  the  purpose  of  reference  data  provision and transparency calculations                                                                                                                                                                                                                                                  |
| NCA delegating  transparency  calculations | A  National  Competent  Authority  who  has  signed  a  Delegation  Agreement  with  ESMA  in  order  to  delegate  the  task  of  performing  transparency calculations and data validations.                                                                                                                                                                                                                                           |

<!-- image -->

| Non-delegating NCA   | A  National  Competent  Authority  who  has  not  signed  a  Delegation  Agreement with ESMA on the Instruments Reference Data Project   |
|----------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| OTF                  | Organised  trading  facility,  as  defined  in  Art.4(23)  of  Directive  2014/65/EU                                                     |
| RCA                  | The National Competent Authority that has the most relevant market in  terms of liquidity as per MiFIR Article 26 under its jurisdiction |
| RDS                  | The  current  ESMA  Reference  Data  System  developed  to  support  reporting of instruments reference data under MiFID I.              |
| RM                   | Regulated Market                                                                                                                         |
| RTS                  | Regulatory Technical Standards                                                                                                           |
| SI                   | Systematic Internaliser                                                                                                                  |
| Submitting Entity    | Non-delegating  NCA,  Trading  Venue  or  Systematic  Internaliser  reporting reference data                                             |
| TV                   | Trading  Venue,  covering  Regulated  Markets,  Multilateral  Trading  Facilities, Organised Trading Facilities                          |

## 2 System Overview

## 2.1  Actors

| Non-delegating  NCA,  Trading  Venue  or  providing ESMA with reference data                                                    | Submitting Entity  Systematic  Internaliser   |
|---------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------|
| Any corporate, government or physical person including but not limited  to ESMA and NCA staff, Investment Firms, data analysts. | Public User                                   |
| Sends  reference  data  from  TV/SI  (if  applicable)  and  receives  consolidated reference data.                              | NCA System                                    |
| Sends reference data to ESMA (if applicable).                                                                                   | TV/SI System                                  |
| An actor by default in all use cases                                                                                            | The ESMA System                               |
| Physical person acting on behalf an NCA.                                                                                        | NCA user                                      |
| A user responsible for the monitoring of the system from a business  perspective.                                               | ESMA Business  Administrator                  |
| A user responsible for the monitoring of the system from a technical  perspective.                                              | ESMA IT   Administrator                       |

<!-- image -->

## 2.2  Components

FIGURE 1 - COMPONENTS DIAGRAM

<!-- image -->

<!-- image -->

## 2.3  Module Description

## Modules in scope

| Module handling the processing of input files from TV/SIs and NCAs.                                                                                                                                                                                                | Data Collection  and Validation  Module   |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------|
| Data  storage  containing  data  on  all  submitted  instruments  data  including history.                                                                                                                                                                         | Data Storage  Module                      |
| Module handling the provision of data via uploading files on HUBEX for  usage by NCAs.                                                                                                                                                                             | Data Distribution  Module                 |
| Section of the ESMA portal dedicated to providing public users with  access to reference data.                                                                                                                                                                     | Data Publication  Module                  |
| This module contains functionality for further processing of reference  data and feeding of the history table.                                                                                                                                                     | Data Processing                           |
| This module contains functionality for preparing data for publication and  distribution including determination of the RCA. It includes the update  of the consistent reference data table and the generation of the full file,  delta file, invalid records file. | Data Post- processing                     |
| Allows  system  administrators  to  modify  processing  rules  and/or  manually initiate processing jobs in the data collection and validation  module and the data distribution module.                                                                           | System  Administration  Module            |
| Allows data managers to track received data and monitor data quality.                                                                                                                                                                                              | Data Collection  Monitoring Module        |

## External Modules (ESMA)

| A secured file transfer server supporting the exchange of information  between ESMA and NCA.                                                                              | HUBEX                      |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------|
| A secured file transfer server supporting the exchange of information  between  Trading  Venues,  Systematic  Internalisers,  APAs,  CTPs,  Trade Repositories, and ESMA. | HUBDE                      |
| ESMA Registers  of  Trading  venues,  Systematic  internalisers,  MTF,  OTF, Competent Authorities, …                                                                     | ESMA Registers             |
| A public web interface providing instrument reference data to the public                                                                                                  | ESMA public web  interface |

<!-- image -->

| A secured web interface for NCA to review data including RCA change  management and Expression of interest request on Indices.   | ESMA Portal               |
|----------------------------------------------------------------------------------------------------------------------------------|---------------------------|
| The ESMA System supporting Suspensions' coordination.                                                                            | SARIS                     |
| The ESMA System performing Transparency Calculations.                                                                            | Transparency  system      |
| The ESMA System supporting Double Volume Cap Mechanism.                                                                          | Double Volume  Cap system |

## External Modules (non-ESMA)

| System used by TV/SI to send reference data to NCAs or ESMA (where  applicable) and receive feedback file from The ESMA System.   | TV/SI System        |
|-----------------------------------------------------------------------------------------------------------------------------------|---------------------|
| Systems operated by National Competent Authorities.                                                                               | NCA System          |
| Global register of LEI identifiers.                                                                                               | Global LEI Register |
| SWIFT publication services from which ISO Countries, Currencies will  be uploaded by the system.                                  | SWIFT               |
| ISO 15022 publication services from which MIC will be uploaded by the  system.                                                    | ISO 15022           |

## 2.4  Interface Description

| Interface through which TV/SI System or NCA System provides data  to Data Collection and Validation Module. ESMA HUBEX for NCA  and ESMA HUBDE for TV/SI provide the file exchange.  The scope of data is instrument reference data, non-working days  data and expressions of interest for indices from NCAs.   | Instruments Data  Collection/Non- working Days Data  Collection/Expression  of interest for indices  Data collection   |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| Interface  through  which  Data  Collection  and  Validation  Module  checks the validity of the MIC, CFI, LEI and other codes contained  in the incoming data.                                                                                                                                                  | Identifiers Check                                                                                                      |
| Interface  through  which  ESMA  Portal  accesses  the  publication  database for the purpose of providing users data for review/export.                                                                                                                                                                         | Instruments  Reference Data  Publication                                                                               |
| Interface through which Data Provision Module provides NCAs data  on instruments. ESMA HUBEX supports the file exchange.                                                                                                                                                                                         | Reference Data  Distribution to NCAs                                                                                   |

<!-- image -->

NCA web interfaces

The  scope  of  data  is  instrument  reference  data,  expression  of interest for indices, currency codes, country codes, CFI codes, MIC codes, and LEIs.

Web  interface  dedicated  and  restricted  to  NCA  enabling  e.g.  to request a change of RCA of an instrument in the system database and express their interest on Indices.

<!-- image -->

## 3 System Use Cases

## 3.1  Messaging Sequence

Through HUBDE, this process is performed by TV/SIs on each trading day (including non-working days for ESMA and/or its NCA).

Through HUBEX, this process is performed by NCAs not delegating data collection in their jurisdiction on each day that is a trading day for at least one of the TV/SIs under their jurisdiction (including non-working days for ESMA and/or the NCA).

FIGURE 2 - MESSAGE SEQUENCE DIAGRAM

<!-- image -->

<!-- image -->

## 3.2 Data collection and Format Validation

## 3.2.1 Use case overview

FIGURE 3 - DATA COLLECTION AND FORMAT VALIDATION USE CASES DIAGRAM

<!-- image -->

## 3.2.2 Upload Data

| Goal           | The objective of the use case is to allow the submitting entity to  upload data files to the system.                                |
|----------------|-------------------------------------------------------------------------------------------------------------------------------------|
| Actors         | data   NCA system (NCAs not delegating data collection in their jurisdiction) -  submits data                                       |
| Preconditions  | The  submitting  entity  has  established  access  rights  to  the  HUBEX  or  HUBDE system.                                        |
| Trigger        | The use case is triggered by the submitting entity.                                                                                 |
| Postconditions | The file is  uploaded into the  sender's outgoing folder dedicated to the  ESMA System.                                             |
|                | 1.  The submitting entity connects and logs to HUBEX/HUBDE System  using sFTP/FTPs protocol.                                        |
| Normal Flow    | 2.  Once connected and authenticated the submitting entity uploads the  file into its Outgoing folder dedicated to the ESMA System. |
| Normal Flow    | 3.  HUBEX/HUBDE adds timestamp to the file.                                                                                         |
| Normal Flow    | 4.  The submitting entity disconnects from HUBEX/HUBDE System.                                                                      |

<!-- image -->

| Alternate flow   | 1a. The submitting entity cannot connect. A protocol error message is  sent back to the Submitting Entity.                                                                                                                                                                                |
|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Frequency        | This  use  case  will  be  performed  by  each  submitting  entity  (Non- Delegating  NCAs  and  up  to  160  TV/SIs)  to  upload  one  dataset  daily  (including  NCA/ESMA  non-working  days).  Additionally,  in  case  of  erroneous submission some additional uploads can be made. |
| Business rules   | The system will have a maximum limit of 500,000 instruments in each  single  DATINS  file.  The  size  of  a  single  instrument  record  once  compressed is ~ 1 Kbyte.                                                                                                                  |
| Assumptions      | This functionality will be implemented using:  1.  HUBEX: for NCAs not delegating data collection in their jurisdiction  2.  HUBDE: for TV/SIs in the jurisdiction of a NCA delegating data  collection                                                                                   |

## 3.2.3 Route File

| Goal             | The objective of the use case is to route the file to its intended  recipient.                                                                                                                                                                                              |
|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors           | HUBDE  for  TV/SIs  (in  the  jurisdiction  of  a  NCA  delegating  data  collection)- submits data   HUBEX  for NCA (NCA not delegating data collection in its jurisdiction)-  submits data                                                                                |
| Preconditions    | The sender has uploaded the file to its sender's Outgoing folder dedicated  to the ESMA System.                                                                                                                                                                             |
| Trigger          | File uploaded to the sender's outgoing folder.                                                                                                                                                                                                                              |
| Postconditions   | The  file  is  routed  into  the  recipient's  Incoming  folder  dedicated  to  the  ESMA System.                                                                                                                                                                           |
| Normal Flow      | 1. HUBEX/HUBDE reads the file from the sender's Outgoing directory  dedicated to the ESMA System.  2.  HUBEX/HUBDE  verifies  the  compliance  of  the  file  name  with  the  naming conventions.   3. HUBEX/HUBDE copies the file to the sender's Archive/Outgoing folder |
|                  | 2a. The file name is not compliant with the naming conventions expected  by HUBEX.                                                                                                                                                                                          |
| Alternate Flow 1 | Applicable to HUBEX only                                                                                                                                                                                                                                                    |
| Alternate Flow 2 | Applicable to HUBDE only                                                                                                                                                                                                                                                    |

<!-- image -->

|                | 2a. The file name is not compliant with the naming conventions expected  by HUBDE.                                                                                                                                                                                                                                                                                                                                                     |
|----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Frequency      | This use case will be performed in order to route each file uploaded to the  system.  It  is  expected  that  each  Submitting  Entity  (10  NCAs  not  delegating data collection  in their  jurisdiction and  up to  160 TV/SI) will  upload one or several files daily.   It  will  be  used  too  for  feedback file  use case and data  distribution  use  cases.                                                                 |
| Business rules | reference data by 23:59 CET to ESMA.   However, in case no validations are performed by the NCA, the NCA shall  forward the files received as soon as they are received, and no later than  21:30 CET.   However, files received by NCAs from their TV / SI after the 21:00 CET  cut-off time are expected along with the next day data submissions. E.g.  if a file is received at 21:15 it should not be forwarded to ESMA at 21:20, |
| Assumptions    | HUBEX: for NCAs not delegating data collection in their jurisdiction  HUBDE: for TV/SIs in the jurisdiction of a NCA delegating data collection                                                                                                                                                                                                                                                                                        |

## 3.2.4 Perform Transmission Validation

| Goal          | The  goal  of  this  use  case  is  to  validate  that  a  file  has  been  fully  transmitted successfully.                                                                                                                                     |
|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors        | The ESMA System - validates data                                                                                                                                                                                                                 |
| Preconditions | The ESMA System has received a file from a submitting entity.                                                                                                                                                                                    |
| Trigger       | A file with a relevant name has been found in the incoming folder of ESMA  in HUBEX/HUBDE.                                                                                                                                                       |
| Postcondition | ESMA has determined whether the submitted file comply with the  transmission rule of the data collection module.                                                                                                                                 |
| Normal Flow   | 1. The ESMA System checks that the file can be successfully extracted  and  opened,  running  all  checks  described  in  section  Annex  1a:  Transmission Validation Rules (FIL-xxx error only) and section Annex  2: File naming conventions. |

<!-- image -->

|                                | 1a.  The  ESMA  System  discovers  that  the  file  cannot  be  successfully  extracted and at least one of the checks described in section Annex 1a:  Transmission Validation Rules and Annex 2: File naming conventions is  failed.   |
|--------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Alternate Flow 1:  File Errors | 2a. The ESMA System proceeds with generating feedback referring to  the  submitted  file  with  status  'Corrupted'  in  case  FIL-101  error  is  found, 'Rejected' otherwise.                                                         |
|                                | 3a. The ESMA system provides the Feedback file to the submitting entity  as per 'Provide feedback' use case.                                                                                                                            |
| Frequency                      | Once for each file submitted by a submitting entity.                                                                                                                                                                                    |
| Business Rules                 | See Annex 1a: Transmission Validation Rules and Annex 2: File naming  conventions                                                                                                                                                       |
| Assumptions                    | It is assumed that data transmission errors will be a rare exception                                                                                                                                                                    |

## 3.2.5 Perform File Format Validation

| Goal          | The goal of this use case is to validate that a file can be  successfully validated against the XML Schema applicable to the  type of file submitted.                                                                                                                                                |
|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors        | The ESMA System - validates data                                                                                                                                                                                                                                                                     |
| Preconditions | The ESMA System received a file from a submitting entity                                                                                                                                                                                                                                             |
| Trigger       | validation checks of the submitted file.  The  timestamp  of  the  file  is  prior  to  the  applicable  cut-off  time  of  the  submitting  entity  of  the  current  reporting  day.  From  the  Sender  in  the  filename,  the  ESMA System determines the applicable  cut-off time as  follows: |
|               | • If Sender is T&lt;MIC&gt;, then 21:00 CET.  • If Sender is NCAXX and the NCA is delegating Data validations, then  21:30 CET.  • Otherwise 23:59 CET.                                                                                                                                                    |
| Postcondition | ESMA has determined whether the submitted file complies with the XML  Schema applicable to the type of file submitted.                                                                                                                                                                               |
| Normal Flow   | 1.  The ESMA System determines the relevant XML schema using the  latest approved version of the XML Schema applicable to the HUB file  type advertised in the filename of the submitted file as follows :                                                                                           |

<!-- image -->

## Alternate Flow 1: Format Errors

## Alternate Flow 2: Uniqueness Error

## Frequency

- 1.1 for DATINS as per Table 11 - Instrument reference data message table
- 1.2 for DATNWD as per Table 12 - Additional reference data message table
- 1.3 for CANINS  as per Table 10 - Instrument reference data message table
- 2.  The ESMA System checks that the submitted file references the same XML Schema, in the same version and validates the submitted file as follows
- · BizData is validated against head.003.001.01.xsd,
- · BizData/Hdr/AppHdr is validated against head.001.001.01\_ESMA\_UG\_1.0.0.xsd,
- · BizData/Pyld/Document is validated against the XML Schema corresponding to the incoming file's 'HUB File Type' as per tables 10 and 11.
- 3. The ESMA System inserts in the Reporting Files Table as described in Table 13 - Reporting Files table:
- · The timestamp component in the name of the submitted file;
- · The name  of  the submitted  file excluding  the timestamp component.
- 4.  Validation is successful, and no error is reported.
- 5.  The  ESMA  System  proceeds  with  processing  and  validating  the content of the file.
- 1a./2a The ESMA System has confirmed that the file structure does not correspond to the schema.

3a. The ESMA System inserts in the Reporting Files Table as described in Table 13 - Reporting Files table:

- · The timestamp component
- · The  Name  of  the submitted file excluding the timestamp component

6a. The ESMA System proceeds to generating file feedback for the file with the status ' Rejected ' with FIL-104 or FIL-105 as described in Table 32 - Format Validation Rules.

- 4.a/4a.a  The ESMA System raises a violation of PK constraint: a file with the exact same name has been previously submitted to  ESMA.
- 6a. The ESMA System proceeds to generating file feedback for the file with the status ' Rejected ' with FIL-107 Error as described in Table 32 - Format Validation Rules.

Once  for  each  file  submitted  by  a  submitting  entity.  Each  entity  is expected  to  submit  at  least  one  file  but  can  also  make  multiple submissions due to failed validation, corrections or file size considerations.

<!-- image -->

| Business Rules   | See sections:  Annex 1b: Format Validation Rules  Annex 2: File naming conventions  XML Messages                                 |
|------------------|----------------------------------------------------------------------------------------------------------------------------------|
| Assumptions      | It is assumed that format errors will be a rare exception as XML validation  should be first performed by the submitting entity. |

## 3.2.6 Provide Feedback

This use case is dependant of the type of data submitted. For reference data, please refer to use case 3.3.8 Provide File Feedback  and for Non-working days please refer to use case 3.8.2.2 Non-working day data Collection.

## 3.2.7 Download file

| Goal           | The  objective  of  the  use  case  is  to  allow  the  user  to  download  feedback  messages  received  from  the  system  or  to  download  consolidated files.                                                                                                                                                                     |
|----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors         | TV/SI (in the jurisdiction of a NCA delegating data collection) - downloads  feedback                                                                                                                                                                                                                                                  |
| Preconditions  | The submitting entity has established access rights to the system.                                                                                                                                                                                                                                                                     |
| Trigger        | The  use  case  is  triggered  by  the  user  willing  to  download  a  feedback  message file.                                                                                                                                                                                                                                        |
| Postconditions | Feedback file is downloaded by the submitting entity of the original file in  HUBEX/HUBDE.  Aggregated data file is  downloaded by a NCA from the Public folder of  HUBEX dedicated to the ESMA System.                                                                                                                                |
| Normal Flow    | 1.  The  submitting  entity  connects  and  logs  in  to  the  system  using  sFTP/FTPs protocol.  2.  Once  connected  and  authenticated  the  submitting  entity  downloads  files  from  its  incoming  folder  dedicated  to  the  ESMA  System  (for  feedback  files)  and  from  the  Public  folder  dedicated  to  the  ESMA |

<!-- image -->

|                  | 4.  In  case  of  feedback  file,  the  file  is  removed  automatically  from  the  Incoming directory and copied to Archive/Incoming directory. The file is  maintained in the archive for up to 10 days 1 .   |
|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|                  | 5.  The submitting entity disconnects from the system.                                                                                                                                                           |
| Alternate flow 1 |                                                                                                                                                                                                                  |
|                  | This use case will be performed in order to download feedback files for  every  submission.  A  single  feedback  file  will  be  returned  for  each  file  submitted by the submitting entity.                 |
|                  | N/A                                                                                                                                                                                                              |
| Assumptions      | ESMA's HUBEX will be used to implement this functionality for NCA  ESMA's HUBDE will be used to implement this functionality for TV/SI.                                                                          |

## 3.3  Instruments Reference Data processing

## 3.3.1 Use case overview

FIGURE 4 - 'ON THE FLY' PROCESSING USE CASE DIAGRAM

<!-- image -->

FIGURE 5 - END-OF-DAY / POST-PROCESSING USE CASE DIAGRAM

<!-- image -->

<!-- image -->

## 3.3.2 Instruments Reference Data records processing overview

The ESMA System processes the instrument records in two phases: 'Processing Phase' and 'PostProcessing Phase'.

| Concept                                                                                                                                                                                                                                                                                                                 | Definition                           |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------|
| on the fly processing of incoming files, processing of records.                                                                                                                                                                                                                                                         | Processing  Phase                    |
| end of day processing of records across-TV/SI, determination or update of  the RCA, generation, distribution and publication of aggregated  instruments records.                                                                                                                                                        | Post- Processing  phase              |
| The day of the next reference data publication                                                                                                                                                                                                                                                                          | Next  publication  date (T)          |
| The time before which a submitting entity shall submit data to ESMA: 23:59 CET for a non-delegating NCA (in charge of data collection in its  jurisdiction and in charge of performing data content validations).  21:30 CET for a NCA not delegating data collection but delegating data  content validations to ESMA. | Applicable  submission  cut-off time |

<!-- image -->

## 3.3.2.1 On the fly processing phase

The ESMA System processes the submitted file on the fly. However, files submitted after the applicable cut-off time on day T will only start being processed when the consistent reference data table prepared for day T+1 publication is ready.

The ESMA System registers in a dedicated table all records from the submitted file which successfully passed data transmission, data format, and data  content  validations. This  table  is  called Received Reference data table 2 in this document and is constantly updated. As submitting entities are expected to repeatedly report the same information every day for instruments that do not change, the system will receive the same (ISIN, MIC, RTS23 fields) record every day. Multiple submission of the exact same (ISIN, MIC, RTS23 fields) by the same Submitting Entity are considered the same record and will be stored under the same RECORD\_ID. The ESMA System will keep track of the list of all reception date times of each record, at the level of ESMA and at the level of the NCA. The system allows reporting entities to cancel an ISIN-MIC combination, in case they have previously reported such a record by mistake  (the  cancelled  records  are  marked  respectively  in  the Received  Reference  data table). Reporting entities are also allowed to report again the (ISIN, MIC) record, and in that case the system treats it as normal (non-cancelled) ISIN-MIC record again.

| Attribute 3                                                                                                                                                                                                                                                                                                                       | Definition                                |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------|
| The unique identifier of a version of an instrument reference data record  received by the ESMA System. This field is used internally by the system.  Multiple submission of the exact same (ISIN, MIC, RTS23 fields) by the  same Submitting Entity are considered the same record and will be stored  under the same RECORD\_ID. | RECORD\_ID  [PK]                           |
| The hash code of the received record RECORD\_ID generated with the  RTS 23 fields.                                                                                                                                                                                                                                                 | Hash Code of  the record  received (HCRR) |
| Segment MIC for the TV/SI, where available,  otherwise operating MIC  [RTS23 (field 6)] - ISO10383.                                                                                                                                                                                                                               | MIC                                       |
| Code  used  to  identify  the  financial  instrument  [RTS23  (field  1)]  -  ISO  6166.                                                                                                                                                                                                                                          | ISIN                                      |
| Every other RTS23 fields except ISIN and MIC in 'RTS23 Fields table' in   section 6.9 RTS23 Fields table.                                                                                                                                                                                                                         | Other RTS23  fields                       |
| The identification code of the Submitting entity sending the reference data  file to ESMA. Submitting Entity can be a MIC code (in case it is a TV/SI; it  may be segment MIC or an operating MIC) or a Country Code (in case it  is  a  NCA).  It  is  based  on  the  last  file  received  containing  the  record  RECORD\_ID. | Submitting  Entity                        |

<!-- image -->

TABLE 1 - FIELDS OF RECEIVED REFERENCE DATA TABLE

| The country code of the NCA under which jurisdiction the TV/SI (RTS23  field  6)  is.  Populated  through dedicated  interface with ESMA Registers  System (TV/SI Registers).                  | Country of  jurisdiction of  the TV/SI   |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------|
| List  of  ESMA  Reception  Date  Time  of  the  record  RECORD\_ID.  The  timestamp calculated by HUBEX/HUBDE of the file containing the record  is the ESMA Reception Date Time of the record. | ESMA Reception  Date Time List           |
| List of NCA Reception Date Time a NCA received the record RECORD\_ID  from the TV/SI. Used for NCAs not delegating data collection.                                                             | NCA reception  Date time List            |
| The &lt;Key1&gt;-&lt;Key2&gt; in the name of the last file received containing the  record RECORD\_ID.                                                                                                      | FileSequenceId                           |
| Indicates whether the record RECORD\_ID is the latest record received for  the instrument (RTS23 field 1) on the TV/SI (RTS23 field 6).                                                         | Latest received  flag                    |
| A flag indicating whether the record RECORD\_ID is consistent with the  record flagged as the reference for that instrument (please refer to RCA  data attributes table).                       | Consistent flag                          |
| A status indicating whether the record is a reference or a Cancelled one.  Eligible values are as follows :  REFR : Reference record (default value)  CANC : Cancelled record                  | Received Status                          |

## 3.3.2.2 End of day / Post-Processing phase

As soon as possible after the NCAs cut-off (00:00), the ESMA system will extract from the ' Received reference data table ', all the records' RECORD\_ID which are flagged as Latest received AND:

- · have been newly submitted before the applicable submission cut-off time.

Those records are stored in a daily working table called ' New and On time records table '. The following fields are composing that table:

| Attribute                                                                                                                                            | Definition      |
|------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
| The unique identifier of a version of an instrument reference data record  received by the ESMA System. This field is used internally by the system. | RECORD\_ID  [PK] |
| Code used to identify the financial instrument [RTS23 (field 1)]. ISO 6166.                                                                          | ISIN            |

<!-- image -->

TABLE 2 - FIELDS OF NEW AND ON TIME RECORDS TABLE

| A status indicating whether the record is a reference or a Cancelled one.  Eligible values are as follows :  REFR : Reference record (default value)  CANC : Cancelled record   | Received  Status                                    |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| The latest ESMA reception date time of the record RECORD\_ID.                                                                                                                    | Latest ESMA  Reception date  time                   |
| ' Trading  Venue  dependent '  fields   in  'RTS23  Fields  table '  as  listed  in  section 6.9 RTS23 Fields table.                                                            | Trading Venue  dependent  fields                    |
| ' Free-text fields used for consistency checks ' fields  in 'RTS23 Fields table '  as listed in section 6.9 RTS23 Fields table.                                                 | Free-text fields  used for  consistency  checks     |
| ' Non-free-text fields used for consistency checks ' fields   in  'RTS23 Fields  table ' as listed in section 6.9 RTS23 Fields table.                                           | Non-free text  fields used for  consistency  checks |

For all the non-cancelled instruments, the ESMA System determines the RCA of the instrument and determines the record which holds the RTS23 fields to be used consistently across all TV/SI for the instrument  [ RCA  record ].  For  that  purpose,  a  set  of  attributes  are  calculated.  In  addition  to  the determination of RCA, the system enables to reassess the RCA (of any instrument still not terminated) under a request process manually initiated by a NCA user or and an ESMA Business Administrator, or automatically on a yearly basis (for 'equity / equity Like' instruments only). For that purpose, we will use the ' RCA data table ' with ISIN as PK.

| Attribute                                                                                                                                                                                                                                                                                                                | Definition    |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Code used to identify the financial instrument [RTS23 (field 1)] - ISO 6166.                                                                                                                                                                                                                                             | ISIN          |
| The  country  of  the  Relevant  Competent  Authority  of  the  ISIN  as  last  determined by the system for the upcoming publication.                                                                                                                                                                                   | Upcoming  RCA |
| The RECORD\_ID of the record in the Received Reference data table which  holds the RTS23 fields to be used consistently across all TV/SI. In that case,  all consistency checks are performed against a subset of RTS 23 fields of  that record. There is only one RCA record [RECORD\_ID] per ISIN at any  point in time. | RCA record    |

<!-- image -->

TABLE 3 - FIELDS OF RCA DATA TABLE

| RCA record  MIC  The MIC of the RCA record                                                                                                                                                                                                           |                                              |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------|
| The earliest ' Date of request for admission '  (RTS 23 field 10) or ' Date of  admission to trading or date of first trade '  (RTS 23 field 11)' of the  ISIN  across all TV/SI.                                                                    | Earliest RTS23  field 10  or  RTS23 field 11 |
| The earliest ' Date of admission to trading or date of first trade ' (RTS 23 field  11) of the ISIN across all TV/SI.                                                                                                                                | Earliest RTS23  field 11                     |
| The date of reception of the first record received by ESMA for the instrument  ISIN across all TV/SI.                                                                                                                                                | Earliest ESMA  date  time of  reception      |
| The RECORD\_ID of the first record received by ESMA for the instrument  ISIN across all TV/SI.                                                                                                                                                        | Earliest ESMA  received  RECORD\_ID           |
| The date and time of reception of the first record received by a NCA for that  ISIN across all TV/SI. It is used when determining the RCA based on the                                                                                               | Earliest NCA  date time of                   |
| RECORD\_ID  The RECORD\_ID of the first record received by a NCA for the instrument  ISIN across all TV/SI. It is used when determining the RCA based on the  earliest reception date time.                                                            | Earliest NCA  received                       |
| A number indicating which rule was used to calculate the Upcoming RCA of  the ISIN.                                                                                                                                                                  | Applicable  RCA  determination  rule         |
| A  flag  indicating  if  RCA  needs  to  be  recalculated  (1  =  needs  to  be  recalculated, 0 = does not need to be recalculated)                                                                                                                 | Need to  compute RCA                         |
| A flag indicating whether the upcoming RCA of the ISIN has been changed  following a RCA change request process or following a yearly reassessment.  In that case, the system does not need any more to perform calculation of  the RCA of the ISIN. | Overridden  flag                             |
| A flag indicating whether the upcoming RCA of ISIN was updated during the  current day. Reset by default to FALSE during the Post-processing period  as per section End-of day processing / Update consistent reference data  table [3.3.10].        | Modification  flag                           |

<!-- image -->

In order to cover the 'RCA manual change processes' for an ISIN as defined in BRD 70, we will use another table ('RCA manual change process data table') to store temporarily the necessary attributes identifying the request  initiated by the requester entity  (NCAs, ESMA) in a pending  status  until that request is approved by the approver entity (NCAs). Once approved, the change of RCA is applied:

- · Upcoming RCA in the RCA reference data table is replaced by the requested RCA.
- · RCA record is recalculated for that ISIN and is updated accordingly in the RCA data table.
- · Upcoming RCA of derivatives having that ISIN as single underlying in the RCA reference data table  is replaced by the requested RCA provided that the corresponding RCA has approved the change.
- · RCA record of derivatives having that ISIN as single underlying is recalculated for that ISIN and is updated accordingly in the RCA data table.

| Attribute                                                                                                                                                           | Definition                 |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------|
| A unique identifier of the RCA change request used to link RCA change  requests automatically generated by the system when propagating a RCA  change to derivatives | Request ID                 |
| Code used to identify the financial instrument [RTS23 (field 1)] - ISO 6166  to which the RCA change relates.                                                       | ISIN                       |
| The RCA of the  ISIN requested but  still  not  approved  through  the  'RCA  change request process'.                                                              | Requested  RCA             |
| The  upcoming RCA of the ISIN  in the RCA data table  at the time of the  request.                                                                                  | Upcoming  RCA              |
| A free text entered by the requester entity's user to explain the reason of  the requested change.                                                                  | Reason for  manual  change |
| The status of the manual change request. Pending [Requested but still not  approved] / Approved [Requested and approved]/ Rejected [Requested but  rejected].       | Request  status            |
| The ISO country Code of the NCA, in case a NCA requests the RCA change.  ESMA, in case the ESMA business Administrator requests the RCA change.                     | Requester  entity          |
| The  ISO  country  code  of  the  NCA  which  is  responsible  for  acting  (approving/rejecting) on the request.                                                   | Approver  entity           |
| The date when the upcoming RCA becomes applicable.                                                                                                                  | Date of  application       |

<!-- image -->

TABLE 4 - FIELDS OF RCA MANUAL CHANGE PROCESS DATA TABLE

| Related   | In  case of a RCA change request automatically generated by the system  when propagating a RCA change to derivatives, this field holds the Request  ID of the RCA change request which concerns the underlying instrument.   |
|-----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Request   |                                                                                                                                                                                                                              |

For Equity (Equity-like) instruments, in order to cover the 'yearly RCA reassessment' as defined in BRD 69. (Automatic yearly reassessment), we will use another table ('RCA Yearly reassessment process data table') to store temporarily the result of the yearly turnover calculation which is triggered as soon as possible when all necessary data are collected by the FIRDS transparency System. Unless otherwise agreed by the concerned NCAs, the result of the reassessment process will become applicable when preparing the data for the 1 st  of April publication.

TABLE 5 - FIELDS OF RCA YEARLY REASSESSMENT PROCESS DATA TABLE

|                                                                                                                                                                                                                                                           | Attribute  Definition   |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------|
| The year of the reassessment.                                                                                                                                                                                                                             | Year                    |
| Code used to identify the financial instrument [RTS23 (field 1)] - ISO 6166  to which the RCA change relates.                                                                                                                                             | ISIN                    |
| The list of ISIN(s), if any, related to instruments which have the ISIN as single  underlying (according to the content of the consistent reference data table).                                                                                          | Derivative ISIN  List   |
| The RCA resulting from the yearly reassessment for the 'ISIN' and for the  'Year'.  Unless otherwise agreed by the concerned NCAs, the 'Reassessed  RCA' becomes the 'Upcoming RCA' for this ISIN on the 1 st  of April of the  year of the reassessment. | Reassessed  RCA         |

Once RCA determination has taken place, the system will add to the 'NEW AND ON TIME RECORDS TABLE' all the records' RECORD\_ID which are flagged as Latest received AND

- · are related to an instrument which upcoming RCA has been updated during the current reporting day (Modification flag in the RCA data table is true) .

Next,  the  ESMA  System  will  extract  from  the 'Received  reference  data  table ',  for  each  submitted instrument, the records which are flagged as the RCA record of those instruments and stores them in daily working table called ' Reference Fields table '.

| Attribute   | Definition                                                                  |
|-------------|-----------------------------------------------------------------------------|
| ISIN        | Code used to identify the financial instrument [RTS23 (field 1)]. ISO 6166. |

<!-- image -->

TABLE 6 - FIELDS OF REFERENCE FIELDS TABLE

| The country of the Relevant Competent Authority of that instrument, as last  determined by the system for the upcoming publication.   | Upcoming RCA                                        |
|---------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| ' Free-text fields used for consistency checks ' fields  in 'RTS23 Fields table '  as listed in section 6.9 RTS23 Fields table.       | Free-text fields  used for  consistency  checks     |
| ' Non-free-text fields used for consistency checks ' fields  in 'RTS23 Fields  table ' as listed in section 6.9 RTS23 Fields table.   | Non-free-text  fields used for  consistency  checks |

Finally, as per section 3.3.10, the ESMA system updates, recursively based on the already existing records,  a  new  table  called  ' Consistent  Reference  Data  Table' 4 as  follows:  for  each  record RECORD\_ID in the New and On time data table, the ESMA System computes a new record by joining with the ISIN the content of the Reference Fields table. The validity period of the created record, defined by ValidFromDate and ValidToDate of each (ISIN, MIC) record is recalculated by comparing the new record with the already one existing in the ' Consistent Reference Data Table' .

| Attribute                                                                                                                                                                                                                                   | Definition                       |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------|
| Code used to identify the financial instrument [RTS23 (field 1)]. ISO 6166.                                                                                                                                                                 | ISIN [PK]                        |
| Segment  MIC  for  the  TV/SI,  where  available,  otherwise  operating  MIC  [RTS23 (field 6)] - ISO10383.                                                                                                                                 | MIC [PK]                         |
| Every other RTS23 fields except ISIN and MIC in 'RTS23 Fields table' in  section RTS23 Fields table.                                                                                                                                        | Other RTS23 fields               |
| The latest ESMA reception date time of the record (ISIN, MIC).                                                                                                                                                                              | Latest ESMA  Reception date time |
| The first calendar day when the consistent reference data table record is  part of the full file.                                                                                                                                           | PublishedFromDate                |
| The last calendar day when the consistent reference data table record is  part of the full file.                                                                                                                                            | PublishedToDate                  |
| The first day of the period during which the consistent reference data table  record  was  the  latest  reference  data  description  of  the  (ISIN,  MIC).  According  to  that  date,  the  ESMA  System  regenerates,  distributes  and | ValidFromDate                    |

<!-- image -->

TABLE 7 - FIELDS OF CONSISTENT REFERENCE DATA TABLE

| published  the  Full,  Delta  and  Invalid  records  files  and  updates  the  publication database for the search interface                                                                                                                                                                                                                                             |                                 |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------|
| The last day of the period during which the consistent reference data table  record  was  the  latest  reference  data  description  of  the  (ISIN,  MIC).  According  to  that  date,  the  ESMA  System  regenerates,  distributes  and  published  the  Full,  Delta  and  Invalid  records  files  and  updates  the  publication database for the search interface | ValidToDate  Latest record flag |
| A  flag  indicating  that  this  record  is  the  latest  version  of  reference  data  published for this (ISIN, MIC) combination.  NB : in  case  of  an  (ISIN,  MIC)  reported  late  after  it  was  terminated  and  therefore never published, the version of the reference data which was last  received for this (ISIN, MIC) combination                        |                                 |
| A flag indicating that (ISIN, MIC) was never published. TRUE in the case  when an instrument is only ever reported late after termination date.                                                                                                                                                                                                                          | NeverPublished  flag            |
| The Consistent Status of the record RECORD\_ID. A record can be of status:  •   'New' in case the record is not part of the previous Full file and but part                                                                                                                                                                                                               | Consistent Status               |
| of the current Full file.  •   'Modified' in case the record was part of the previous Full file and but is                                                                                                                                                                                                                                                               |                                 |
| part the current Full file and which at least of one of its RTS23 fields or  RCA has been modified from the previous Full file.  •  'Terminated': an (ISIN, MIC) record which is part of the previous Full file                                                                                                                                                          |                                 |
| •  'Cancelled'  :  an  (ISIN-MIC)  record,  in  case  reporting  entities  have  previously reported such a record by mistake.                                                                                                                                                                                                                                           |                                 |
| This cancelled record should be a part of FULCAN file only.                                                                                                                                                                                                                                                                                                              |                                 |
| A flag indicating whether the record is consistent with the RCA record of  that instrument (please refer to RCA data attributes table).                                                                                                                                                                                                                                  | Consistent flag                 |

Once the Consistent Reference Data Table is successfully updated, the ESMA System generates the full/delta/invalid/cancellation  records  files  for  both  NCA  and  Public  users.  The  ESMA  System  then triggers the distribution of the NCA's file to NCAs. Once the distribution is successfully terminated, the publication is triggered. Public files are uploaded onto the download interface in the ESMA publication interface.  In addition, the ESMA System will offer a web interface to search and display reference data as  per  contained  in  the  Consistent  Reference  Data  Table.  In  order  to  ensure  security  of  the  data contained in the Consistent Reference data table, the public user will access a copy of that table, the publication table, which is updated on daily basis during the publication process.

<!-- image -->

In  addition,  the  system  shall  have  mechanisms  in  place  to  avoid  that  interfacing  systems  needing access reference data during the 00:00 - 08:00 period retrieve inconsistent data due to ongoing updates taking place during the post-processing phase. Proposals on the best approach will be expected from the provider in charge of the technical specifications and development of the system 5 .

## 3.3.3 Perform Reference Data Content Validation

| Goal                                     | The goal of this use case is for individual records within a received file  to be validated by ESMA.                                                                                                                                                                                                                                      |
|------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors                                   | TV/SI (in the jurisdiction of a delegating NCA) - submits data  NCA (not delegating data collection in its jurisdiction) - submits data  The ESMA System - validates data                                                                                                                                                                 |
| Preconditions                            | ESMA has received and successfully validated the format of a received file                                                                                                                                                                                                                                                                |
| Trigger                                  | ESMA has received and successfully validated the format of a received file                                                                                                                                                                                                                                                                |
| Postcondition                            | The ESMA System has extracted the subset of records which passed the  data content validations.                                                                                                                                                                                                                                           |
| Normal Flow                              | 1.  The  ESMA  System  validates  each  record  against  data  all  content  validation  rules  sequentially  in  the  order  as  described  in  Table  33  -  Reference Data Content and Consistency Validation Rules.                                                                                                                   |
| Alternate  Flow 1:  Preliminary  Content | 1a. The ESMA System validates each record against data content validation  rules sequentially in the order stated in Annex 1c. One of the following  checks INS-101, INS-102 and INS-103 fails. The ESMA System logs the  error,  stops  the  validation  of  the  record  and  runs  again  the  validation  process on the next record. |
| Errors  Alternate  Flow 2:               | 2a. The ESMA System logs the erroneous records and the list of errors and  rejects the erroneous record.  1b. The ESMA System validates each record against data content validation  rules  sequentially  in the order  as  described  in Table 33 - Reference Data  Content and Consistency Validation Rules.                            |
| Blocking  content  validation  Errors    | Checks INS-101, INS-102, INS-103 are passed.   At least one of the following checks INS-104 to INS-125 or INS-129 to INS- 130 fails.                                                                                                                                                                                                      |

<!-- image -->

|                              | 2c. The ESMA System logs the erroneous records and the list of errors and  rejects the erroneous record,                                                                                                                                                                                                     |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Alternate  Flow 3:  Warnings | 1b. The ESMA System validates each record against checks INS-126 and  INS-127 as described in Table 33 - Reference Data Content and Consistency  Validation Rules. Each time a check fails the ESMA System logs the error but  continues the validation process of that record until the last content check. |
| Frequency                    | Once each file is submitted by a submitting entity. Each entity is expected to  submit at least one file per day but can also make multiple submissions to  address errors on previous submission.                                                                                                           |
| Business  Rules              | Table 33 - Reference Data Content and Consistency Validation Rules.                                                                                                                                                                                                                                          |
| Assumptions                  | N/A                                                                                                                                                                                                                                                                                                          |

## 3.3.4 Update the Received Reference Data Table

| Goal                                                          | The goal of this use case is  to update the Received Reference Data  Table  according  to  a  submitted  record  which  passed  the  content  validation checks.                                                                                                                                                                                             |
|---------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors                                                        | The ESMA System.                                                                                                                                                                                                                                                                                                                                             |
| Preconditions                                                 | The ESMA System has performed the content validation on the submitted  record.                                                                                                                                                                                                                                                                               |
| Trigger                                                       | The ESMA System has successfully validated the content of the submitted  record.                                                                                                                                                                                                                                                                             |
| Postcondition                                                 | The ESMA System has updated the Received Reference Data Table  according to the submitted record.                                                                                                                                                                                                                                                            |
|                                                               | In case the system identifies the submitted record as 'ReferenceRcd'  then                                                                                                                                                                                                                                                                                   |
| Normal Flow  (Referenced  records -  DATINS file  submission) | calculating the hash value of the whole set of all RTS23 fields, using a  hash  function  with  sufficient  collision  resistance  to  ensure  that  two  different  versions  of the RTS23 fields will  not  lead to the  same  hash  value for the same ISIN, MIC combination 6 .  2.  The ESMA System checks whether it exists in the 'Received reference |
| Normal Flow  (Referenced  records -  DATINS file  submission) |                                                                                                                                                                                                                                                                                                                                                              |

<!-- image -->

- 3.1 checks whether it exists in the Received Reference Data Table an (ISIN,  MIC)  record  which  latest  Received  flag  is  TRUE,  called Previous\_Record
- 3.2 computes  a  new  unused  RECORD\_ID  for  the  submitted  record (e.g. RECORD\_ID starts at 1. and is incremented each time the system creates a new record).
- 3.3 Inserts in the 'Received  reference  data  table'  the following attributes:
- · New RECORD\_ID calculated in step 3.1
- · HCRR calculated in step 1.
- · Submitted RTS23 fields
- · Submitting Entity Code is set to the Sender in the filename of the submitted file
- · Received Status to 'REFR'

[ which shall be the HUBSenderCode associated to the MIC of the submitted record as per Reporting Flow view ( Table 19 - Reporting Flow view ) according to the passed content validation.]

- · Country of jurisdiction of the 'TV/SI (RTS23 field 6)'  with the NCA country associated to the MIC of the submitted record in the Trading Venue Mapping view (based on records with ValidityEndDate is NULL).
- · Latest Received flag to FALSE
- · Consistent flag to  FALSE
- · FileSequenceId to &lt;Key1&gt;-&lt;Key2&gt; in the name  of the submitted file.
- 3.4 Initiates  the  list  of  ESMA  Reception  Date  Time  for  that  New RECORD\_ID with the ESMA Reception Date Time of the submitted record.
- 3.5 Initiates the  list of  NCA  Reception  Date  Time  for  that  New RECORD\_ID with the NCA Reception Date Time of the submitted record if provided.
- 4. In case a record is found in step 2, the ESMA System:
- · adds the ESMA Reception Date Time of the submitted record to the list of ESMA reception date time related to the found record.
- · adds, if provided, the NCA reception date time to the list of NCA reception date time related to the record found.
- · updates the FileSequenceId with &lt;Key1&gt;-&lt;Key2&gt; in the name of the submitted file.
- · updates the Submitting Entity with the Sender in the name of the submitted file.
- · Updates the country of jurisdiction of the 'TV/SI (RTS23 field 6)' with  the  NCA  country  code  associated  to  the  MIC  of  the submitted record in the Trading Venue Mapping view (based on records with ValidityEndDate as NULL)
- 5. The  System  updates  the  latest  received  flag  of  the  (submitted  ISIN, submitted MIC) records as follows:
- · If ESMA Reception Date Time of the submitted record is later than or equal to the latest ESMA Reception Date Time across

<!-- image -->

## Alternate Flow (Cancelled records CANINS file submission)

all records having the same (ISIN, MIC), set 'Last received flag' to FALSE for all these records, and set 'Last received flag' to TRUE for the submitted record.

In case the system identifies the submitted record as 'CancelledRcd' then

- 1. The ESMA system identifies the record with the same ISIN, MIC and Latest Received flag as TRUE (Previous\_Record)
- 2. Computes a new unused RECORD\_ID for the cancelled record (e.g. RECORD\_ID starts at 1. and is incremented each time)
- 3. Inserts in the 'Received reference data table' the following attributes:
- · New RECORD\_ID calculated in step 2
- · Submitting Entity Code is set to the Sender in the filename of the submitted file

[ which shall be the HUBSenderCode associated to the MIC of the submitted record as per Reporting Flow view ( Table 19 - Reporting Flow view ) according to the passed content validation .

- · Received Status to 'CANC'
- · Country of jurisdiction of the 'TV/SI (RTS23 field 6)' with the NCA country associated to the MIC of the submitted record in the Trading Venue Mapping view (based on records with ValidityEndDate is NULL).
- · Latest Received flag to FALSE
- · Consistent flag to  FALSE
- · FileSequenceId to &lt;Key1&gt;-&lt;Key2&gt; in the name  of the submitted file.
- 4. Inserts in the 'Received reference data table' the following attributes, from the  Previous\_Record
- · RTS23 Field 2 - Instrument full name.
- · RTS23 Field 3 - Instrument classification: A complete and accurate CFI code.
- · RTS23 Field 4 -Commodities derivative indicator: Indication as to whether the financial instrument falls within the definition of commodities  derivative  under  Article 2(1)(30) of Regulation (EU) No 600/2014.
- · RTS23 Field 13 - Notional currency 1: Currency in which the notional is denominated.
- · RTS23 Field 5 -  Issuer or operator of the trading venue identifier: LEI of issuer or trading venue operator.
- · RTS23 Field 8 - Request for admission to trading by issuer: Whether the issuer of the financial instrument has requested or approved the trading or admission to trading of their financial instruments on a trading venue.
- 5. The ESMA System determines the HCRR of the produced record, by calculating the hash value of the whole set of all RTS23 fields, using a hash  function  with  sufficient  collision  resistance  to  ensure  that  two different  versions  of the RTS23 fields will  not  lead to the  same  hash value for the same ISIN, MIC combination 7 .

<!-- image -->

- 6. Updates in the 'Received reference data table' the HCRR as calculated in previous step
- 7. Initiates the list of ESMA  Reception  Date Time for that New RECORD\_ID with the ESMA Reception Date  Time  of  the  submitted record.
- 8. The  system  updates  the  latest  received  flag  of  the  (submitted  ISIN, submitted MIC) records as follows:
- · If ESMA Reception Date Time of the submitted record is later than or equal to the latest ESMA Reception Date Time across all records having the same (ISIN, MIC), set 'Last received flag' to FALSE for all  these  records,  and  set  'Last  received  flag'  to  TRUE  for  the submitted record.

## Frequency Business Rules

Assumptions

N/A

## 3.3.5 Update the RCA data table

| Goal          | The goal of this use case is to update the RCA reference data table for  an ISIN.                                                                                                                                                                                                                                                                                                                                                                                                            |
|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors        | The ESMA System                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Preconditions | The ESMA System has finished processing the files received before the  last applicable cut-off time.                                                                                                                                                                                                                                                                                                                                                                                         |
| Trigger       | Post-processing phase                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Postcondition | The ESMA System has updated the RCA Data Table for the ISIN.                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Normal Flow   | submitted  record's  ISIN  and  the  withdrawn  flag  of  the  submitted  record's ' Country of jurisdiction of the TV/SI'  is FALSE in the 'NCA  reference data table' and the Received Status is 'REFR', the ESMA  System inserts a new row in the RCA data table with the following  attributes:  • ISIN   • RCA  record,  Upcoming  RCA,  Applicable  RCA  determination rule,  • Modification flag are set to NULL;   • 'Need to compute RCA' to 1;  • Overridden flag is set to FALSE; |

<!-- image -->

Frequency

Business Rules

Assumptions

N/A

- 2.1 Extracts from the ' Received Reference data table '  the  ISIN's records which ' Latest received flag ' is TRUE, 'Withdrawn flag' is FALSE and the Received Status is 'REFR'.
- 2.2 Takes the earliest not-null field 11 across all MIC. In case all field 11 are NULL, set to NULL.
- 3. The ESMA system updates the 'Earliest RTS23 field 10 or RTS23 field 11' field of the submitted instrument as follows:
- 3.1 Extracts from the 'Received Reference data table' the ISIN's records which 'Latest received flag' is TRUE, 'Withdrawn flag' is FALSE and the Received Status is 'REFR'.
- 3.2 Takes the earliest field 10 or field 11 [in case Field 10 is NULL] across all MIC.
- 4. The ESMA system updates the 'Earliest ESMA reception date time of  reception'  and  'Earliest  ESMA  received  RECORD\_ID'  of  the submitted instrument as follows:
- 4.1 Extracts from the 'Received Reference data table' the ISIN's records for which 'Withdrawn flag' is FALSE and the Received Status is 'REFR'.
- 4.2 Takes  the  ESMA  reception  date  time  of  the  record  and  the RECORD\_ID with earliest ESMA reception date time.
- 5. The ESMA system updates the 'Earliest NCA reception date time of reception'  and  'Earliest  NCA  received  RECORD\_ID ' field  of  the submitted instrument as follows:
- 5.1 Extracts from the 'Received Reference data table' the ISIN's records  for  which  the  'Withdrawn  flag'  is  FALSE  and  the Received Status is 'REFR'.
- 5.2 Takes  the  NCA  reception  date  time  of  the  record  and  the RECORD\_ID with earliest NCA reception date time.

<!-- image -->

## 3.3.6 Determine RCA

3.3.6.1 Overview

FIGURE 6 - DETERMINE RCA USE CASE DIAGRAM

<!-- image -->

3.3.6.2 Determine Applicable RCA determination rule

| Goal          | The objective of the use case is to determine which RCA determination  rule should be applied to determine the upcoming RCA of an ISIN.                     |
|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors        | The ESMA System                                                                                                                                             |
| Preconditions | The ESMA System has extracted from a submitted file  a  reference data  record that has passed the transmission, format, and content validations.           |
|               | AND                                                                                                                                                         |
|               | The submitted record has Received Status as 'REFR' and a newly allocated  RECORD\_ID: ESMA submission date time List of that record contains a  single date. |

<!-- image -->

| Trigger                             | Data content validation successfully completed.                                                                                                                                                                                                                                                                                                                                                                                                       |
|-------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|                                     | The ESMA system has updated the 'Applicable RCA determination rule' of  the records' ISIN in the 'RCA data table' as follows:   • Set to 1 in case the upcoming RCA needs to be recalculated based on  Date of admission to trading or date or first trade.  • Set to 2 in case the upcoming RCA needs to be recalculated based on  Date  of  request  for  admission  (if  applicable)  or  Date  of  admission  to  trading or date or first trade. |
| Postconditions                      | • Set to 3 in case the upcoming RCA needs to be recalculated based on  LEI.  • Set to 4 in case the upcoming RCA needs to be recalculated based on                                                                                                                                                                                                                                                                                                    |
| Postconditions                      | the underlying.                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Postconditions                      | • Set to 5 in case the upcoming RCA needs to be recalculated based on  the reception dates.                                                                                                                                                                                                                                                                                                                                                           |
| Postconditions                      | • Set to 6 in case the upcoming RCA needs to be recalculated based on  the Date of admission to trading or date or first trade of the underlying.                                                                                                                                                                                                                                                                                                     |
| Postconditions                      | • Set to 7 in case the upcoming RCA needs to be retrieved from RDS.                                                                                                                                                                                                                                                                                                                                                                                   |
| Alternate flow  1:  Overridden  RCA | current Reference Data System..  In case the Overridden flag of the submitted instrument in the 'RCA  data table' is TRUE, the system updates the RCA record as follows:  3.  The  system  sets  the  'Need  to  compute  RCA'  flag  of  the  submitted  instrument to 0.                                                                                                                                                                            |

<!-- image -->

Alternate flow 2: Instrument did not yet start being traded and RCA has not been overridden as  per  section  3.3.6.8  Determine  the  RCA  record  of  the  submitted instrument.

Otherwise, the  upcoming RCA of the submitted record  needs to be calculated,  in  which  case  the  System  determines  the  appropriate method for that calculation as follows:

- 1. The  system  extracts  from  the  submitted  record  the  instrument classification (CFI\_CODE). The system extracts from the Received Reference Data Table the CFI Code of all records with
- a. same ISIN
- b. Latest Received flag = TRUE
- c. Termination  date  time  is  NULL  or  is  greater  than  or equal to T-1.
- d. 'Withdrawn flag' of the submitted record's ' Country of jurisdiction of the TV/SI' is FALSE in the 'NCA reference data table.
- e. Received Status is 'REFR'

In  case  no  records  retrieved  the  system  extracts  from  the Received Reference Data Table the CFI Code of all  records with

{covers the case regarding new records with termination date in the past}

- a. same ISIN
- b. Latest Received flag = TRUE
- c. 'Withdrawn flag' of the submitted record's ' Country of jurisdiction of the TV/SI' is FALSE in the 'NCA reference data table.
- d. Received Status is 'REFR'
- 2. For each distinct CFI Code returned, the system finds the matching 'CFI  construct'  pattern  in  the  CFI  /  RCA  rule  mapping  table  as follows:
- · where an alphabetic character is used at a given position in the 'CFI construct' pattern, it must match exactly the CFI code character at the same position;
- · where a wildcard (*) character is used at a given position in the  'CFI  construct'  pattern,  any  character  at  the  same position in the CFI code matches.

The CFI code's 'Applicable RCA determination rule', is the ' RTS22 rule ' corresponding to the matching 'CFI construct' pattern.

- 3. If all distinct CFI codes are mapped to the same 'Applicable RCA determination rule', the system  proceeds  to  the next steps. Otherwise, the system sets the 'Applicable RCA determination rule' to 5.

<!-- image -->

|                | equity like')', the system determines the RCA as per section 3.3.6.4,  sets Applicable RCA determination rule of the submitted instrument  to 2.   5.  In  case  the  RTS22  rule'  field  is  'RTS  22  Art.16  (5).a  ("equity                                                                                                                                                              |
|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|                | In case the 'RTS22 rule' field is 'RTS22 Art.16 (3) and (4) ("debt")',  the  system  determines  the  RCA  as  per  section  3.3.6.5,  sets  Applicable RCA determination rule of the submitted instrument to 3.                                                                                                                                                                              |
|                | 6.  derivatives")'  or  'RTS  22  Art.16  (5).b  ("debt  derivatives")',  the  system determines the RCA as per section 0, sets Applicable RCA  determination rule of the submitted instrument to 4.   7.  In case the RTS22 rule' field is 'RTS 22 Art.16 (5).e ("derivatives on  derivative")',  the  system  determines  the  RCA  as  per  section                                        |
|                | trading or date of first trade' of the underlying', sets Applicable RCA  determination rule of the submitted instrument to 6.                                                                                                                                                                                                                                                                 |
|                | Otherwise for every other value of 'RTS22 rule' field set RCA calculation  rule of the submitted instrument to 1.  Every day during post-processing phase, plus on an ad-hoc basis (it                                                                                                                                                                                                        |
| Business rules | After Date of First Trade for the instrument, changes to the currently  published RCA can only occur in case of yearly recalculations for Equity  instruments, or in case a NCA requests a change of RCA ,or in case it is  triggered manually by an IT system administrator.                                                                                                                 |
| Assumptions    | For each valid CFI code, there is one and only one matching CFI pattern in  the  CFI  /  Applicable  RCA  determination  rule  mapping  table.  This  rule  is  enforced by the check described in section 3.12.4.3 'Update internal tables  related  to CFI codes  '  use case and mandatorily performed when the  IT  administrator updates the CFI / RCA determination rule mapping table. |

| Goal          | The objective of the use case is to update the upcoming RCA of the  submitted  instrument  in  the  ' RCA  data  table'   using  the  following  venue related dates: Date of admission to trading or date of first trade.   |
|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors        | The ESMA System                                                                                                                                                                                                              |
| Preconditions | Determine RCA calculation rules  use case updated the 'Applicable RCA  determination rule' of the submitted instrument to 1.                                                                                                 |
| Trigger       | Determine Applicable RCA calculation rule - triggers                                                                                                                                                                         |

<!-- image -->

Postconditions

## Normal Flow

The upcoming RCA of the submitted instrument is updated in the ' RCA data table'.

- · The system extracts from the ''Received instrument reference table'' the 'Date of admission to trading or date of first  trade'  of  the  records  which  satisfy  all  the  following conditions:
- o Latest received flag is TRUE
- o ISIN is the ISIN of the submitted instrument.
- o Termination date time is NULL or is greater than or equal to T-1.
- o Withdrawn flag of the ' Country of jurisdiction of the TV/SI' is FALSE in the 'NCA reference data table'
- o Received Status is 'REFR'

In case no records retrieved the system extracts from the ''Received instrument reference table'' the 'Date of admission to trading or date of first trade' of the records which satisfy all the following conditions

{covers the case regarding new records with termination date in the past}

- o same ISIN
- o Latest Received flag = TRUE
- o 'Withdrawn flag' of the submitted record's ' Country of jurisdiction of the TV/SI' is FALSE in the 'NCA reference data table.
- o Received Status is 'REFR'
- · In  case  all  are  NULL,  the  ESMA  System  determines  the RCA  as  per  section  3.3.6.7,  and  sets  Applicable  RCA determination rule of the submitted record to 5.

## Otherwise (at least one TV/SI has reported the field 11 and 'Earliest RTS23 field 11' is not NULL)

- · The system extracts from the ''Received instrument reference table'' the record the records which satisfy all the following conditions:
- o Latest received flag is TRUE
- o ISIN is the ISIN of the submitted instrument
- o Termination date time is NULL or is greater than or equal to T-1.
- o Withdrawn flag of the ' Country of jurisdiction of the TV/SI' is FALSE in the 'NCA reference data table'
- o 'Date of admission to trading or date of first trade' is Earliest RTS23  field 11 of the submitted instrument.
- o Received Status is 'REFR'

In case no records retrieved the system extracts from the which satisfy all the following conditions:

''Received instrument reference table'' the record the records {covers the case regarding new records with termination date in the past}

- o Latest received flag is TRUE
- o ISIN is the ISIN of the submitted instrument

<!-- image -->

|                           | o Withdrawn flag of the ' Country of jurisdiction of the  TV/SI'  is FALSE in the 'NCA reference data table'  o 'Date of admission to trading or date of first trade'  is  Earliest  RTS23  field  11  of  the  submitted  instrument  o Received Status is 'REFR'   |
|---------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|                           | • In case only one record is found, the ESMA System:  o Sets  the  upcoming  RCA  of  the  submitted  instrument in the ' RCA data table'  to the Country of  jurisdiction of the TV/SI of the record found in step                                                  |
|                           | 3.  o Sets  the  Modification  flag  of  the  submitted  instrument in the ' RCA data table'  to TRUE.  o Triggers the determination of the 'RCA record' for  the  submitted  instrument  ('Determine  the  RCA                                                      |
| Frequency  Business rules |                                                                                                                                                                                                                                                                      |
|                           | • In case more than one record are found, the ESMA system  determines  the  RCA  as  per  section  3.3.6.7,  and  sets  Applicable RCA determination rule of the submitted record  to 5.                                                                             |

3.3.6.4 Determine RCA based on 'Date of request for admission' or 'Date of admission to trading or date of first trade"

| Goal           | The objective of the use case is to update the upcoming RCA of the  submitted instrument using the following venue related dates: ' Date  of request for admission ' or ' Date of admission to trading or date of  first trade '.                                                                                                                                                                                       |
|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors         | The ESMA System                                                                                                                                                                                                                                                                                                                                                                                                         |
| Preconditions  | Determine RCA calculation rules  use case updated Applicable RCA  determination rule of the submitted instrument to 2.                                                                                                                                                                                                                                                                                                  |
| Trigger        | Determine Applicable RCA calculation rule - triggers                                                                                                                                                                                                                                                                                                                                                                    |
| Postconditions | The upcoming RCA of the submitted instrument is updated in the ' RCA  data table'. • The system extracts from the '' Received instrument reference                                                                                                                                                                                                                                                                      |
| Normal Flow    | table ''  the  'Date  of  request  for  Admission'  and  the  'Date  of  admission to trading or date of first trade' of the records which  satisfy all the following conditions:  o Latest received flag is TRUE   o ISIN is the ISIN of the submitted instrument.   o Termination  date  time  is  NULL  or  is  greater  than  or  equal to T-1.  o Withdrawn  flag    of  the  ' Country  of  jurisdiction  of  the |

<!-- image -->

In case no records retrieved the system extracts from the

'' Received instrument reference table '' the 'Date of request for Admission' and the 'Date of admission to trading or date of first trade' of the records which satisfy all the following conditions: {covers the case regarding new records with termination date in the past}

- o Latest received flag is TRUE
- o ISIN is the ISIN of the submitted instrument.
- o Withdrawn  flag    of  the  ' Country  of  jurisdiction  of  the TV/SI' is FALSE in the 'NCA reference data table'
- o Received Status is 'REFR'
- · In case all are NULL, the ESMA System determines the RCA as per section 3.3.6.7,  and sets Applicable RCA determination rule of the submitted record to 5.

## Otherwise  (at  least  one  TV/SI  has  reported  either  the  'Date  of request for Admission' or 'Date of admission to trading or date of first trade')

- · The system extracts from the ''Received instrument reference table'' the records which satisfy all the following conditions:
- o 'Latest received' flag is TRUE
- o ISIN is the ISIN of the submitted instrument.
- o Termination  date  time  is  NULL  or  is  greater  than  or equal to T-1.
- o Withdrawn  flag    of  the  ' Country  of  jurisdiction  of  the TV/SI' is FALSE in the 'NCA reference data table'
- o ('Date  of  request  for  admission'  is  not  NULL  and  is equal to 'Earliest RTS23 Field 10 or RTS23 Field 11') OR ('Date of request for admission' is NULL and 'Date of admission to trading or date of first trade' is equal to 'Earliest RTS23 Field 10 or RTS23 Field 11'')
- o Received Status is 'REFR'

In  case  no  records  retrieved  the  system  extracts  ''Received instrument  reference  table''  the  records  which  satisfy  all  the following conditions:

{covers the case regarding new records with termination date in the past}

- o 'Latest received' flag is TRUE
- o ISIN is the ISIN of the submitted instrument.
- o Withdrawn  flag    of  the  ' Country  of  jurisdiction  of  the TV/SI' is FALSE in the 'NCA reference data table'
- o ('Date  of  request  for  admission'  is  not  NULL  and  is equal to 'Earliest RTS23 Field 10 or RTS23 Field 11') OR ('Date of request for admission' is NULL and 'Date of admission to trading or date of first trade' is equal to 'Earliest RTS23 Field 10 or RTS23 Field 11'')
- o Received Status is 'REFR'
- · In case only one record is found, the ESMA System:
- o Sets the upcoming RCA of the record's ISIN in the 'RCA data table' to the 'Country of jurisdiction of the TV/SI' of the record found in step 3.

<!-- image -->

|                | o Sets the Modification flag of the submitted instrument in  the 'RCA data table' to TRUE  o Triggers  the  determination  of  the  'RCA  record'  of  the  submitted instrument ('Determine the RCA record of the  submitted instrument' use case).  • In case more than one record is found, the system determines  the  RCA  as  per  section  3.3.6.7,  and  sets  Applicable  RCA   |
|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Frequency      | During post-processing phase plus on an ad-hoc basis (it should be  possible for an IT system administrator to trigger re-determination of the  RCA at any time)                                                                                                                                                                                                                         |
| Business rules |                                                                                                                                                                                                                                                                                                                                                                                          |
| Assumptions    |                                                                                                                                                                                                                                                                                                                                                                                          |

## 3.3.6.5 Determine RCA based on LEI

| Goal           | The objective of the use case is to update the upcoming RCA in the  ' RCA data table'  of the submitted instrument using the Issuer related  field (LEI) of the submitted record.             |
|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors         | The ESMA System                                                                                                                                                                               |
| Preconditions  | Determine RCA calculation rules  use case updated Applicable RCA  determination rule of the submitted instrument to 3.                                                                        |
| Trigger        | Determine Applicable RCA calculation rule - triggers                                                                                                                                          |
| Postconditions | The upcoming RCA of the submitted instrument is updated in the ' RCA  data table'.                                                                                                            |
|                | • The system extracts the 'Issuer or Operator of the trading  venue  Identifier'  for  all  records  in  the  received  reference  table by TV/SI which satisfy all the following conditions: |
| Normal Flow    | o ISIN is the submitted ISIN   o Latest received flag is TRUE.  o Termination  date  time  is  NULL  or  is  greater  than  or  equal to T-1.                                                 |
|                | o Withdrawn  flag    of  the  ' Country  of  jurisdiction  of  the  TV/SI'  is FALSE in the 'NCA reference data table'  o Received Status is 'REFR'                                           |
|                | the past}                                                                                                                                                                                     |
|                | {covers the case regarding new records with termination date in                                                                                                                               |

<!-- image -->

Frequency

Business rules

Assumptions

## 3.3.6.6 Determine RCA based on the underlying

| Goal           | The objective of the use case is to update the upcoming RCA of the  submitted instrument using the upcoming RCA of its single underlying  instrument.   |
|----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors         | The ESMA System                                                                                                                                         |
| Preconditi ons | Determine RCA calculation rules  use case updated Applicable RCA  determination rule of the submitted instrument to 4.                                  |

- o Latest received flag is TRUE.
- o Withdrawn  flag    of  the  ' Country  of  jurisdiction  of  the TV/SI' is FALSE in the 'NCA reference data table'
- o Received Status is 'REFR'
- · If records  do  not  all  return  the  same  LEI,  the  system determines  the  RCA  as  per  section  3.3.6.7,  and  sets Applicable RCA determination rule of the submitted record to 5.
- · If  records all return the same LEI, the system extracts the country stated in the Legal Address of this LEI from the 'LEI reference data table' (based on records which ValidityEndDate is NULL).
- · If this country is an EEA country according to the 'Country reference data table' (based on records which ValidityEndDate is NULL), the ESMA system:
- 4.1  Sets the  upcoming RCA of the submitted instrument to that country in the ' RCA data table '.
- 4.2  Sets the Modification flag of the  submitted  instrument in the ' RCA data table' to TRUE.
- 4..3 Triggers  the  determination  of  the  'RCA  record'  for  the submitted instrument ('Determine the RCA record of the submitted instrument'  use  case  as  per  section  3.3.6.8  Determine  the  RCA record of the submitted instrument').
- · If this  country  is  not  an  EEA  country  according  to  the 'Country  reference  data  table'  (based  on  records  which ValidityEndDate is NULL), the system determines the RCA as per section 3.3.6.4 and sets Applicable RCA determination rule of the submitted instrument to 2.

During post-processing phase plus on an ad-hoc basis (it should be possible for an IT system administrator to trigger re-determination of the RCA at any time)

<!-- image -->

## Trigger

## Postcondi tions

## Normal Flow

Determine Applicable RCA calculation rule - triggers

The upcoming RCA of the submitted instrument is updated in the ' RCA data table' .

- 1.  The  ESMA  system  extracts  from  the  ' Received  reference  data  table '  the records which satisfy all the following conditions:
- o latest received flag is TRUE
- o ISIN is the ISIN of the submitted instrument
- o Termination is NULL or is greater than or equal to T-1
- o Withdrawn flag of the ' Country of jurisdiction of the TV/SI' is FALSE in the 'NCA reference data table'
- o Received Status is 'REFR'

[ Captures all the TV/SI where the submitted instrument is currently traded ]

- If this returns no record, the system extracts from the 'Received reference data table' the records which satisfy all the following conditions:
- o latest received flag is TRUE
- o ISIN is the ISIN of the submitted instrument
- o Withdrawn flag of the ' Country of jurisdiction of the TV/SI' is FALSE in the 'NCA reference data table'
- o Received Status is 'REFR'

[In case of instruments reported late after they were terminated, the above will retrieve the latest reference data received for that instrument]

- 2.  The ESMA System extracts the Underlying instrument codes (26a) for each record found in step 1.
- 3.  In case Field 26a is not the same for all records or is NULL for some records ( TV(s) report inconsistent underlying information ),  or  is  equal to  Field  1 for some records, the ESMA System determines the RCA as per section 3.3.6.7, and sets Applicable RCA determination rule of the submitted record to 5.
- 4.  Otherwise [ The ESMA System has checked that the submitting instrument has a single underlying and that underlying instrument is the same across all TV/SI  on  which  the  submitted  instrument  is  currently  traded ],  the  ESMA System:

The ESMA system extracts from the ' Received reference data table ' the records  which  ISIN  is  the  field  26a  of  the  submitted  instrument,  their ' Country of jurisdiction of the TV/SI' has withdrawn flag as FALSE in the 'NCA reference data table' and the Received Status is 'REFR'.

- 4.1 In case no record is found (the underlying does not exist in the Reference database or the ' Country of jurisdiction of the TV/SI' of the  underlying has withdrawn flag as TRUE in the 'NCA reference data table or the retrieved records are cancelled), the System determines the RCA and the RCA record of the submitted instrument as follows:
- 4.1.1 Determines  the  RCA  as  per  paragraph  3.3.6.3,  and  sets Applicable RCA determination rule of the submitted record to 1.

<!-- image -->

|                 | 4.1.2  Triggers the determination of the 'RCA record' for the submitted  instrument ('Determine the RCA record of the submitted instrument'  use case as per section 3.3.6.8).  4.2 In  case  at  least  one  record  is  found  (the  underlying  exists  in  the  Reference  database,  the  ' Country  of  jurisdiction  of  the  TV/SI' has  withdrawn flag as FALSE in the 'NCA reference data table and the record   |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|                 | 4.2.1  Sets in the 'RCA data table' the upcoming RCA of the submitted  instrument as the upcoming RCA of the underlying instrument.                                                                                                                                                                                                                                                                                        |
|                 | 4.2.2  Sets Modification flag of the submitted instrument in the 'RCA  data table' to TRUE.                                                                                                                                                                                                                                                                                                                                |
|                 | 4.2.3  Triggers the determination of the 'RCA record' for the submitted  instrument ('Determine the RCA record of the submitted instrument'                                                                                                                                                                                                                                                                                |
| Frequenc y      | During post-processing phase plus on an ad-hoc basis (it should be possible for  an IT system administrator to trigger re-determination of the RCA at any time)                                                                                                                                                                                                                                                            |
| Business  rules |                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Assumpti ons    |                                                                                                                                                                                                                                                                                                                                                                                                                            |

| Goal           | The objective of the use case is to update in the ' RCA data table'  the  upcoming RCA of the submitted instrument using the reception date  time.   |
|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors         | The ESMA System                                                                                                                                      |
| Preconditions  | Determine RCA calculation rules  use case updated Applicable RCA  determination rule of the submitted instrument to 5.                               |
| Trigger        | Determine Applicable RCA calculation rule - triggers                                                                                                 |
| Postconditions | The upcoming RCA of the submitted instrument is updated in the ' RCA  data table'.                                                                   |
| Normal Flow    | 1.  The ESMA system extracts from the 'Received reference data table'  the records which satisfy all the following conditions:                       |
| Normal Flow    | o latest received flag is TRUE                                                                                                                       |
| Normal Flow    | o ISIN is the ISIN of the submitted instrument                                                                                                       |
| Normal Flow    | o Termination is NULL or is greater than or equal to T-1                                                                                             |
| Normal Flow    | o Withdrawn flag of the 'Country of jurisdiction of the TV/SI' is                                                                                    |
| Normal Flow    | FALSE in the 'NCA reference data table'                                                                                                              |

<!-- image -->

Frequency

Business rules

Assumptions

The system cannot determine the RCA  with the Applicable RCA determination rule chosen by the system in use case or cannot determine the RCA determination rule base of a CFI ambiguity. In that case, the RCA is determined according to the relevant submission date of the submitted records.

## 3.3.6.8 Determine the RCA record of the submitted instrument

| Goal          | The objective of the use case is to determine the ' RCA record ' for the  submitted instrument (i.e. the received record which holds the RTS23  fields to be used consistently across all TV/SI).   |
|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors        | The ESMA System                                                                                                                                                                                     |
| Preconditions | The  ESMA  System  has  updated  the  upcoming  RCA  for  the  submitted  instrument in the ' RCA data table'.                                                                                      |
| Trigger       | • Determine RCA based on "date of request for admission or date of first  trade" - triggers                                                                                                         |

## o Received Status is 'REFR'

If this returns no record, the system extracts from the 'Received reference data table' the records which satisfy all the following conditions:

- o latest received flag is TRUE
- o ISIN is the ISIN of the submitted instrument
- o Withdrawn flag of the ' Country of jurisdiction of the TV/SI' is FALSE in the 'NCA reference data table'
- o Received Status is 'REFR'
- 2. For each record identified in step 1, the ESMA system determines the record reported first for the ISIN - using the earliest among the ESMA reception  time  and,  if  not  null,  the  NCA  reception  time  -,  across  all records including any historical ones, and the ESMA System:
- · Sets the upcoming RCA of that instrument in the ' RCA data table' to the 'Country of jurisdiction of the TV/SI' of the record as stored in the Received Reference Data Table).
- · Sets the Modification flag of the  submitted  instrument  in the ' RCA data table' to TRUE.
- · Triggers  the  determination  of  the  'RCA  record'  for  the  submitted instrument ('Determine the RCA record of the submitted instrument' use case - see 3.3.6.8).

During post-processing phase plus on an ad-hoc basis (it should be possible for an IT system administrator to trigger re-determination of the RCA at any time)

<!-- image -->

## Postconditions

## Normal Flow

- · Determine RCA based on LEI - triggers
- · Determine RCA based on "Date of request for admission" or "Date of admission to trading or date of first trade" - triggers
- · Determine RCA based on underlying -triggers
- · Determine RCA based on Reception date time - triggers
- · (derivatives which underlying's RCA has changed)
- · 3.4.4 (manual RCA change)
- · 3.3.9 (yearly RCA reassessment)
- · 3.3.6.2 normal flow step 1.b (new record received for the ISIN)

This use case should also be triggered, at each post-processing phase, for the following cases

## 1. Termination on MIC of the RCA record

For all ISINs for which the Termination Date on the 'MIC of the RCA record' is not NULL and is strictly less than T-1 (where T is the next publication date).

For optimization purposes, the system may apply this rule to ISINs for which the termination date on the RCA-MIC is between PvsT-1 included and T-2 included where T is the next publication date and PvsT is the day of the last successful publication.

## 2. Cancellation on MIC of the RCA record

For all ISINs for which the submitted MIC, from a cancelled record, is  the 'MIC of the RCA record'

The ' RCA record ' record for the submitted instrument is up to date.

## 1. Retrieval of records

The system returns from the ' Received reference data table '  the records,  related  to  instrument(s),  which  satisfy  all  the  following conditions and according to specified market's priority check order as follows

(New conditions - Market's priority, RCA jurisdiction and Received Status of MIC's)

## 1.1. Within RCA jurisdiction

## Conditions

- · Latest received flag is TRUE
- · ISIN is equal to the ISIN for which the use case is triggered
- · Respective MIC(s) is active, identified by (ValidityEndDate is null or is greater than or equal to T-1)
- · Termination date time is NULL or is greater than or equal to T-1.
- · ' Country of jurisdiction of the TV/SI' is equal to the ' Upcoming RCA ' related to the ISIN in the ' RCA data table'
- · Withdrawn flag of the ' Country of jurisdiction of the TV/SI' is FALSE in the 'NCA reference data table
- · Received Status is 'REFR'

## Market's priority check order

The  system  checks  if  there  are  records  matching  the  conditions below for trading venues for which their 'MarketType' is as follows:

<!-- image -->

- · Identified by 'MarketType' to be RMKT (Regulated Markets) If record(s) retrieved, the system continues to 2. Determination of RCA\_RECORD, else the following market is checked
- · Identified  by  'MarketType  '  to  be MLTF (Multilateral  Trading Facilities)
- If record(s) retrieved, flow continues to 2. Determination of RCA\_RECORD , else  the following market is checked
- · Identified by  'MarketType  '  to  be OTFS (Organised  Trading Facilities)

If record(s) retrieved, the system  continues  to 2. Determination of RCA\_RECORD , else the system continues to 1.2 Outside RCA jurisdiction

## 1.2. Outside RCA jurisdiction

## Conditions

- · Latest received flag is TRUE
- · ISIN is equal to the ISIN for which the use case is triggered
- · Respective MIC(s) is active, identified by (ValidityEndDate is null or is greater than or equal to T-1)
- · Termination date time is NULL or is greater than or equal to T-1.
- · Withdrawn flag of the ' Country of jurisdiction of the TV/SI' is FALSE in the 'NCA reference data table
- · Received Status is 'REFR'

## Market's priority check order

The  system  checks  if  there  are  records  matching  the  conditions below for trading venues for which their 'MarketType' is as follows:

- · Identified by 'MarketType' to be RMKT (Regulated Markets) If record(s) retrieved, flow continues to 2. Determination of RCA\_RECORD, else  the following market is checked
- · Identified  by  'MarketType  '  to  be MLTF (Multilateral  Trading Facilities)
- If record(s) retrieved, flow continues to 2. Determination of RCA\_RECORD, else  the following market is checked
- · Identified by  'MarketType  '  to  be OTFS (Organised  Trading Facilities)

If record(s) retrieved, the system  continues  to 2. Determination of RCA\_RECORD , else the system continues to 1.3 Within RCA jurisdictionSystematic Internalisers (SINT)

## 1.3. Within RCA jurisdiction - Systematic Internalisers (SINT)

## Conditions

- · Latest received flag is TRUE
- · ISIN is equal to the ISIN for which the use case is triggered
- · Instrument(s) traded in the SINT market, identified by 'MarketType' to be SINT (Systematic Internalisers)
- · Respective MIC(s) is active, identified by (ValidityEndDate is null or is greater than or equal to T-1)
- · Termination date time is NULL or is greater than or equal to T-1.
- · ' Country of jurisdiction of the TV/SI' is equal to the ' Upcoming RCA ' related to the ISIN in the ' RCA data table'
- · Withdrawn flag of the ' Country of jurisdiction of the TV/SI' is FALSE in the 'NCA reference data table

<!-- image -->

## · Received Status is 'REFR'

If record(s) retrieved, the system  continues  to 2. Determination of RCA\_RECORD , else the system continues to 1.4 Outside RCA jurisdictionSystematic Internalisers (SINT)

## 1.4. Outside RCA jurisdiction - Systematic Internalisers (SINT)

## Conditions

- · Latest received flag is TRUE
- · ISIN is equal to the ISIN for which the use case is triggered
- · Instrument(s) traded in the SINT market identified by 'MarketType' to be SINT (Systematic Internalisers)
- · Respective MIC(s) is active, identified by (ValidityEndDate is null or is greater than or equal to T-1)
- · Termination date time is NULL or is greater than or equal to T-1.
- · Withdrawn flag of the ' Country of jurisdiction of the TV/SI' is FALSE in the 'NCA reference data table
- · Received Status is 'REFR'

If record(s) retrieved, the system  continues  to 2. Determination of RCA\_RECORD , else the system continues to 1.5 No records retrieved

## 1.5. No records retrieved

In case no record(s) retrieved from previous steps, then the whole process, steps 1.1 to 1.4 ,  is  performed again, keeping the same Market's  priority  check  order,  but  without  checking  the  following conditions

## Conditions NOT to be checked for step 1.5

- · Respective MIC(s) is active, identified by (ValidityEndDate is null or is greater than or equal to T-1)
- · Termination date time is NULL or is greater than or equal to T-1.

## 2. Determination of RCA\_RECORD

The system will determine the 'RCA\_RECORD' as the record with the  earliest  'Date  of  admission  to  trading  or  date  of  first  trade'  'RTS23  field  11',  among  those  returned  in  step 1.  Retrieval  of records

- 2.1.  In  case  one  single  record  is  returned,  that  record  becomes  the 'RCA\_RECORD' for the submitted instrument. The 'RCA\_RECORD'  field in the RCA data table for that ISIN is set to the RECORD\_ID of that record.
- 2.2.  In case there more than one records with the same earliest  RTS23 field  11,  then  the  record  first  reported,  using  the  earliest  ESMA reception time or, if null, the earliest NCA reception time, becomes the 'RCA\_RECORD' for the submitted instrument. The 'RCA\_RECORD' field in the RCA data table for that ISIN is set to the RECORD\_ID of that record.

## 3. Determination of RCA\_MIC

<!-- image -->

|                | The system determines the RCA\_MIC, as the corresponding MIC  from the RCA\_RECORD, determined in step 2                                                           |
|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Frequency      | During post-processing phase plus on an ad-hoc basis (it should be  possible for an IT system administrator to trigger re-determination of the  RCA at any time) |
| Business rules | BRD  2.5.2 Determination of the RCA\_RECORD and RCA\_MIC                                                                                                           |
| Assumptions    |                                                                                                                                                                  |

## 3.3.6.9 Determine the RCA record for Equity/Equity-like instruments [Updated #249]

| Goal           | The objective of the use case is to determine the ' RCA record ' for an  Equity/Equity-like submitted instrument                                                                                                                                                                                                                        |
|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors         | The ESMA System                                                                                                                                                                                                                                                                                                                         |
| Preconditions  | The  ESMA  System  has  updated  the  upcoming  RCA  for  the  submitted  instrument in the ' RCA data table'.                                                                                                                                                                                                                          |
| Trigger        | Determine the RCA record of the submitted instrument                                                                                                                                                                                                                                                                                    |
| Postconditions | The ' RCA record ' record for the submitted instrument is up to date.                                                                                                                                                                                                                                                                   |
|                | 1.  The system extracts from the submitted record the RECORD\_ID, the  instrument classification (CFI\_CODE) and market identifier (MIC). The  system  extracts  from  the  Received  Reference  Data  Table  and  the  Trading venue mapping view (6.5) the list of (RECORD\_ID, CFI Code,  MIC, Market Type) [List1] of all records with |
|                | a.  same ISIN                                                                                                                                                                                                                                                                                                                           |
|                | b.  Latest Received flag = TRUE                                                                                                                                                                                                                                                                                                         |
|                | c.  Termination date time is NULL or is greater than or equal to T- 1.                                                                                                                                                                                                                                                                  |
| Normal Flow    | d.   'Withdrawn  flag'  of  the  submitted  jurisdiction of the TV/SI'  is FALSE in the 'NCA reference data  table.   e.  Received Status is 'REFR'                                                                                                                                                                                     |
|                | f.  Respective MIC(s) is  active,  identified  by  (ValidityEndDate  is  null or is greater than or equal to T-1)                                                                                                                                                                                                                       |

<!-- image -->

|                | a.  the records with MIC that exist in [List1] as retrieved from step  1  b.  the records for the previous year   4.  The system prepares a new list (RECORD\_ID, MIC, yearly turnover,  Market type) [List3] by joining [List1] and [List2] and identifies the MIC  with the highest turnover based on market priority (RMKT then MLTF)  4.1 The system identifies the MIC with the highest yearly  positive  (  &gt;  0  Euros)  turnover  for  the  previous  year,  traded  on  Regulated  markets,  identified  by  ('MarketType'  equals  RMKT).  If  a  single  MIC  is  identified  flow  continues  to  5,  else  flow  continues  to  next check.   |
|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|                | MLTF). If a single MIC is identified flow continues to 5,  else this ISIN is disregarded from the process.   5.  In  case  one  single  record  is  returned,  that  record  becomes  the  'RCA\_RECORD'  for  the  submitted  instrument.  The  'RCA\_RECORD' field in the RCA data table for that ISIN is set to  the RECORD\_ID of that record.                                                                                                                                                                                                                                                                                                           |
| Frequency      | 6.  from the RCA\_RECORD, determined in step 5  During post-processing phase                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|                | The system determines the RCA\_MIC, as the corresponding MIC                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Business rules | This Use Case can be enabled or disabled based on the business needs by  external control file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Assumptions    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

3.3.6.10

Update RCA of derivative instruments

| Goal          | The objective of the use case is to update in the ' RCA data table'  the  upcoming  RCA  of  derivative  instruments  which  have  a  given  instrument as single underlying.         |
|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors        | The ESMA System                                                                                                                                                                       |
| Preconditions | The ESMA System has updated the upcoming RCA for an instrument in the  ' RCA data table'.  The ESMA System has determined the RCA\_RECORD of the submitted  instrument, as per 3.3.6.8 |
| Trigger       | Determine the RCA record of the submitted instrument  - triggers                                                                                                                      |

<!-- image -->

3.3.6.11  Determine the RCA record of derivative instrument

| Postconditions   | The ' RCA record ' for the submitted instrument is up to date.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|                  | NB : T is the day of the next publication  1.  The ESMA system extracts from the 'Received reference data table'  the latest submitted records related to the (derivative) ISIN which satisfy  all the following conditions:  • Latest received flag is TRUE   • Underlying  instrument  code  (under  field  26a)  is  the  ISIN  of  the  submitted instrument   • Termination date time is NULL or is greater than or equal to T-1  MIC is the RCA\_MIC of the derivative.   • CFI  construct  matches  the  RTS22  rule  of  'RTS22  Art.16  (5).a  ("equity  derivatives")  or  RTS22  Art.16  (5).b  ("debt  derivatives")',  according to Annex 6.3 CFI/RCA rule mapping table |
| Normal Flow      | 2.  For each (derivative) ISIN found in step 1:   2.1  The ESMA System checks that the derivative instruments found in  step 1 are reported by all TV/SI as having the submitted instrument  as  single  underlying:  checks  in  the  Received  Reference  Data  Table  whether  all  Latest  received  records  having  the  Received  Status as 'REFR' and related to this (derivative) ISIN have the ISIN  of the submitted instrument as single underlying (under field 26a).                                                                                                                                                                                                   |
|                  | 2.2  If  true,  the  ESMA  system checks that the derivative's Field 1  is  different from the derivative's Field 26a.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|                  | 2.3   If  true,  the  ESMA  system  checks  the  Withdrawn  flag  of  the  submitted  underlying  instrument's  Upcoming  RCA  in  the  'NCA  reference data table                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|                  | • Modification flag of the ISIN is set to TRUE   2.3.2  If  the  Withdrawn  flag  is  TRUE,  then  the  ESMA  system  determines  the  RCA  record  of  the  derivative  as  per  section 3.3.6.11.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Business rules   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

Goal

The objective of the use case is to determine the ' RCA record ' for the derivate for which the single underlying is the submitted instrument

<!-- image -->

|                | (i.e.  the  received  record  which  holds  the  RTS23  fields  to  be  used  consistently across all TV/SI for the derivative).                                 |
|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors         | The ESMA System                                                                                                                                                  |
| Preconditions  | The  ESMA  System  has  updated  the  upcoming  RCA  for  the  derivative  instrument in the ' RCA data table'.                                                  |
| Trigger        | Update RCA of derivative instrument  - Triggers                                                                                                                  |
| Postconditions | The ' RCA record ' record for each derivative instrument is up to date.                                                                                          |
| Normal Flow    | The  system  has  logged  all  the  Instruments  (ISINs)  impacted  by  the  calculation of the RCA.                                                             |
|                | For each ISIN: trigger use case 3.3.6.8 Determine the RCA record of the  submitted instrument.                                                                   |
| Frequency      | During post-processing phase plus on an ad-hoc basis (it should be  possible for an IT system administrator to trigger re-determination of the  RCA at any time) |
| Business rules | BRD requirement 45.                                                                                                                                              |
| Assumptions    |                                                                                                                                                                  |

| Goal            | The  objective  of  the  use  case  is  to  update  the  upcoming  RCA  of  the  submitted instrument using the field 11 of the single underlying instrument  in the database.   |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors          | The ESMA System                                                                                                                                                                  |
| Preconditions   | Determine RCA calculation rules  use case updated Applicable RCA  determination rule of the submitted instrument to 6.                                                           |
| Trigger         | Determine Applicable RCA calculation rule - triggers                                                                                                                             |
| Postcondition s | The upcoming RCA of the submitted instrument is updated in the ' RCA data  table' .                                                                                              |
| Normal Flow     | 1.  The  ESMA  system  extracts  from  the  ' Received  reference  data  table '  the  records which satisfy all the following conditions:                                       |
| Normal Flow     | o latest received flag is TRUE                                                                                                                                                   |
| Normal Flow     | o ISIN is the ISIN of the submitted instrument                                                                                                                                   |

<!-- image -->

- o Termination is NULL or is greater than or equal to T-1
- o Withdrawn flag of the 'Country of jurisdiction of the TV/SI' is FALSE in the 'NCA reference data table'
- o Received Status is 'REFR'

[ Captures all the TV/SI where the submitted instrument is currently traded ]

If this returns no record, the system extracts from the 'Received reference data table' the records which satisfy all the following conditions:

- o latest received flag is TRUE
- o ISIN is the ISIN of the submitted instrument
- o Withdrawn flag of the 'Country of jurisdiction of the TV/SI' is FALSE in the 'NCA reference data table'
- o Received Status is 'REFR'

[In case of instruments reported late after they were terminated, the above will retrieve the latest reference data received for that instrument]

- 2.  The ESMA System extracts the Underlying instrument codes (26a) for each record found in step 1.
- 3.  In case Field 26a is not the same for all records or is NULL for some records ( TV(s) report inconsistent underlying information )  or  is  equal  to  Field  1  for some  records,  the  ESMA  System  determines  the  RCA  as  per  paragraph 3.3.6.7, and sets Applicable RCA determination rule of the submitted record to 5.
- 4.  Otherwise  [the  submitted  instrument  has  a  single  underlying  and  that underlying instrument is the same across all TV/SI on which the submitted instrument is currently traded], the ESMA System checks that this underlying instrument  exists  in  the  ' Received  reference  data  table '  and  retains  the underlying's record with earliest field 11 as follows:
- 4.1 The ESMA system extracts from the 'Received reference data table' the records which
- · ISIN is the field 26a of the submitted instrument,
- · Latest Received flag is TRUE
- · ' Country of jurisdiction of the TV/SI' has withdrawn flag as FALSE in the 'NCA reference data table'.
- · Received Status is 'REFR'
- 4.2 In  case  no  record  is  found  (the  underlying  does  not  exist  in  the database,or their ' Country of jurisdiction of  the  TV/SI' has withdrawn flag  as  TRUE  in  the  'NCA  reference  data  table'  or  the  record  is cancelled), the ESMA System determines the RCA as per paragraph 3.3.6.3,  and  sets Applicable RCA determination rule of the  submitted record to 1.

<!-- image -->

|           | 4.3    In  case  at  least  one  record  is  found  (the  underlying  exists  in  the  database and   • ' Country of jurisdiction of the TV/SI' in the 'NCA reference data table)  • Received Status is 'REFR'    which Field 11 is the earliest Field 11.  4.3.2  In case one single MIC is found, the system:   |
|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|           | has withdrawn flag as FALSE                                                                                                                                                                                                                                                                                       |
|           | 4.3.1 The  system  identifies  among  the  record  found  in  4.1,  the  MIC(s)  4.3.2.1 sets  in  the  'RCA  data  table'  the  upcoming  RCA  of  the  submitted instrument as the country of jurisdiction of the MIC.                                                                                          |
|           | 4.3.2.2 Sets Modification flag of the submitted instrument in the 'RCA  data table' to TRUE.                                                                                                                                                                                                                      |
|           | 4.3.2.3 Triggers  the  determination  of  the  'RCA  record'  for  the  submitted instrument ('Determine the RCA record of the submitted  instrument' use case as per section 3.3.6.8).                                                                                                                           |
|           | (more  than  one  single  MIC  is  found)  the  system  determines the RCA as per paragraph 3.3.6.7 Determine RCA based  on reception date time, and sets Applicable RCA determination rule  of the submitted record to 5.                                                                                        |
| Frequency | 4.3.3 Otherwise                                                                                                                                                                                                                                                                                                   |

| Goal          | The objective of the use case is, every time a record related to an  instrument is submitted for the first time and with Field 11 in the past,  to determine the upcoming RCA of the record's ISIN.   |
|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors        | The ESMA System                                                                                                                                                                                       |
| Preconditions | The ESMA System has extracted from a submitted file  a reference data  record that has passed the transmission, format, and content validations.                                                      |
| Preconditions | AND                                                                                                                                                                                                   |
| Preconditions | The submitted record having the Received Status as 'REFR' has a newly  allocated  RECORD\_ID:  ESMA  submission  date  time  List  of  that  record  contains a single date.                           |
| Trigger       | use case 'determine RCA determination rule' / Normal flow / step 2                                                                                                                                    |

<!-- image -->

| Postconditions   | The upcoming RCA of the submitted instrument is updated in the 'RCA data  table'.   | The upcoming RCA of the submitted instrument is updated in the 'RCA data  table'.                                                                                                |
|------------------|-------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|                  |                                                                                     | 1.  In case the 'RTS22 rule' field is 'RTS22 Art.16 (1) and (2) ("equity/equity  like")', the System determines the RCA and the RCA record as per step  5.                       |
|                  |                                                                                     | 2.  In  case the 'RTS22 rule' field is 'RTS22 Art.16 (3) and (4) ("debt")', the  System:                                                                                         |
|                  |                                                                                     | 2.1                                                                                                                                                                              |
|                  |                                                                                     | 2.2                                                                                                                                                                              |
|                  |                                                                                     | 3.  In case  'RTS22 rule' field is 'RTS22 Art.16 (5).a ('equity derivatives')'  or 'RTS22 Art.16 (5).b  ('debt derivatives')' :                                                  |
|                  |                                                                                     | 3.1  In  case  field  26a  is  not  NULL  ( the  submitted  instrument  is  a  derivative with a single underlying):                                                             |
| Normal Flow      |                                                                                     | which ISIN is equal to field 26a and, if exists, whether the  Withdrawn Flag of its Upcoming RCA is FALSE.  3.1.2 In case a record is found ( the underlying is in FIRDS and the |
|                  |                                                                                     |                                                                                                                                                                                  |
|                  |                                                                                     |                                                                                                                                                                                  |
|                  |                                                                                     |                                                                                                                                                                                  |
|                  |                                                                                     |                                                                                                                                                                                  |
|                  |                                                                                     | 3.1.3 In case no record is found ( the underlying is not in FIRDS ), the  system determines the RCA and the RCA record as follows:                                               |
|                  |                                                                                     |                                                                                                                                                                                  |
|                  |                                                                                     |                                                                                                                                                                                  |
|                  |                                                                                     |                                                                                                                                                                                  |
|                  |                                                                                     |                                                                                                                                                                                  |

<!-- image -->

Frequency

Business rules

Assumptions the RCA record of the submitted instrument' use case).

3.1.3.3  In case the RCA is not found, the system:

- 3.1.3.3.1 determines the RCA as per section 3.3.6.7, sets the 'Applicable RCA determination rule' to 5.
- 3.1.3.3.2 triggers the determination of the 'RCA record' for the submitted instrument ('Determine the RCA record of the submitted instrument' use case).
- 4. In any other case, the System determines the RCA and the RCA record as per step 5.
- 5. The  System  determines  the  RCA  and  the  RCA  record  of  the submitted instrument as follows:
- 5.1 checks whether the RCA of the submitted ISIN is available in RDS database.
- 5.2 In case the RCA is found, the system
- 5.2.1 Sets the upcoming RCA of the submitted instrument in the 'RCA data table' to the RCA found in RDS.
- 5.2.2 Sets the Modification flag of the submitted instrument in the 'RCA data table' to TRUE.
- 5.2.3 Sets the determination rule of the submitted instrument the 'RCA data table' to 7.
- 5.2.4 Triggers the determination of the 'RCA record' for the submitted instrument ('Determine the RCA record of the submitted instrument' use case).
- 5.3 In case the RCA is not found, the system

5.3.1 Determines  the  RCA  as  per  section  3.3.6.7,  sets  the 'Applicable RCA determination rule' to 5.

5.3.2 Triggers the determination of the 'RCA record' for the submitted instrument ('Determine the RCA record of the submitted instrument' use case).

During post-processing phase plus on an ad-hoc basis (it should be possible for an IT system administrator to trigger re-determination of the RCA at any time)

See Note to MiFIR TF on RCA Topics - revised following 02 June meeting

<!-- image -->

## 3.3.6.14  Apply RCA-MIC adjustments

| Goal           | The objective of the use case is to manual change the RCA\_MIC by  updating the ' RCA record '                                                                                                                                                                     |
|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors         | The system - implements approved changes                                                                                                                                                                                                                          |
| Preconditions  | Preconditions                                                                                                                                                                                                                                                     |
| Trigger        | This use case is triggered during each post-processing phase after RCA /  RCA-record has been updated for all instruments                                                                                                                                         |
| Postconditions | The ' RCA\_record ' record for instrument is up to date.                                                                                                                                                                                                           |
| Normal Flow    | 1.  The system extracts from  'RCA\_MIC\_ADJUSTMENTS  data table',  the  ISIN and adjusted RCA-MIC such that  •  Active\_change is TRUE                                                                                                                              |
|                | •  ValidityToDate is null or later to T (T included)  2.  For each ISIN extracted from step 1, the system retrieves the  RECORD\_ID, from ' Received reference data table ' which comply with  the following conditions  • ISIN is the ISIN retrieved from step 1. |
| Business rules | • MIC is the RCA-MIC retrieved from step 1  • Latest Flag is TRUE  • Received Status is 'REFR'    2.1.  In case no records retrieved then the requested change of                                                                                                 |
| Assumptions    |                                                                                                                                                                                                                                                                   |

<!-- image -->

## 3.3.7 Perform Consistency Validation on instruments reference data [Updated CR #289]

| Goal          | The goal of this use case is for every submitted record to check whether  it is consistent with the RCA record of that instrument and prepare the  feedback to be sent to the submitting entity.                                                                                                                               |
|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors        | The ESMA System - validates data                                                                                                                                                                                                                                                                                               |
| Preconditions | The  ESMA  System  has  extracted  from  a  submitted  file  a  reference  data  record that has passed the transmission, format, and content validations, and  has  updated  the  upcoming  RCA  of  that  instrument  (and  its  derivatives  if  applicable) and has determined the RCA record of the submitted instrument. |
| Trigger       | Determination of the 'RCA record of the submitted instrument' is completed  for the submitted instrument.                                                                                                                                                                                                                      |
| Postcondition | with the 'RCA record' for the submitted instrument.  In case of inconsistencies (including free-text) are detected for a record, the  feedback  file  generated  as  per  section  3.3.8  Provide  File  Feedback  will  contain  a  single  warning  with  a  description  of  inconsistent  fields  and  has                 |
|               | 1.  The ESMA System set consistent flag TRUE in the 'Received Reference  Data Table' if the MIC of the submitted record is the RCA\_MIC.                                                                                                                                                                                        |
|               | 2.  In case   • MIC of the submitted record is different from the RCA\_MIC and  • Received Status is 'REFR'                                                                                                                                                                                                                     |
| Normal   Flow | from the consistency validation check for a particular set of ISINs. The  system retrieves from the 'Validation Exclusions Data Table' the records  for which:  • ISIN pattern matches with the submitted ISIN.                                                                                                                |
|               | • Validity End Date is greater than or equal to the Current Date time  4.                                                                                                                                                                                                                                                      |
|               | The ESMA System extracts from the Received Reference Data Table,   •   the 'Non-free text field used for consistency checks' and 'Free text fields  user for consistency checks' fields, except the ones retrieved in step 3,  in RTS23 Field table as per section 6.9;                                                        |
|               | and                                                                                                                                                                                                                                                                                                                            |

<!-- image -->

|                    | RECORD\_ID is the 'RCA record' in the 'RCA data table' related to the  submitted ISIN.  5.  The  ESMA  System compares those fields one by one.  No difference  is  found.  6.  The submitted record is accepted, and its consistent flag is set to TRUE in  the 'Received Reference Data Table'.  5. At least one field is different.                                                                                  |
|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Alternate   flow 1 | 6. The ESMA System:  6.1 Generates an INS-128 warning error message related to that record,  listing all the inconsistent fields. The inconsistent fields will be identified  in  the  message  description  using  RTS  field  number  as  described  in  Table 21 - RTS23 Fields table. The message will be included it in the  feedback  file  to  be  generated  as  per  section  3.3.8  Provide  File  Feedback. |
|                    | 6.2  The  submitted  record  is  accepted,  and  its  consistent  flag  is  set  to  FALSE in the 'Received Reference Data Table'.                                                                                                                                                                                                                                                                                     |
| Frequency          | Once for each submitted record.                                                                                                                                                                                                                                                                                                                                                                                        |
| Business  Rules    | As per current Business Requirements Document, the non-free text and free  text fields to compare are listed in section 43. Table 1 of BRD.                                                                                                                                                                                                                                                                            |
| Assumptions        | The consistent flag is valid only at the time of the submission and is used to  inform the submitting entity of the inconsistency at the time of the submission.  The flag will be recalculated during the post-processing phase.                                                                                                                                                                                      |

## 3.3.8 Provide File Feedback

| Goal          | The goal of this use case is to provide submitting entities feedback on  whether their file was successfully processed by ESMA and whether  any content or consistency errors were found .   |
|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors        | TV/SI (in the jurisdiction of a NCA delegating data collection) - receives  feedback                                                                                                         |
| Actors        | NCA (not delegating data collection in its jurisdiction) - receives feedback                                                                                                                 |
| Actors        | The ESMA System - provides feedback                                                                                                                                                          |
| Preconditions | file content has been validated (either successfully or not)                                                                                                                                 |

<!-- image -->

| Trigger                                             | For  Reference  data:  transmission,  format,  content  and  consistency  validations are completed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|-----------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Postcondition                                       | Feedback  is  uploaded  into  the  ESMA's  outgoing  folder  dedicated  to  The  ESMA  System  in  HUBEX  or  HUBDE  and  is  available  for  routing  to  the  recipient's incoming folder.                                                                                                                                                                                                                                                                                                                                                                                          |
| Normal Flow                                         | 2.  In case all records submitted in the file are valid and consistent, the ESMA  System generates, based on the ISO 20222 Derived Message Definition  Identifier referenced in  Table 11 - Instrument reference data message  table  associated  to  Business  Application  Header  (BAH),  BAH  and  business message encapsulation and  Feedback on  Instrument Reference  Data Report Message components,  a 'Feedback on Instrument Reference  Data Report'  file of with  status ' Accepted '.  Only a reference to the file  identifier is sent back to the submitting entity. |
| Alternate  Flow 1:  Transmission  or Format  Errors | generates, based on the Derived Message Identifier schemas referenced  in  Table  11  -  Instrument  reference  data  message  table  associated  to  Business  Application  Header  (BAH),  BAH  and  business  message  encapsulation and Feedback on Instrument Reference Data Report Message  components  of  status  ' Rejected' listing  the  errors  found.  Only  a  reference  to  the  file  identifier  is  sent  back  since  the  system  did  not  manage to process the records.                                                                                       |
| Alternate  Flow 2  Content or  Consistency  Errors  | Message  Identifier  schemas  referenced  in  Table  11  -  Instrument  reference  data  message  table  associated  to  Business  Application  Header (BAH), BAH and business message encapsulation and Feedback  on  Instrument  Reference  Data  Report  Message  components  of  status  ' Partially accepted ' listing for each erroneous record only, identified by  the  'Technical RECORD\_IDentification ', the status of that record and the  list of error found (Code and Description). The record status can be:                                                          |

<!-- image -->

|                 | • record did not pass INS-130  o FDBCAN should be produced as defined in Table 38 - File  types  OR   • Warning:  record which passed all checks between INS-101 to INS- 125 and INS-129 BUT which did not pass content checks INS-26 or  INS-127 OR consistency checks INS-128. In case of inconsistencies,  the inconsistent fields are referenced in the associated message using   |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Frequency       | Once for each file submitted by a submitting entity.                                                                                                                                                                                                                                                                                                                                   |
|                 | Annex 1b: Format Validation Rules                                                                                                                                                                                                                                                                                                                                                      |
| Business  Rules | Annex 1c: Reference Data Content and Consistency Validation Rules                                                                                                                                                                                                                                                                                                                      |
| Business  Rules | Annex 2: File naming conventions                                                                                                                                                                                                                                                                                                                                                       |
| Business  Rules | Reference Data Interface specifications                                                                                                                                                                                                                                                                                                                                                |
| Assumptions     | A record is identified in the feedback file its  'Technical  RECORD\_IDentification '.                                                                                                                                                                                                                                                                                                  |

## 3.3.9 End-of day processing / Apply RCA reassessment result [Updated CR #254]

| Goal          | The goal of this use case is to make applicable the result of the Yearly  reassessment process for the publication of 1 st  April.                                          |
|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors        | The ESMA System                                                                                                                                                             |
| Preconditions | The ESMA System has processed all  incoming files submitted before the  Applicable cut-off time.  The  Yearly RCA reassessment  input data table  (6.13) has been populated |

<!-- image -->

| Trigger       | As soon as all files  submitted  before  their  applicable  cut-off  times  on  31 st   March 8  have been processed when the ESMA System prepares the 1 st  April 9   publication, each year.   | As soon as all files  submitted  before  their  applicable  cut-off  times  on  31 st   March 8  have been processed when the ESMA System prepares the 1 st  April 9   publication, each year.                                        |
|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Postcondition | The RCA data table is updated.                                                                                                                                                                   | The RCA data table is updated.                                                                                                                                                                                                        |
|               | 1.                                                                                                                                                                                               | The ESMA System extracts from the ' Yearly RCA reassessment  input  data table '  the records for which Year is the current year.                                                                                                     |
|               | 2.                                                                                                                                                                                               | The ESMA System builds a new aggregated (ISIN, reassessed RCA)  list as follows: for each ISIN's record found in step1:                                                                                                               |
|               | 2.                                                                                                                                                                                               | • Adds to that list a new item (ISIN of the record, reassessed RCA  of the record).                                                                                                                                                   |
|               | 2.                                                                                                                                                                                               | • For each ISIN in the 'Derivative ISIN List' of the record, adds to  that list (ISIN in the Derivative ISIN List, Reassessed RCA of the  record).                                                                                    |
|               | 2.                                                                                                                                                                                               | In the following step, the ESMA System excludes from the list built in  step 2 the ISINs for which the application of the reassessed RCA has  been bypassed for the current year.                                                     |
|               | 3.                                                                                                                                                                                               | For  each  ISIN  in  the  list  built  in  step  2,  the  ESMA  System  checks  whether it exists in the 'RCA manual change process table' an ISIN's  record which date of application is the 1 st  of April of the current year 10 . |
| Normal Flow   |                                                                                                                                                                                                  | 3.1 In case a record is found, the ISIN is removed from the List built in  step 2.                                                                                                                                                    |
|               | 4.                                                                                                                                                                                               | For each ISIN in the list built in step 2, the ESMA System checks whether  it exists in the 'RCA manual change process table' an ISIN's record in  which Request status is  'Pending '.                                               |
|               |                                                                                                                                                                                                  | 4.1 In case a record is found, the system updates the record as follows:                                                                                                                                                              |
|               |                                                                                                                                                                                                  | • Request status is set to ' Rejected '.                                                                                                                                                                                              |
|               |                                                                                                                                                                                                  | • The  comment  for  reason  is  set  as  follows:  ' Cancelled  by  application of RCA Yearly Reassessment results on [sysdate]' .                                                                                                   |
|               |                                                                                                                                                                                                  | • Upcoming RCA is set to the applicable RCA.                                                                                                                                                                                          |
|               |                                                                                                                                                                                                  | • Modification flag is set to TRUE;                                                                                                                                                                                                   |
|               |                                                                                                                                                                                                  | • Overridden flag is set to TRUE.                                                                                                                                                                                                     |
|               | For each ISIN remaining in the list in step 3, the ESMA System determines  its RCA record as per use case 3.3.6.8.                                                                               | For each ISIN remaining in the list in step 3, the ESMA System determines  its RCA record as per use case 3.3.6.8.                                                                                                                    |

8

Threshold termination date of received instruments for Yearly Reassessment, can be changed through yearly.reassessment.termination.date.threshold system configuration parameter

<!-- image -->

| Frequency   | Yearly                                                                                                                                                                                                                                                                                                                                             |
|-------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Business    | The change is the RCAs concerning Yearly reassessment will be published  in  the  Instrument  Reference  data  in  April  1 st   each  year  and  starts  being  applicable  from  that  date.  Nevertheless,  the  application  of  the  Yearly  reassessment may be bypassed through a manual change process and upon  Concerned NCA agreements. |
| Assumptions | The change is the RCAs concerning Yearly reassessment will be published  in  the  Instrument  Reference  data  in  April  1 st   each  year  and  starts  being  applicable  from  that  date.  Nevertheless,  the  application  of  the  Yearly  reassessment may be bypassed through a manual change process and upon  Concerned NCA agreements. |

## 3.3.10 End-of day processing / Update consistent reference data table

| Goal          | The goal of this use case is to update the consistent reference table in  order  to  prepare  the  publication  of  instrument  reference  data  in  a  consistent way across TV/SI.                                             |
|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors        | The ESMA System                                                                                                                                                                                                                  |
| Preconditions | The ESMA System has processed all  incoming  files submitted before the  Applicable cut-off time.  In addition, and in case the Next publication date is the 1st of April, the ESMA                                              |
| Trigger       | current report day have been processed when the ESMA System prepares  the next publication, each year.  OR                                                                                                                       |
| Trigger       | In case the ESMA System prepares the 1 st  April publication (each year) Apply  RCA Reassessment result use case successfully completed.                                                                                         |
| Postcondition | The ESMA System has updated the consistent reference data table                                                                                                                                                                  |
| Postcondition | 2.  The ESMA system extracts from the 'Received Reference Data Table'  the records which satisfy all the following conditions:  • Latest received flag is TRUE  Records  which  have  been  processed  and  stored  in  Received |
| Normal Flow   | 2.  The ESMA system extracts from the 'Received Reference Data Table'  the records which satisfy all the following conditions:  • Latest received flag is TRUE  Records  which  have  been  processed  and  stored  in  Received |

<!-- image -->

[ The  above  captures  latest  received  records  submitted  during  the  latest submission period and before the applicable cut-off time ]

## OR

- · ISIN in the ' RCA data table ' which Modification flag is TRUE.
- · Latest received flag is TRUE.

[ The above captures records related to an instrument which upcoming RCA has been changed during the latest submission period ]

- 3. The records are stored in the 'New and On time records table' in place of the existing ones. The following attributes are extracted:
- · RECORD\_ID
- · ISIN
- · Received Status
- · Latest ESMA Reception date time
- · Trading-Venue dependent fields as described in Table 21 - RTS23 Fields table.
- · Free-text fields used for consistency checks in 'RTS 23 fields Table ' (section 6.9 RTS23 Fields table).
- · Non-Free-text fields used for consistency checks in 'RTS 23 fields Table ' (section 6.9 RTS23 Fields table).
- 4. For each ISIN extracted in the step 3 with Received Status as 'REFR', the ESMA System extracts from the Received Reference Data Table the record which RECORD\_ID is the RCA record in the RCA data table for that  ISIN;  the  following  attributes  are  stored  in  the  'Reference  Fields table' in place of the existing ones:
- · ISIN
- · Upcoming RCA in the RCA data table for the ISIN's record
- · Free-text fields used for consistency checks in 'RTS 23 fields Table ' (section 6.9 RTS23 Fields table)
- · Non-Free-Text fields used for consistency checks in 'RTS 23 fields Table' (section 6.9 RTS23 Fields table).
- 5. For each RECORD\_ID in step 2, the ESMA System prepares a new (ISIN, MIC) record which will be stored in the Consistent Reference Data Table in steps 6 and 7 as follows :
- 6. For  the  records  with  Received  Status  as  'REFR',  insert  records  in Consistent Reference Data Table
- 6.1.  For  the  following  attributes,  the  values  in  the  ' New and On time records table ' are retained: ISIN, Latest ESMA Reception date time, and  Trading  venue  dependent  fields  in  'RTS  23  fields  Table' (section 6.9 RTS23 Fields table).
- 6.2.  For  the  following  attributes,  the  values  of  ISIN's  record  in  the ' Reference Fields table ' are retained: Upcoming RCA.

<!-- image -->

- 6.3.  For each  of the attributes  'Free-Text  used for consistency check' [List1] AND 'Non-free-Text used for consistency check' [List2] as stated in Table 21 - RTS23 Fields table:
- 6.3.1.  The ESMA System compares the value in the 'New and on time records  table'  with  the  value  of  the  ISIN's  record  in  the ' Reference Fields table '.
- 6.3.2.  In case those values are equal, the ESMA System retains that value for the new record.
- 6.3.3.  In case those values are different, the ESMA System retains for the new record:
- · the value in the 'Reference Fields table ' for attributes in List2,
- · the value in the ' New and On time records table ' for attributes in List1,
- · FALSE for the consistent flag.
- 6.3.4.  In case those values are different, the system adds the ISIN and number ID of the attribute in the Inconsistent ISIN List and associated fields in the 'TV/SI reporting table' as described in Table 41 - TV/SI Reporting table for (MIC, current system date) for that ISIN.
- 7. For  the  records  with  Received  Status  as  'CANC',  insert  records  in Consistent Reference Data Table
- 7.1.  For  the  following  attributes,  the  values  in  the  'New  and  On  time records table' are retained:
- · ISIN
- · Latest ESMA Reception date time
- · Trading-Venue dependent fields as described in Table 20 - RTS23 Fields table.
- · Free-text fields used for consistency checks in 'RTS 23 fields Table' (section 6.8 RTS23 Fields table).
- · Non-Free-text fields used for consistency checks in 'RTS 23 fields Table' (section 6.8 RTS23 Fields table).
- 7.2.  Set consistent flag to FALSE
- 8. For  each  record  resulting  of  step  4,  the  ESMA  System  computes  its HCCR as the hash value of the whole set of { all RTS23 fields + Upcoming RCA  +  RCA\_MIC  },  using  a  hash  function  with  sufficient  collision resistance to ensure that two different versions of the { RTS23 fields + Upcoming RCA + RCA\_MIC} will not lead to the same hash value for the same ISIN, MIC combination 11 .
- 9. For  each  record  resulting  of  step  3,  The  ESMA  System  updates  the 'Consistent Reference Data Table' as follows:
- 9.1.  Checks whether it exists a record in the 'Consistent Reference Data Table' with the same ISIN, MIC and HCCR.
- 9.2.  If such record is found:

<!-- image -->

- · Latest ESMA reception date time for this (ISIN, MIC) is set to the Latest ESMA reception date time of the record; and
- 9.2.1.  If  Received  Status  =  'REFR'  then  Consistent  Status  is  set  to 'Unchanged' unless it is terminated.
- 9.3.  If no such record is found, checks whether it exists a record in the 'Consistent Reference Data Table' with the same (ISIN, MIC).
- 9.3.1.  In  case  no  such record  is found  [the  instrument  has  never been reported to ESMA], inserts the new (ISIN, MIC) in the 'Consistent Reference Data Table' as follows:
- 9.3.2.  If Received Status is 'REFR'
- 9.3.2.1.  'Latest record flag' is set to TRUE
- 9.3.2.2.  In  case  the  termination  date  is  not  NULL,  and  date  of  the termination date is strictly prior to T-1, then set

PublishedFromDate AND PublishedToDate to NULL,

Consistent Status to 'Terminated',

ValidFromDate to T and ValidToDate to NULL

{Captures the case of a terminated instrument reported late}

- 9.3.2.3.  Otherwise the system sets

PublishedFromDate to T, PublishedToDate to NULL,

Consistent Status to 'New'

ValidFromDate to T and ValidToDate to NULL

9.3.3.  Otherwise, If Received Status is 'CANC'

9.3.3.1. Latest record flag' is set to TRUE

- 9.3.3.2. PublishedFromDate to T, PublishedToDate to NULL, Consistent Status to 'Cancelled', ValidFromDate to T and ValidToDate to NULL
- 9.4.  In case such record(s) exist(s), it is a modification, selects the record with  the  latest  ESMA  Reception  Date  Time,  hereinafter  called PREVIOUS RECORD.
- 9.4.1.  'Latest  record  flag'  of  the  PREVIOUS  RECORD  is  set  to FALSE.
- 9.4.2.  The  system  updates  the  field,  of  the  PREVIOUS  RECORD, ValidToDate  to T-1
- 9.4.3.  If the Received Status is 'REFR'
- 9.4.3.1. If  the  PublishedToDate of PREVIOUS RECORD is NULL [the invalid records are excluded]:
- 9.4.3.2. The  system  updates  the  respective  fields  of  the PREVIOUS RECORD as follows

PublishedToDate set to PvsT

9.4.3.2.1. If  Termination  Date  is  NULL  or  is  greater than or equal to (T-1) the  system inserts the  new record with

<!-- image -->

PublishedFromDate set to T, PublishedToDate set to NULL,

Consistent Status to 'Modified',

ValidFromDate to T and ValidToDate to NULL

'Latest record flag' set to TRUE.

9.4.3.2.2.

Otherwise, the instrument is terminated, and the system inserts the new record with

PublishedFromDate set to NULL, PublishedToDate set to NULL,

Consistent Status to 'Terminated',

ValidFromDate to T and ValidToDate to NULL

'Latest record flag' set to TRUE

## 9.4.3.3. Otherwise:

9.4.3.3.1.

If  the termination date of the new record is NULL or greater than or equal to T-1, the system inserts the new record with

PublishedFromDate set to T, PublishedToDate set to NULL, Consistent Status to ' Modified',

ValidFromDate to T and ValidToDate to NULL, Latest record flag ' set to TRUE.

{ captures the case of a correction on an instrument supposedly terminated but still active }

9.4.3.3.2. Otherwise, the system inserts the new record with

PublishedFromDate set to NULL, PublishedToDate set to NULL,

ValidFromDate to T and ValidToDate to NULL

Consistent Status to ' Terminated'

,

' Latest record flag ' set to TRUE.

{ captures the case of a correction on an instrument already terminated }.

9.4.4.  Otherwise, if Received Status is 'CANC'

9.4.4.1. Latest record flag' is set to TRUE

9.4.4.2.

PublishedFromDate to T, PublishedToDate to NULL, Consistent Status to 'Cancelled', ValidFromDate to T and ValidToDate to NULL

The ESMA System updates the PublishedToDate of the records of an instrument which last day when it is traded on PvsT-1 as follows:

- 10. In case it exists in the Consistent Reference Data Table an (ISIN, MIC) record which satisfy all the following conditions:
- · PublishedFromDate is not NULL
- · PublishedToDate is NULL

<!-- image -->

|                 | •  Termination date is not NULL  •  Date of the termination date is between  PvsT-1 included and T-2  included                                                                                                                    |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|                 | then:                                                                                                                                                                                                                             |
|                 | 10.1.  PublishedToDate is set to PvsT                                                                                                                                                                                             |
|                 | 10.2.  Consistent Status is set to 'Terminated'.                                                                                                                                                                                  |
|                 | 11. For all ISIN in the RCA reference data table, set the Modification flag to  FALSE.                                                                                                                                            |
| Frequency       | Daily (including ESMA non-working days).                                                                                                                                                                                          |
| Business  Rules | The fields reported by the RCA prevail on those submitted by every  submitted entity.                                                                                                                                             |
| Assumptions     | At the cut-off time, the system will align all the records to be published with  the RCA record. The system shall keep at the same level in the database the  submitted records and the modified records after each cut-off time. |

## 3.3.11 Generate information about rejections

| Goal          | Whenever a file is received, register information about rejections                                                            |
|---------------|-------------------------------------------------------------------------------------------------------------------------------|
| Actors        | The ESMA System                                                                                                               |
| Preconditions | None                                                                                                                          |
| Trigger       | A data file has been received by the system.                                                                                  |
| Postcondition | Information about rejections within the received data file has been registered.                                               |
|               | 1.  The system receives a file (DATINS, DATNWD, CANINS).                                                                      |
|               | 2.  Following  the  performance  of  file-level  and  /  or  record-level  data  validations on the incoming file, the system |
| Normal Flow   | 2.  Following  the  performance  of  file-level  and  /  or  record-level  data  validations on the incoming file, the system |

<!-- image -->

|                | d.  stores in a specific table for each received (ISIN, MIC), the status  of the last record received (OK/Error/Warning), the timestamp of  the file containing this value, and the filename   |
|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Frequency      | Every time a file is processed                                                                                                                                                                 |
| Business Rules | Use the same conventions (table name, table structure, column names, …)  across all systems having the same requirement (FIRDS / FITRS / DVCAP)                                                |
| Assumptions    |                                                                                                                                                                                                |

## 3.4  Tools for ESMA Business Administrators

## 3.4.1 Submit request to set termination date

| Goal                       | The objective of the use case is to allow ESMA to set a termination date  on an instrument-MIC combination.                                                                                                                                                                                                                                                                                            |
|----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors                     | ESMA Business Administrator - submit requests  The ESMA System - implements approved changes                                                                                                                                                                                                                                                                                                           |
| Preconditions              | The post-processing phase preparing the data to be published on the current  day has been completed.   The ESMA Business Administrator must be logged in successfully                                                                                                                                                                                                                                  |
| Trigger                    | Business case identified by ESMA or official request from NCA's                                                                                                                                                                                                                                                                                                                                        |
| Postconditions   Frequency | Requests have been submitted, to be applied in next post-processing phase  Ad-hoc                                                                                                                                                                                                                                                                                                                      |
| Normal Flow                | instruments/Termination ' on the ESMA Extranet.  1.  Selection of input file   1.1.  User  selects  the  input  file,  by  using  a  selection  dialog  box.  The  following  checks  should  be  performed  by  the  system,  after  the  selection of the file.   The Input file should be in the form of a csv, with comma separated fields,  with header information and rows as follows :  • ISIN |

<!-- image -->

The system will validate each row of the input file and retrieve records based on the following:

- 2.1.  The system checks that the (ISIN-MIC) exists in 'Received Reference Data Table' among records which Latest Received Flag is TRUE and Received Status is 'REFR'.
- 2.2.  The system should validate the TERMINATION\_DATE from input file, for each ISIN- MIC combination, as follows.
- · The TERMINATION\_DATE should a valid date and in a sensible range (no prior than 31-12-1899 12 ) or
- · Null

In  case  no  records  retrieved,  or  TERMINATION\_DATE  cannot  be validated, the system should log this record ,into the 'Set TERMINATION\_DATE error data table ', as per 6.15,  and continue processing the remaining lines from input file

- 3. Execution - Preparation
- The system stores temporarily the validated records in the ' TEMP\_TERMINATIONS data table '. The system inserts new records for all ISIN, MIC combinations that passed the validations, as follows:
- 3.1.  In  case  at  least  one  record  exist  in  ' TEMP\_TERMINATIONS data table ' for the ISIN,  MIC  combination,  the  system  updates  the 'Active\_flag' column of the existing record to FALSE.
- 3.2.   The system inserts in the ' TEMP\_TERMINATIONS data table ' a new record for that (ISIN, MIC) combination with the following attributes:
- · ISIN
- · MIC
- · USER\_ID as extracted from the logged-in user
- · TERMINATION\_DATE
- · Active\_Flag default value will be TRUE
- · Filename
- 4. Execution - Application

The  system  updates  the 'Received  reference  data  table' and  the 'Set TERMINATION  DATE  data  table' and  applies  the  requests  regarding termination date, set by ESMA Data Manager's, at the first steps of the next post-processing phase, as follows:

- 4.1.  For each (ISIN, MIC) combination that exists in ' TEMP\_TERMINATIONS data table ', the system extracts the record having the 'Active Flag' as TRUE.
- 4.2.  The  system  identifies  in  the 'Received  reference  data  table' the record, called Previous\_Record,  with the same ISIN, MIC, the Latest Received flag is TRUE and the Received Status is 'REFR.

<!-- image -->

- 4.3.  Updates the Latest Received flag of that record to FALSE
- 4.4.  The  system  inserts  in  the 'Received  reference  data  table' a  new record for that (ISIN, MIC) combination with the following attributes:
- · RTS23 fields as retrieved from the Previous\_Record for the ISIN, MIC
- · Submitting Entity Code  as retrieved from the Previous\_Record for the ISIN, MIC
- · FileSequenceId as 'ESMA-TERM'
- · Country of jurisdiction of the 'TV/SI (RTS23 field 6)' as retrieved from the Previous\_Record for the ISIN, MIC
- · Received Status as 'REFR'
- · Set ESMA Reception Date Time to current date
- · Set NCA Reception Time to empty
- · Set Technical RECORD\_ID to empty
- · Latest Received flag to TRUE
- · Consistent flag to  TRUE
- · TERMINATION\_DATE as retrieved from  the record extracted in step 4.1
- · HCRR should be generated with the RTS 23 fields.
- 4.5.  The system inserts in the 'Set TERMINATION DATE data table' all the  records  that  exist  in  the 'TEMP\_TERMINATIONS  data  table' (merely a copy). Afterwards, the system truncates the Temp table, in order to handle the new requests.

The system applies the requests regarding termination date, set by ESMA Data Manager's, in the next post-processing.

## Business rules Assumptions

## 3.4.2 Submit request to change RCA\_MIC (ESMA Data managers)

| Goal           | The objective of the use case is to allow ESMA to change RCA\_MIC.                                                                                                              |
|----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors         | ESMA Business Administrator - submit requests  The system - implements approved changes                                                                                        |
| Preconditions  | The post-processing phase preparing the data to be published at 08:00 on  the current day has been completed.   The ESMA Business Administrator must be logged in successfully |
| Trigger        | Business case identified by ESMA or official request from NCA's                                                                                                                |
| Postconditions | Requests have been submitted, to be applied in next post-processing  phase                                                                                                     |

<!-- image -->

## Normal Flow

NB: T is the day of the next publication date

- 1. An ESMA Business Administrator chooses ' RCA management/RCA\_MIC  change  management '  on  the  ESMA  portal (resp. on the ESMA Intranet).
- 2. Selection of the input file

User selects the input file, by using a selection dialog box. The following checks should be performed by the system, after the selection of the file.

Input file should be in the form of a csv, with comma separated fields, with the following fields :

- · ISIN
- · NEW\_RCA\_MIC
- · ValidFromDate
- · ValidToDate
- · Reason\_for\_change, (predefined values 13 )

The input file can have a maximum of 10.000 lines. In case input file has more lines, system should reject the file and inform  the user with a relevant error message.

## 3. Validation

The system will validate the following fields from input file, for each ISIN, NEW\_RCA\_MIC combination, as follows :

- · ValidFromDate is a valid date
- · ValidToDate is a valid date or ValidToDate is null
- · ValidFromDate should be, prior or equal, to ValidToDate, in case ValidToDate is a valid date (not null)
- •
- Reason\_for\_change, should exists in the predefined list of values
- · The ISIN, NEW\_RCA\_MIC combination proposed should exists in the FIRDS database (ISIN-MIC combination with Latest Received Flag as TRUE and Received Status as 'REFR')

In case a record cannot be validated, the system should log this record ,into the 'RCA\_MIC adjustments error data table', as per 6.14,  and continue processing the remaining lines from input file

## 4. Execution

The system should populate 'RCA\_MIC\_ADJUSTMENTS  data table'

- 4.1.  The system, inserts new  records, which successfully pass validation from step 3, with the following fields
- · ISIN
- · MIC
- · USER\_ID (Username from extranet login)
- · ValidFromDate
- · ValidToDate

<!-- image -->

## Frequency Business rules

Assumptions

- · Reason\_for\_change
- · Active\_change, default value will be TRUE

## 4.2.  History of submitted RCA\_MIC changes

In case  there  is  a  new  submission  for  an  existing  ISIN  in 'RCA\_MIC\_ADJUSTMENTS   data  table' , the system  should update  the  value  of  Active\_change  of  the  existing  record  to FALSE, and insert a new record with the submitted information, as per step 4.

The system applies the requests regarding RCA-MIC, set by ESMA Data Manager's, in the next post-processing phase, as per 3.3.6.13.

Ad-hoc

BRD 2.5.5

RCA\_MIC changes approved on a day T (from the time when the postprocessing phase is complete until end of day T) will be reflected on T+1.

<!-- image -->

## 3.5  RCA change Management

## 3.5.1 Overview

FIGURE 7 - RCA CHANGE MANAGEMENT USE CASE DIAGRAM

<!-- image -->

3.5.2 User interface for reviewing and acting on RCA change requests and RCA changes following yearly reassessment

The NCA user and the ESMA Business Administrator shall be able to filter in the search interface by selecting one by one or a combination of the following attributes (the user must be able to reset the filter criteria):

<!-- image -->

TABLE 8 - FILTER SECTION OF RCA CHANGE MANAGEMENT

| Field                                             | Default                                       | Input Type                                                                                                                                                                                  | Use                                                           |
|---------------------------------------------------|-----------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| Null                                              | Text (* for wildcard)                         | Filter by ISIN                                                                                                                                                                              | ISIN                                                          |
| All                                               | {'All'} + 4(x) List                           | Filter  ISIN  by  MIC  in  the  consistent  reference data table.                                                                                                                           | MIC                                                           |
| Null                                              | Text                                          | Filter ISIN for which the selected ISIN  is the single underlying according to  the consistent reference data table.                                                                        | Underlying ISIN                                               |
|                                                   | All  {'All'}  +  List                         | MiFIR identifier of the ISIN.                                                                                                                                                               | MiFIR identifier  of  Equity  /  Equity-like MiFIR Identifier |
| All                                               | {'All'}  +  Country  codes  of  EEA countries | Filter  ISIN  which  upcoming  RCA  is  the selected country in the RCA data  table.                                                                                                        | Current RCA                                                   |
| All                                               | EEA countries                                 | the  selected  country  in  the  RCA  Manual change process data table.  OR  Filter ISIN which reassessed RCA is  the  selected  country  in  the  RCA  yearly  reassessment  process  data | Proposed RCA                                                  |
| Display only  upcoming  reassessment  Unselect ed | {'Selected',  button                          | Display only the  upcoming changes  related  to  the  next  reassessment.                                                                                                                   | 'Unselected'}  yearly                                         |
| Display only pending  request  Unselect ed        | {'Selected',  'Unselected'}  button           | Display only the manual changes that  have not yet been approved and the  upcoming  reassessment  changes                                                                                   |                                                               |
|                                                   | EEA countries                                 | that have not yet been applied.  Filters on the Approver RCA                                                                                                                                | Approver RCA                                                  |
|                                                   | {'All'}  +  Country  codes  of                |                                                                                                                                                                                             | All                                                           |

FIGURE 8 - RCA CHANGE MANAGEMENT USER INTERFACE SCREEN

<!-- image -->

<!-- image -->

The user shall be able to adjust the number of records displayed at a time on the web page.

The username/NCA of the user that has logged in shall be displayed.

<!-- image -->

## 3.5.3 Yearly RCA Reassessment for Equities

| Goal            | The objective of the use case is to periodically reassess the RCA for  'equity / equity like' instrument.                                                                                                                                                                                                                                                                                                                                                                                                      |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|                 | TV/SI (in the jurisdiction of a delegating NCA) - submits data on turnover                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Actors          | NCA (not delegating data collection in its jurisdiction) - submits data on   turnover                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Preconditions   | The system has received all necessary daily turnover data (excluding all  transactions executed under pre-trade waivers of MiFIR Art 4(1) (a) to (c).   The volume should be expressed in Euros  to perform the update.                                                                                                                                                                                                                                                                                        |
| Trigger         | Every week from 8 th  of January to 15 th  of March each year or in an Ad-hoc  basis                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Postcondition s | Yearly  RCA  reassessment    input  data  table  (6.13)  has  been  populated  through an ad-hoc query.                                                                                                                                                                                                                                                                                                                                                                                                        |
|                 | 3.  The  ESMA  system  Identifies  all  ISINs  in  the  'Provided  ISINs  table'  having the One-off Yearly Enable Flag as TRUE                                                                                                                                                                                                                                                                                                                                                                                |
|                 | 4.  For each ISIN identified in step 2, the system retrieves from the Yearly  Turnover View (6.8) the list of (ISIN, MIC, yearly turnover)                                                                                                                                                                                                                                                                                                                                                                     |
|                 | 4.1 Excludes from the list the records with MIC under jurisdiction  of the withdrawn country (Withdrawn flag is TRUE in the 'NCA  reference data table' for NCA country in the Trading Venue  Mapping for the MIC of the identified record)                                                                                                                                                                                                                                                                    |
| Normal Flow     | 4.2 Exclude cancelled and terminated ISIN - MIC combination  Keeps only the records for the previous year with Consistent  Status other than 'CANC' and ISIN-MIC combination  that will  not  be  terminated  by  the  date  configured  in  the  'yearly.reassessment.termination.date.threshold' parameter of  the current  year (in the 'Consistent reference data table' for  non-cancelled ISIN-MIC combination and Latest Received Flag  as TRUE the Termination Date is NULL or strictly after the date |
|                 | 4.3 Identify  MIC  from  active  ISIN-MIC  combinations  based  on  market priority (RMKT then MLTF)                                                                                                                                                                                                                                                                                                                                                                                                           |
|                 | 4.3.1  For each ISIN, the system  identifies the MIC with the  highest  yearly  positive  (  &gt;  0  Euros)  turnover  for  the  previous year, traded on Regulated markets, identified  by ('MarketType' equals RMKT).                                                                                                                                                                                                                                                                                          |
|                 | 4.3.2  For each ISIN, the system  identifies the MIC traded on  Regulated markets, identified by ('MarketType'  equals  RMKT) with                                                                                                                                                                                                                                                                                                                                                                             |

<!-- image -->

- · earliest 'Date  of request for admission to  trading' or  'Date  of  admission  to  trading  or  date  of  first trade', (RTS23 Fields 10 or 11)

If a single MIC is identified flow continues to 3. Update 'RCA Yearly reassessment process data' table, else flow continues to next check

- 4.3.3 For each ISIN, the system  identifies the MIC traded on Regulated markets, identified by ('MarketType'  equals RMKT) with
- · yearly turnover to be zero (0) or no yearly turnover data available and
- · earliest 'Date  of request for admission to  trading' or  'Date  of  admission  to  trading  or  date  of  first trade', (RTS23 Fields 10 or 11) and
- · earliest  'ESMA  date  time  of  reception',  or  when present, 'NCA date time of reception', for the first record reported by the MIC for the ISIN

If a single MIC is identified flow continues to 3. Update 'RCA Yearly reassessment process data' table, else flow continues to next check.

- 4.3.4 For each ISIN, the system  identifies the MIC with the highest yearly positive ( &gt; 0 Euros) turnover traded on Multilateral Trading Facilities, identified by ('MarketType' equals MLTF).

If a single MIC is identiied flow continues to 3. Update 'RCA Yearly reassessment process data' table, else flow continues to next check.

- 4.3.5 For each ISIN, the system identifies the MIC traded on Multilateral Trading Facilities, identified by ('MarketType' equals MLTF)  with
- · yearly turnover to be zero (0) or no yearly turnover data available and
- · earliest 'Date of request for admission to trading' or  'Date  of  admission  to  trading  or  date  of  first trade', (RTS23 Fields 10 or 11)

If a single MIC is identiied flow continues to 3. Update 'RCA Yearly reassessment process data' table, else flow continues to next check

- 4.3.6 For each ISIN, the system  identifies the MIC traded on Multilateral Trading Facilities, identified by ('MarketType'  equals MLTF) with
- · yearly turnover to be zero (0) or no yearly turnover data available and
- · earliest 'Date  of request for admission to  trading' or  'Date  of  admission  to  trading  or  date  of  first trade', (RTS23 Fields 10 or 11) and
- · earliest  'ESMA  date  time  of  reception',  or  when present, 'NCA date time of reception', for the first record reported by the MIC for the ISIN

If a single MIC is identified flow continues to 3. Update 'RCA Yearly reassessment process data' table, else flow continues to next check

<!-- image -->

Frequency

Business rules

- 4.3.7 If no single MIC  is identified, then this ISIN is disregarded from Yearly RCA Reassessment process.

## 5.  Update 'RCA Yearly reassessment process data' table

The system inserts a new record (or update in case it already exists a record for that (ISIN, Year) combination) using the following attributes:

- · Year is the current year;
- · ISIN;
- · Reassessed  RCA  is  the    NCA  country,  in  the  Trading  Venue Mapping for the MIC identified in step 2;
- · Derivative  ISINs  as  list  of  ISINs,  for  which  all  the  following conditions apply
- o Having ISIN as Single Underlying ISIN (RTS23 Field 26a) in the Consistent RDT
- o Latest Received Flag as TRUE
- o Consistent Status &lt;&gt; 'CANC'
- o Termination Date as NULL or strictly after the date configured in the 'yearly.reassessment.termination.date.threshold' parameter of the current year .
- o MIC is the RCA\_MIC of the derivative
- o CFI construct matches the RTS22 rule of 'RTS22 Art.16 (5).a ("equity derivatives"), according to Annex 6.3 CFI/RCA rule mapping table

Weekly (from the 8 th  of January to the 15 th  of March) or in an Ad-hoc basis

The yearly reassessment rules are described in RTS22 Art 16(1) As it is possible to receive corrections on reference and transparency data, it is proposed to run this use case more than once during the 8/Jan - 15/Mar period. The proposed frequency is weekly.

Assumptions

The result is produced based on the latest transparency data available in the transparency system at the time when the use case is triggered.

## 3.5.4 Change of RCA\_MIC (for NCA's)

| Goal          | The objective of the use case is to allow a NCA to change the current  RCA\_MIC of an instrument   |
|---------------|---------------------------------------------------------------------------------------------------|
| Actors        | NCA user - submits an action to change the RCA\_MIC                                                |
| Preconditions | A NCA has reasons to believe that RCA\_MIC should be changed for an  instrument.                   |
| Preconditions | Authorised user has logged on the extranet.                                                       |
| Trigger       | NCA initiates an action to change the RCA\_MIC                                                     |

<!-- image -->

| Postconditions   | Requests  have  been  submitted,  to  be  applied  in  next  post-processing  phase                                                                                                                                                           |
|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|                  | NB: T is the day of the next publication date                                                                                                                                                                                                 |
|                  | change submission ' on a restricted access area of the ESMA Portal  (resp. on the ESMA Intranet).  2.                                                                                                                                         |
|                  | The system displays a webpage (including the username/NCA of the  user) allowing the user to manually enter the following data                                                                                                                |
|                  | • ISIN for which the RCA\_MIC change is requested.                                                                                                                                                                                             |
|                  | provided ISIN and display them in a selection tabular form.                                                                                                                                                                                   |
|                  | 3.  The  system  should  retrieve  the  list  of  MICs,  by  filtering  out  the  cancelled and terminated ISIN-MIC combinations, currently trading the               Selection form should contain the following fields, as per each row   : |
|                  | • Market type of MIC  • Reason for change, from predefined list of values  • Selection button, to select the respective MIC                                                                                                                   |
|                  | the user to select the MIC which will be the  RCA\_MIC                                                                                                                                                                                         |
|                  | RCA\_MIC)  iv.  All other records should be displayed in white  lines and their selection button will be active, for                                                                                                                           |
|                  | 5.  The system should allow only one selection from the selection form                                                                                                                                                                        |

<!-- image -->

Alternative flow

Frequency

Business rules

- 6. The system should allow the user, to choose 'Reason for change' from a predefined list of reasons. The selection of 'Reason for change' is a mandatory field.
- 7. The  system,  after  the  selection  of  a  RCA\_MIC,  should  provide  a second step of approval to the user, with two available options, either to  submit the  selected change or cancel the  selection  and  return to selection form, step 2.
- 8. The system should populate 'RCA\_MIC\_ADJUSTMENTS  data table' as follows :

Inserts a new record with the following fields

- · ISIN
- · MIC
- · USER\_ID (Username from extranet login)
- · ValidFromDate with the value of T
- · ValidToDate, as NULL
- · Reason of change
- · Active\_change, default value will be TRUE
- 8.1.  History of submitted RCA\_MIC changes
- If there is a new submission for an existing ISIN in 'RCA\_MIC\_ADJUSTMENTS  data table' ,  the  system should change the value of Active\_change of the existing record, to FALSE, and insert a new record with the submitted information, as per step 8.

The  system  applies  the  requests  regarding  RCA-MIC  in  the  next  postprocessing phase, as per 3.3.6.13.

Ad-hoc

BRD 2.5.4

RCA\_MIC changes approved on a day T (from the time when the postprocessing phase is complete until end of day T) will be reflected on T+1.

Assumptions

## 3.5.5 Submit request to change RCA

| Goal          | The objective of the use case is to allow a NCA to request to become  the RCA for an instrument and or to request another NCA to become  the RCA. An ESMA Business Administrator can request on behalf of  a NCA.   |
|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors        | NCA user - submits a request to change RCA  ESMA Business Administrator - Submits a request to change RCA                                                                                                           |
| Preconditions | A NCA has reasons to believe that it should be or should not be the RCA  for an instrument.                                                                                                                         |

<!-- image -->

## Trigger

## Postconditions

## Normal Flow

ESMA  may  initiate  the  process  on  behalf  of  the  NCA,  in  exceptional circumstances.

Authorised user has logged on the extranet.

## NCA/ESMA initiates a request to change the RCA.

The system has registered the request as 'Pending' and sent the relevant email notification to the current upcoming RCA and Requested RCA of the instrument.

- 1. NCA user on behalf of an NCA (resp. ESMA Business Administrator) selects  ' RCA  management/RCA  change  submission ' on  a  restricted access area of the ESMA Portal (resp. on the ESMA Intranet).
- 2. The system displays a webpage (including the username/NCA of the user) allowing the user to manually enter the following data for one or more instrument(s):
- · ISIN for which the RCA change is requested.
- · Requested RCA for that ISIN.
- · Selection of a reason among a dropdown list of standard reasons for  change.  The  list  of  standard  reasons  for  change  shall  be configurable in the system.
- · Optionally,  an  additional  comment  (free  text)  to  provide  further details on the reason for the RCA change request.
- 3. The  system validates the values entered using the following controls:
- o None of the fields defined in step 2 can be empty.
- o Each ISIN is entered only once.
- o It  exists a record in the 'consistent reference data table' which satisfy all the following conditions
- · ISIN is the submitted ISIN;
- · (Termination date is NULL) or (Termination date &gt;= Current\_system\_date)
- · Received Status is 'REFR'

{ The entered instrument shall be still traded on at least one TV/SI at the time of the submission according to the latest publication }

- · In  case  the  user  is  a  NCA  user,  the  requested  RCA  or  the Upcoming RCA must be the  Requesting entity.
- 4. The  system displays the valid entered records (including the name of the     instrument related to the entered ISIN).
- 5. For each entered ISIN (all checks are passed), The system searches the Derivative instrument(s) still traded according to the latest publication which have the entered ISIN as single underlying as follows: the system extracts  from  the  ' Consistent  Reference  Data  Table '  the  ISIN  of  the records which satisfy all of the following conditions:

<!-- image -->

- · Field 26a is the entered ISIN.
- · (Termination date is NULL) or (Termination date &gt;= Current\_system\_date)
- · 'Latest record flag' is TRUE.
- · Received Status is 'REFR'
- · CFI  construct  matches  the  RTS22  rule  of  'RTS22  Art.16  (5).a ("equity derivatives") or RTS22 Art.16 (5).b ("debt derivatives")', according to Annex 6.3 CFI/RCA rule mapping table
- 6.  For each entered ISIN, the system displays the ISIN found in the step 5. with the following information:
- · ISIN
- · Requested RCA (same as the associated underlying instrument),
- · Upcoming RCA of ISIN's record in the RCA data table.
- · An automatically populated text: 'Derivative of [ISIN] + reason for which the RCA change was requested for the underlying ISIN', where [ISIN] is the ISIN of the instrument for which the user initially made the request (and thus the reason this derivative appeared in the list).
- 7.  The system asks for final validation of the whole displayed list. The user at this stage cannot modify ISIN, Requested RCA or exchange reason for the derivative instruments.
- 8.  Once the request is confirmed by the user:
- 8.1  For  each  displayed  line,  The  ESMA  System  inserts  in  the  ' RCA manual change process data table ' a new record:
- · A  new  unique  Request  ID  is  generated  for  each  RCA  change request;
- · Requested RCA is set to the entered Requested RCA;
- · Upcoming RCA is set to the Upcoming RCA in the RCA data table related to that ISIN;
- · Reason for manual change is set to the entered reason;
- · Request status is set to 'Pending';
- · Requester entity is set to the NCA of the current user in case of NCA user;
- · 'EU' in case of ESMA business Administrator.
- · Approver entity is set to:
- · The upcoming RCA in case the requested RCA is the NCA of the current user.
- · Otherwise, the requested RCA
- · Record timestamp is set to the current system date
- · For all RCA change requests automatically added in steps 5 and 6, the system populates the Related Request with the Request ID

<!-- image -->

## Alternative flow

## Frequency Business rules

Assumptions

- of  the  corresponding  RCA  change  request  on  the  underlying instrument made by the user in step 3.
- 8.2  The  ESMA  System  sends  automated  e-mails  notifying  the  list  of ISINs for which a RCA change request await an approval as follows:
- 8.2.1 The ESMA System groups all the ISINs for which a change is  requested,  including  derivatives,  by  upcoming  RCA  as per NCA data table.
- 8.2.2 For each upcoming RCA, The ESMA System generates an email addressed to the generic email address of the RCA in NCA  reference  data  table  as  per section 6. and containing the list of ISIN in step 8.2.1.
- 8.2.3 The ESMA System groups all the ISINs for which a change is  requested,  including derivatives, by  requested RCA as per  NCA  data  table  excluding  the  requester  (ESMA  or requested RCA).
- 8.2.4 For each requested RCA, The ESMA System generates an email addressed to the generic email address of the RCA in NCA  reference  data  table  as  per section 6. and containing the list of ISIN in step 8.2.3.
- 9. The system only displays the latest change request made by the same requestor on the same ISIN. In case the same requestor makes a new request on the same ISIN, the older requests and all 'related' requests are cancelled.
- 3.1 In case at least one entry has failed the validation checks, the ESMA System displays the list of errors. The user has to re-enter manually the erroneous entries.

Ad-hoc

N/A

Screen specification as per section 3.5.2User interface for reviewing and acting  on  RCA  change  requests  and  RCA  changes  following  yearly reassessment.

The user must be able to go back to the previous page at any time.

## 3.5.6 Review and act on RCA change request

| Goal   | The objective of the use case is to allow an NCA or ESMA to view  change request submitted to its NCA and approve or reject any of the  requests.   |
|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors | NCA - reviews, approves and denies requests  ESMA Business Administrator - reviews, approves and denies requests                                    |

<!-- image -->

## Preconditions

## Trigger

## Postconditions

## Normal Flow

A NCA receives notification of a request for change of RCA for a number of instruments.

The post-processing phase preparing the data to be published at 08:00 on the current day has been completed.

A NCA receives notification of a request for change of RCA for a number of instruments.

Requests have been reviewed and the user has performed all necessary actions.

- 1.  A  NCA  user  (resp.  an  ESMA  Business  Administrator)  [current  user] chooses ' RCA management/RCA change management '' on the ESMA portal (resp. on the ESMA Intranet).
- 2. The ESMA System selects in the ' RCA manual change process data table ' ISIN records which 1) ' Request status ' is { 'Pending ', 'Approved,'Rejected '}, the following attributes:
- · ISIN
- · Requested RCA
- · Upcoming RCA
- · Reason for manual change
- · Requester entity
- · Approver entity
- · The  time  duration  since  the  request  was  first  introduced  (Current System date time - record timestamp in the RCA manual change process data table ).
- 3. The ESMA System displays the attributes found in step 2 as per user interface  described  in  3.5.2  and  allows  the  user  to  sort  by  ISIN, Requested  RCA,  Upcoming  RCA,  and  Date  when  the  request  for change was introduced in the system.
- 4. The user can choose to approve or reject only and any of the requests related to the ISIN which 1) ' Request status '  is 'Pending ' 2) current user's institution is a NCA and that NCA's country code is the 'Approver Entity'.
- · The  user  can  also  select  any/all  combinations  of  requests  and approve / reject them.
- · The system provides a 'select all' button.
- · RCA change requests are approved / denied individually.
- · In  order  to  facilitate  approval  /  rejection  of  RCA  change  requests propagated  to  derivatives,  the  user  can  choose  the  option  to approve / deny all 'related' requests at the  same time. In more detail if the user ticks this option and approves / rejects request ID1

<!-- image -->

Frequency

- o All requests that have the ID1 in 'Related Request ID' and for which the user's country code is the 'Approver Entity' will be approved / rejected;
- o All requests that have the same 'Related Request ID' as request ID1 and for which the user's country code is the 'Approver Entity' will be approved / rejected;
- o The request which Request  ID  is equal  to the  'Related Request  ID'  of  request  ID1  and  for  which  the  user's country code is the 'Approver Entity' will be approved / rejected;
- 5. In case the user approves the request of an ISIN or a combination of ISINs, and for each of them, the ESMA System:
- 5.1 Updates  the  records  in  the  ' RCA manual change process data table '  as follows:
- 5.1.1 Request status is set to 'Approved'
- 5.1.2 Date of application is set the current date.
- 5.2 Updates the ISIN's record in the 'RCA data table' as follows: 5.2.1 Upcoming RCA is set to the requested RCA
- 5.2.2 Overridden flag is set to TRUE
- 5.2.3 Modification flag is set to TRUE.
- 5.3  The  ESMA  System  updates  the  RCA  record  according  to  the 'Determine  the  RCA  record'  use case  as  per  section  3.3.6.8 Determine the RCA record of the submitted instrument0 for each ISIN.
- 5.4 The ESMA System sends automated e-mails to each affected NCA (upcoming RCA and requested RCA and addressed to the generic email address in the NCA reference data table) notifying that RCA change request is approved. The email should contain a combination of ISIN in order to reduce the number of emails.
- 6. In case the user rejects the request of an ISIN or a combination of ISINs, and for each of them, the ESMA System:
- 6.1 sets the request Status to ' Rejected ' in the ' RCA manual change process data table '.
- 6.2 sends automated e-mails to each affected NCA (upcoming RCA and requested RCA and addressed to the generic email address in the NCA reference data table) notifying that RCA change request is rejected. The email should contain a combination of ISIN in order to reduce the number of emails.

Ad-hoc

<!-- image -->

| Business rules   | ESMA business user will only act on RCA change requests after liaising  with affected parties.  RCA should not be manually changed during the post-processing phase,  which occurs on a day T between 00:00 and 08:00, when the system is  preparing the full-file to be published at 08:00, as it would interfere with the   |
|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|                  | RCA  changes  approved  on  a  day  T  (from  the  time  when  the  post- processing phase is complete until end of day T) will be reflected on T+1.                                                                                                                                                                          |

## 3.5.7 Review and act on Yearly reassessment results

| Goal           | The objective of the use case is to enable a NCA user or an ESMA  Business  Administrator  to  view  and  act  on  the  result  of  the  calculation  of  the  yearly  RCA  reassessment  before  it  becomes  applicable the 1 st  of April of each year.                         |
|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors         | NCA user                                                                                                                                                                                                                                                                           |
|                | ESMA business Administrator                                                                                                                                                                                                                                                        |
| Preconditions  | Yearly RCA Reassessment for Equities use case is completed.                                                                                                                                                                                                                        |
| Trigger        | Ad-hoc                                                                                                                                                                                                                                                                             |
| Postconditions | The user has reviewed the pending changes of interest for him and was  able to notify its decision with respect to change requests and yearly  reassessment results.                                                                                                               |
| Postconditions | 1.  A  NCA user  (resp.  an  ESMA  Business Administrator) [current  user]  chooses ' RCA change management ' on the ESMA portal (resp. on the  ESMA Intranet).                                                                                                                    |
| Postconditions | 2.  The ESMA System selects in the ' Instrument yearly turnover view ' the  records in junction with the ' RCA Yearly reassessment process data  table ',  the  'RCA manual change process table', the 'MIC reference  data table', the 'RCA data table' the following attributes: |
| Postconditions | • ISIN (identifier): in the ' Instrument yearly turnover view'  • ISIN (Name): Financial Instrument Short name in the consistent                                                                                                                                                   |
| Normal Flow    | reference data table for that ISIN.  • MiFIR identifier: in the  'Instrument yearly turnover view'  • Current RCA: Upcoming RCA in the ' RCA data table'  for the ISIN.                                                                                                            |
| Normal Flow    | • Year: Year in the ' Instrument yearly turnover view '.  • MIC (identifier):  MIC in the ' Instrument yearly turnover view'.                                                                                                                                                      |
| Normal Flow    | • MIC (Name): InstitutionName in the ' MIC reference data table'  for  that MIC.                                                                                                                                                                                                   |
| Normal Flow    | • Country  of  jurisdiction:  NCA  country  in  the  ' Trading  Venue  Mapping  table '  for  that  MIC  (based  on  records  with                                                                                                                                                 |
| Normal Flow    | ValidityEndDate is NULL).                                                                                                                                                                                                                                                          |

<!-- image -->

- · Euro  Yearly  turnover:  Euro  Yearly  turnover  in  the 'Instrument yearly turnover view ' for that (Year, ISIN, MIC).
- · Upcoming  Reassessed  RCA:  Reassessed  RCA  in  the  ' RCA Yearly  reassessment  process  data  table '  for  the  (Year,  ISIN) record.
- 3.  The ESMA System displays the resulting records as per as per user interface described in 3.5.2, and allows the user to sort by ISIN, Current RCA, Proposed RCA, year of the reassessment. In case a record has distinct  upcoming  RCA  and  reassessed  RCA,  that  record  must  be highlighted.
- 4.  The ESMA System allows the user to filter records as per user interface described in chapter 3.5.2.
- 5.  The ESMA System allows the NCA user, only if he/she belongs to the Reassessed RCA or the Upcoming RCA, to bypass the application of the yearly reassessment for the current year.
- 6.  In  case  the  user  of  the  Reassessed  RCA  (resp.  Upcoming  RCA) chooses to bypass the application of the yearly reassessment for the current year, the ESMA System checks whether the Upcoming RCA (resp. the Reassessed RCA) has also already chosen to bypass (the bypass action is of 'Pending' status).
- 6.1 IF TRUE, The ESMA System registers the decision of the NCA (the bypass action status is set to 'Approved'):
- 6.1.1 updates  the  ' RCA manual  change  process '  as  follows: inserts/updates ISIN's record with the following attributes:
- · Requested RCA is the Upcoming RCA.
- · Date of application is the 1 st  of April of the current year.
- 6.1.2 sends automated e-mail to the  upcoming RCA  notifying that your NCA will continue to be the RCA after the 1st of April.
- 6.2 IF FALSE, the ESMA System registers the decision of the NCA (the bypass action status is set to 'Pending') and sends automated e-mail to the Upcoming RCA (resp. Reassessed RCA) notifying the user's NCA decision and requesting to confirm the bypass.
- 7.  In case a user rejects a pending bypass, the ESMA System registers the decision of the NCA (the bypass action status is set to 'Rejected') and sends automated e-mail to the user having requested the bypass informing  that  the  NCA  disagrees  with  the  bypass  decision  and  the Reassessed RCA will become the RCA of the instrument after the 1st of April.

Frequency Business rules Assumptions

Ad-hoc

<!-- image -->

## 3.6  Instruments Reference Data Distribution

## 3.6.1 Use Case Overview

FIGURE 9 - INSTRUMENTS REFERENCE DATA DISTRIBUTION USE CASE DIAGRAM

<!-- image -->

## 3.6.2 Create and distribute Full File

| Goal          | The goal of this use case is to generate the Full File for the NCAs and  distribute the NCA full file to the NCAs                                                                                      |
|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors        | The ESMA System - provides data via the HUBEX  NCA system - accesses the HUBEX to retrieve data                                                                                                        |
| Preconditions | The consistent reference data table is up to date.                                                                                                                                                     |
| Trigger       | As soon as the update of the consistent reference data table is successfully  completed.                                                                                                               |
| Postcondition | The full file is available in the Public folder dedicated to the ESMA System in  HUBEX System.                                                                                                         |
| Postcondition | The full file for the public is generated and is ready to be published.                                                                                                                                |
| Normal Flow   | 1. The ESMA System extracts from the ' Consistent Reference Data Table '  records  the  records  which  satisfy  all  of  the  following  conditions:  (Full  file  should contain all active records) |

<!-- image -->

## Frequency

## Business Rules

Assumptions

- · ValidFromDate is not NULL.;
- · ValidTodate is NULL;
- · Termination  date  is  NULL,  or  Termination  date  is  greater  than  or equal to T-1
- · Consistent Status&lt;&gt;CANC
- 2.  Extracted  records  are  used  to  generate  the  NCA  full  file  based  on  the Derived  Message  Identifier  schemas  referenced  in  Table  11  -  Instrument reference data message table associated  to Business  Application Header (BAH), BAH and business message encapsulation and Instrument Reference Data Report Message components. For each record, the file contains:
- · ISIN
- · MIC
- · Other RTS23 fields
- · Upcoming RCA
- · ValidFromDate
- · Consistent flag
- · RCA record MIC
- · Latest ESMA reception Date Time
- 3. The name of the NCA Full file follows the convention as per section Annex 2: File naming conventions. The name of the Public file is: FULINS\_&lt;Next publication date&gt;\_&lt;NumberoftheSplitfile&gt;of&lt;MaxNumberofSplitfiles&gt;.zip.
- 4. The ESMA System uploads the NCA full file to the 'Public folder' dedicated to the ESMA System in HUBEX System.

Daily (including ESMA non-working days)

The file must be made available on the HUB for NCAs by 8am on each day

Given the expected high volume of data, the file may be split in several files. The threshold shall be configurable in the system.

Fields  using  DATE\_TIME\_FORMAT  should  be  expressed  in  UTC  in  the following format YYYY-MM-DDThh:mm:ss.ddddddZ (fields 9,10,11,12)

HUBEX Public folder dedicated to the FIRDS ESMA System is configured with access restricted to NCAs

<!-- image -->

## 3.6.3 Create and distribute Cancellations Full File

| Goal            | The goal of this use case is to generate the Cancellations Full File for  the NCAs and distribute the NCA Cancellations full file to the NCAs                                                                                                                                                                          |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors          | The ESMA System - provides data via the HUBEX                                                                                                                                                                                                                                                                          |
| Preconditions   | NCA system - accesses the HUBEX to retrieve data                                                                                                                                                                                                                                                                       |
| Trigger         | The consistent reference data table is up to date.   As soon as the update of the consistent reference data table is successfully                                                                                                                                                                                      |
|                 | The full file is available in the Public folder dedicated to the ESMA System in                                                                                                                                                                                                                                        |
| Postcondition   | HUBEX System.  The full file for the public is generated and is ready to be published.                                                                                                                                                                                                                                 |
| Normal Flow     | records the records which satisfy the following conditions: (Cancellations Full  file should contain all cancelled records)  • Consistent\_Status is CANC  • Latest Received Flag is TRUE  2.  Extracted  records  are  used  to  generate  the  NCA  full  file  based  on  the                                        |
|                 | Derived  Message  Identifier  schemas  referenced  in  Table  11  -  Instrument  reference data message table associated  to Business  Application Header  (BAH), BAH and business message encapsulation and Instrument Reference  Data Report Message components. For each record, the file contains:  • ISIN   • MIC |
| Frequency       | section Annex 2: File naming conventions. The name of the Public file  is: FULCAN\_&lt;Next publication  date&gt;\_&lt;NumberoftheSplitfile&gt;of&lt;MaxNumberofSplitfiles&gt;.zip.   4. The ESMA System uploads the NCA full file to the 'Public folder' dedicated  to the ESMA System in HUBEX System.                                   |
|                 | Daily (including ESMA non-working days)                                                                                                                                                                                                                                                                                |
| Business  Rules | Given the expected high volume of data, the file may be split in several files.  The threshold shall be configurable in the system.                                                                                                                                                                                    |

<!-- image -->

|             | Fields  using  DATE\_TIME\_FORMAT  should  be  expressed  in  UTC  in  the  following format YYYY-MM-DDThh:mm:ss.ddddddZ (fields 9,10,11,12)   |
|-------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| Assumptions | HUBEX Public folder dedicated to the FIRDS ESMA System is configured  with access restricted to NCAs                                         |

## 3.6.4 Create and distribute Delta File

| Goal          | The goal of this use case is to generate the Delta File for the NCAs and  distribute the NCA Delta file to the NCAs.                                                                                                                                                                                                           |
|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors        | The ESMA System - provides data via the HUBEX  NCA system - accesses the HUBEX to retrieve data                                                                                                                                                                                                                                |
| Preconditions | Reference data records has been committed to the data base                                                                                                                                                                                                                                                                     |
| Trigger       | The generation of Full files has been successfully completed.                                                                                                                                                                                                                                                                  |
| Postcondition | The delta records file is in the public HUBEX for further uploading by NCA  and is ready to be published.                                                                                                                                                                                                                      |
|               | NB: T is the day of the next publication date, PvsT is the last day of success  publication                                                                                                                                                                                                                                    |
|               | 1.  The  ESMA  System  extracts  from  the  Consistent  Reference  Data  Table the records which:                                                                                                                                                                                                                              |
|               | OR                                                                                                                                                                                                                                                                                                                             |
| Normal Flow   | OR                                                                                                                                                                                                                                                                                                                             |
|               | 2.  Extracted records are used to generate NCA delta file based on the  Derived  Message  Identifier  schemas  referenced  in  Table  11  -  Instrument  reference  data  message  table  associated  to  Business  Application  Header  (BAH),  BAH  and  business  message  encapsulation and Delta file message components. |

<!-- image -->

## Frequency

## Business Rules

Assumptions

The first type, for 'New', 'Modified', 'Terminated' records, contains the following fields, in the respective below Xpaths :

Document/FinInstrmRptgRefDataDltaRpt/FinInstrm/NewRcrd

Document/FinInstrmRptgRefDataDltaRpt/FinInstrm/ModfdRcrd

Document/FinInstrmRptgRefDataDltaRpt/FinInstrm/TermntdRcrd

Contents of this first record type are the same as auth.036.001.02\_ESMAUG\_DLTINS\_1.1.0.xsd  and  added  as-is  in the updated auth.036.001.03\_ESMAUG\_DLTINS\_1.2.0.xsd

- · ISIN
- · MIC
- · Other RTS23 fields
- · ValidFromDate
- · ValidToDate (if not NULL)
- · NeverPublished flag (if TRUE)
- · Upcoming RCA
- · RCA record MIC

The second type, for Cancelled records contains the following fields, in the below XPath :

Document/FinInstrmRptgRefDataDltaRpt/FinInstrm/CancRcrd

Contents of the second record type, for Cancellations, are new as per the updated auth.036.001.03\_ESMAUG\_DLTINS\_1.2.0.xsd

- · ISIN
- · MIC
- 3. The name of the NCA File follows the convention as per Annex 2: File naming conventions. The name of the Public file is: DLTINS\_&lt;Next publication date&gt;\_&lt;NumberoftheSplitfile&gt;of&lt;MaxNumberofSplitfiles&gt;.zip.
- 4. The ESMA System uploads the NCA delta file to the Public folder dedicated to the ESMA System in HUBEX System.

Daily (including ESMA non-working days)

The file must be made available on the HUB for NCAs by 8am on each day

Given the expected high volume of data, the file may be split in several files. The threshold shall be configurable in the system.

It might unlikely happen that the Delta file is empty. In that case a delta file is generated in any case but without FinInstrm block.

Fields using DATE\_TIME\_FORMAT should be expressed in UTC in the following format YYYY-MM-DDThh:mm:ss.ddddddZ (fields 9,10,11,12)

N/A

<!-- image -->

## 3.6.5 Create and distribute invalid records File

| Goal          | The goal of this use case is to generate the new invalid records files for  NCA and to distribute the file to NCA.   |
|---------------|----------------------------------------------------------------------------------------------------------------------|
| Actors        | The ESMA System - provides data via the HUBEX                                                                        |
|               | NCA system - accesses the HUBEX to retrieve data                                                                     |
| Trigger       | The generation of aggregated delta files has been successfully completed.                                            |
| Postcondition | The invalid records file is in the Public folder dedicated to the ESMA System                                        |
|               | NB T is for Next Publication date                                                                                    |
|               | 1.  The ESMA System extracts from the consistent reference data table the  records which:                            |
|               | • ICN\_EXPORT\_INVALID\_FLAG IS NULL                                                                                    |
|               | • ValidToDate is between [PvsT -1 and T] and                                                                         |
|               | (captures out-of-date versions of records that have been modified)                                                   |
|               | OR  • ICN\_EXPORT\_INVALID\_FLAG is NULL                                                                                |
|               | • ValidFromDate is T                                                                                                 |
|               | • ValidToDate is Null                                                                                                |
|               | • ICN\_EXPORT\_INVALID\_FLAG is NULL                                                                                    |
|               | • Termination Date is not NULL and Termination date is between the  [PvsT -1 and T-2]                                |
|               | • Status is Terminated                                                                                               |
|               | (captures normally terminated instruments)                                                                           |
|               | OR                                                                                                                   |

<!-- image -->

## Frequency

## Business Rules

## Assumptions

- 2. Extracted records are used to generate the NCA Invalid records file based on the Derived Message Identifier schemas referenced in Table 11 - Instrument reference data message table associated to Business Application Header (BAH), BAH and business message encapsulation and Invalid records file Message components. For each record, the file contains:
- · ISIN
- · MIC
- · Other RTS23 fields
- · Upcoming RCA
- · RCA record MIC flag
- · Latest ESMA reception date time
- · ValidFromDate
- · ValidToDate. (if not NULL)
- · NeverPublished flag (if TRUE)
- 3.  The name of the NCA File follows the convention as per Annex 2: File naming conventions. The name of the Public file is: FIRDS\_INVINS\_PUBLIC\_&lt;Key1&gt;-&lt;Key2&gt;\_&lt;YY&gt;.zip
- 4.  The  ESMA  System  uploads  the  NCA  delta  file  to  the  Public  folder dedicated to the ESMA System in HUBEX System.

Daily (including ESMA non-working days)

The file must be made available on the HUB for NCAs by 8am on each day

Given the expected high volume of data, the file may be split in several files. The threshold shall be configurable in the system.

Fields using DATE\_TIME\_FORMAT should be expressed in UTC in the following format YYYY-MM-DDThh:mm:ss.ddddddZ (fields 9,10,11,12)

That  file  contains  records  that  are  not  part  of  the  full  file  anymore.  This includes  instruments  that  are  not  valid  anymore,  as  well  as  out-of-date versions of records that have been modified over time.

<!-- image -->

## 3.7  Instruments Reference Data Publication

## 3.7.1 Overview

The publication interface is accessible through ESMA website and composed of:

- 1. a U2A search interface ('Instrument search' use case) with a list of predefined filters; and
- 2. a U2A/A2A interface for aggregated files downloads  ('ISIN List Generation and Download' use case).

The export functionality will be accessible only through 2).

FIGURE 10 - INSTRUMENTS REFERENCE DATA PUBLICATION USE CASE DIAGRAM

<!-- image -->

<!-- image -->

## 3.7.2 Create Public full file

| Goal          | The goal of this use case is to generate a set of Full Files for the public.                                                                                                                                                                                                                                                                                                             |
|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors        | The ESMA System - Generates full public file                                                                                                                                                                                                                                                                                                                                             |
| Preconditions | The consistent reference data table is UpToDate.                                                                                                                                                                                                                                                                                                                                         |
| Trigger       | As soon as the update of the consistent reference data table is  successfully  completed.                                                                                                                                                                                                                                                                                                |
| Postcondition | The set of public full files are generated and are ready to be published.                                                                                                                                                                                                                                                                                                                |
|               | NB: T is the day of the next publication date, PvsT is the last day of success  publication                                                                                                                                                                                                                                                                                              |
|               | 1.  The  ESMA  System  extracts  from  the  'Consistent  Reference  Data  Table'  records the records which satisfy all of the following conditions:                                                                                                                                                                                                                                     |
|               | • ValidFromDate is not NULL                                                                                                                                                                                                                                                                                                                                                              |
|               | • ValidTodate is NULL;                                                                                                                                                                                                                                                                                                                                                                   |
|               | • Termination date is NULL, or Termination date is greater than or  equal to T-1                                                                                                                                                                                                                                                                                                         |
|               | • Consistent Status&lt;&gt;CANC                                                                                                                                                                                                                                                                                                                                                                |
| Normal Flow   | The ESMA System groups the extracted records as per the first-letter of  the CFI code.                                                                                                                                                                                                                                                                                                   |
|               | • For each group, extracted records are used to generate the public  full file based on the Derived Message Identifier schemas  referenced in Table 11 - Instrument reference data message table  associated to Business Application Header (BAH), BAH and  business message encapsulation and Instrument Reference Data  Report Message components. For each record, the file contains: |
|               | • ISIN                                                                                                                                                                                                                                                                                                                                                                                   |
|               | • Other RTS23 fields                                                                                                                                                                                                                                                                                                                                                                     |
|               | • RCA record MIC                                                                                                                                                                                                                                                                                                                                                                         |
|               | • ValidFromDate                                                                                                                                                                                                                                                                                                                                                                          |
|               | • For each group, each file is compressed, and the archive file name  is: FULINS\_&lt;First letter of CFI  code&gt;\_&lt;T&gt;\_&lt;NumberoftheSplitfile&gt;of&lt;MaxNumberofSplitfiles&gt;.zip.                                                                                                                                                                                                                    |
| Frequency     | Weekly when T is a Saturday (including ESMA non-working days)                                                                                                                                                                                                                                                                                                                            |

<!-- image -->

Given the expected high volume of data, the file may be split in several files. The threshold shall be configurable in the system. Fields using DATE\_TIME\_FORMAT should  be  expressed  in  UTC  in  the  following  format YYYY-MM-DDThh:mm:ss.ddddddZ (fields 9,10,11,12)

Assumptions

## 3.7.3 Create Public Cancellations full file

| Goal            | The goal of this use case is to generate a set of Cancellations Full Files  for the public.                                                                                                                                                                                                                                                                                                                                 |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors          | The ESMA System - Generates full public file                                                                                                                                                                                                                                                                                                                                                                                |
| Preconditions   | The consistent reference data table is UpToDate.                                                                                                                                                                                                                                                                                                                                                                            |
| Trigger         | As soon as the update of the consistent reference data table is successfully  completed.                                                                                                                                                                                                                                                                                                                                    |
| Postcondition   | The set of public full files are generated and are ready to be published.                                                                                                                                                                                                                                                                                                                                                   |
|                 | NB: T is the day of the next publication date, PvsT is the last day of success  publication                                                                                                                                                                                                                                                                                                                                 |
|                 | 1. The ESMA System extracts from the 'Consistent Reference Data Table'  records the records which satisfy the following conditions:                                                                                                                                                                                                                                                                                         |
| Normal Flow     | • Latest Received Flag is TRUE  2.  Extracted records are used to generate the public Cancellations full file  based on the Derived Message Identifier schemas referenced in Table  11 -  Instrument reference data message  table  associated to Business  Application Header (BAH), BAH and business message encapsulation  and Instrument Reference Data Report Message components. For each  record, the file contains: |
|                 | • ISIN                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Frequency       | Weekly when T is a Saturday (including ESMA non-working days)                                                                                                                                                                                                                                                                                                                                                               |
| Business  Rules | The file must be made available to the public by 9am every Saturday.  Given the expected high volume of data, the file may be split in several files.  The  threshold  shall  be  configurable  in  the  system.  Fields  using  DATE\_TIME\_FORMAT should be expressed in UTC in the following format  YYYY-MM-DDThh:mm:ss.ddddddZ (fields 9,10,11,12)                                                                       |
| Assumptions     |                                                                                                                                                                                                                                                                                                                                                                                                                             |

<!-- image -->

## 3.7.4 Create Public delta file

| Goal          | The goal of this use case is to generate a set of Delta Files for the  public.                                                                                                                                                                                                                     |
|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors        | The ESMA System - generates Delta public file                                                                                                                                                                                                                                                      |
| Preconditions | The consistent reference data table is UpToDate.                                                                                                                                                                                                                                                   |
| Trigger       | As soon as the update of the consistent reference data table is successfully  completed.                                                                                                                                                                                                           |
| Postcondition | The set of delta files is generated and are ready to be published.                                                                                                                                                                                                                                 |
|               | NB: T is the day of the next publication date, PvsT is the last day of success  publication                                                                                                                                                                                                        |
|               | 1.  The  ESMA  System  extracts  from  the  Consistent  Reference  Data  Table the records which:                                                                                                                                                                                                  |
|               | • ValidFromDate is between [PvsT +1 and T],                                                                                                                                                                                                                                                        |
|               | ValidToDate is NULL and                                                                                                                                                                                                                                                                            |
| Normal Flow   | (captures normally terminated instrument records)                                                                                                                                                                                                                                                  |
|               | 2.  The extracted records are used to generate the public delta file based on  the  Derived  Message  Identifier  schemas  referenced  in  Table  10  -  Instrument  reference  data  message  table  associated  to  Business  Application  Header  (BAH), BAH and business message encapsulation |
|               | and Delta file Message components.                                                                                                                                                                                                                                                                 |
|               | Two different types of records contained in each public delta file.                                                                                                                                                                                                                                |
|               | The first type, for 'New', 'Modified', 'Terminated' records, contains  the following fields, in the respective below Xpaths :                                                                                                                                                                      |
|               | Document/FinInstrmRptgRefDataDltaRpt/FinInstrm/NewRcrd                                                                                                                                                                                                                                             |
|               | Document/FinInstrmRptgRefDataDltaRpt/FinInstrm/ModfdRcrd                                                                                                                                                                                                                                           |
|               | Document/FinInstrmRptgRefDataDltaRpt/FinInstrm/TermntdRcrd                                                                                                                                                                                                                                         |

<!-- image -->

Frequency

## Business Rules

- · MIC
- · Other RTS23 fields
- · ValidFromDate
- · ValidToDate (if not NULL)
- · NeverPublished flag (if TRUE)
- · Upcoming RCA
- · RCA record MIC

The second type, for Cancelled records contains the following fields, in the below XPath :

Document/FinInstrmRptgRefDataDltaRpt/FinInstrm/CancRcrd

Contents of the second record type, for Cancellations, are new as per the updated auth.036.001.03\_ESMAUG\_DLTINS\_1.2.0.xsd

- · ISIN
- · MIC
- 3.  Each file is compressed, and the archive file name is: DLTINS\_&lt;T&gt;\_&lt;NumberoftheSplitfile&gt;of&lt;MaxNumberofSplitfiles&gt;.zip.
- 4.  Once all files have been successfully generated, made available on the Content  Delivery  Network  for  download,  and  link  added  to  the  ESMA webpage which lists the files published, the ESMA System sets PvsT to T.

Daily (including ESMA non-working days)

The file must be made available to the public by 9am every day.

Given the expected high volume of data, the file may be split in several files. The threshold shall be configurable in the system.

It  might  unlikely  happen  that  the  Delta  file  is  empty.  In  that  a  delta  file  is generated in any case but without Refdata block.

Fields  using  DATE\_TIME\_FORMAT  should  be  expressed  in  UTC  in  the following format YYYY-MM-DDThh:mm:ss.ddddddZ (fields 9,10,11,12)

Assumptions

N/A

## 3.7.5 Publish instrument reference data

| Goal   | The goal of this use case is to make available to the public user the new  daily  release  of  the  public  version  of  the  Full/Delta  files  and  update  accordingly the search interface of the ESMA public web interface.   |
|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors | The ESMA System - update download interface                                                                                                                                                                                        |
| Actors | The ESMA System - update Search interface                                                                                                                                                                                          |

<!-- image -->

| Preconditions   | Full  file/  delta  file  expected  for  that  day  T    have  been  generated  and  are  available for NCAs to download in HUBEX.                                                              |
|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Trigger         | Full/delta files expected for that day T have been generated and are available  for NCAs to download in HUBEX.  List of indices file for the day have been generated and available for download |
| Postcondition   | The publication table has been updated and the new release of the Full/Delta  file is available to the public on the ESMA public web interface                                                  |
|                 | NB: T is the day of the Next publication date                                                                                                                                                   |
|                 | previously generated for publication day T on the  'file download interface '  of the ESMA public web interface.  2.  For non-cancelled instrument records (with Consistent Status other than   |
| Normal Flow     | the content of the Consistent reference date table with the following fields:  • ISIN  • MIC  • Other RTS23 fields  • ValidFromDate   • ValidToDate                                             |
| Business        | Daily  Publication is to happen at 9am on each day (but not before full and delta                                                                                                               |
| Frequency       |                                                                                                                                                                                                 |
| Rules           |                                                                                                                                                                                                 |
|                 | files are available for download for NCAs through the HUBEX).                                                                                                                                   |
| Assumptions     |                                                                                                                                                                                                 |

<!-- image -->

## 3.7.6 Search and export public instruments reference data

The public user shall be able to filter in the search interface by selecting one by one or a combination of the following attributes (the user must be able to reset the filter criteria):

TABLE 9 - FILTER FIELDS FOR  PUBLIC SEARCH INTERFACE

| Field                                            | Default  Value   | Input  Type            | Validation                                 | Publication table Related field                                                                                                                        |
|--------------------------------------------------|------------------|------------------------|--------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| Instrument  identifier                           | Blank            | Text (* for  wildcard) | Must be valid  ISIN identifier             | RTS23 Field number 1                                                                                                                                   |
| Identifier of the  underlying of the  instrument | Blank            | Text (* for  wildcard) | Must be valid  ISIN identifier             | RTS23 Field number 26a/b                                                                                                                               |
| LEI of the issuer                                | Blank            | Text (* for  wildcard) | Must be valid  LEI                         | RTS23 Field number 5                                                                                                                                   |
| Instrument MIC  Code                             | Blank            | Text (* for  wildcard) | Must be valid  MIC code                    | RTS23 Field number 6                                                                                                                                   |
| Instrument CFI  code                             | Blank            | Text (* for  wildcard) | Must be valid  CFI code                    | RTS23 Field number 3                                                                                                                                   |
| Publication date                                 | Blank            | Calendar               | Must be the  current date or  in the past. | When this date is left empty in  the interface (by default), the  system queries all records with  Latest Flag = TRUE.  When this date is specified by |
|                                                  |                  |                        |                                            | query all records such that  • ValidFromDate  &lt;= Publication  date                                                                                     |
|                                                  |                  |                        |                                            | and                                                                                                                                                    |
|                                                  |                  |                        |                                            | • ValidToDate is                                                                                                                                       |

The public user shall be able to access all public attributes of a record in a user-friendly manner. The public user shall be able to adjust the number of records displayed at a time on the web page. The public user shall be able to export list of records resulting of the Search including in a machinereadable format.

<!-- image -->

| Goal          | The  goal  of  this  use  case  is  for  a  Public  user  to  access  new  and  historical  data  currently/previously  published  in  the  full/delta/invalid  records files                                                                              |
|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors        | Public User - configures the scope of data they need to review and sees  the result                                                                                                                                                                        |
| Preconditions | The user accesses the ' Financial Instruments Reference Data ' section of the  ESMA portal.                                                                                                                                                                |
| Trigger       | Ad-Hoc                                                                                                                                                                                                                                                     |
| Postcondition | The user has performed a query and seen the results.                                                                                                                                                                                                       |
|               | 1.  The  public  user  populates  filters  describing  the  scope  of  data  he/she  wishes to see.                                                                                                                                                        |
|               | 2. The ESMA System queries the 'Publication table' according to filters and  extracts the records resulting of that query (please refer to Publication table  fields in table above.                                                                       |
| Normal Flow   | on the ESMA website. The system shall limit the number of displayed records  up to a number configurable by the ESMA IT Administrator. For each record,  all the attributes in the Publication table as per  step 3 of section 3.7.2 shall  be accessible. |
|               | 4. Public user reviews data and can either make a new query exit away  from the page.                                                                                                                                                                      |
|               | 5. Public user can make an export of the resulting list and all related attributes  in CSV format. The maximum number of records will be limited to a value  which shall be configurable by the ESMA IT Administrator.                                     |
| Frequency     | On an ongoing basis                                                                                                                                                                                                                                        |
| Rules         | download to NCAs.  The following fields shall not be accessible to the public:                                                                                                                                                                             |
|               | • The ESMA reception date time; and  • The consistency flag.                                                                                                                                                                                               |
| Assumptions   | Search interface connects directly to the ESMA System publication  database.                                                                                                                                                                               |

<!-- image -->

## 3.7.7 Download Full/delta public files

The public user shall be able to download in a U2A/2A manner the Full/delta public files published in the 'file Download Interface' of the ESMA public web interface.

| Goal            | The goal of this use case is to enable a public user to download the  latest release in the ESMA public web interface the Full (the one of the  public only)/Delta file and previous releases too.                                                                                                                                                                                                                                                                                                                                                                             |
|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors          | The ESMA System - publishes data                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Preconditions   | Full file/delta file expected for that day T have been generated and published  in the ' File download ' page in the ESMA public web interface.                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Trigger         | Ad-Hoc                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Postcondition   | The file for which the Download request has been initiated by the Public  user is available in the client System of the Public User.                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|                 | 1.  The public user accesses anonymously the 'File download page' in the  ESMA public web interface though a dedicated URL.                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|                 | 2.  Manually, the public user can search for a file by Publication date and by  File type (Full, Delta), select the file and save it onto its client System.                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Normal Flow     | 3.  Automatically,  sends  to  the  'File  download  page'  a  request,  in  a  predefined  format,  with  Publication  date  and  File  type  (Full,  Delta)  as  arguments. The ESMA public web interface processes the requests. In  case a single file matches the criteria, the request is accepted, and that  file is downloaded onto the client System. An error message is sent back  to  the  client  system  otherwise.  In  case  more  than  one  file  match  the  criteria, a list of URLs pointing to each of the instances is sent back to the  client system. |
| Frequency       | On an ongoing basis                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Business  Rules | Full files should be retained accessible for 1 month and delta files retained  when relevant to an accessible full file.                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Assumptions     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

<!-- image -->

## 3.8  Additional Reference Data Management

## 3.8.1 LEI and ISO Reference data Management

## 3.8.1.1 Use cases overview

FIGURE 11 - ADDITIONAL REFERENCE DATA MANAGEMENT

<!-- image -->

<!-- image -->

## 3.8.1.2 Update LEI reference data table

| Goal                     | Update  LEI  reference  data  table  13.5  with  latest  valid  LEI  codes  and  country of registered office, according to GLEIF.                                                                                                          |
|--------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|                          | The ESMA System                                                                                                                                                                                                                             |
| Actors                   | GLEIF publication service (data provider)                                                                                                                                                                                                   |
| Precondition             | N/A                                                                                                                                                                                                                                         |
| Trigger  Postconditio ns | Triggered at mid-day 12:15pm on a daily basis                                                                                                                                                                                               |
| Trigger  Postconditio ns | LEI reference data table 15.5 in the central database is updated.  1.  The ESMA System downloads from the data provider publication service                                                                                                 |
| Trigger  Postconditio ns | the  GLEIF  concatenated  file  of  the  current  day  (of  file  content  COU\_FULL\_PUBLISHED).                                                                                                                                             |
| Trigger  Postconditio ns | 2.  The ESMA system updates the LEI reference data table 13.5 as follows:                                                                                                                                                                   |
| Trigger  Postconditio ns | contained in the file is valid. Often, this is the date and time when the  data was extracted from the database ).  2.2  In case more than one record exist for a given LEI, the ESMA System  retains the LEI record determined as follows: |
| Trigger  Postconditio ns | 2.2.1  Checks whether it exists a single record having Registration  Status 'ISSUED'.                                                                                                                                                       |
| Normal Flow              | 2.2.3  Otherwise, retains the record with latest NextRenewalDate.                                                                                                                                                                           |
| Normal Flow              | 2.3  The ESMA System checks whether it exists a record with the same  LEI.                                                                                                                                                                  |
| Normal Flow              | 2.4  If false, The ESMA System inserts the record in the LEI reference data  table with ValidityStartDate is the date of the SourcePublicationDate  and with ValidityEndDate is NULL.                                                       |
| Normal Flow              | 2.5  If true, The ESMA System compares all the fields of the records in step  2.1 and the one found  in step 2.2 (Previous record).                                                                                                         |

<!-- image -->

| Alternate  Flow   | 1a. The ESMA System discovers that a new Global LEI register file is not  available  for  the  day,  cannot  be  uncompressed,  validated  or  for  any  reason the system cannot extract the records.                                                                                                                                                                                                                                                                                                 |
|-------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|                   | 2a. The system continues operating with the last file successfully processed.  3a. The system notifies the ESMA IT administrator and makes attempts to  download  the  full  file  at  13:00,  14:00,  15:00  and  16:00.  After  that  the                                                                                                                                                                                                                                                            |
| Frequency         | Daily                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Business  rules   | From March 2022, the system should download the LEI consolidated file  using LEI-CDF format version 3.1 (https://www.gleif.org/en/about- lei/common-data-file-format/lei-cdf-format/lei-cdf-format-version-3-1# ) and  store its full content. Until then, the system should continue download and  store the content of the LEI consolidated file which uses the LEI-CDF format  version 2.1 (https://www.gleif.org/en/about-lei/common-data-file-format/lei- cdf-format/lei-cdf-format-version-2-1#) |
| Assumptions       | The record fields stored in the database and those distributed to NCAs, are  the same as those provided by the data provider. The distribution format will  be XML.                                                                                                                                                                                                                                                                                                                                    |

## 3.8.1.3 Update Countries reference data table

| Goal            | Update  Country  reference  data  table  with  latest  country  full  file  published by the data provider.   |
|-----------------|---------------------------------------------------------------------------------------------------------------|
| Actors          | The ESMA System                                                                                               |
|                 | SWIFTRef  website  (data provider) / BIC Directory service                                                    |
| Precondition s  | The country full file is published by the data provider.                                                      |
| Trigger         | Every last Friday of each month.                                                                              |
| Postconditio ns | Country reference data table as per section 15.1 is updated.                                                  |
| Postconditio ns | 2.  SWIFT's  Monthly's  file  name  is  ,  BICDIR2018\_YYYYMMDD\_XML.zip,  where                                |
| Normal Flow     | 2.  SWIFT's  Monthly's  file  name  is  ,  BICDIR2018\_YYYYMMDD\_XML.zip,  where                                |
| Normal Flow     | MM is the current month                                                                                       |
| Normal Flow     | DD is the day of the publication of the file                                                                  |
| Normal Flow     | The ESMA System checks whether that file has been already processed.                                          |
| Normal Flow     | 3.                                                                                                            |

<!-- image -->

- 4. The ESMA System extracts the country file which name is COUNTRY\_CODE\_&lt;SourcePublicationDate&gt;.xml. SourcePublicationDate is extracted from the name and retained.
- 3. The ESMA System extracts all the data records which Modification Status is not 'D'. [ Extracts from the file only the records which are countries record and which are valid according to the data provider ]
- 4. For each extracted record in the step 4, the ESMA System updates the Country reference data table as per section 15.1 (including ValidityStartDate and ValidityEndDate technical attributes) as follows:
- 4.1 The ESMA System checks whether it already exists in the table a record (also previous record) with the same COUNTRYCODE and ValidityEndDate is NULL.
- 4.2  If false ( case of addition ), the ESMA System inserts a new record with:
- · COUNTRYCODE
- · COUNTRYNAME
- · ValidityStartDate is set to the 'SourcePublicationDate' specified in the filename.
- · ValidityEndDate is set to NULL
- · LastUpdatedDate is set to the current Date Time
- · EEA Flag is set to FALSE.
- · Official\_ISO is set to TRUE
- 4.3 If true, the ESMA System checks whether it exists a record with the same COUNTRYCODE and COUNTRYNAME and with ValidityEndDate is NULL.

## In case no record exists (case of modification):

- 4.3.1  The  ESMA  System  inserts  the  extracted  record  with  the following attributes:
- · COUNTRYCODE
- · COUNTRYNAME
- · ValidityStartDate is set to the 'SourcePublicationDate' in the filename.
- · ValidityEndDate is set to NULL
- · LastUpdatedDate is set to the current Date Time
- · EEA flag is set to the EEA flag of the previous record.
- · Official\_ISO  is  set to the Official\_ISO  value of the previous record.
- 4.3.2  The  ESMA  System  updates  the  previous  record  with  the following attributes:
- · ValidityEndDate is set to the previous calendar day before the 'SourcePublicationDate'.
- 5.  System  extracts  all  the  data  records  which  Modification  Status  is  'D' [Extracts  from  the  file  only  the  records  which  are  countries  record  and which are not valid anymore] (case of deletion)

<!-- image -->

|                 | 5.1 The ESMA System selects all COUNTRY CODE records which  ValidityEndDate is NULL and which MODIFICATION FLAG is 'D'  in the uploaded file.   5.2 For each COUNTRY CODE record, The ESMA System sets the  ValidityEndDate  to  the  previous  calendar  day  before  the  'SourcePublicationDate'.   |
|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Alternate       | In case of any issue, the system notifies the ESMA IT administrator.                                                                                                                                                                                                                                   |
| Frequency       | Monthly                                                                                                                                                                                                                                                                                                |
| Business  rules | N/A                                                                                                                                                                                                                                                                                                    |
| Assumptions     | The •  EEACountryFlag  of  each  country  code  is  maintained  manually  in  ESMA by the ESMA Business Administrator as per use case '  Update ESMA attributes in ISO reference data table' 0.  The  ESMA  Business  Administrator  can  update  between  two  monthly                                |
|                 | Provider technical specifications (XSD's for country and Currencies):   https://www2.swift.com/knowledgecentre/publications/bic\_dir\_2018\_sch/2.0                                                                                                                                                       |

## 3.8.1.4 Update Currencies reference data table

| Goal            | Update  Currency  reference  data  table  with  latest  currency  full  file  published by the data provider.                                                                                        |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors          | The ESMA System  SWIFTRef  website  (data provider) / BIC Directory service                                                                                                                          |
| Preconditions   | The currency full file is published by the data provider.                                                                                                                                            |
| Trigger         | Every last Friday of each month.                                                                                                                                                                     |
| Postcondition s | Currency reference data table as described in section 15.2 is updated.                                                                                                                               |
| Normal Flow     | 1.  The ESMA System downloads a Full monthly Bic directory ZIP file from  the data provider publication service using the dedicated URL (restricted  access requiring credential user and password). |
| Normal Flow     | 2.  The ESMA System checks whether that file has been already processed.                                                                                                                             |

<!-- image -->

- 5.  For each extracted record in the step 4, the ESMA System updates the Country  reference  data  table  as  described  in  section  15.2  (including ValidityStartDate and ValidityEndDate technical attributes) as follows:
- 5.1 The ESMA System checks whether it already exists in the table a record (previous record) with the same  ( CURRENCYCODE, COUNTRYCODE if not NULL) and ValidityEndDate is NULL.
- 5.2 If false ( case of addition ), the ESMA System inserts a new record with:
- · CURRENCYCODE
- · CURRENCYNAME
- · FRACTIONALDIGIT
- · COUNTRYCODE (if NULL, set to 'XX')
- · COUNTRYNAME (if NULL, set to 'XX')
- · ValidityStartDate  is  set  to  the  'SourcePublicationDate'  in the filename
- · ValidityEndDate is set to NULL
- · LastUpdatedDate is set to the current Date Time
- · Pre-Euro Flag is set to FALSE
- 5.3 If true, the ESMA System checks whether it exists a record with the same
- CURRENCYCODE, CURRENCYNAME, FRACTIONALDIGIT, COUNTRYCODE if not NULL, COUNTRYNAME if not NULL and with ValidityEndDate is NULL.

In case no record exists ( case of modification ):

- 5.3.1  The  ESMA  System  inserts  the  extracted  record  with  the following attributes:
- · CURRENCYCODE
- · CURRENCYNAME
- · FRACTIONALDIGIT
- · COUNTRYCODE (set to 'XX' if NULL)
- · COUNTRYNAME (set to 'XX' if NULL)
- · ValidityStartDate is set to the 'SourcePublicationDate'
- · ValidityEndDate is set to NULL
- · LastUpdatedDate is set to the current Date Time
- · Pre-Euro  flag  is  set  to  the  Pre-Euro  flag  of  the  previous record.
- 5.3.2  The  ESMA  System  updates  the  previous  record  with  the following attributes:
- · ValidityEndDate is set to the previous calendar day before the 'SourcePublicationDate'.
- 6.  System  extracts  all  the  data  records  which  Modification  Status  is  'D' [Extracts from the file only the records which are currencies record, and which are not valid anymore] (case of deletion)

<!-- image -->

|                | 6.1  The  ESMA  System  selects  all  (CURRENCYCODE,  COUNTRYCODE if not NULL) records which ValidityEndDate  is  NULL and which MODIFICATION FLAG is 'D' in the uploaded file.   6.2  For  each  (CURRENCYCODE,  COUNTRYCODE  if  not  NULL)  record, the ESMA System sets the ValidityEndDate to the previous  calendar day before the 'SourcePublicationDate'.                     |
|----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Alternate flow | In case of any issue, the system notifies the ESMA IT administrator.                                                                                                                                                                                                                                                                                                                  |
| Frequency      | Monthly                                                                                                                                                                                                                                                                                                                                                                               |
| Business rules | N/A                                                                                                                                                                                                                                                                                                                                                                                   |
| Assumptions    | The Pre-euro flag of each currency code is maintained manually in ESMA  by the ESMA Business Administrator as per use case '  Update ESMA attributes in ISO reference data table' 0.  The  ESMA  Business  Administrator  can  update  that  table  between  two  monthly publications of the data provider as per use case '  Update ESMA attributes in ISO reference data table' 0. |

## 3.8.1.5  Update MIC reference data table

| Goal            | Update MIC reference data table with latest MIC record published by  the data provider.                                                                                                    |
|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors          | The ESMA System  ISO 15022 publication service                                                                                                                                             |
| Preconditions   | The MIC full file is published by the data provider.                                                                                                                                       |
| Trigger         | Every Friday 15                                                                                                                                                                            |
| Postcondition s | MIC reference data table Table 44 as per section 15.3 is updated.                                                                                                                          |
| Normal Flow     | 1.  The ESMA System downloads a Full monthly MIC file from the data  provider publication service  https://www.iso20022.org/sites/default/files/ISO10383\_MIC/ISO10383\_ MIC\_NewFormat.xml . |
| Normal Flow     | 2.  The ESMA System sets the 'Modification implementation date' as the  date of the fourth Monday of the current month.                                                                    |
| Normal Flow     | 3.  If the 'Modification implementation date' is more than 4 calendar days  away from the date when the use case was triggered, the processing                                             |

<!-- image -->

stops. { The system only updates the MIC reference data table on the Friday preceding the Monday when the changes become effective }

## Otherwise:

- 4. The ESMA System extracts all the data records which Status is 'Active' or 'Modified'.
- 5. For each 'extracted record' in the step 2, the ESMA System updates the MIC reference data table as described in section 15.3 Table 44 (including ValidityStartDate and ValidityEndDate technical attributes) as follows:
- 5.1 The ESMA System checks whether it already exists in the table a record ('pre-existing record') with the same  MICCODE  and ValidityEndDate is NULL.
- 5.2  If  false  (there  is  no  existing  valid  record  with  same  MIC,  it  is  an addition), the ESMA System inserts the 'extracted record' with the following attributes:
- · MIC
- · ISO COUNTRY CODE
- · OPERATING MIC
- · MIC TYPE
- · NAME-INSTITUTION DESCRIPTION
- · LEGAL NAME
- · LEI
- · ACRONYM
- · CITY
- · WEBSITE
- · MODIF-ISO DATE
- · CREATION-ISO DATE
- · LAST VALIDATION MONTH
- · EXPIRY DATE
- · STATUS
- · COMMENT
- · COUNTRY, as retrieved from 'Countries data table', based on the ISO COUNTRY CODE
- · MARKET  TYPE  as  NULL  (this  field  will be updated according to UC4.5 'Interface with ESMA Registers')
- · ValidityStartDate is set to the 'Modification implementation date'
- · ValidityEndDate is set to NULL
- · LastUpdatedDate is set to the current Date Time
- 5.3 If true (there is an existing valid record with same MIC)
- 5.3.1 The ESMA System checks whether the 'pre-existing record' is identical to the 'extracted record' on the following fields: MIC, ISO COUNTRY CODE, OPERATING MIC, MIC  TYPE, NAME-

<!-- image -->

INSTITUTION DESCRIPTION, LEGAL NAME, LEI, ACRONYM, CITY,  WEBSITE,  MODIF-ISO  DATE,  CREATION-ISO  DATE, LAST-VALIDATION MONTH, EXPIRY DATE, COMMENT.

## 5.3.2 IF NOT

5.3.2.1 The  ESMA System  inserts  the  'extracted  record' with the following attributes:

- · MIC
- · ISO COUNTRY CODE
- · OPERATING MIC
- · MIC TYPE
- · NAME-INSTITUTION DESCRIPTION
- · LEGAL NAME
- · LEI
- · ACRONYM
- · CITY
- · WEBSITE
- · MODIF-ISO DATE
- · CREATION-ISO DATE
- · LAST VALIDATION MONTH
- · EXPIRY DATE
- · STATUS
- · COMMENT
- · COUNTRY, as retrieved from 'Countries data table', based on the ISO COUNTRY CODE
- · MARKET TYPE as retrieved from the 'pre-existing record' (covers  the  case  that  the  Market  Type  has  been  updated  via Authorised Entities interface )
- · AUTHORITY  NAME  as  retrieved  from  the  'pre-existing record' (covers  the  case  that  the  Authority  Name  has  been updated via Authorised Entities interface)
- · ValidityStartDate is set to the 'Modification implementation date'
- · ValidityEndDate is set to NULL
- · LastUpdatedDate is set to the current Date Time
- 5.3.2.2 The  ESMA  System  updates the 'pre-existing' record with the following attributes:
- · ValidityEndDate is set to the previous calendar day before the 'Modification implementation date'.
- 6. The ESMA System processes the 'Deleted' MIC according to the data provider:

<!-- image -->

|                | 6.1 The  ESMA  System  selects  all  MIC  CODE  records  which  ValidityEndDate  is  NULL  and  which  status  is  {deleted}  in  the  uploaded file.   6.2  For  each  MIC  CODE  record,  The  ESMA  System  sets  the  ValidityEndDate  to  the  previous  day  before  the  'Modification  implementation date' and the LatestStatus to 'Deleted'.   |
|----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Alternate flow | In case of any issue, the system notifies the ESMA IT administrator.                                                                                                                                                                                                                                                                                     |
| Frequency      | Monthly                                                                                                                                                                                                                                                                                                                                                  |
| Business rules | N/A                                                                                                                                                                                                                                                                                                                                                      |
|                | The  ESMA  Business  Administrator  can  update  that  table  between  two  monthly publications of the data provider.                                                                                                                                                                                                                                   |
| Assumptions    | Provider technical specifications:   http://www.iso15022.org/MIC/homepageMIC.htm                                                                                                                                                                                                                                                                         |

3.8.1.6 Update 'List of valid CFI codes table'

This is covered by use case 3.12.4.3 Update internal tables related to CFI codes

## 3.8.2 Non-working day data Management

FIGURE 12 - NON-WORKING DAY DATA MANAGEMENT USE CASE DIAGRAM

<!-- image -->

<!-- image -->

## 3.8.2.2 Non-working day data Collection

| Goal              | Process non-working data files submitted by NCA / TV / SI / APA /  CTP.                                                                                                  |
|-------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors            | The ESMA System  TV/SI/APA/CTP - in the jurisdiction of a delegating NCA                                                                                                 |
| Preconditions     | TV/SI/APA/CTP has uploaded a file with naming convention as per Annex  2: File naming conventions onto the HUBDE which has routed it to The  ESMA System.                |
| Trigger           | A new DATNWD file is available in the ESMA System.                                                                                                                       |
| Postconditions    | The ESMA System has updated the reporting calendar and notified the  submitting entity whether its submitted file can be used for updating the                           |
|                   | reporting calendar.  1.  The  ESMA  System  performs  transmission  as  per  Annex  1a:  Transmission Validation Rules and format validations as per Annex 1c:           |
| Normal Flow       | 2.  The system validates each record in the message by performing the  checks as per Annex 1d: Non-working Days Content Validation Rules.  The validation is successful. |
| Normal Flow       | 3.  Based on that input, the reporting calendar is updated as per section 0                                                                                              |
| Normal Flow       | 4.  Update Reporting calendar.                                                                                                                                           |
| Normal Flow       | folder dedicated to ESMA System in HUBEX or HUBDE.                                                                                                                       |
| Alternate flow 1: | 6.  The ESMA System uploads the feedback file into the ESMA's outgoing                                                                                                   |

<!-- image -->

|                   | data message table, a 'Feedback on Non-working days Data Report' file  of status ' Corrupted ' for FIL-101, ' Rejected ' otherwise.                                                                                                                                                                                                                                                   |
|-------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Alternate flow 2: | Annex 1d: Non-working Days Content Validation Rules. Validation is  failed on at least on record.  4b.  The  ESMA  System  generates,  based  on  the  ISO  20222  Derived  of status ' Rejected ' Rejected '.                                                                                                                                                                        |
| Content  errors   | Message Definition Identifier referenced in Table 11 - Additional reference  data message table, a 'Feedback on Non-working days Data Report' file  ' listing all the content errors found with  status record                                                                                                                                                                        |
| Frequency         | Ad-hoc updates                                                                                                                                                                                                                                                                                                                                                                        |
| Business rules    | shall be reported. All dates which are not reported are considered as open  (weekends have to be reported otherwise they are assumed to be working  days.)  TV/SI shall report to NCA or ESMA (in case of reference data delegation)  every closed day, including. In case NCA is closed and TV/SI is opened  and  NCA  is  a  non-delegating  NCA  for  reference  data,  NCA  shall |
| Assumptions       | This functionality will be implemented using:  HUBEX: for NCA - submits data                                                                                                                                                                                                                                                                                                          |

## 3.8.2.3 Update Reporting calendar

| Goal          | Updates  the  reporting  calendar  with  the  submitted  non-working  days.                          |
|---------------|------------------------------------------------------------------------------------------------------|
| Actors        | The ESMA System                                                                                      |
| Preconditions | The ESMA System has validated the content of the Non-working days  file and no error is found.       |
| Trigger       | NCA / TV/SI/APA/CTP submits, for a set of TV/SI/APA/CTP/NCA, a list  of valid non-working days data. |

<!-- image -->

| Postconditions   | The reporting calendar as described in section 14.1 is updated.                                                                                                                                                                                                                                                                    |
|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Normal Flow      | • EntityIdentifier  is  deduced  from  the  MarketIdentifier  as  per  section 14.1  Reporting Calendar Table.  2.  For each (EntityIdentifier, YYYY) group, the ESMA System updates the  Reporting  Calendar  table  for  each  calendar  date  of  year  YYYY  as  follows:  Open attribute of (Entity Identifier, date) record: |
| Frequency        | Ad-hoc updates                                                                                                                                                                                                                                                                                                                     |
| Business rules   | TV/SI/APA/CTP shall report to its NCA or to ESMA (in case of delegation  of  data  collection)  every  opened  day.  In  case,  NCA  is  closed  and  TV/SI/APA/CTP is opened and NCA is a non-delegating Reference data  NCA, NCA shall nevertheless report TV/SI data to ESMA.                                                   |
| Assumptions      | For each year and each entity, all non-working dates shall be reported.  All dates which are not reported are considered as open.   If a file is received containing any dates for year 20XX this will overwrite                                                                                                                   |

## 3.8.2.4. Update Reporting calendar for TV/SI on a yearly basis [Updated CR #252]

| Goal           | Updates the Reporting Calendar table  for the  TV/SIs that  have  not  reported non-working days.                            |
|----------------|------------------------------------------------------------------------------------------------------------------------------|
| Actors         | The ESMA System                                                                                                              |
| Preconditions  | The ESMA System has processed all DATNWD files submitted until 31 st   December of the current year.                         |
| Trigger        | On  31st  of  December,  after  Global  Cut-off  Time,  the  ESMA  System  updates the 'Reporting Calendar Days data table'. |
| Postconditions | The reporting calendar as described in section 14.1 is updated.                                                              |
| Normal Flow    | 1.  The  ESMA  System  extracts  the  list  of  TV/SI  from  "Trading  Venue  Mapping View'   for which:                     |

<!-- image -->

Frequency

Business rules

Assumptions

- · Validity End Date is Null.
- · 'Withdrawn  flag'  of  the  ' Country  of  jurisdiction  of  the  TV/SI' is FALSE in the 'NCA reference data table.

2.

- 3. For  each  &lt;MIC&gt;  retrieved  in  step  1,  the  system  checks  whether  a record exists in 'Reporting Calendar Days data table' , which satisfies the following conditions:
- · EntityIdentifier is T&lt;MIC&gt; or S&lt;MIC&gt; and
- · date corresponding to the "current year+1"
- 2.1.   In case at least one record retrieved in Step 2, no further action is performed, and the system proceeds with the next MIC.

(in case that non-working days have been reported for the next year)

- 2.2.   Otherwise, the ESMA System inserts a record into the 'Reporting Calendar Days data table' for each calendar date of the "current year +1", as follows:
- · EntityIdentifier as T&lt;MIC&gt; or S&lt;MIC&gt;, deduced from the MarketIdentifier as per section 14.1  Reporting Calendar Table, and
- · date corresponding to each day of the "current year+1"
- · Open attribute of (Entity Identifier, date) as TRUE

(in case that non-working days have not been reported for the next year)

Yearly

N/A

For  each  TV/SI  that  has  not  reported  any  non-working  days  for  the upcoming year until the 31 st  of December of the current year, all dates for the next year will be considered as open.

<!-- image -->

## 3.9  Expression of interest on indices Management

## 3.9.1 Use case Overview

FIGURE 13 - EXPRESSION OF INTEREST ON INDICES MANAGEMENT USE CASE DIAGRAM

<!-- image -->

## 3.9.2 Collect expression of interest on indices

| Goal           | The  goal  of  this  use  case  is  to  collect  expression  of  interest  on  indices from each NCA through a dedicated web interface.                                                        |
|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors         | The ESMA System  NCA User                                                                                                                                                                      |
| Preconditions  | N/A                                                                                                                                                                                            |
| Trigger        | NCA chooses ' Request Index data '.                                                                                                                                                            |
| Postconditions | Index data request has been registered and stored                                                                                                                                              |
| Normal Flow    | 1.  An authorised user on behalf of a NCA chooses ' Manage expressions  of interest on indices ' on the ESMA portal.  2.  The system shows the list of indices for which the NCA has currently |

<!-- image -->

- 3.  For each of them, the following attributes are displayed: the NCA user country  code  (its  own),  the  identifier  of  the  index  and  the  date  of expression of interest.
- 4.  The  system  allows  the  user  to  remove  an  index  from  that  list.  The system asks the user for confirmation as per step 10.
- 5.  The  user  can  add  to  that  list  one  or  several  new  indices.  For  that purpose, the user is proposed a list of indices in the database excluding those already part of the list) or is proposed to enter manually an ISIN. { In order to be compliant to TREM Specification 109., the ESMA System proposes  indices  that  are  identified  by  an  ISIN  (manually)  and  indices identified by the 4-letter code {INDEX} specified in table 1 of the Annex of RTS23 {INDEX}}
- 5.1 The ESMA System proposes the list of RTS23 {INDEX}.
- 5.2 The ESMA System proposes the list of ISIN already used as an 'Underlying Index'  as follows: select in the Consistent Reference Data Table distinct field 26c of records which PublicationFromDate is not NULL and  PublicationToDate is NULL
- 6.  The ESMA System allows the user to select one of these.
- 7.   Alternatively, The ESMA System allows the user to add another ISIN. In case the user enters an ISIN manually, the ESMA system checks that:
- · the  ISIN  is  valid  according  to  the  algorithm  of  ISIN  validation including the calculation of the check digit 16 .
- · the ISIN is not found in the ' consistent reference data table ' as a RTS23 field 1.
- 8.  In case the user inputs are valid, the system invites the user to confirm the selected list of indices codes / names / ISIN.
- 9.  Upon confirmation of the user, the system inserts the submitted data in the ' Expression of interest on Indices reference data table ' as follows:
- · Country code of the Member State having expressed its interest: the country code of the user.
- · ISINIndexIdentifier: the submitted one.
- · OtherIndexIdentifier: the submitted one
- · ValidityStartDate is the date the NCA  user confirmed the submission.
- · ValidityEndDate is NULL
- 10. In case the user confirms the removal, the system updates in the record which Index identifier is selected  in the 'Expression of interest on Indices reference data table' as follows:
- · Country code of the Member State having expressed its interest: the country code of the user.
- · ISINIndexIdentifier: the submitted one.
- · OtherIndexIdentifier: the submitted one.
- · ValidityEndDate is the date the NCA user confirmed the deletion of expression of interest.

<!-- image -->

| Alternate flow   | 7a.  In  case  the  user  input  is  invalid,  the  system  displays  an  error  message: 'The entered ISIN is not valid' or 'The entered ISIN must  not be an instrument'. The user can Cancel the request or Ignore the  error message.     |
|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Frequency        | Limited number of ad-hoc requests by each NCA                                                                                                                                                                                                 |
| Business rules   | N/A                                                                                                                                                                                                                                           |
| Assumptions      | ESMA collects and distributes expression of interest on indices but is not  involved in any way in their processing. NCAs will use this information to  route transactions related to those indices as specified in the TREM  Specifications. |

<!-- image -->

## 3.10  Additional Reference data distribution

## 3.10.1 Use cases overview

FIGURE 14 - ADDITIONAL REFERENCE DATA DISTRIBUTION USE CASE DIAGRAM

<!-- image -->

## 3.10.2 Distribute LEI Full file [Updated CR #250]

| Goal   | The goal of this use case is to distribute to NCAs the daily LEI Full file  previously uploaded through the GLEIF publication service.   |
|--------|------------------------------------------------------------------------------------------------------------------------------------------|
| Actors | The ESMA System - provides the file via the HUBEX                                                                                        |

<!-- image -->

|                 | NCA system - accesses the HUBEX to retrieve the file                                                                                                                                                                                                                                                                                       |
|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Preconditions   | The LEI Full file produced by GLEIF for the current reporting day is  available at FIRDS file system.                                                                                                                                                                                                                                      |
| Trigger         | At the same time as Full/delta/Invalid records file are generated.                                                                                                                                                                                                                                                                         |
| Postcondition   | The LEI Full file (v3.1) is available in the Public folder dedicated to the ESMA  System in HUBEX System for further uploading by NCA.                                                                                                                                                                                                     |
| Normal Flow     | 1.  The ESMA System retrieves from its file system the GLEIF Full file which  name refers to the current reporting date.  2.  The ESMA Systems archives that file in a zip file according to naming  convention as per Annex 2: File naming conventions and uploads it to the  Public folder dedicated to the ESMA System in HUBEX System. |
| Frequency       | Daily.                                                                                                                                                                                                                                                                                                                                     |
| Business  Rules | ESMA system distributes the latest LEI records files provided by GLEIF.  From March 2022, the system should provide the LEI consolidated file using  LEI-CDF format version 3.1 (https://www.gleif.org/en/about-lei/common- data-file-format/lei-cdf-format/lei-cdf-format-version-3-1# ).                                                 |
| Assumptions     | N/A                                                                                                                                                                                                                                                                                                                                        |

## 3.10.3 Create and distribute Country Full file

| Goal          | The  goal  of  this  use  case  is  to  distribute  to  NCAs  the  country  full  records XML file containing the records of the monthly country Full file  previously uploaded through the SWIFT publication service.                                                             |
|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors        | The ESMA System - provides the file via the HUBEX  NCA system - accesses the HUBEX to retrieve the file                                                                                                                                                                            |
| Preconditions | The country reference data table is up to date.                                                                                                                                                                                                                                    |
| Trigger       | Saturday at the same time as Full/delta/Invalid records file are generated.                                                                                                                                                                                                        |
| Postcondition | The Country Full file for NCA is in the Public folder dedicated to the ESMA  System in HUBEX System.                                                                                                                                                                               |
| Normal Flow   | 1.  The ESMA System extracts from the Country reference data table 13.1,  all records which comply to the following criteria  a.  Officially\_Assigned is TRUE         and  sorts  them  by  ascending  order  on  the  Country  Code,  then  descending order on ValidityStartDate |

<!-- image -->

|                 | o CountryCode  o EEACountryFlag  o ValidityStartDate  o ValidityEndDate  2.  The ESMA System generates a Country full file based on the Derived  Message  Identifier  schemas  referenced  in  Table  11  -  (BAH), BAH and business message encapsulation and Country full file  Message components.     |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Frequency       | Instrument  reference data message table associated to Business Application Header  3.  The ESMA System archives that file in a zip file according to  naming  convention  (Annex  2:  File  naming  conventions)  and  uploads  it  to  the  Public folder dedicated to The ESMA System in HUBEX System. |
|                 | Weekly                                                                                                                                                                                                                                                                                                    |
| Business  Rules | ESMA system distributes to NCA the latest country records files provided by  SWIFT.                                                                                                                                                                                                                       |
| Assumptions     | Distributed file must be kept 10 days at disposal of the NCAs.                                                                                                                                                                                                                                            |

## 3.10.4 Create and distribute Currency Full file

| Goal          | The  goal  of  this  use  case  is  to  distribute  to  NCAs  the  currency  full  records XML file containing the records of the monthly country Full file  previously uploaded through the SWIFT publication service and the list  of pre-euro currencies maintained in ESMA.   |
|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors        | The ESMA System - provides the file via the HUBEX  NCA system - accesses the HUBEX to retrieve the file                                                                                                                                                                           |
| Preconditions | The  currency  reference  data  table  as  described  in  Table  43  -  Currency  reference data table is up to date.                                                                                                                                                             |
| Trigger       | Saturday at the same time as Full/delta/Invalid records file are generated.                                                                                                                                                                                                       |
| Postcondition | The Currency Full file for NCA is in the public folder dedicated to The ESMA  System in HUBEX System.                                                                                                                                                                             |
|               | 1.  The  ESMA  System  extracts  from  the  currency  reference  data  table  as  described in Table 43 - Currency reference data table all the records with  the following attributes:                                                                                           |
|               | • CurrencyCode  • CurrencyName                                                                                                                                                                                                                                                    |
|               | • CountryCode                                                                                                                                                                                                                                                                     |
| Normal Flow   | • CountryName                                                                                                                                                                                                                                                                     |
|               | • ValidityStartDate                                                                                                                                                                                                                                                               |
|               | • ValidityEndDate                                                                                                                                                                                                                                                                 |

<!-- image -->

|                 | BAH and business message encapsulation and Currency full file Message  components.   3.   The  ESMA  Systems archives that file  in  a  zip  file  according  to  naming  convention (Annex 2: File naming conventions) and uploads to the Public   |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Frequency       | Weekly                                                                                                                                                                                                                                              |
| Business  Rules | ESMA system distributes to NCA the latest Currency records files provided  by SWIFT and the list of pre-euro currencies.                                                                                                                            |
| Assumptions     | Distributed file must be kept 10 days at disposal of the NCAs.                                                                                                                                                                                      |

## 3.10.5 Create and distribute MIC Full file [Updated CR #279]

| Goal          | The goal of this use case is to distribute to NCAs the MIC full records  XML file containing the records of the monthly MIC Full file previously  uploaded through the ISO publication service.                                                                |
|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors        | The ESMA System - provides the file via the HUBEX                                                                                                                                                                                                              |
|               | NCA system - accesses the HUBEX to retrieve the file                                                                                                                                                                                                           |
| Preconditions | The MIC reference data table as described in section 15.3 is up to date                                                                                                                                                                                        |
| Trigger       | Saturday at the same time as Full/delta/Invalid records file are generated.                                                                                                                                                                                    |
| Postcondition | The MIC Full file (v2.0) is available in the public folder dedicated to the ESMA  System in HUBEX System.                                                                                                                                                      |
| Normal flow   | 1.  The  ESMA  System  extracts  from  the  MIC  reference  data  table,  as  described in section 15.3, all the records with the following attributes:  • MICCode  • OperatingMICCode  • MICType  • InstitutionName  • Legal Entity Name  • LEI  • MarketType |

<!-- image -->

|                 | • Status date  • Last Validation Month  • Expiry Date  • Latest Status  • ValidityStartDate  • ValidityEndDate  2.  The ESMA System generates a MIC full file based on the Derived  Message Identifier schemas (i.e.  Table 11 - Instrument reference data message table associated to   |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|                 | DRAFT1auth.049.001.03\_ESMAUG\_DATMIC\_1.2.1.xsd) referenced in  Business Application Header (BAH), BAH and business message  encapsulation and MIC full file Message components.                                                                                                           |
| Frequency       | Weekly                                                                                                                                                                                                                                                                                   |
| Business  Rules | ESMA system distributes to NCA the latest MIC records files provided by  SWIFT.                                                                                                                                                                                                          |
| Assumptions     | Distributed file must be kept 10 days at disposal of the NCAs.                                                                                                                                                                                                                           |

## 3.10.6 Create and distribute CFI Full file

| Goal          | The goal of this use case is to distribute to NCAs an XML file containing  the full list of CFI codes generated by ESMA according to the latest ISO  Standard                  |
|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors        | The ESMA System - provides the file via the HUBEX  NCA system - accesses the HUBEX to retrieve the file                                                                        |
| Preconditions | The list of valid CFI codes table as described in 15.4 has been updated.                                                                                                       |
| Trigger       | Saturday at the same time as Full/delta/Invalid records file are generated.                                                                                                    |
| Postcondition | The CFI Full file is in the Public folder dedicated to the ESMA System in  HUBEX System.                                                                                       |
| Normal Flow   | 1.  The ESMA System extracts from the 'list of valid CFI codes table' as  per section Table 45 - List of valid CFI codes table all the records with the  following attributes: |

<!-- image -->

|                 | • ValidityEndDate  2.  The  ESMA  System  generates  a  CFI  full  file  based  on  the  Derived  Message  Identifier  schemas  referenced  in  Table  11  -  Instrument  reference  data  message  table  associated  to  Business  Application  Header (BAH), BAH and business message encapsulation and CFI full  file Message components.   Public folder dedicated to the ESMA System in HUBEX System.   |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|                 | 3.   The ESMA System archives that file in a zip file according to naming  convention  (Annex  2:  File  naming  conventions)  and  uploads  in  the                                                                                                                                                                                                                                                          |
| Frequency       | Weekly                                                                                                                                                                                                                                                                                                                                                                                                        |
| Business  Rules |                                                                                                                                                                                                                                                                                                                                                                                                               |
| Assumptions     | Distributed file must be kept 10 days at disposal of the NCAs.                                                                                                                                                                                                                                                                                                                                                |

## 3.10.7 Create and distribute Expression of interest on indices file

| Goal                    | The  goal  of  this  use  case  is  to  distribute  data  on  expression  of  interest on indices.                                                                                                                                                                                                                                                                |
|-------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors                  | The ESMA System  NCA System                                                                                                                                                                                                                                                                                                                                       |
| Preconditions           | N/A                                                                                                                                                                                                                                                                                                                                                               |
| Trigger  Postconditions | As soon as Full/delta/Invalid records file  are generated.                                                                                                                                                                                                                                                                                                        |
| Trigger  Postconditions | Index data requests have been distributed.  1.  The  ESMA  System  selects,  grouped  by  NCACountryCode  in                                                                                                                                                                                                                                                      |
| Trigger  Postconditions | table' with the following attributes:  •  NCACountryCode                                                                                                                                                                                                                                                                                                          |
| Trigger  Postconditions | •  ISINIndexIdentifier or OtherIndexIdentifier                                                                                                                                                                                                                                                                                                                    |
| Trigger  Postconditions | •  ValidityStartDate                                                                                                                                                                                                                                                                                                                                              |
| Trigger  Postconditions | •  ValidityEndDate                                                                                                                                                                                                                                                                                                                                                |
| Normal Flow             | 2. The ESMA System generates an 'Expression of interest on indices' full file  based on the Derived Message Identifier schemas referenced in Table 11  -  Instrument  reference  data  message  table  associated  to  Business  Application Header (BAH), BAH and business message encapsulation and  Expression of interest on indices file Message components. |
| Normal Flow             | 3. The ESMA System archives that file in a zip file according to naming  convention (Annex 2: File naming conventions) and uploads in the Public  folder dedicated to the ESMA System in HUBEX System.                                                                                                                                                            |

<!-- image -->

| Frequency      | Daily                                                                                                                                                                                                                             |
|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Business rules | A request is valid in case                                                                                                                                                                                                        |
| Assumptions    | ESMA collects and distributes Expression of interest on Indices but is not  involved in any way in their execution. NCAs will use this functionality only  to request transactions related to indices (not on other instruments). |
| Assumptions    | Distributed file must be kept 10 days at disposal of the NCAs.                                                                                                                                                                    |

## 3.10.8 Create and distribute non-working days file

| Goal           | The goal of this use case is to distribute data on non-working days                                                                                                                                                                                                                         |
|----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors         | The ESMA System  NCA System                                                                                                                                                                                                                                                                 |
| Preconditions  | N/A                                                                                                                                                                                                                                                                                         |
| Trigger        | As soon as Full/delta/Invalid records file  are generated.                                                                                                                                                                                                                                  |
| Postconditions | Non-working days data has been distributed according to the Non- Working Days XML Schema                                                                                                                                                                                                    |
| Postconditions | 2.  The  ESMA  System  selects  from  the  Reporting  Calendar  table  all  records which are marked as non-working days, and group them by  Entity Identifier                                                                                                                              |
| Postconditions | 3.  For each entity, the system generates the following records:                                                                                                                                                                                                                            |
| Postconditions | a.  FinInstrmRptgNonWorkgDayRpt/NonWorkgDay/Id:  the  entity identifier (MIC code or 2-letter country code) within  the relevant element:                                                                                                                                                   |
| Postconditions | i.  MktIdCd if the Entity Identifier starts with T or S                                                                                                                                                                                                                                     |
| Normal Flow    | ii.  NtlCmptntAuthrty  if  the  Entity  Identifier  starts  with NCA or is equal to ESMA (in that case the  2 letter code is EU)                                                                                                                                                            |
| Normal Flow    | iii.  Othr if the Entity Identifier starts with A, in that  case Tp = APPA                                                                                                                                                                                                                  |
| Normal Flow    | b.  FinInstrmRptgNonWorkgDayRpt/NonWorkgDay/NonW orkgDay:  for  each  non-working  day  of  that  entity,  in  ascending order                                                                                                                                                              |
| Normal Flow    | 2.  The  ESMA  System  generates  an  'FULNWD'  full  file  based  on  the  Derived Message Identifier schemas referenced in Table 11 - Instrument  reference  data  message  table  associated  to  Business  Application  Header  (BAH),  BAH  and  business  message  encapsulation  and |
| Normal Flow    | Expression of interest on indices file Message components.                                                                                                                                                                                                                                  |

<!-- image -->

|                | 3. The ESMA System archives that file in a zip file according to naming  convention (Annex 2: File naming conventions) and uploads in the Public  folder dedicated to the ESMA System in HUBEX System.   |
|----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Frequency      | Daily                                                                                                                                                                                                    |
| Business rules |                                                                                                                                                                                                          |
| Assumptions    |                                                                                                                                                                                                          |

## 3.10.9 Create and distribute the previous version of LEI Full file (v2.1) [Updated CR #250]

| Goal            | The goal of this use case is to distribute to NCAs the previous version  (v2.1) of the daily LEI Full file, for easing the transition period.                                                                                                                                                                              |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors          | The ESMA System - provides the file via the HUBEX                                                                                                                                                                                                                                                                          |
|                 | NCA system - accesses the HUBEX to retrieve the file                                                                                                                                                                                                                                                                       |
| Preconditions   | Distribute LEI Full file  use case has produced and distributed the LEI Full  file (v3.1) to NCAs.                                                                                                                                                                                                                         |
| Trigger         | Distribute LEI Full file  use case (3.10.2)                                                                                                                                                                                                                                                                                |
| Postcondition   | The LEI Full file (v2.1) is available in the Public folder dedicated to the ESMA  System in HUBEX System for further uploading by NCA.                                                                                                                                                                                     |
| Normal Flow     | which name refers to the current reporting date.  2.  The ESMA System transforms that file, according to the XSLT provided  by GLEIF, in order to be compliant with the previous XML format (i.e.  v2.1).                                                                                                                  |
| Normal Flow     | 3.  The ESMA Systems archives that file in a zip file according to naming  convention as per Annex 2: File naming conventions and uploads it to the  Public folder dedicated to the ESMA System in HUBEX System.                                                                                                           |
| Frequency       | Daily.                                                                                                                                                                                                                                                                                                                     |
| Business  Rules | For facilitating NCAs needs and for a restricted time period, the system will  provide another LEI consolidated file using LEI-CDF format version 2.1  (https://www.gleif.org/en/about-lei/common-data-file-format/lei-cdf- format/lei-cdf-format-version-2-1# ), until users convert fully to the new XML  format (v3.1). |
| Assumptions     | N/A                                                                                                                                                                                                                                                                                                                        |

<!-- image -->

## 3.10.10. Create and distribute the previous version of MIC Full file (v1.0) [Updated CR #279]

| Goal            | The goal of this use case is to distribute to NCAs the previous version  (v1.0) of the MIC full records XML.                                                                                                                                                           |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors          | The ESMA System - provides the file via the HUBEX                                                                                                                                                                                                                      |
| Preconditions   | Create and Distribute MIC Full file  use case has produced and distributed the  MIC Full file (v2.0) to NCAs.                                                                                                                                                          |
| Trigger         | Create and Distribute MIC Full file  use case (3.10.6)                                                                                                                                                                                                                 |
| Postcondition   | The MIC Full file (v1.0) is available in the public folder dedicated to the ESMA  System in HUBEX System.                                                                                                                                                              |
|                 | 1.  The  ESMA  System  extracts  from  the  MIC  reference  data  table,  as  described in section 15.3, all the records with the following attributes:  • MICCode  • OperatingMICCode  • MICType  • InstitutionName  • MarketType  • ISOCountryCode  • ISOCountryName |
|                 | • AuthorityName  • City  • Acronym                                                                                                                                                                                                                                     |
|                 | Weekly  For facilitating NCAs needs and for a restricted time period, the ESMA system                                                                                                                                                                                  |
| Frequency       | folder dedicated to the ESMA System in HUBEX System.                                                                                                                                                                                                                   |
| Business  Rules | will distribute to NCA another MIC Full file, according to the previous XML  format (v1.0).                                                                                                                                                                            |

<!-- image -->

## 3.11  Monitoring

## 3.11.1 Use case Overview

FIGURE 15 - MONITORING USE CASE DIAGRAM

<!-- image -->

## 3.11.2 Missing/Incomplete Report Notifications

| Goal   | The  objective  of  the  use  case  is  to  send  reminder  notifications  to  submitting entities in case no file was submitted by some reporting  entities  or  in  case  instruments  have  not  been  reported  before  the  applicable submission cut-off time.   |
|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|        | The ESMA System                                                                                                                                                                                                                                                        |
| Actors | TV/SI (in the jurisdiction of a delegating NCA) - Receives reports                                                                                                                                                                                                     |
|        | NCA (not delegating data collection in its jurisdiction) - Receives reports                                                                                                                                                                                            |

<!-- image -->

## Trigger

## Postconditions

## Normal Flow

System has an up-to-date table collecting all workings days for each TV/SI.

The use case is triggered daily after 0:00 CET.

Reminder status advice file is in the outgoing folder dedicated to the ESMA System for each concerned entity.

NB : T is the day of the next publication, PvsT is the day of last successful publication

- 1. The  ESMA  System  extracts  the  list  of  TV/SI  from  which  data  is expected: the ESMA system selects MIC in the reporting calendar which satisfy all of the following conditions: Open is TRUE at least one date between PvsT and T-1.
- 2. For  each  MIC  extracted  in  step  1,  The  ESMA  System  checks whether any data has been submitted by the TV/SI: the ESMA selects in the 'Received Reference Data Table' records with
- · same MIC and for which at least one date exists in the 'ESMA Reception Date  Time List' between  PvsT-1  applicable cut-off time AND T-1 applicable cut-off time
- · where applicable cut-off time is the one related to the MIC in the 'Reporting Flow view'
- · Received Status is 'REFR'
- 3. If no  record  is  found, the  ESMA  System  updates  the  ' TV/SI reporting table' as per step 5 and generates a reminder file as per step 6.
- 4. Otherwise, the ESMA system checks that Regulated Markets have reported  all  non-terminated  instruments.  In  that  case,  the  ESMA System generates a reminder file.
- 4.1  The  ESMA  System  selects  in  the  'Received  Reference  Data Table' the (ISIN, MIC) records which satisfy all of the following conditions:
- · MIC is the MIC in the step 1
- · Termination date is NULL or, in case it is not NULL, is strictly later than PvsT-1
- · Received Status is 'REFR'
- · No date exists in the 'ESMA Reception Date Time List' between PvsT-1 applicable cut-off time AND T-1 applicable cutoff time, where applicable cut-off time is the one related to the MIC in the 'Reporting Flow view'
- · MICType is 'R' for that MIC as per Table 18 - Trading venue mapping view
- 4.2  In case at least one record is found, the ESMA System:
- 4.2.1  updates the 'TV/SI reporting table' as per step 5.
- 4.2.2  generates a reminder file as per step 6.

<!-- image -->

Frequency

- 4.2.3  retains the list of ISINs of record found.
- 5. For each extracted MIC, the system inserts or updates in the ' TV/SI reporting table ' as described in section Table 41 - TV/SI Reporting table the following record:
- · MIC
- · Date is set to T-1
- · 'Unreported ISIN List' is left empty if triggered by step 3, and is set to the list of ISINs present in the records extracted in step 4.2 if triggered by step 4
- · 'Inconsistent ISIN list and associated fields' is left empty.
- 6. The ESMA System:
- 6.1  generates a reminder file based on the Derived Message Identifier schemas  referenced  in  Table  11  -  Instrument  reference  data message table associated to Business Application Header (BAH), BAH  and  business  message  encapsulation  and  Reminder  file Message components.
- ➔ With the following attributes in the BAH:
- · From is EU
- · To  is  HUB  sender  code  associated  to  the  MIC  as  per Table 19 - Reporting Flow view.
- ➔ with the following attributes in the StatusReport header:
- · FileStatus is Reminder;
- · If  triggered  by  step  3,  'RMD-001'  validation  rule  as  per section 11 Reminder Message code and description.
- ➔ If  triggered  by  step  4,  for  each  ISIN  retained  in  step  4.2,  a record status block with the following attributes:
- a. ISIN
- b. 'RMD-002' validation rule as per section 11 Reminder Message code and description. .
- 6.2  names it according to the following components as per Annex 2: File naming conventions:
- · Sender is FIRDS
- · FileType is RMDINS
- · Recipient is the HUBSenderCode related to the MIC in the Reporting Flow view (Table 19 - Reporting Flow view).
- · Key1 is MIC
- · Key2 (From 00000 incremented by 1 each time a reminder file is generated)
- · Year is the Year of the current ESMA System datetime.
- 6.3  archives it into a zip file using the same filename.
- 6.4  uploads the zip file in the ' Outgoing folder ' of the ESMA System in HUBEX/HUBDE.

Daily

<!-- image -->

| Business rules   | The applicable cut-off time is:  •  21:00 CET when data is collected directly from TV / SI  •  21:30  CET  when  data  is  collected  by  NCAs  delegating  transparency  calculations but not delegating data collection in their jurisdiction  •  23:59 CET when data is collected by non-delegating NCAs  In case the number of records is beyond a threshold, the file should be split   |
|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Assumptions      |                                                                                                                                                                                                                                                                                                                                                                                              |

## 3.11.3 Monthly report generation for NCAs delegating data collection

| Goal          | The goal of this use case is to generate online monthly reports to  every  NCAs  delegating  data  collection  monthly  reports  identifying  recurring  data  collection  issues  concerning  TV/SI  under  their  jurisdiction over the past month.                                                                                                       |
|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors        | The ESMA System NCA (delegating data collection in its jurisdiction)                                                                                                                                                                                                                                                                                        |
| Preconditions | N/A                                                                                                                                                                                                                                                                                                                                                         |
| Trigger       | The first day of each month at 12:00 CET in ESMA calendar.                                                                                                                                                                                                                                                                                                  |
|               | Up to 2 relevant online reports are generated and accessible for NCA in a  restricted area of the ESMA website.  Report 1   fields:  'MIC, Date, 'Unreported ISIN', 'Number of days TV/SI                                                                                                                                                                   |
|               | Report  2 fields:  'Date,  MIC,  Inconsistent  ISIN,  associated  list  of  inconsistent fields numbers'                                                                                                                                                                                                                                                    |
| Normal Flow   | 1.  The  ESMA  system  extracts  from  the  NCA  reference  table,  the  NCA  delegating data collection.  2.  For each of those NCAs, The ESMA system extracts from the 'Trading  Venue  Mapping  View'  the  related  MIC  (based  on  records  with  ValidityEndDate is NULL).  3.  For each extracted MIC, the system calculates the number of days the |

<!-- image -->

Frequency

- · Date is between the first calendar date of the past month and the last calendar date of the past month; and
- · the Open flag is TRUE for that MIC in the ' Reporting calendar Table ' as per section 14.1.
- 4.  In case that count is greater than a configurable 17  threshold, the MIC of the TV/SI is added into the first report.
- 5.  For each extracted MIC and for each calendar day over the past month, the ESMA system generates (ISIN, MIC) record still inconsistent after the NCA reporting cut-off time as follows: the ESMA System extracts from  the  TV/SI  reporting  Table,  as  described  in  section  14.2,  the Inconsistent ISIN List of the (MIC, date) record
- · Which Date is between the first calendar date of the past month and the last calendar date of the past month.
- 6.  The list of ISINs and associated list of inconsistent fields numbers, per (MIC, date) as per step 5 are added into the second report.
- 7.  The system sends the generated reports to the respective NCA contact email.

Monthly

Business rules Assumptions

<!-- image -->

## 3.12  System Administration

## 3.12.1 Use case Overview

FIGURE 16 - SYSTEM ADMINISTRATION USE CASE DIAGRAM

<!-- image -->

## 3.12.2 User management

The management of users and access to any component of the ESMA System will be managed externally to the system.

<!-- image -->

## 3.12.3 System monitoring

## 3.12.3.1  Process monitoring

Every process  involved  in  the  execution  of  the  use  cases  described  above  shall  be  trackable  and manageable by the ESMA IT Administrator. Log files shall be easily accessible.

ESMA IT Administrator shall be notified of any technical issue on the execution of every process.

In addition, ESMA business Administrator shall be notified of alternate / exception / error events upon the following use cases:

| Use cases                                  | Event to capture                                                                                                                                                                                                                                                                       |
|--------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Create and distribute full File            | The ESMA System reports unsuccessful outcome of the  creation/distribution of the full file to the NCAs and / or to  the public.                                                                                                                                                       |
| Create and distribute delta File           | The ESMA System reports the unsuccessful outcome of  the creation/distribution of the delta file to the NCAs and /  or to the public.                                                                                                                                                  |
| Create and distribute invalid records File | The ESMA System reports the unsuccessful outcome of  the  creation/distribution  of  the  invalid  records  file  to  the  NCAs and / or to the public.                                                                                                                                |
| Update LEI reference data                  | register  file  is  not  available  for  the  day,  cannot  be  uncompressed, for any reason the system cannot extract  the  records,  or  the  LEI  reference  data  table  cannot  be  updated                                                                                       |
| Update ISO reference data                  | The  ESMA  System  discovers  that  new  country/currencies/MIC  files  are  not  available  on  the  publication date, cannot be uncompressed, for any reason  the  system  cannot  extract  the  records,  or  the  country/currencies/MIC reference data tables cannot be  updated. |
| ESMA Registers                             | Trading venue mapping view cannot be found in any  ESMA Register of Trading Venues (RM / MTF / OTF) or  Systematic Internaliser.  The ESMA System identifies that some MIC present in the  Trading  venue  mapping  view  can  be  found  in  more                                     |

<!-- image -->

## 3.12.3.2  File management monitoring

| Goal           | The goal of this use case is to generate statistical information in  order that  the  ESMA  IT  Administrator can  have an insight in  the  amount of file and reference data received by the ESMA System.       |
|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors         | The ESMA System                                                                                                                                                                                                  |
| Preconditions  | N/A                                                                                                                                                                                                              |
| Trigger        | Each time a DATINS file is processed  Each time a Full file is generated  Each time a Delta file is generated  Each time a Invalid records file is generated  Each time the Consistent reference data is updated |
| Postconditions | Statistical information is up-to-date.                                                                                                                                                                           |
|                | The ESMA System calculates:                                                                                                                                                                                      |
|                | •  The amount of DATINS files received since the go-live                                                                                                                                                         |
|                | •  The amount of DATINS files received per day and per Submitting  Entity.                                                                                                                                       |
|                | •  The number of instruments processed per day.                                                                                                                                                                  |
|                | •  The number of instruments processed per day and per Submitting  Entity.                                                                                                                                       |
|                | •  The number of New instruments per day and per TV/SI                                                                                                                                                           |
| Normal Flow    | •  The number of Modified instruments  per day and per TV/SI                                                                                                                                                     |
|                | •  The amount of Terminated per day and per TV/SI                                                                                                                                                                |

<!-- image -->

## 3.12.4 System configuration

3.12.4.1 Overview

The system shall be highly configurable by the ESMA IT Administrator.

ESMA IT administrator shall be able to configure:

- 1. The  triggering  date-time  of  all  processes  involved  (time  scheduled  processes  and processes triggered by the completion of other processes).
- 2. The threshold number used in Use case 3.11.3.
- 3. The activation/deactivation of each content validation check.

ESMA IT administrator shall be able to update:

- 1. The list of NCAs indicating their level of delegation as per Annex 5 of BRD; and
- 2. The list of CFI-based validations table as per Annex 7 of BRD.
- 3. The list of valid CFI codes based on the ISO Standard.
- 4. The CFI / RCA rules mapping table as per Annex 6 of BRD.
- 5. The list of Pre-Euro currencies (resp. EEA Countries) in the 'Currency reference data table' (resp. in the 'Country reference data table').

3.12.4.2  Update internal reference data table

| Goal           | The  goal  of  this  use  case  is  to  update  internal  data  tables  listed  under Assumptions section below.                                                            |
|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors         | The ESMA Business Administrator or the ESMA IT Administrator  The ESMA System                                                                                               |
| Preconditions  |                                                                                                                                                                             |
| Trigger        | Ad Hoc                                                                                                                                                                      |
| Postconditions | The internal data table has been updated as per user input.                                                                                                                 |
| Normal Flow    | 1.  The  ESMA  Business  /  IT  Administrator  enters  the  screen  dedicated to the table he/she wishes to update.  2.  The ESMA System displays the content of the table. |

<!-- image -->

|                | ValidityEndDate when they exist. ValidityEndDate may be empty  (null).   4. The  ESMA  Business  Administrator  commits  and  disconnects  from the Central database of the ESMA System.                                                                                                                                                  |
|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Frequency      | Ad Hoc                                                                                                                                                                                                                                                                                                                                    |
| Business rules |                                                                                                                                                                                                                                                                                                                                           |
| Assumptions    | The system shall allow to apply this use case to the following tables: NCA  reference data table, Trading Venue Mapping view (mainly to edit the  MiFIR Trading Venue, or the Trading Venue type in case of ambiguity at  the level of ESMA Register), Reporting Flow View, Reporting Calendar  Table (mainly for ESMA non-working days). |

| Goal           | The goal of this use case is to update internal data tables related to  CFI codes (as listed under Assumptions section below).                                                                                                                                            |
|----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors         | The ESMA Business Administrator or the ESMA IT Administrator  The ESMA System                                                                                                                                                                                             |
| Preconditions  |                                                                                                                                                                                                                                                                           |
| Trigger        | Ad Hoc                                                                                                                                                                                                                                                                    |
| Postconditions | The internal data table has been updated as per user input.                                                                                                                                                                                                               |
| Postconditions | 1.  The ESMA Business / IT Administrator enters the screen dedicated  to the table he/she wishes to update.                                                                                                                                                               |
| Postconditions | 2.  The ESMA System displays the content of the table.                                                                                                                                                                                                                    |
| Postconditions | 3.  The ESMA System allows the ESMA Business Administrator to                                                                                                                                                                                                             |
| Postconditions | 3.1  Create a new record                                                                                                                                                                                                                                                  |
| Postconditions | 3.2  Modify an existing record                                                                                                                                                                                                                                            |
| Postconditions | 3.3  Delete an existing record                                                                                                                                                                                                                                            |
| Normal Flow    | 4.  The ESMA System checks that the CFI codes (resp. CFI constructs)  entered are 6 alphabetic characters (resp. 6 characters, alphabetic or  *).                                                                                                                         |
| Normal Flow    | 5.  The  ESMA  System  updates  the  table  as  per  step  3  of  Use  case   3.12.4.2 'Update internal reference data table' .                                                                                                                                           |
| Normal Flow    | 6.  The system informs the data manager of potential inconsistencies by  displaying the following warnings:  1.  'Warning, the following CFI constructs do not match any item of  the List of valid CFI codes ; they will be unused, and you may  want to remove them : ' |

<!-- image -->

Frequency

Business rules

Assumption

The system shall allow to apply this use case to the following tables: List of valid CFI codes table (Table 45), CFI / RCA rule mapping table (Table 15), CFI-based validations table as per section (Table 16).

3.12.4.4  Update ESMA attributes in ISO reference data table

| Goal           | The goal of this use case is to update a specific attribute in an ISO  reference data table.   |
|----------------|------------------------------------------------------------------------------------------------|
| Actors         | The ESMA IT Administrator  The ESMA System                                                     |
| Preconditions  | ISO reference data table are updated                                                           |
| Trigger        | Ad Hoc                                                                                         |
| Postconditions | ISO reference data table are up-to-date.                                                       |

- o List of CFI constructs used in the table for which there is zero CFI codes in the 'List of valid CFI codes table'
- 2. 'Warning, the following CFI codes do not match any construct in the CFI-based validation table ; records submitted with this CFI will  be  rejected  ;  should  they  be  accepted,  rules  should  be defined in the CFI-based validation table for these CFI or for a CFI-construct covering these CFI'
- o List of CFI codes from the 'List of valid CFI codes table' which  have  no  corresponding  construct  in  the  'CFI-based validation table'
- 3. 'Warning, the following CFI codes are accepted by the system, but no corresponding RCA determination rule is defined for them. You MUST define a RCA-determination rule for this CFI or for a CFI-construct covering these CFI'
- o List of CFI codes from the 'List of valid CFI codes table' which  are  covered  by a CFI-construct in the 'CFI-based validation table' but are not covered by any CFI-construct in the 'CFI / RCA determination rule mapping table'
- 4. 'Warning, the following CFI codes are accepted by the system and do not have a unique RCA determination rule associated with them. You MUST make sure that one and only one RCAdetermination rule is covering these CFI'
- o List of CFI codes from the 'List of valid CFI codes table' which  are  covered  by a CFI-construct in the 'CFI-based validation table' and are covered  by at least 2 CFI-construct in the 'CFI / RCA determination rule mapping table'

Ad Hoc

<!-- image -->

| Normal Flow    | 1.  The  ESMA  Business  Administrator  connects  to  the  Central  database of the ESMA System.  2.  The ESMA System displays the content of the table.  3.  The  ESMA  Business  Administrator  modifies/deletes  one  of  the  record or creates a new record. The ESMA System allows to update  any  column  of  the  table,  including  ValidityStartDate  and  ValidityEndDate when they exist. ValidityEndDate may  be empty  (null).   |
|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|                | the Central database of the ESMA System.                                                                                                                                                                                                                                                                                                                                                                                                       |
| Frequency      | Ad Hoc                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Business rules |                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Assumption     | Is applicable to:   •  EEA flag in the Country reference data table.                                                                                                                                                                                                                                                                                                                                                                           |
|                | •  Pre-Euro flag  as  described  in  Table  43  -  Currency  reference  data  table.                                                                                                                                                                                                                                                                                                                                                           |

## 3.12.4.5 Update ESMA attributes in Country reference data table

| Goal           | The goal of this use case is to update a specific attribute in an  Country reference data table.                                                                                                                                                                                            |
|----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors         | The ESMA IT Administrator  The ESMA System                                                                                                                                                                                                                                                  |
| Preconditions  | Country reference data table are updated                                                                                                                                                                                                                                                    |
| Trigger        | Ad Hoc                                                                                                                                                                                                                                                                                      |
| Postconditions | Country reference data table are up to date.                                                                                                                                                                                                                                                |
| Normal Flow    | 1.  The  ESMA  Business  Administrator  connects  to  the  Central  database of the ESMA System.  2.  The ESMA System displays the content of the table.  3.  The ESMA Business Administrator modifies a record. The ESMA  System allows to update Officially\_Assigned column of the table. |
| Frequency      | Ad Hoc                                                                                                                                                                                                                                                                                      |

<!-- image -->

| Business rules   |                   |
|------------------|-------------------|
| Assumption       | Is applicable to: |

## 3.12.4.6 Update  ESMA  attributes  in  MIC  reference  and  Trading  Venue Mapping data tables according to the Authorised Entities Interface

| Goal           | The  goal  of  this  use  case  is  to  review  and  approve  the  MIC  information  updates  proposed  through  the  Authorised  Entities  Interface.                                                            |
|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors         | ESMA Business Administrator - reviews and approves changes                                                                                                                                                        |
|                | The system - implements approved changes                                                                                                                                                                          |
| Preconditions  | MIC\_UPREG\_STAGING data table is updated                                                                                                                                                                           |
| Trigger        | Ad Hoc                                                                                                                                                                                                            |
| Postconditions | MIC reference and Trading Venue Mapping data tables are up-to-date.                                                                                                                                               |
|                | An ESMA Business Administrator chooses 'Authorised Entities'  interface on the ESMA portal (resp. on the ESMA Intranet).                                                                                          |
| Normal Flow    | 1.  The ESMA System selects all MIC records of the  ' MIC\_UPREG\_STAGING data table ', with the following attributes:  • MIC   • Market Type  • Authority Name  • NCA Country Code  • Status  • Status Update Date |
| Normal Flow    | 2.  The ESMA System displays the resulting records and allows the  user to sort by MIC, Creation Date, Last Retrieval Date, Status  Update Date.                                                                  |
| Normal Flow    | The ESMA System allows the user to filter records as per user                                                                                                                                                     |
| Normal Flow    | 3.  interface described in chapter 3.12.4.7.                                                                                                                                                                      |

<!-- image -->

Frequency

Business rules

Assumption

- 5. The user is able to approve or reject only the latest proposed updates with Status as 'Pending' for each MIC.
- 6. In case a change is approved:
- 6.1 Its Status is set to 'Approved' and its Status Update Date to the Current Date Time.
- 6.2 The ESMA System checks whether a record exists in 'MIC reference data table' , with Validity End Date as Null. If TRUE the record is updated as follows:
- · MIC\_MARKET\_TYPE
- · MIC\_AUTHORITY\_NAME
- 6.3 The ESMA System checks whether a record exists in 'Trading Venue Mapping view ', with Validity End Date as Null. If TRUE, the following columns of this record are updated:
- · MIP\_MARKET\_TYPE
- · MIP\_NCA\_COUNTRY\_CODE
- 8. In case a change is rejected:
- 8.1.  Its Status is set to 'Rejected' and its Status Update Date to the Current Date Time.

Ad Hoc

N/A

Is applicable to:

- · Market Type in the MIC reference data table
- · Authority Name in the MIC reference data table.
- · Market Type in Trading Venue Mapping data table
- · NCA Country Code in Trading Venue Mapping data table

## 3.12.4.7 Authorised  Entities  User  interface  for  reviewing  and  acting  on proposed MIC updates

The ESMA Business Administrator shall be able to filter in the search interface by selecting one by one or a combination of the following attributes (the user must be able to reset the filter criteria):

| Default   Value   | Input Type                           | Use                                           | Field          |
|-------------------|--------------------------------------|-----------------------------------------------|----------------|
| All               | {'All'} + 4(x) List                  | Filter by MIC                                 | MIC            |
| All               | {'All'} + 4(x) List of Market  types | Filter proposed changes by Market  Type       | Market Type    |
| Blank             | Text                                 | Filter  proposed  changes  by  Authority Name | Authority Name |

<!-- image -->

TABLE 10 - FILTER SECTION OF AUTHORISED ENTITIES INTERFACE

| All        | {'All'} + Country codes of  EEA countries   | Filer  proposed  changes  by  NCA  Country                                                          | NCA Country                             |
|------------|---------------------------------------------|-----------------------------------------------------------------------------------------------------|-----------------------------------------|
| All        | {'All'}  +  List  of  available  statuses   | Filer proposed changes by status                                                                    | Status                                  |
| Unselected | {'Selected',  'Unselected'}  button         | Display  only  the  latest  proposed  changes (Latest Flag = TRUE)                                  | Display only latest  proposed changes   |
| Unselected | {'Selected',  'Unselected'}  button         | Display only the proposed changes  that have not yet been approved or  rejected. (Status = Pending) | Display only  pending proposed  changes |

## 4 Interfaces

## 4.1  Interface with Transparency System

- 4.1.1 Provide (ISIN,  MIC) active at least one day during a  given time period

| Goal          | The system provides the Transparency System with a list of (ISIN, MIC)  combinations which were active at least one day during a given time  period, together with some reference data (Field 11, Field 12, RCA).   |
|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors        | The Reference Data system  The Transparency system                                                                                                                                                                  |
| Preconditions |                                                                                                                                                                                                                     |
| Trigger       | The  Reference  Data  system  receives  from  the  Transparency  system  a  request  specifying  the  period  of  interest  using  two  parameters:  PeriodFromDate and PeriodToDate, both inclusive.               |
| Postcondition | The Reference Data system has provided the Transparency system with the  relevant list of (ISIN, MIC, Field 11, Field 12, RCA).                                                                                     |
| Normal Flow   | 1.  The Reference Data system selects from the Consistent Reference Data  Table the list of (ISIN, MIC, Field 11, Field 12, RCA, ESMA Reception Date  Time) where                                                   |
| Normal Flow   | • Field 11 is &lt;= PeriodToDate, and   • Field 12 is either NULL or &gt;= PeriodFromDate, and  • 'Latest record flag' is TRUE.    • Consistent Status &lt;&gt; than 'CANC'                                                     |
| Normal Flow   |                                                                                                                                                                                                                     |

<!-- image -->

| Business    |                                                                                                                                                          |
|-------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| Assumptions | The  Reference  Data  system  builds  its  response  based  on  the  latest  consistent reference data table at the time when the use-case is triggered. |

## 4.1.2 Get yearly turnover data for equity instruments for a given year

| Goal            | The system gets from the Transparency System the list of (ISIN, MIC,  yearly turnover, MiFIR identifier) for equity instruments for a given year.   |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors          | The Reference Data system                                                                                                                           |
|                 | The Transparency system                                                                                                                             |
| Preconditions   |                                                                                                                                                     |
| Trigger         | Weekly, from 8 of January until 15 of March each year                                                                                               |
| Postcondition   | The Reference Data system has received from the Transparency system the  relevant list of (ISIN, MIC, yearly turnover, MiFIR identifier).           |
| Normal Flow     | The Reference Data system sends the request the Transparency System for  a given year.                                                              |
| Frequency       | Weekly, from 08 th  of January to 15 th  of March each year.                                                                                        |
| Business  Rules |                                                                                                                                                     |
| Assumptions     | The  Transparency  system  builds  its  response  based  on  the  latest  data  available at the time when the use-case is triggered.               |

## 4.1.3 Provide the list of (MIC, Field 11, Field 12) related to a given ISIN

| Goal   | The system provides the Transparency System with the list of  (MIC,  Field 11, Field 12) related to a given ISIN as per latest available reference  data.   |
|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors | The Reference Data system  The Transparency system                                                                                                          |

<!-- image -->

| Preconditions   |                                                                                                                                                                                                                          |
|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Trigger         | The Transparency system                                                                                                                                                                                                  |
| Postcondition   | The Reference Data system has provided the Transparency system with the  relevant list of (MIC, Field 11, Field 12).                                                                                                     |
| Normal Flow     | 1.  The Reference Data system extracts from the latest Consistent Reference  Data Table the list of (MIC, Field 11, Field 12) for this ISIN where   •  'Latest record flag' is TRUE.  • Consistent Status &lt;&gt; than 'CANC' |
| Frequency       | Every time a liquidity assessment has to be performed for an ISIN - several  times per day.                                                                                                                              |
| Business Rules  |                                                                                                                                                                                                                          |
| Assumptions     | The  Transparency  system  builds  its  response  based  on  the  latest  data  published at the time when the use-case is triggered.                                                                                    |

## 4.1.4 Provide the list of (ISIN, MIC, Field 11, Field 12, RCA) active on a given day

| Goal          | The system provides the Transparency System with the list of (ISIN,  MIC, Field 11, Field 12, RCA) combinations for instruments active on a  given day D.                                   |
|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors        | The Reference Data system  The Transparency system                                                                                                                                          |
| Preconditions |                                                                                                                                                                                             |
| Trigger       | The Transparency system                                                                                                                                                                     |
| Postcondition | The Reference Data system has provided the Transparency system with the  relevant list of (ISIN, MIC, Field 11, Field 12, RCA) for day D.                                                   |
| Normal Flow   | 1.  The Reference Data system extracts from the latest Consistent Reference  Data Table the list of (ISIN, MIC, Field 11, Field 12, RCA) such that:  • Field 11 is less than or equal to D; |

<!-- image -->

| Frequency      | Several times per day.                                                                                                                |
|----------------|---------------------------------------------------------------------------------------------------------------------------------------|
| Business Rules |                                                                                                                                       |
| Assumptions    | The  Transparency  system  builds  its  response  based  on  the  latest  data  published at the time when the use-case is triggered. |

## 4.1.5 Provide the MIC with earliest Field 11 for a given ISIN

| Goal            | The  system  provides  the  Transparency  System  with  the  MIC  with  earliest Admission to trading or first trading date for a given ISIN.                                                                                                                                                                                                     |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors          | The Reference Data system  The Transparency system                                                                                                                                                                                                                                                                                                |
| Preconditions   | Preconditions                                                                                                                                                                                                                                                                                                                                     |
| Trigger         | The Transparency system                                                                                                                                                                                                                                                                                                                           |
| Postcondition   | In case there is one single MIC with earliest Field 11 for the ISIN, the system  returns that MIC.  Otherwise, the system returns the MIC for which the instrument reference  data was first received by the system.                                                                                                                              |
|                 | 1.  The  Reference  Data  system  extracts  from  the  latest  Consistent  Reference Data Table the list of (MIC, Field 11) for this ISIN where   • 'Latest record flag' is TRUE  • Consistent Status &lt;&gt; than 'CANC'  2.  The Reference Data system identifies the MIC(s) with earliest non-NULL  Field 11 among the records extracted in step 1. |
| Normal Flow     | 3.  If step 2 returns a single MIC, the system returns that MIC.  4.  Otherwise,   4.3  The system extracts from the  latest RCA Data Table the 'Earliest  ESMA  date  time  of  reception',  'Earliest  ESMA  received  RECORD\_ID', 'Earliest NCA date time of reception', 'Earliest NCA  received RECORD\_ID' for this ISIN.                     |
| Frequency       |                                                                                                                                                                                                                                                                                                                                                   |
| Business  Rules | See Transparency and Suspensions BRD paragraph 49.                                                                                                                                                                                                                                                                                                |
| Assumptions     |                                                                                                                                                                                                                                                                                                                                                   |

<!-- image -->

## 4.2  FIRDS Reference Data view

The system provides other ESMA systems (in particular the FIRDS Transparency system) with a view giving access to the latest available FIRDS Reference Data system's Consistent Reference Data Table, including all internal fields and all RTS23 fields.

## 4.3  FIRDS Reporting Calendar view

The system provides other ESMA systems (in particular the FIRDS Transparency system and the Double Volume Cap system) with a view giving access to the latest available FIRDS Reference Data system's Reporting Calendar Table (as per chapter 14.1).

<!-- image -->

## 4.4  Interface with DIFEA

| Goal           |                                                                                                                                                                   |
|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors         | The DIFEA system - Provides data virtualization and data analysis  software                                                                                       |
|                | The Reference Data system - Makes Reference Data system's  databases available for analysis by the FIRDS Data Managers                                            |
|                | The  FIRDS  Data  Managers  -  Access  the  Reference  Data  system's  databases through the DIFEA system tools.                                                  |
| Preconditions  | The FIRDS Data Managers have access to the DIFEA system tools with  the appropriate access rights.                                                                |
|                | The Reference Data system exposes its databases to the DIFEA system  for the relevant DIFEA groups / users.                                                       |
|                | The DIFEA system is configured to serve the Reference Data system as a  data  source  available  for  the  relevant  group  /  user  (the  FIRDS  Data  Managers) |
| Trigger        | A FIRDS Data Manager.                                                                                                                                             |
| Postconditions | The FIRDS Data Manager accesses any data stored in the Reference Data  system's databases.                                                                        |
| Normal Flow    | 1. The FIRDS Data Manager launches the DIFEA system analytics tool.                                                                                               |
|                | 2. The FIRDS Data Manager connects to Reference Data system's  database table(s) using the analytics tool.                                                        |
|                | 3. The FIRDS Data Manager accesses the data through the analytics  tool and is able to use this data to perform any analysis as allowed by  the analytics tool.   |
| Frequency      | Ad hoc                                                                                                                                                            |
| Business rules |                                                                                                                                                                   |
| Assumption     |                                                                                                                                                                   |

## 4.5  Interface with ESMA Registers [Updated CR #284]

The system shall implement interfaces with ESMA Registers of Trading Venues (Regulated Markets, Multilateral Trading Facilities, Organised Trading Facilities), of Systematic Internalisers, and of Competent Authorities as needed to populate the 'Trading Venue Mapping view' and the 'MIC reference data table' with all necessary information.

The system shall notify the ESMA Business Administrator of issues detected.

<!-- image -->

| Goal           | The system gets from the Authorised Entities Register the latest MIC  information on Market Type, Authority Name and NCA jurisdiction                                                                                                                                                                                  |
|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actors         | The ESMA System                                                                                                                                                                                                                                                                                                        |
| Preconditions  | The Authorised Entities database is updated.                                                                                                                                                                                                                                                                           |
| Trigger        | Daily                                                                                                                                                                                                                                                                                                                  |
| Postconditions | MIC\_UPREG\_STAGING data table is updated                                                                                                                                                                                                                                                                                |
|                | 1.  The ESMA System retrieves from Authorised Entities system the latest  MIC information in relation to: Market Type, Authority Name and NCA  jurisdiction                                                                                                                                                            |
|                | 2.  For each extracted MIC record, the system checks whether at least one  of the following conditions is TRUE:  • A record exists in  'MICs data table' , for the MIC, with Validity  End Date as NULL.                                                                                                               |
|                | 3.  For the records that passed the step 2 validation, the ESMA system  checks  whether  a  record  already  exists  for  the  MIC  in  ' MIC\_UPREG\_STAGING data table '.  3.1 In  case  no  record  is  found,  the  system  performs  the  necessary  Market  Type  transformation  and  inserts  a  new  record  in |
| Normal Flow    |                                                                                                                                                                                                                                                                                                                        |
|                | 'MIC\_UPREG\_STAGING data table',  as follows:  • Creation Date as the Current Date Time  • MIC  • Market\_Type (the mapping is RMKT for MIR, OTFS for MIO,  MLTF for MIT, SINT for MIS)  • Authority Name  • NCA Country Code  • Status as 'Pending'  • Latest Flag as TRUE                                              |

<!-- image -->

Alternate flow

Frequency

Business rules

Assumptions

- 3.2.2 Otherwise (the record is modified):
- i. The system updates the pre-existing record by setting the Latest Flag as FALSE.
- ii. The system inserts a new  record for the MIC in 'MIC\_UPREG\_STAGING data table', as per step 3.1.
- 4. The  system  dispatches  an  email  notification  to  notify  the  ESMA Business Administrator for new pending MIC information updates.
- 5. The system logs the successful process execution to retain a history of passed executions.
- 6. The information stored in the 'MIC\_UPREG\_STAGING data table' will be available onto a dedicated page on ESMA portal, as per chapter 3.12.4.6.

In case of any issue, the system notifies the ESMA IT administrator and logs the erroneous execution.

Daily

The  ESMA  Business  Administrator  will  be  able  to  access  the  relevant information from a dedicated page on ESMA portal, and to approve or not any updates indicated by the interface with Authorised Entities. In case of approval, the respective updates will be implemented in the 'MICs' and/or 'Trading Venue Mapping' data tables .

N/A

<!-- image -->

## 5 XML Messages

The XML Schemas are annexed to this Functional Specifications Document.

## 5.1  Instrument Reference Data

| Message component                                             | HUB File  type  using  the  message  component   | Direction from  ESMA System point  of view   | ISO 20022  Derived Message Definition Identifier 18   | ISO 20022  Base Message  Definition Identifier   |
|---------------------------------------------------------------|--------------------------------------------------|----------------------------------------------|-------------------------------------------------------|--------------------------------------------------|
| Business Application Header (BAH)                             | All except  DATLEI                               | Incoming / Outgoing                          | head.001.001.01\_ESMAUG\_1.1.0.xsd                      | head.001.001.01                                  |
| BAH and business message encapsulation                        | All except  DATLEI                               | Incoming / Outgoing                          | head.003.001.01.xsd                                   | head.003.001.01                                  |
| Instrument Reference Data Report                              | DATINS                                           | Incoming                                     | auth.017.001.03\_ESMAUG\_DATINS\_1.1.0.xsd               | auth.017.001.03                                  |
| Cancelled Instrument reference Data Report                    | CANINS                                           | Incoming                                     | auth.102.001.01\_ESMAUG\_CANINS\_1.2.0.xsd               | auth.102.001.01                                  |
| Feedback on Instrument Reference Data  Report (DATINS/CANINS) | FDBINS                                           | Outgoing                                     | auth.031.001.01\_ESMAUG\_FDB\_1.1.0.xsd                  | auth.031.001.01                                  |

<!-- image -->

| Feedback on cancelled Instrument Reference  Data Report (CANINS)   | FDBCAN   | Outgoing   | auth.031.001.01\_ESMAUG\_FDB\_1.1.0.xsd          | auth.031.001.01   |
|--------------------------------------------------------------------|----------|------------|-----------------------------------------------|-------------------|
| Full file                                                          | FULINS   | Outgoing   | auth.017.001.02\_ESMAUG\_FULINS\_1.1.0.xsd       | auth.017.001.02   |
| Full file for Cancellations                                        | FULCAN   | Outgoing   | auth.102.001.01\_ESMAUG\_CANINS\_1.2.0.xsd       | auth.102.001.01   |
| Delta file                                                         | DLTINS   | Outgoing   | auth.036.001.0 3 \_ESMAUG\_DLTINS\_1. .0.xsd  2  | auth.036.001.03   |
| Invalid records file                                               | INVINS   | Outgoing   | DRAFT1auth.042.001.02\_ESMAUG\_INVINS\_1.1.0.xsd | auth.042.001.02   |
| Reminder file                                                      | RMDINS   | Outgoing   | auth.031.001.01\_ESMAUG\_RMD\_1.1.0.xsd          | auth.031.001.01   |

TABLE 11 - INSTRUMENT REFERENCE DATA MESSAGE TABLE

## 5.2  Additional Reference Data

| Message component                         | HUB File type  using the  message  component   | Direction from  ESMA System point  of view   | ISO 20022  Derived Message Definition Identifier   | ISO 20022  Base Message Definition  Identifier   |
|-------------------------------------------|------------------------------------------------|----------------------------------------------|----------------------------------------------------|--------------------------------------------------|
| Non-working days report                   | DATNWD  FULNWD                                 | Incoming  Outgoing                           | auth.039.001.01\_ESMAUG\_DATNWD\_1.1.0.xsd            | auth.039.001.01                                  |
| Feedback on Non-working days Data  Report | FDBNWD                                         | Outgoing                                     | auth.031.001.01\_ESMAUG\_FDB\_1.1.0.xsd               | auth.031.001.01                                  |
| Country full file                         | DATCNY                                         | Outgoing                                     | auth.047.001.01\_EMSAUG\_DATCNY\_1.1.0                | auth.047.001.01                                  |

<!-- image -->

| Currency full file                     | DATCUR   | Outgoing   | auth.048.001.01\_ESMAUG\_DATCUR\_1.1.0       | auth.048.001.01   |
|----------------------------------------|----------|------------|-------------------------------------------|-------------------|
| LEI full file                          | DATLEI   | Outgoing   | Not applicable                            | Not applicable    |
| MIC full file                          | DATMIC   | Outgoing   | DRAFT1auth.049.001.02\_ESMAUG\_DATMIC\_1.1.0 | auth.049.001.02   |
| CFI full file                          | DATCFI   | Outgoing   | auth.050.001.01\_ESMAUG\_DATCFI\_1.1.0       | auth.050.001.01   |
| Expression of interest on indices file | DATIDX   | Outgoing   | auth.043.001.01\_ESMAUG\_DATIDX\_1.1.0       | auth.043.001.01   |

## 6 Data Structure

## 6.1  Reporting Files Table

| Field Name       | M/O Data field description    | Data field Values   | ISO                                                       | Description   | Source                    |
|------------------|-------------------------------|---------------------|-----------------------------------------------------------|---------------|---------------------------|
| FileName [PK]  M | 5(a)\_6(a)\_5(a)\_5(a)-6(n)\_2(a) |                     | Name of a submitted file excluding  HUBEX/HUBDE timestamp | ESMA System   |                           |
| M                | YYYYMMDDHHMMSS                |                     | The timestamp in the name of a  submitted file            | ESMA System   | ESMA reception  Date Time |

<!-- image -->

## 6.2 NCA reference data table

| Field Name             | M/O   | Data field  description   | Data field  Values       | Description                                                                                                                                                                                               | ISO  Source                                                       |
|------------------------|-------|---------------------------|--------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
|                        | M     | 2(a)                      | ISO 3166 -  Country Code | The 2-character ISO Country Code identifier.  Updated by ESMA IT administrator  from registration process                                                                                                 | Country Code  3166                                                |
|                        | M     | 30(x)                     |                          | Updated by ESMA business  administrator from registration process                                                                                                                                         | AuthorityName  The official name of the NCA                       |
| Address                | M     | 250(z)                    |                          | Updated by ESMA business  administrator from registration process                                                                                                                                         | The address of the  NCA                                           |
| Generic   EmailAddress | O     |                           |                          | The email address to be used for the RCA  change processes.                                                                                                                                               | Updated by ESMA business  administrator from registration process |
| Contact.  Name         | M     | 250(z)                    |                          | The name of the contact                                                                                                                                                                                   | Updated by ESMA business  administrator from registration process |
| Contact.  EmailAddress | M     |                           |                          | The email address of the contact                                                                                                                                                                          | Updated by ESMA business  administrator from registration process |
| Contact.  PhoneNumber  | M     |                           |                          | The phone Number of the contact                                                                                                                                                                           | Updated by ESMA business  administrator from registration process |
| Level of  delegation   | M     | 1(a)                      | N/C/T                    | N in case Non-delegating NCA  C in case NCA delegating data collection and  transparency calculations  T in case NCA delegating transparency  calculations but not data collection in their  jurisdiction | Updated by ESMA business  administrator from registration process |
| Withdrawn flag         | M     | TRUEFALSE  Indicator      |                          | Flag which indicates whether the NCA is  withdrawn from the system                                                                                                                                        | Updated by ESMA business  administrator from registration process |

TABLE 14 - NCA REFERENCE DATA TABLE

<!-- image -->

## 6.3  CFI / RCA rule mapping table

| Field Name         | M/O   | Data field  description   | Data field  Values                                                                                                                                                                                                                                                                                                                           | ISO   | Description                       | Source                              |
|--------------------|-------|---------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-----------------------------------|-------------------------------------|
| CFI Construct [PK] | M     | 6(a)                      | alphabetic or '*' characters                                                                                                                                                                                                                                                                                                                 | N/A   | CFI Construct  code               | Updated by ESMA IT Administrator    |
| RTS22 rule         |       | 50(x)                     | RTS22 Art.16 (1) and (2) ("equity / equity like")  RTS22 Art.16 (3) and (4) ("debt")  RTS22 Art.16 (5).a ("equity derivatives ")  RTS22 Art.16 (5).b ("debt derivatives")  RTS22 Art.16 (5).c ("basket derivatives")  RTS22 Art.16 (5).d ("index derivatives")  RTS22 Art.16 (5).e ("derivatives on derivative")  RTS22 Art.16 (6) ("other") | N/A   | The RTS22 as  defined in the  BRD | M  Updated by ESMA IT Administrator |

TABLE 15 - CFI / RCA RULE MAPPING TABLE

## 6.4  CFI-based validations table

To support very granular rules, the system should be able to support up to 100,000 CFI constructs x 48 fields = 4.8 million rows

| Field Name   | M/O   | Data field  description      | Data field  Values   | ISO                               | Description                            | Source             |
|--------------|-------|------------------------------|----------------------|-----------------------------------|----------------------------------------|--------------------|
| M            | 6(a)  | alphabetic or  '*' character | N/A                  | CFI Construct code defined in BRD | Updated by ESMA Business Administrator | CFI Construct [PK] |

<!-- image -->

## ESMA REGULAR USE

| RTS23 field  Number Id   | M    | 2(n)            | Number ID in  the RTS 23  field table   | N/A                                                                                                                            | The number ID of the RTS23 field.   | Updated by ESMA Business Administrator   |             |
|--------------------------|------|-----------------|-----------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|------------------------------------------|-------------|
| M                        | 1(a) | M/ F  Forbidden | N/A                                     | M when RTS23 field Number Id is  mandatory for the CFI Construct.  F when RTS23 field Number Id is  N/A for the CFI Construct. |                                     | Updated by ESMA Business Administrator   | Cardinality |

TABLE 16 - CFI-BASED VALIDATIONS TABLE

<!-- image -->

## 6.5  Expression of interest on Indices reference data table

| Field Name   | M/O   | Data field  description   | Data field   Values      | ISO                                                                                                                              | Description                                                                                                                                                                                              | Source               |
|--------------|-------|---------------------------|--------------------------|----------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------|
| M            | 2(a)  |                           | ISO 3166 - Country  Code | 316   6                                                                                                                          | Country code of the NCA having expressed its  interest in receiving Transaction reports for that  index.   Generated by the ESMA System  at the submission of the record  (the country of the NCA user). | NCACountryCode       |
| O            | 12(x) |                           |                          | ISIN code of the index                                                                                                           | Submitted by NCA user through  the dedicated interface.                                                                                                                                                  | ISINIndexIdentifier  |
| O            | 4(x)  |                           |                          | 4 Letter as per Annex Table 1 {INDEX}                                                                                            | Submitted by NCA user through  the dedicated interface.                                                                                                                                                  | OtherIndexIdentifier |
| M            | Date  |                           |                          | The  day  on  when  the  NCA  country  has  expressed as being interested in the index.                                          | Generated by the ESMA System  (the  Date  Time  the  NCA  user  confirms the add/removal of the  selected Index identifier through  the dedicated                                                        | ValidityStartDate    |
| O            | Date  |                           |                          | The  day  on  when  the  NCA  country  has  expressed not as being interested in the index  anymore since the validityStartDate. | Generated by the ESMA System  (the  Date  Time  the  NCA  user  confirms the add/removal of the  selected Index identifier through  the dedicated                                                        | ValidityEndDate      |

TABLE 17 - EXPRESSION OF INTEREST ON INDICES REFERENCE DATA TABLE

<!-- image -->

## 6.6  Trading venue mapping view

| Field Name    | M/O  Data Type   | Data field Values            | ISO                                                                                                                                                                                                                                                                                                               | Description                                                                                                                                                                                                                                                                                                                                                                   | Source              |
|---------------|------------------|------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------|
| M             | 4(a)             | 10383                        | Segment MIC where available, otherwise operating  MIC (RTS23 field 6).                                                                                                                                                                                                                                            | Generated by the ESMA  System from ISO 10383                                                                                                                                                                                                                                                                                                                                  | MIC [PK]            |
| M             | 2(x)             | 3166                         | The NCA country provides the country of jurisdiction of  the TV/SI.                                                                                                                                                                                                                                               | ESMA Register System                                                                                                                                                                                                                                                                                                                                                          | NCACountry          |
| M             | 4(a)             | 10383                        | As per ISO 10383, An operating MIC identifies the  entity operating an exchange, trading platform,  regulated or non-regulated market, or a trade reporting  facility in a specific country. It is the "parent" MIC as  opposed to the "market segment" MIC.  As per ISO 10383, Market Identifier Code separating | ISO 10383                                                                                                                                                                                                                                                                                                                                                                     | OperatingMIC        |
| SegmentMIC  O | 4(a              | 10383                        | an operating MIC to multiple business units.                                                                                                                                                                                                                                                                      | ISO 10383                                                                                                                                                                                                                                                                                                                                                                     |                     |
| M             | 4(x)             | RMKT  MLTF  OTFS  SINT  APAS |                                                                                                                                                                                                                                                                                                                   | This information identifies the type of the TV/SI. NCA  must ensure that the MIC codes are registered in the  appropriate register (Register of  RM, register of MTF,  register of OTF, register of SI, register of APA, register  of CTP), or are flagged under the right category in case  of a single register covering all those types of entities.  ESMA Register System | MarketType          |
| M             | 40(x)            |                              | Trading Venue for which the market operator has  received an authorization under Directive 2014/65/EU.  It can be a single MIC or a concatenation of MICs                                                                                                                                                         | Onboarding documents                                                                                                                                                                                                                                                                                                                                                          | MiFIR-Trading Venue |
| M             | Date  YYYYMMDD   |                              | First date when the record is valid                                                                                                                                                                                                                                                                               | Generated by the ESMA  System                                                                                                                                                                                                                                                                                                                                                 | ValidityStartDate   |
| M             | Date  YYYYMMDD   |                              | Last date when the record is valid                                                                                                                                                                                                                                                                                | Generated by the ESMA  System                                                                                                                                                                                                                                                                                                                                                 | ValidityEndDate     |

<!-- image -->

## 6.7  Reporting Flow view

| Field Name                                         | M/O   | Data Type   | Data field Values   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Source                |
|----------------------------------------------------|-------|-------------|---------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------|
| TV / SI MIC                                        | M     | 4(a)        |                     | For TV / SI, segment MIC where available, otherwise  operating MIC (RTS23 field 6).  For APAs, XOFF for OTC transactions on instruments  admitted to trading on a Venue, XXXX for pure-OTC                                                                                                                                                                                                                                                                                                                                                    | Onboarding documents  |
| Reporting entity  identification                   | M     | 50(a)       |                     | For TV / SI, the MIC code of the entity in charge of reporting  the data for the 'TV / SI MIC'.  For APA / CTP, the identifier of the APA or CTP                                                                                                                                                                                                                                                                                                                                                                                              | Onboarding documents  |
| Submitting entity  identification  (HUBSenderCode) | M     | 5(a)        |                     | The HUB Sender Code of the entity expected to submit the  data reported by the TV / SI / APA / CTP.  It can be the TV / SI / APA / CTP, or the NCA in which  jurisdiction the TV / SI / APA / CTP is.   It is used in particular for the following purposes:   - Check that the entity submitting the data for a TV / SI /  APA / CTP is the responsible party for the TV / SI / APA /  CTP.  - Identify to whom notifications such as feedback files and  reminders should be sent  The applicable cut-off time for the purpose of Reference | Onboarding documents  |
| Reference Data  applicable cut-off  time           | M     | Time        | HH:MI:SS            | Data reporting.  21:00 CET when data is collected directly from TV / SI  21:30 CET when data is collected by NCAs delegating  transparency calculations but not delegating data collection  in their jurisdiction  23:59 CET when data is collected by non-delegating NCAs                                                                                                                                                                                                                                                                    | Onboarding documents. |

<!-- image -->

## 6.8  Instrument yearly turnover view

| Field Name   | M/O   | Data type   | Data field  Values   | ISO                                                                                                                                                                   | Description                                                                                                              | Source           |
|--------------|-------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|------------------|
| M            | 4(a)  |             | 4(a)                 | 10383                                                                                                                                                                 | Segment MIC for the TV/SI, where available,  otherwise operating MIC  Updated by the interface with  Transparency System | MIC              |
| M            |       |             | 6166                 |                                                                                                                                                                       | Updated by the interface with  Transparency System                                                                       | ISIN             |
| M            | 4(a)  |             |                      | Type of Equity / Equity-like instrument:  SHRS = shares  ETFS = ETFs  DPRS = depositary receipts  CRFT = certificates  OTHR = other equity-like financial instruments | Updated by the interface with  Transparency System                                                                       | MiFIR Identifier |
| M            | 15(n) | 15(n)       |                      | Yearly turnover of ISIN of the TV/SI MIC                                                                                                                              | Updated by the interface with  Transparency System                                                                       | Yearly turnover  |

TABLE 20 - INSTRUMENT YEARLY TURNOVER VIEW

<!-- image -->

## 6.9  RTS23 Fields table

| Field  category                              | RTS23 Field  Name                                      | Cardinality                                  | RTS  field  Number                           | System  Field  Number                        | XML Path                                                                                          |
|----------------------------------------------|--------------------------------------------------------|----------------------------------------------|----------------------------------------------|----------------------------------------------|---------------------------------------------------------------------------------------------------|
| Identifier                                   | Instrument  Identification  code                       | 1..1                                         | 1                                            | 1                                            | Document/MiFIRRefDataRpt/RefData/FinInstrmGnlAttrbts/Id                                           |
| dependent  fields                            | Trading Venue                                          | 1..1                                         | 6                                            | 6                                            | Document/MiFIRRefDataRpt/RefData/TradgVnRltdAttrbts/Id                                            |
| dependent  fields                            | Request for  admission to  trading by issuer           | 1..1                                         | 8                                            | 8                                            | Document/MiFIRRefDataRpt/RefData/TradgVnRltdAttrbts/IssrReq                                       |
| dependent  fields                            | Date of approval  of the admission  to trading         | 0..1                                         | 9                                            | 9                                            | Document/MiFIRRefDataRpt/RefData/TradgVnRltdAttrbts/AdmssnApprvlDtByIssr                          |
| dependent  fields                            | Date of request  for admission to  trading             | 0..1                                         | 10                                           | 10                                           | Document/MiFIRRefDataRpt/RefData/TradgVnRltdAttrbts/ReqForAdmssnDt                                |
| dependent  fields                            | Date of  admission to  trading or date of  first trade | 1..1                                         | 11                                           | 11                                           | Document/MiFIRRefDataRpt/RefData/TradgVnRltdAttrbts/FrstTradDt                                    |
| dependent  fields                            | Termination date                                       | 0..1                                         | 12                                           | 12                                           | Document/MiFIRRefDataRpt/RefData/TradgVnRltdAttrbts/TermntnDt                                     |
| dependent  fields                            | Instrument Full  Name                                  | 1..1                                         | 2                                            | 2                                            | Document/MiFIRRefDataRpt/RefData/FinInstrmGnlAttrbts/FullNm                                       |
| Free-Text fields used for consistency checks | Free-Text fields used for consistency checks           | Free-Text fields used for consistency checks | Free-Text fields used for consistency checks | Free-Text fields used for consistency checks | Free-Text fields used for consistency checks                                                      |
| Non-Free-                                    | Underlying index  name                                 | 0..1                                         | 28                                           | 28                                           | Document/MiFIRRefDataRpt/RefData/DerivInstrmAttrbts/UndrlygInstrm/Sngl/Indx/Nm/RefRate/{Indx, Nm} |
| Text fields  used for  consistency  checks   | Name of the  index/benchmark  of a floating rate  bond | 0..1                                         | 20                                           | 20                                           | Document/MiFIRRefDataRpt/RefData/DebtInstrmAttrbts/IntrstRate/Fltg/RefRate/{Indx, Nm}             |

<!-- image -->

| Reference rate                                        | 0..1   |   40 |   40 | Document/MiFIRRefDataRpt/RefData/DerivInstrmAttrbts/AsstClssSpcfcAttrbts/Intrst/IntrstRate/RefRate   |
|-------------------------------------------------------|--------|------|------|------------------------------------------------------------------------------------------------------|
| Instrument  Classification                            | 1..1   |    3 |    3 | Document/MiFIRRefDataRpt/RefData/FinInstrmGnlAttrbts/ClssfctnTp                                      |
| Commodities  derivative  indicator                    | 1..1   |    4 |    4 | Document/MiFIRRefDataRpt/RefData/FinInstrmGnlAttrbts/CmmdtyDerivInd                                  |
| Issuer or  operator of the  trading venue  Identifier | 1..1   |    5 |    5 | Document/MiFIRRefDataRpt/RefData/Issr                                                                |
| Financial  instrument short  name                     | 0..1   |    7 |    7 | Document/MiFIRRefDataRpt/RefData/FinInstrmGnlAttrbts/ShrtNm                                          |
| Notional  currency 1                                  | 1..1   |   13 |   13 | Document/MiFIRRefDataRpt/RefData/FinInstrmGnlAttrbts/NtnlCcy                                         |
| Total issued  nominal amount                          | 0..1   |   14 |   14 | Document/MiFIRRefDataRpt/RefData/DebtInstrmAttrbts/TtlIssdNmnlAmt                                    |
| Maturity date                                         | 0..1   |   15 |   15 | Document/MiFIRRefDataRpt/RefData/DebtInstrmAttrbts/MtrtyDt                                           |
| Expiry date                                           | 0..1   |   24 |   24 | Document/MiFIRRefDataRpt/RefData/DerivInstrmAttrbts/XpryDt                                           |
| Price multiplier                                      | 0..1   |   25 |   25 | Document/MiFIRRefDataRpt/RefData/DerivInstrmAttrbts/PricMltplr                                       |

<!-- image -->

| ISIN instrument  code in case the  underlying is  single and not an  index       | 0..1   |   26 | 26a   | Document/MiFIRRefDataRpt/RefData/DerivInstrmAttrbts/UndrlygInstrm/Sngl/ISIN         |
|----------------------------------------------------------------------------------|--------|------|-------|-------------------------------------------------------------------------------------|
| ISIN instrument  codes  composing the  basket  case the  underlying is a  basket | 0..N   |   26 | 26b   | Document/MiFIRRefDataRpt/RefData/DerivInstrmAttrbts/UndrlygInstrm/Bskt/ISIN         |
| ISIN instrument  code in case the  underlying is  single and an  index           | 0..1   |   26 | 26c   | Document/MiFIRRefDataRpt/RefData/DerivInstrmAttrbts/UndrlygInstrm/Sngl/Indx/ISIN    |
| LEI issuer  code  in case the  underlying is  single and not an  index           | 0..1   |   27 | 27a   | Document/MiFIRRefDataRpt/RefData/DerivInstrmAttrbts/UndrlygInstrm/Sngl/LEI          |
| LEI issuer codes  composing the  basket in   case  the underlying is  a basket   | 0..N   |   27 | 27b   | Document/MiFIRRefDataRpt/RefData/DerivInstrmAttrbts/UndrlygInstrm/Bskt/LEI          |
| Term of the  underlying index                                                    | 0..1   |   29 | 29    | Document/MiFIRRefDataRpt/RefData/DerivInstrmAttrbts/UndrlygInstrm/Sngl/Indx/Nm/Term |
| Option type                                                                      | 0..1   |   30 | 30    | Document/MiFIRRefDataRpt/RefData/DerivInstrmAttrbts/OptnTp                          |
| Strike price                                                                     | 0..1   |   31 | 31    | Document/MiFIRRefDataRpt/RefData/DerivInstrmAttrbts/StrkPric                        |
| Currency of  nominal value                                                       | 0..1   |   16 | 16    | Document/MiFIRRefDataRpt/RefData/DebtInstrmAttrbts/NmnlValPerUnit/@Ccy              |

<!-- image -->

| Nominal value  per  unit/minimum  traded value                        | 0..1   |   17 |   17 | Document/MiFIRRefDataRpt/RefData/DebtInstrmAttrbts/NmnlValPerUnit                                |
|-----------------------------------------------------------------------|--------|------|------|--------------------------------------------------------------------------------------------------|
| Fixed rate                                                            | 0..1   |   18 |   18 | Document/MiFIRRefDataRpt/RefData/DebtInstrmAttrbts/IntrstRate/Fxd                                |
| Identifier of the  index/benchmark  of a floating rate  bond          | 0..1   |   19 |   19 | Document/MiFIRRefDataRpt/RefData/DebtInstrmAttrbts/IntrstRate/Fltg/RefRate/ISIN                  |
| Term of the  index/benchmark  of a floating rate  bond                | 0..1   |   21 |   21 | Document/MiFIRRefDataRpt/RefData/DebtInstrmAttrbts/IntrstRate/Fltg/Term                          |
| Basis Point  Spread of the  index/benchmark  of a floating rate  bond | 0..1   |   22 |   22 | Document/MiFIRRefDataRpt/RefData/DebtInstrmAttrbts/IntrstRate/Fltg/BsisPtSprd                    |
| Seniority of the  bond                                                | 0..1   |   23 |   23 | Document/MiFIRRefDataRpt/RefData/DebtInstrmAttrbts/DebtSnrty                                     |
| Strike price  currency                                                | 0..1   |   32 |   32 | Document/MiFIRRefDataRpt/RefData/DerivInstrmAttrbts/StrkPric/MntryVal/Amt/@Ccy                   |
| Option exercise  style                                                | 0..1   |   33 |   33 | Document/MiFIRRefDataRpt/RefData/DerivInstrmAttrbts/OptnExrcStyle                                |
| Delivery type                                                         | 0..1   |   34 |   34 | Document/MiFIRRefDataRpt/RefData/DerivInstrmAttrbts/DlvryTp                                      |
| Base product                                                          | 0..1   |   35 |   35 | Document/MiFIRRefDataRpt/RefData/DerivInstrmAttrbts/AsstClssSpcfcAttrbts/Cmmdty/Pdct {Base Pdct} |
| Sub product                                                           | 0..1   |   36 |   36 | Document/MiFIRRefDataRpt/RefData/DerivInstrmAttrbts/AsstClssSpcfcAttrbts/Cmmdty/Pdct {Sub Pdct}  |

<!-- image -->

| Further sub  product          | 0..1   |   37 |   37 | Document/MiFIRRefDataRpt/RefData/DerivInstrmAttrbts/AsstClssSpcfcAttrbts/Cmmdty/Pdct {AddtlSubPdct}                             |
|-------------------------------|--------|------|------|---------------------------------------------------------------------------------------------------------------------------------|
| Transaction type              | 0..1   |   38 |   38 | Document/MiFIRRefDataRpt/RefData/DerivInstrmAttrbts/AsstClssSpcfcAttrbts/Cmmdty/TxTp                                            |
| Final price type              | 0..1   |   39 |   39 | Document/MiFIRRefDataRpt/RefData/DerivInstrmAttrbts/AsstClssSpcfcAttrbts/Cmmdty/FnlPricTp                                       |
| IR Term of  contract          | 0..1   |   41 |   41 | Document/MiFIRRefDataRpt/RefData/DerivInstrmAttrbts/AsstClssSpcfcAttrbts/Intrst/IntrstRate/Term                                 |
| Notional  currency 2          | 0..1   |   42 |   42 | Document/FinInstrmRptgRefDataRpt/RefData/DerivInstrmAttrbts/AsstClssSpcfcAttrbts/Intrst/OthrNtnlCcy                             |
| Notional  currency 2          | 0..1   |   47 |   47 | Document/MiFIRRefDataRpt/RefData/DerivInstrmAttrbts/AsstClssSpcfcAttrbts/FX/OthrNtnlCcy                                         |
| Fixed rate of leg  1          | 0..1   |   43 |   43 | Document/MiFIRRefDataRpt/RefData/FinInstrmRefData/DerivInstrmAttrbts/AsstClssSpcfcAttrbts/Intrst/FrstLegIntrstRate/Fxd          |
| Fixed rate of leg  2          | 0..1   |   44 |   44 | Document/MiFIRRefDataRpt/RefData/FinInstrmRefData/DerivInstrmAttrbts/AsstClssSpcfcAttrbts/Intrst/OthrLegIntrstRate/Fxd          |
| Floating rate of  leg 2       | 0..1   |   45 |   45 | Document/MiFIRRefDataRpt/RefData/FinInstrmRefData/DerivInstrmAttrbts/AsstClssSpcfcAttrbts/Intrst/OthrLegIntrstRate/Fltg/RefRate |
| IR term of  contract of leg 2 | 0..1   |   46 |   46 | Document/MiFIRRefDataRpt/RefData/FinInstrmRefData/DerivInstrmAttrbts/AsstClssSpcfcAttrbts/Intrst/OthrLegIntrstRate/Fltg/Term    |
| FX Type                       | 0..1   |   48 |   48 | Document/MiFIRRefDataRpt/RefData/FinInstrmRefData/DerivInstrmAttrbts/AsstClssSpcfcAttrbts/FX/OthrNtnlCcy                        |

<!-- image -->

## 6.10  Additional Field table

TABLE 22 - ADDITIONAL FIELD TABLE

| Message Type  RTS23 Field Name  Xpath   | Message Type  RTS23 Field Name  Xpath   | Message Type  RTS23 Field Name  Xpath                                                                           |
|-----------------------------------------|-----------------------------------------|-----------------------------------------------------------------------------------------------------------------|
|                                         | NCA reception date time                 | Document/MiFIRRefDataRpt/RefData/TechAttrbts /SbmssnDtTm                                                        |
|                                         | Reporting Entity                        | Document/MiFIRRefDataRpt/RptHdr/RptgNtty/MktIdCd  Or  Document/MiFIRRefDataRpt/RptHdr/RptgNtty/NtlCmptntAuthrty |
|                                         | ESMA Reception date time                | TimeStamp  generated by HUBEX/HUBDE in the filename                                                             |
|                                         | Submitting Entity                       | Sender in the filename                                                                                          |
|                                         | Technical RECORD\_IDentification         | Document/MiFIRRefDataRpt/RefData/TechRcrdId                                                                     |
| DATNWD                                  | Reporting Entity                        | Document/MiFIRNonTradgDayRpt/NonWorkgDayRpt/Id                                                                  |
| DATNWD                                  | Nonworking Day                          | Document/MiFIRNonTradgDayRpt/NonWorkgDayRpt/NonWorkgDay/Dt                                                      |
| CANINS                                  | Identifier                              | Document/MiFIRRefDataRpt/RefData/FinInstrmGnlAttrbts/Id                                                         |
| CANINS                                  | Trading venue                           | Document/MiFIRRefDataRpt/RefData/TradgVnRltdAttrbts/Id  Document/MiFIRRefDataRpt/RefData/TechRcrdId             |
| CANINS                                  | Technical RECORD\_IDentification         |                                                                                                                 |

<!-- image -->

## 6.11  Rejection statistics table

TABLE 23 - REJECTION STATISTICS TABLE

| Attribute Name      | M/O   | Data Type   | Description                                    |
|---------------------|-------|-------------|------------------------------------------------|
| File name           | M     | Char        | File name                                      |
| Reception date time | M     | Date time   | Reception date time of the file name           |
| Error code          | M     | Char        | Error code                                     |
| Number of records   | M     | Number      | Number of records rejected with the error code |

## 6.12  Rejected records table

TABLE 24 - REJECTED RECORDS TABLE

| Attribute Name      | M/O   | Data Type   | Description                                                                                             |
|---------------------|-------|-------------|---------------------------------------------------------------------------------------------------------|
| File name           | M     | Char        | File name received and containing the rejected record                                                   |
| Reception date time | M     | Date time   | Date time of reception of the filename                                                                  |
| Feedback file name  | M     | Char        | Filename of the feedback file generated by the system and containing the rejection error for the record |
| Error code          | M     | Char        | Error code triggered by the system for the rejected record                                              |
| Error message       | M     | Char        | Error message generated by the system for the rejected record                                           |
| ISIN                | M     | Char        | ISIN of the rejected record                                                                             |
| MIC                 | M     | Char        | MIC of the rejected record                                                                              |
| RECORD\_ID           | M     | Char        | RECORD\_ID of the rejected record                                                                        |
| Record details      | M     | Char        | Full content of the rejected record                                                                     |

<!-- image -->

## 6.13  Yearly RCA reassessment  input data table

| Attribute Name             | M/O   | Data Type   | Description                                                                                            |
|----------------------------|-------|-------------|--------------------------------------------------------------------------------------------------------|
| ISIN                       | M     | Char (12)   | ISIN for Yearly RCA reassessment                                                                       |
| ONEOFF\_YEARLY\_ENABLED\_FLAG | M     | Char (1)    | 1 - Include this ISIN for Yearly RCA reassessment  0 - Disregard this ISIN for Yearly RCA reassessment |

TABLE 25 - YEARLY RCA REASSESSMENT INPUT TABLE

## 6.14  RCA\_MIC adjustments data table

| Attribute Name    | M/O   | Data Type     | Description                                               |
|-------------------|-------|---------------|-----------------------------------------------------------|
| ISIN              | M     | Char (12)     | ISIN                                                      |
| RCA\_MIC           | M     | Char (4)      | New RCA\_MIC                                               |
| USER\_ID           | M     | Char (30)     | User submitting the request                               |
| ValidityStartDate | M     | Date YYYYMMDD | Start date, from which, the change of RCA\_MIC is valid    |
| ValidityEndDate   | O     | Date YYYYMMDD | End Date, till which, this change of RCA\_MIC is valid     |
| Reason\_for\_change | M     | Char(255)     | Predefined list of values                                 |
| Active\_change     | M     | True/False    | Identification of active records for next post processing |

TABLE 26 - RCA\_MIC ADJUSTMENTS DATA TABLE

<!-- image -->

## 6.15  RCA\_MIC adjustments error data table

| Attribute Name    | M/O   | Data Type     | Description                                                                    |
|-------------------|-------|---------------|--------------------------------------------------------------------------------|
| ISIN              | M     | Char (12)     | ISIN                                                                           |
| RCA\_MIC           | M     | Char (4)      | New RCA\_MIC                                                                    |
| Date\_of\_error     | M     | Date time     | TimeStamp  generated by the system                                             |
| USER\_ID           | M     | Char (30)     | User submitting the request                                                    |
| ValidityStartDate | M     | Date YYYYMMDD | Start date, from which, the change of RCA\_MIC is valid                         |
| ValidityEndDate   | M     | Date YYYYMMDD | End Date, till which, this change of RCA\_MIC is valid                          |
| Reason\_for\_change | M     | Char(255)     |                                                                                |
| Error message     | M     | Char(255)     | Message generated by the system and providing information  regarding the error |

TABLE 27 - RCA-MIC ADJUSTMENTS ERROR DATA TABLE

<!-- image -->

## 6.16  Set TERMINATION\_DATE error data table

| Attribute Name   | M/O   | Data Type     | Description                                                                        |
|------------------|-------|---------------|------------------------------------------------------------------------------------|
| ISIN             | M     | Char (12)     | ISIN                                                                               |
| MIC              | M     | Char (4)      | New RCA\_MIC                                                                        |
| Date\_of\_error    | M     | Date time     | TimeStamp  generated by the system                                                 |
| USER\_ID          | M     | Char (30)     | User submitting the request                                                        |
| TERMINATION\_DATE | M     | Date YYYYMMDD | The new Termination Date, as provided in the submitted file                        |
| Error message    | M     | Char(255)     | Message generated by the system and providing information  regarding the error     |
| File Name        | M     | Char(255)     | File name of the file received and containing the Termination Date  change request |

TABLE 28 - SET TERMINATION DATE ERROR DATA TABLE

## 6.17  Set TERMINATION\_DATE data table

| Attribute Name   | M/O   | Data Type     | Description                                                                       |
|------------------|-------|---------------|-----------------------------------------------------------------------------------|
| ISIN             | M     | Char (12)     | ISIN                                                                              |
| MIC              | M     | Char (4)      | MIC                                                                               |
| Creation Date    | M     | Date time     | TimeStamp  generated by the system                                                |
| USER\_ID          | M     | Char (30)     | User submitting the request                                                       |
| TERMINATION\_DATE | M     | Date YYYYMMDD | The new Termination Date, as provided in the submitted file                       |
| File Name        | M     | Char(255)     | File name of the file received and containing the Termination Date change request |
| Active\_change    | M     | True/False    | Identification of active records for next post processing                         |

TABLE 29 - SET TERMINATION DATE DATA TABLE

<!-- image -->

## 6.18  MIC\_UPREG\_STAGING data table

| Field Name  M/O   | Data field  description      | Data field  value   | ISO                                                                                                                       | Description                   | Source            |
|-------------------|------------------------------|---------------------|---------------------------------------------------------------------------------------------------------------------------|-------------------------------|-------------------|
| M                 | 4(a)                         | 10383               | The ISO 10383 Market Identifier Code                                                                                      | Data provider                 | MICCode           |
| M                 | 4(x)  MLTF  SINT             | RMKT  OTFS          | For MIC operating in a EEA country, the type of  Market as identified in the TV/SI Register in  ESMA: RM, OTF, MTF or SI. | TV/SI Registers               | MarketType        |
| M                 | 400(a)                       |                     | The name or description of the institution,  market, or infrastructure                                                    | Data provider                 | AuthorityName     |
| M                 | 2(a)                         |                     | The ISO 3166 2-character country code where  the institution, market, or infrastructure operates                          | Data provider                 | CountryCode       |
| M                 | 4(a)  APRV  RJCT             | PNDG                | A status indicating whether the MIC updates  have been approved or rejected                                               | ESMA manual  update           | Status            |
| O                 | DateTime  YYYYMMDD  HH:MI:SS |                     | Date at which the change was approved or  rejected by ESMA administrator                                                  | ESMA manual  update           | StatusUpdateDate  |
| M                 | DateTime  YYYYMMDD  HH:MI:SS |                     | Date at which the record was firstly inserted in  the table                                                               | Generated by the  ESMA System | CreationDate      |
| M                 | DateTime  YYYYMMDD  HH:MI:SS |                     | Date at which the record was last updated                                                                                 | Generated by the  ESMA System | LastRetrievalDate |
| O                 | 400(a)                       |                     | The user that approved or rejected the proposed  update                                                                   | ESMA manual  update           | UserID            |
| M                 | TRUE/FALSE  TRUE             | /FALSE              | Indicates whether the proposed update  is the  latest one for this MIC                                                    | Generated by the  ESMA System | LatestFlag        |

TABLE 30 - MIC\_UPREG\_STAGING data table

<!-- image -->

## 7 Annex 1a: Transmission Validation Rules

When a  submitting  entity  uploads  a  file  into  HUBEX/HUBDE,  preliminary  transmission  checks  are performed based on the file naming convention [Annex 2: File naming conventions] as follows:

- · Check that &lt;Sender&gt; matches the sender account (It is not possible for an entity to submit a file on behalf of another),
- · If OK, check that the file naming convention is respected,
- · If OK, check that the sender is allowed to send files to the receiver, and
- · If OK, check that file size is lower than remaining disk quota size.

Then, if all those checks are passed, the ESMA system performs the following transmission checks.

TABLE 31 - TRANSMISSION VALIDATION RULES

| Error   code                                                                                                                        | Error Message                                                                                                                                                                                                                                                                                                                                                  | Control                                                                                                                             |
|-------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| decompressed.  The file contains more than 1  The name of the XML file is  not consistent with the name  of its container ZIP file. | decompressed.  The file contains more than 1  The name of the XML file is  not consistent with the name  of its container ZIP file.                                                                                                                                                                                                                            | decompressed.  The file contains more than 1  The name of the XML file is  not consistent with the name  of its container ZIP file. |
| The  file  cannot                                                                                                                   | All files on the ESMA System are compressed in zip format.  When treating a file, the first step is the decompression of  the  zip  file.  This  error  is  returned  by  the  system  if  the  file  cannot be decompressed.                                                                                                                                  | FIL-101  be                                                                                                                         |
| XML file.                                                                                                                           | Once the file is decompressed, the ESMA system checks  that  the  decompressed  container  zip  file  contains  exactly  one XML file.  This error is returned by the system when no  XML or more than one file is found.                                                                                                                                      | FIL-102                                                                                                                             |
|                                                                                                                                     | Once the  file  is  decompressed  and  that  exactly  only  one  XML file  is  submitted,  the  ESMA  System  checks  that  the  sender code, the file type code, Key1 code, Key2 code, the  recipient code and the Year of the XML file and of the ZIP  file are equal. This error is returned by the system when at  least one of those fields is not equal. | FIL-103                                                                                                                             |

<!-- image -->

## 8 Annex 1b: Format Validation Rules

Initial data validation is done to confirm file sent by the Submitting Entity can be processed. This includes whether the file can be uncompressed, conforms to expected XSD schema and common file identifiers are valid.

Possible Errors encountered are:

TABLE 32 - FORMAT VALIDATION RULES

| Error   code                                                                                                      | Error Message                                                                                                                                                                                                                                                  | Control                                      |
|-------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------|
| Feedback messages related to file validation                                                                      | Feedback messages related to file validation                                                                                                                                                                                                                   | Feedback messages related to file validation |
| The  ISO  20022  Message  Identifier  in  the  BAH (*.xsd) is not valid.                                          | The  ISO  20022  Message  Identifier  in  the  BAH  must  refer  to  the  latest  schema  approved by ITMG.                                                                                                                                                    | FIL-104                                      |
| The file structure does not correspond to the  XML schema: [result of XML validation].                            | corresponding XML schema. For information  purposes, if there is an error in the validation,  the  error  message  produced  by  the  XML                                                                                                                      | FIL-105                                      |
| The  Reporting  Entity  is  not  registered  at  ESMA  or  the  Submitting  Entity  shall  not  submit this data. | 1)  Extracts from Table 19 - Reporting Flow  view  the  Submitting  entity  identification  associated  to  the  Reporting  entity  identifier code in the Reporting header of  the submitted file.  2)  Checks  that  the  Submitting  entity                 | FIL-106                                      |
| File &lt;Filename&gt; has already been submitted  once.                                                                 | When a file  is  received,  the  system  checks  whether it exists in the Reporting Files Table  as  described  in  Table  13  -  Reporting  Files  table a record which filename is composed of  the  same  sender,  filetype,  recipient,  Key1,  Key2 Year. | FIL-107                                      |

<!-- image -->

## 9 Annex 1c: Reference Data Content and Consistency Validation Rules

| Control executed by the system                                                                                                                                                                                                                   | Error  code                                                              | Error Message                                                                                        | Concerned  Fields                                                                                                                               |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| The value of 'Instrument Classification' shall  be a valid ISO 10962 code and shall be  covered by at least one of the CFI constructs  in the CFI-based validation matrix.                                                                       | INS-101                                                                  | The CFI code is not valid  against the CFI based  validation matrix.                                 | RTS field 3 against the list of  valid CFI codes table and  against the list of CFI Construct  (Primary Key) in the CFI based  validation table |
| Check that Mandatory fields are reported  according to 'CFI-based validations table'.                                                                                                                                                            | INS-102                                                                  | The following mandatory  fields are not reported:  ' List of RTS23 number Id  of missing field(s)'.  | RTS field 3 vs all other RTS  fields                                                                                                            |
| Check that Non-Applicable fields (N/A) are  not reported according to 'CFI-based  validations table'.                                                                                                                                            | INS-103                                                                  | The following Non- Applicable fields are  wrongly reported: ' List of  RTS23 number Id of N/A        | All RTS fields                                                                                                                                  |
| The following checks are performed only in case checks above are passed.                                                                                                                                                                         | The following checks are performed only in case checks above are passed. | The following checks are performed only in case checks above are passed.                             | The following checks are performed only in case checks above are passed.                                                                        |
| Check that that a record (ISIN, MIC) is not  reported twice in the same file.                                                                                                                                                                    | INS-104                                                                  | The following records are  reported twice in the  same file.                                         | RTS field 1,6                                                                                                                                   |
| The MIC identifier in the  TradingVenueRelatedAttributes  block shall  exist in the Trading venue mapping view  which satisfies the following conditions:  ValidityStartDate is prior or equal to the  current date and (ValidityEndDate is NULL | INS-105                                                                  | The Trading Venue field  contains an invalid MIC  code.                                              | RTS field 6                                                                                                                                     |
| The Reporting entity identification associated  to the MIC [field 6] in Reporting Flow view  (TV / SI MIC) is equal to the Reporting Entity  identifier in the header of the XML file.                                                           | INS-107                                                                  | 'Trading Venue' field is  not registered at ESMA  or is not reported by the  right reporting entity. | Reporting Entity  RTS field 6                                                                                                                   |

<!-- image -->

## ESMA REGULAR USE

| The Strike Price Currency Code shall exist  as an active ISO 4217 Currency Code in the  currency reference data table (based on  records with ValidityEndDate is NULL.                                                                                                                                                                                                                                                   | INS-108   | The Strike Price  Currency Code is  incorrect.                | RTS field 32       |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|---------------------------------------------------------------|--------------------|
| The Notional Currency 1 Code shall exist as  an ISO 4217 Currency Code in the currency  reference table (based on records which  ValidityEndDate is NULL or PreEuroFlag is                                                                                                                                                                                                                                               | INS-109   | The Notional Currency 1  Code is incorrect.                   | RTS field 13       |
| The Notional Currency 2 Code shall exist as  an ISO 4217 Currency Code in the currency  reference table (based on records which  ValidityEndDate is NULL or PreEuroFlag is                                                                                                                                                                                                                                               | INS-110   | The Notional Currency 2  Code is incorrect.                   | RTS field 42, 47   |
| The Currency of nominal value shall exist as  an ISO 4217 Currency Code in the currency  reference table (based on records which  ValidityEndDate is NULL or PreEuroFlag is                                                                                                                                                                                                                                              | INS-111   | The Currency of nominal  value is incorrect.                  | RTS field 16       |
| The value of the 'Issuer Identifier' shall exist  in the LEI reference table and comply with  the following conditions:  (  ValidityEndDate is NULL   OR  date of termination of the respective record is  between any period specified by  ValidityStartDate and ValidityEnddate in LEI                                                                                                                                 | INS-112   | The LEI provided for  'Issuer Identifier' is  invalid.        | RTS field 5        |
| )  AND   register status in {'Issued", "Lapsed",  "Pending transfer", "Pending archival}.  The value of the 'Direct Underlying issuer'  shall exist in the LEI reference table and  comply with the following conditions:  (  ValidityEndDate is NULL   OR  date of termination of the respective record is  between any period specified by  ValidityStartDate and ValidityEnddate in LEI  reference table for this LEI | INS-113   | The LEI provided for  'Direct Underlying Issuer'  is invalid. | RTS field 27a, 27b |

<!-- image -->

## ESMA REGULAR USE

| Check the last digit of the ISIN code of the  'instrument identification code' according to  the algorithm of ISIN validation. 19                                             | INS-114   | The ISIN code of the  instrument identification  code is invalid.                                  | RTS field 1             |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|----------------------------------------------------------------------------------------------------|-------------------------|
| Check the last digit of the ISIN code of the  'underlying instrument' should be valid  according to the algorithm of ISIN  validation. 20                                     | INS-115   | The ISIN code of the  underlying is invalid.                                                       | RTS field 26a, 26b, 26c |
| Check the last digit of the ISIN code of the  Identifier of the 'Index/Benchmark of a  floating rate Bond' should be valid according  to the algorithm of ISIN validation. 21 | INS-116   | The ISIN code of the  Index/Benchmark of a  floating rate Bond is  invalid.                        | RTS field 19            |
| The 'Date of admission to trading or date of  First trade' should a valid date and in a  sensible range (no prior than 31-12-1899 22 ).                                       | INS-117   | The 'Date of admission  to trading or date of First  trade' is not a consistent  date.             | RTS field 11            |
| The Termination Date should a valid date  and in a sensible range (no prior than 31-12- 1899 23 ).                                                                            | INS-118   | The Termination Date is  not a consistent date.                                                    | RTS field 12            |
| The Termination Date should be equal to or  later than the 'Date of admission to trading  or date of First trade'.                                                            | INS-119   | The Termination Date is  earlier than the 'Date of  admission to trading or  date of First trade'. | RTS field 11, 12        |
| The Maturity Date should a valid date and in  a sensible range (no prior than 31-12- 1899 24 ).                                                                               | INS-120   | The Maturity Date is not  a consistent date.                                                       | RTS field 15            |
| The Maturity Date should be equal to or later  than 'Date of admission to trading or date of  First trade'.                                                                   | INS-121   | The Maturity Date and  Date of admission to  trading or date of First  trade are not consistent.   | RTS field 11, 15        |

<!-- image -->

## ESMA REGULAR USE

| The Expiry Date should a valid date and in a  sensible range (no prior than 31-12-1899 25 ).                                                          | INS-122   | The Expiry Date is not a  consistent date.                                                                                                        | RTS field 24                                                                         |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| The Expiry date should be equal to or later  than the 'Date of admission to trading or  date of First trade'.                                         | INS-123   | The Expiry Date and The  Date of admission to  trading or date of First  trade are not consistent.                                                | RTS field 11, 24                                                                     |
| Field 'Option Type' shall only contain value  'PUTO' when the 'Instrument Classification'  refers to the following CFI Codes: OP****  (Put Options).  | INS-124   | Invalid 'PUTO' Option  Type                                                                                                                       | RTS field 3, 30                                                                      |
| Field 'Option Type' shall only contain value  'CALL' when the 'Instrument Classification'  refers to the following CFI Codes: OC****  (Call Options). | INS-125   | Invalid 'CALL' Option  Type                                                                                                                       | RTS field 3, 30                                                                      |
| The termination date should be populated in  case Maturity date/Expiry date is populated  and is strictly earlier than the current  reporting date.   | INS-126   | The Termination date is  not populated for an  expired/matured  instrument.  N.B.: that check if failed  generates a warning  only.               | RTS field 12, {15 or 24}                                                             |
| The termination date should be earlier or  equal in case Expiry date/Maturity date is  populated.                                                     | INS-127   | The Termination date  and Expiry date/Maturity  date are not consistent.  N.B.: that check if failed  generates a warning  only.                  | RTS field 12, {15 or 24}                                                             |
| The field listed in Table 1 BRD 43. shall be  consistent with the values provided by the  Relevant competent Authority. 26                            | INS-128   | The following fields are  not consistent with the  one provided by RCA  :&lt;&lt;Upcoming RCA&gt;&gt;,  RCA\_MIC  :&lt;&lt;MIC&gt;&gt;(&lt;&lt;MIC's  country&gt;&gt;):  List of RTS23 | RTS fields used for consistency  checks as stated in Table 21 -  RTS23 Fields table. |

<!-- image -->

TABLE 33 - REFERENCE DATA CONTENT AND CONSISTENCY VALIDATION RULES

|                                                                                                      |         | number Id of missing  field(s)'.  N.B.: that check if failed  generates a warning  only.            |                                       |
|------------------------------------------------------------------------------------------------------|---------|-----------------------------------------------------------------------------------------------------|---------------------------------------|
| The currency of the Total issued nominal  amount shall be the same as the currency of  nominal value | INS-129 | The currency of the Total  issued nominal amount is  not the same as the  currency of nominal value | RTS Field 14. Currency  RTS Field 16. |
| The ISIN-MIC combination, received for a  cancellation record, should exists in FIRDS  DB.           | INS-130 | The ISIN-MIC  combination, received  from a cancellation  record, doesn't exists in  FIRDS DB       | RTS field 1,6                         |

<!-- image -->

## 10 Annex 1d: Non-working Days Content Validation Rules

TABLE 34 - NON-WORKING DAYS CONTENT VALIDATION RULES 28

| Control executed by the system                                                                                                                                                                                                                                                                                                                                                                                                                                  | Error code   | Error Message                                                                                                                                                  |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| If the non-working day is provided for a Market TV/SI  (NonWorkgDay/Id/MktIdCd is populated):  the system  checks that the MIC exists in the Reporting Flow View  under 'TV / SI MIC', and that there exists a line in the  Reporting Flow View  which maps this 'TV / SI  MIC'  with  'Reporting  Entity'  documented  in  the  RptHdr/RptgNtty  If the non-working day is provided for an APA or CTP  (NonWorkgDay/Id/Othr/Id  is  populated):    the  system | NWD-001      | The  TV/SI/APA/CTP  identified  under  NonWorkgDay/Id  is  not  registered  at  ESMA  or  is  not  consistent  with  the  reporting entity in the header.      |
| In case the identification code of the record is a NCA 27 ,  that code shall exist in the NCA reference data table in  the  Registers  system  and  must  be  equal  to  the  Reporting Entity identifier in the header of the XML file.                                                                                                                                                                                                                        | NWD-002      | The  NCA  identified  by  the  'Trading  Venue identification code' field  is  not  registered at ESMA or is not equal to  the reporting entity in the header. |
| The Non-working Date of a record should be a valid  date.                                                                                                                                                                                                                                                                                                                                                                                                       | NWD-003      | This date does not exist.                                                                                                                                      |

## 11 Reminder Message code and description

TABLE 35 - REMINDER MESSAGE CODE AND DESCRIPTION

| Code    | Code description                                                                                                                 |
|---------|----------------------------------------------------------------------------------------------------------------------------------|
| RMD-001 | No  file  has  been  submitted  to  ESMA  on  the  day  &lt;&lt;current  reporting  date&gt;&gt;  or  was  submitted after the cut-off time. |
| RMD-002 | The instrument was not reported on the day &lt;&lt;current reporting date&gt;&gt; or was reported  after the cut-off time.                   |

<!-- image -->

## 12 Annex 2: File naming conventions

The XML files sent by the Submitting Entity (NCA or TV/SI) to ESMA must comply with the following naming convention:

## &lt;Sender&gt;\_&lt;FileType&gt;\_&lt;Recipient&gt;\_&lt;Key1&gt;-&lt;Key2&gt;\_&lt;Year&gt;.xml

The Submitting Entity archives the XML file into a ZIP file and uploads onto the HUBEX/HUBDE System. Its name must comply with the same naming convention:

## &lt;Sender&gt;\_&lt;FileType&gt;\_&lt;Recipient&gt;\_&lt;Key1&gt;-&lt;Key2&gt;\_&lt;Year&gt;.zip

As soon as HUBEX/HUBDE routes the file, it suffixes it with a timestamp in YYYYMMDDHHMMSS format  (24h  format,  UTC  Time).  Therefore,  as  soon  as  the  file  is  placed  in  the  submitting  entity's Outgoing folder dedicated to the ESMA System, the naming convention for the files becomes:

## &lt;Sender&gt;\_&lt;FileType&gt;\_&lt;Recipient&gt;\_&lt;Key1&gt;-&lt;Key2&gt;\_&lt;Year&gt;\_ Timestamp.zip

The ESMA System uploads the file from the incoming folder dedicated to it, unzips the ZIP file and checks that XML filename and ZIP filename are consistent [All component of the filenames are equal excluding timestamp].

The following table provides description of the components of the filename:

| Component   | Definition                                                                                                                                                                |
|-------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Sender      | A  5-character  identifier  of  the  sender  of  the  data.  Depending  on  the  country  of  jurisdiction of the originator, the identifier can be one of the following: |
|             | 1)  In case of a Non-Delegating NCA:                                                                                                                                      |
|             | 2)  In case of a NCA delegating transparency calculations but not data collection in its                                                                                  |
|             | 3)  In case of a TV/SI under the jurisdiction of a NCA delegating data collection in its  jurisdiction:                                                                   |
|             | • TXXXX   where  XXXX  is  the  MIC  code  of  the  submitting  Entity  in  case  it  is  a  Regulated Market, MTF or OTF.                                                |
|             | • SXXXX  where  XXXX  is  the  MIC  code  of  the  submitting  entity  in  case  it  is  a  Systematic Internaliser.                                                      |
| FileType    | A 6-character attribute identifying the type of information contained in the file as defined  in Table 38 - File types.                                                   |

<!-- image -->

TABLE 36 - INCOMING FILE NAMING CONVENTIONS

| Recipient                                                                                                           | A 5-character attribute. This attribute identifies the receiver of the file which is the ESMA  System and shall be set to  FIRDS.   |
|---------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| A 5-letter character code which is reused by the system when generating a feedback                                  | Key1                                                                                                                                |
|                                                                                                                     | If not needed by the submitting entity, any 5-letter character code can be used.                                                    |
| Key2  A unique 6-digit number completed with zeros to fit to 6 characters (e.g. 000157). It                         |                                                                                                                                     |
| A 2-digit attribute. It is the year when the file has been generated. This allows for easy  archiving of the files. | Year                                                                                                                                |
| A timestamp in YYYYMMDDHHMMSS format (24h format, UTC Time) generated by  HUBEX/HUBDE System.                       | Timestamp                                                                                                                           |

A file generated by the ESMA System (feedback file, consolidated files, or reminder files), and which has to be routed to the appropriate recipient via HUBEX/HUBDE System as per Table 38 - File types, must comply with the following attributes:

## &lt;Sender&gt;\_&lt;FileType&gt;\_&lt;Recipient&gt;\_&lt;Key1&gt;-&lt;Key2&gt;\_&lt;Year&gt;.xml

The ESMA System archives the XML file into a ZIP file and uploads onto the HUBEX/HUBDE System in the outgoing folder dedicated to the ESMA System. Its name must comply with the following naming convention:

## &lt;Sender&gt;\_&lt;FileType&gt;\_&lt;Recipient&gt;\_&lt;Key1&gt;-&lt;Key2&gt;\_&lt;Year&gt;.zip

As  soon  as  HUBEX/HUBDE  routes  the  file  to  the  recipient,  it  suffixes  it  with  a  timestamp  in YYYYMMDDHHMMSS format (24h format, UTC Time). Therefore, as soon as the file is placed in the appropriate folder dedicated to the ESMA System (as per HUBEX/HUDE folder in Table 38 - File types), the naming convention for the file becomes:

## &lt;Sender&gt;\_&lt;FileType&gt;\_&lt;Recipient&gt;\_&lt;Key1&gt;-&lt;Key2&gt;\_&lt;Year&gt;\_Timestamp.zip

The following table provides description of the components of the file name:

| Component                                                                                                            | Definition               |
|----------------------------------------------------------------------------------------------------------------------|--------------------------|
| Sender                                                                                                               | A 5-character attribute. |
| A 6-character attribute identifying the type of information contained in the file as  defined Table 38 - File types. | FileType                 |
| A 5-character attribute depending on the Category in Table 38 - File types.                                          | Recipient                |

<!-- image -->

TABLE 37 - DISTRIBUTED FILE NAMING CONVENTIONS

|           | 2)  In case the FileType is a consolidated file:  • PUBLI                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Key1      | A 5(a) identifier depending on the category as defined in Table 38 - File types.                                                                                                                                                                                                                                                                                                                                                                                                                               |
|           | 1)  In case of a feedback file:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|           | • Key1 stated in the name of the original file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|           | 2)  In case of split full file, delta  file, a nnZmm [2(n)Z2(n)] identifier where                                                                                                                                                                                                                                                                                                                                                                                                                              |
|           | ➔ nn (running from 01 to 99) indicates the number of the split file composing the  full or the invalid records file;                                                                                                                                                                                                                                                                                                                                                                                           |
|           | ➔ composing the full or the delta records file. 29                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|           | mm  (running  from  01  to  99)  indicates  the  maximum  number  of  split  files                                                                                                                                                                                                                                                                                                                                                                                                                             |
|           | 3)  In case of invalid records file: generated by the system and completed with zeros  to fit to 5 characters (e.g. 00003). The number is incremented each time the ESMA  System initiates a new split file.                                                                                                                                                                                                                                                                                                   |
|           | 4)  In case of LEI Full file (v3.1) or MIC full file (v2.0):                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|           | ➔ NEWFL                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|           | 5)  For any other type of consolidated files:                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|           | 6)  In case of reminder file:  T&lt;MIC code of a TV&gt; or S&lt;MIC code of a SI&gt; from which a file, or an  ISIN  is                                                                                                                                                                                                                                                                                                                                                                                                   |
|           | missing.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Key2      | A 6(n) depending on the category of file:                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|           | 1)  In case of a feedback file:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|           | • Key2 stated in the name of the original file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|           | 2) In case of invalid records file: 000000.  3) Otherwise, generated by the system and completed with zeros to fit to 6 characters  (e.g. 000157). It does not depend on the file type, recipient or any other characteristic.  It can start again at 000000 after 999999. This number is incremented each time ESMA  system  generates  a  new  consolidated  file  (if  the  same  file  is  sent  again,  a  new  SequenceNumber must be provided).  It  identifies  uniquely  a  file.  Should  a  problem |
|           | occur in the sending of the file, the Key1-Key2 will help identifying the file.                                                                                                                                                                                                                                                                                                                                                                                                                                |
|           | For split Full and Delta files, the Key2 sequence number should stay the same across  all constituents of the Full or Delta file (nnZmm).                                                                                                                                                                                                                                                                                                                                                                      |
| Year      | A  2  digit  attribute.  It  is  the  year  when  the  file  has  been  sent.  This  allows  for  easy  archiving of the files.                                                                                                                                                                                                                                                                                                                                                                                |
| Timestamp | A timestamp in YYYYMMDDHHMMSS format (24h format, UTC Time).                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

<!-- image -->

The following types of files are allowed for this system:

TABLE 38 - FILE TYPES

| File Type code                                                                     | Data               | Category            | HUBEX/HUDE folder   |
|------------------------------------------------------------------------------------|--------------------|---------------------|---------------------|
| File that contains instrument  reference data to be submitted to the  ESMA System. | Incoming file      | Incoming            | DATINS              |
| Feedback files generated by HUBEX  on every file submitted to HUBEX.               | Feedback  file     | Outgoing            | FDBHUB              |
| File that contains cancelled  instrument data to be submitted to  the ESMA System. | Incoming file      | Incoming            | CANINS              |
| Feedback files generated by the  ESMA System on a DATINS and  CANNIS file.         | Feedback  file     | Outgoing            | FDBINS              |
| Feedback files generated by the  ESMA System on a CANINS file.                     | Feedback  file     | Outgoing            | FDBCAN              |
| File that contains non-working days'  data to be submitted to the ESMA  System.    | Incoming file      | Incoming            | DATNWD              |
| Feedback file generated by the  ESMA System on a DATNWD file.                      | Feedback  file     | Outgoing            | FDBNWD              |
| Full File                                                                          | Consolidated  file | Public (HUBEX only) | FULINS              |
| Delta File                                                                         | Consolidated  file | Public (HUBEX only) | DLTINS              |
| Invalid records file                                                               | Consolidated  file | Public (HUBEX only) | INVINS              |
| Cancelled records file                                                             | Consolidated  file | Public (HUBEX only) | FULCAN              |
| Full Currencies ISO data file                                                      | Consolidated  file | Public (HUBEX only) | DATCUR              |
| Full Country ISO data file                                                         | Consolidated  file | Public (HUBEX only) | DATCNY              |
| Full CFI ISO data file                                                             | Consolidated  file | Public (HUBEX only) | DATCFI              |
| GLEIF daily LEI data file                                                          | Consolidated  file | Public (HUBEX only) | DATLEI              |
| Full MIC ISO data file                                                             | Consolidated  file | Public (HUBEX only) | DATMIC              |
| Expression of interest on indices Full  file                                       | Consolidated  file | Public (HUBEX only) | DATIDX              |
| Reminder file                                                                      | Reminder  file     | Outgoing            | RMDINS              |

<!-- image -->

## 13 Annex 3 Business Application header

The Business Application Header (BAH) is a header that has been defined by the ISO 20022 community that can form part of an ISO 20022 business message. Specifically, the BAH is an ISO 20022 message definition (head.001.001.01) which can be combined with any other ISO 20022 message definition to form a business message.

It  gathers together, in one place, data about the message, such as which organisation has sent the business  message,  which  organisation  should  be  receiving  it,  the  identity  of  the  message  itself,  a reference for the message and so on.

The purpose of the BAH is to provide a consistent and predictable way for this data to be conveyed with the message, regardless of implementation factors such as the choice of network.

The use of the BAH in MiFIR messages is mandatory.

The below table presents the  list of mandatory elements of the BAH that should be included in all messages and how they should be populated:

<!-- image -->

| Element                       | Description                                                                                                                                                                                                                                                                                                                                                                                                      | Usage in reporting by  submitting entities                                                                                                                                                                                                                                    | Usage in sending to  submitting entities by                                                                                                           |
|-------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
|                               | ESMA  Identifies  the  Organisation  sending the  message  OrganisationIdentification/Iden tification/OrganisationIdentifica tion/Other/Identification:  MIC  code of the submitting entity in  case  it  is  a  TV/SI,  the  5-letter  HUB  sender  code  of  the  APA/CTP in the sender part of  the  filename    in  case  it  is  an  APA/CTP, or Country code of  the submitting entity in case it is  'EU' | OrganisationIdentification/Ide ntification/OrganisationIdentif ication/Other/Identification:                                                                                                                                                                                  | From                                                                                                                                                  |
|                               | Identifies  the  Organisation  receiving the message                                                                                                                                                                                                                                                                                                                                                             | ntification/OrganisationIdentif ication/Other/Identification:  the same as 'From' of the  original file.                                                                                                                                                                      | OrganisationIdentification/Iden tification/OrganisationIdentifica tion/Other/Identification: 'EU'  For feedback file:  OrganisationIdentification/Ide |
| Business  Message  Identifier | Unambiguously  identifies  the  Business  Message  to  the  MessagingEndpoint  that  has  created the Business Message.  Rules  identifier  be  national level.                                                                                                                                                                                                                                                  | this  specified  at  It  should  be  filled  in  with  the  {key1}-{key2}  in  the  name  of  the ZIP file to be sent (Please  refer  to  naming  convention  as  It  should be filled  in  with the  the ZIP file to be sent   (Please  refer  to  File naming conventions). | for  populating  to  {Key1}-{Key2} in the name of  naming  convention as per Annex 2:                                                                 |

<!-- image -->

|                                                                                                                 |                                                                                                                                                                                                      | the                                                                                                                                                                               | ISO  20022  Definition  generated  message  as  per  Table  11   |
|-----------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| Identification of the type of the  message (ISO 20022  message identifier).                                     | ISO 20022 Message Definition  Identifier  of  the  submitted  message  as  per  Table  11  -  Instrument  reference  data  message table and Table 12 -  Additional  reference  data  message table. | Message  Identifier  of  -  Instrument  reference  data  message  table  and  Table  12  -  Additional  reference  data                                                           | Message  Definition  Identifier                                  |
| Date  and  time  when  Business  Message  created                                                               | Date  and  time  in  ISO  8601  format.                                                                                                                                                              | Date  and  time  in  ISO  8601  format.                                                                                                                                           | Creation  Date  this  was                                        |
| Specifies  the  Business  Application  Header  of  Business  Message  to  which  this Business Message relates. | Unused                                                                                                                                                                                               | In  the  case  of  status  advice  message (feedback file), the  copy  of  the  BAH  of  the  referred  data  message  (it  allows  to  link  the  status  advice  and  the  data | Related  the                                                     |

TABLE 39 - FIELDS OF BUSINESS APPLICATION HEADER

The data files received from submitting entities  (incoming file as per Table 38 - File types) or generated by the system except LEI full file (reminder and consolidated file as per Table 38 - File types) encapsulate the Business Application Header (BAH), Message Header (MHD) and Business Fields (BF):

- · Business Application Header shall be encapsulated under 'BizData/Hdr'
- · Message Header shall be encapsulated under 'BizData/Pyld'
- · Business Fields shall be encapsulated under 'BizData/Pyld'

In addition, the following namespaces need to be defined when creating the XML message:

&lt;BizData xmlns="urn:iso:std:iso:20022:tech:xsd:head.003.001.01"

xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"

xsi:schemaLocation="urn:iso:std:iso:20022:tech:xsd:head.003.001.01 head.003.001.01.xsd"

&lt;Document xmlns="urn:iso:std:iso:20022:tech:xsd:{ISO 20022 Base Message Identifier}" xmlns:xsi="

http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:iso:std:iso:20022:tech:xsd:{ISO 20022

Base Message Identifier} {ISO 20022 Derived Message Identifier}}"&gt; as per Table 11 - Instrument reference data message table and Table 12 - Additional reference data message table.

The example below is given for a DATINS incoming message:

&lt;Document xmlns="urn:iso:std:iso:20022:tech:xsd:DRAFT13\_DATINS\_1.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:iso:std:iso:20022:tech:xsd:DRAFT13auth.017.001.01 DRAFT13auth.017.001.01\_ESMAUG\_DATINS\_1.0.0.xsd"&gt;

<!-- image -->

## 14 Annex 4 Reporting calendar

## 14.1  Reporting Calendar Table

| Mandatory  /Optional/Forbidden   | Data field description   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Field Name  Data field  Values  Source                                     |
|----------------------------------|--------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| M                                | 5(x)                     | Identifies  the  entity  to  which  refers  the  open/closed calendar days.  •  TV/SI: The segment MIC code of the TV/SI  where available otherwise operating MIC.  •  NCA: The ISO country code of the NCA.   •  ESMA  •  APA: APA identifier maintained by ESMA  •  CTP: CTP identifier maintained by ESMA  Updated  by  ESMA  System  on  NWD  file  submission  for  TV/SI,  NCA, APA, CTP.  Updated by the ESMA  IT  business  Administrator  for  ESMA. | Entity  Identifier  NCA+&lt;CountryCode&gt;  ESMA  T&lt;MIC&gt;  A&lt;APA Id&gt;  C&lt; CTP Id&gt; |
| M                                | Date YYYYMMDD            | Calendar date  NCA, APA, CTP.  Updated by the ESMA                                                                                                                                                                                                                                                                                                                                                                                                            | Date                                                                       |
| M                                | TRUE/FALSE               | Indicates  whether  the  Entity  date  is  open  (TRUE) or closed (FALSE) on that day   System  on  NWD  file  submission  for  TV/SI,  NCA, APA, CTP.  Updated by the ESMA  IT  business                                                                                                                                                                                                                                                                     | Open  TRUE  /FALSE                                                         |

TABLE 40 - REPORTING CALENDAR TABLE

<!-- image -->

## 14.2  TV/SI reporting table

| Field Name                                      | M/O   | Data field  description   | Data  field   | ISO   | Description                                                                                                                                                                                                                                         | Source                 |
|-------------------------------------------------|-------|---------------------------|---------------|-------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------|
| MIC [PK]                                        | M     | 4(a)                      |               | 10383 | The segment MIC code of the TV/SI where  available otherwise operating MIC.                                                                                                                                                                         | Updated by ESMA System |
| Date [PK]                                       | M     | Date  YYYYMMDD            |               |       | Calendar date when the data was reported  (in case of inconsistencies) or expected (in  case of missing ISIN)                                                                                                                                       | Updated by ESMA System |
| Unreported  ISIN List                           | O     |                           |               |       | The list of ISIN(s) which were expected but  not reported on that Date by the TV/SI                                                                                                                                                                 | Updated by ESMA System |
| Inconsistent  ISIN List and  associated  fields | O     |                           |               |       | The  list  of  ISIN(s)  which  are  inconsistent  at  the post-processing phase of reporting period  date.  For  each  ISIN,  the  number  ID  of  inconsistent  fields  in  RTS23  fields  table  as  described in section 6.9 RTS23 Fields table. | Updated by ESMA System |

TABLE 41 - TV/SI REPORTING TABLE

<!-- image -->

## 15 Annex 5 ISO reference data tables

## 15.1  Country reference data table

| Field Name        | M/O   | Data field  description      | Data field  Values   | ISO       | Description                                           | Source                                          |
|-------------------|-------|------------------------------|----------------------|-----------|-------------------------------------------------------|-------------------------------------------------|
| CountryCode       | M     | 2(a)                         |                      | ISO  3166 | The  2-character  ISO  Country  Code  identifier.     | • data provider  • ESMA manual update           |
| CountryName       | M     | 70(z)                        |                      |           | The  ISO  description  of  the  country  name.        | • data provider  • ESMA manual update           |
| EEACountryFlag    | M     | TRUEFALSE  Indicator         | TRUE/FALSE           |           | Flag  which  indicates  whether  the  Country is EEA. | • ESMA manual update   • Default value is FALSE |
| ValidityStartDate | M     | Date  YYYYMMDD               |                      |           | Date  at  which  the  record  becomes  valid          | Generated by the ESMA System                    |
| ValidityEndDate   | O     | Date  YYYYMMDD               |                      |           | Date of which the records ends to be  valid           | Generated by the ESMA System                    |
| LastUpdatedDate   | M     | DateTime  YYYYMMDD  HH:MI:SS |                      |           | Date  at  which  the  record  was  last  updated      | Generated by the ESMA System                    |

<!-- image -->

Officially\_Assign ed

M

TRUEFALSE Indicator

TRUE/FALSE

Flag which  indicates whether  the Country's  ISO  code  is  an  officially assigned ISO country code.

• ESMA manual update

Default value is TRUE

TABLE 42 - COUNTRY REFERENCE DATA TABLE

## 15.2  Currency reference data table

| Field Name           | M/O                  | Data field  description  Data field  Values   | ISO                                        | Description                                                                                                                                                                   | Source   | Source                             |     |
|----------------------|----------------------|-----------------------------------------------|--------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|------------------------------------|-----|
| CurrencyCode  M      |                      | 3(a)                                          | ISO  4217                                  | This mandatory field represents the 3-character ISO currency  code.                                                                                                           | • •      | data provider  ESMA manual  update |     |
| CurrencyName         | M                    | 70(z)                                         | ISO  4217                                  | The ISO currency name.                                                                                                                                                        | • •      | data provider  ESMA manual  update |     |
| FractionalDigit      | M                    | 1(n)                                          |                                            | Number of decimals to be use                                                                                                                                                  | • •      | data provider  ESMA manual  update |     |
| CountryCode          | M                    | 2(a)                                          | ISO  3166                                  | The 2-character ISO Country Code of the currency.   In case the currency is not country dependent (CountryCode is not  provided in the ISO file), default value 'XX' is used. | • •      | data provider  ESMA manual  update |     |
| CountryName          | M                    | 70(z)                                         | ISO  3166                                  | The ISO country name of the currency.  In case the currency is not country dependent (CountryName is not  provided in the ISO file), default value 'XX' is used.              | • •      | data provider  ESMA manual update  |     |
| PreEuroFlag  M       | TRUEFALSE  Indicator | TRUE/FALSE                                    |                                            | Flag which indicates whether the Currency is Pre-Euro                                                                                                                         | •        | ESMA manual update                 |     |
| ValidityStartDate  M | Date YYYYMMDD        |                                               | Date at which the record becomes valid     |                                                                                                                                                                               | •        | Generated  by  the  ESMA System    |     |
| ValidityEndDate  O   | Date YYYYMMDD        |                                               | Date of which the records ends to be valid |                                                                                                                                                                               | •        | Generated  by  the  ESMA System    |     |
| LastUpdatedDate      | M                    | DateTime                                      | Date at which the record was last updated  | • Generated                                                                                                                                                                   |          | by  ESMA System                    | the |

<!-- image -->

YYYYMMDD HH:MI:SS

TABLE 43 - CURRENCY REFERENCE DATA TABLE

## 15.3 MIC reference data table

| Field Name           | M/O    | Data field  description   | Data field value   | Description                                                                                                                                                                                                                                 | Source              |
|----------------------|--------|---------------------------|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------|
| MICCode              | M      | 4(a)                      |                    | The ISO 10383 Market Identifier Code                                                                                                                                                                                                        | Data provider       |
| Operating MICCode  M |        | 4(a)                      |                    | An operating MIC identifies the entity  operating  an exchange, trading platform, regulated or non- regulated market, or a trade reporting facility in a  specific country. It is the "parent" MIC as opposed  to the "market segment" MIC. | Data provider       |
| MICType              | M      | 1(a)                      |                    | Identifies  whether  is  a  segment  MIC  or  an  operating MIC                                                                                                                                                                             | Data provider       |
| MarketType  M        | 4(x)   | MLTF  OTFS  SINT          | RMKT               | For MIC operating in a EEA country, the type of  Market  as  identified  in  the  TV/SI  Register  in  ESMA: RM, OTF, MTF or SI.                                                                                                            | TV/SI Registers     |
| InstitutionName  M   | 400(a) |                           |                    | The name or description of the institution, market,  or infrastructure                                                                                                                                                                      | Data provider       |
| Acronym  M           | 35(a)  |                           |                    | Known  acronym  of  the  institution,  market,  or  infrastructure                                                                                                                                                                          | Data provider       |
| City  M              | 35(a)  |                           |                    | City  where  the  institution,  market,  or  infrastructure operates                                                                                                                                                                        | Data provider       |
| ISOCountry Code  M   | 2(a)   |                           |                    | The ISO 3166 2-character country code where  the institution, market, or infrastructure operates                                                                                                                                            | Data provider       |
| ISOCountryName  M    | 70(a)  |                           |                    | The country name where the institution, market,  or infrastructure operates  data table                                                                                                                                                     | Countries reference |

<!-- image -->

| AuthorityName   | O              | 30(x)                     |     |                                                                                                                     | The name of the NCA in the NCA reference data  table of the NCA country associated to the MIC in  the trading venue mapping table.   | TV/SI Registers  NCA reference data  table   |
|-----------------|----------------|---------------------------|-----|---------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------|
| O               | 20(a)          |                           | LEI | The 20-digit Legal Entity Identifier code                                                                           | Data provider                                                                                                                        |                                              |
| O               | 200(x)         |                           |     | The name of the Legal Entity associated to the  MIC                                                                 | Data provider                                                                                                                        | Legal Entity Name                            |
| O               | 200(x)         |                           |     | Website  URL  of  the  institution,  market,  or  infrastructure                                                    | Data provider                                                                                                                        | Website                                      |
| M               | Date  YYYYMMDD |                           |     | Date (Month and Year) when the MIC was last  modified                                                               | Data provider                                                                                                                        | StatusDate                                   |
| M               | Date  YYYYMMDD |                           |     | First date of the MIC issuance                                                                                      | Data provider                                                                                                                        | CreationDate                                 |
| O               | Date  YYYYMMDD |                           |     | Date at which the record was last validated                                                                         | Data provider                                                                                                                        | Last Validation Month                        |
| O               | Date  YYYYMMDD |                           |     | Date at which the MIC expires                                                                                       | Data provider                                                                                                                        | Expiry Date                                  |
| O               | 10(x)          | ACTIVE  MODIFIED  DELETED |     | The latest status of the MIC record as provided  by SWIFT                                                           | Data provider                                                                                                                        | Latest Status                                |
| O               | 400(x)         |                           |     | Any  additional  information  worth  mentioning  to  help users identify the exchange or understand a  modification | Data provider                                                                                                                        | Notes                                        |
| M               | Date YYYYMMDD  |                           |     | Date at which the record becomes valid                                                                              | Generated by the  ESMA System                                                                                                        | ValidityStartDate                            |

<!-- image -->

| ValidityEndDate  O   | Date YYYYMMDD                | Date at which the record ends to be valid   | Generated by the  ESMA System   |                 |
|----------------------|------------------------------|---------------------------------------------|---------------------------------|-----------------|
| M                    | DateTime  YYYYMMDD  HH:MI:SS | Date at which the record was last updated   | Generated by the  ESMA System   | LastUpdatedDate |

TABLE 44 - MIC REFERENCE DATA TABLE

## 15.4 List of valid CFI codes table

| Field Name        | M/O   | Data field description   | Data field description  Values   | ISO   | Description                                 | Source                                               |
|-------------------|-------|--------------------------|----------------------------------|-------|---------------------------------------------|------------------------------------------------------|
| CFI code          | M     | 6(a)                     |                                  | 10962 | The CFI Code                                | Updated manually by the  ESMA Business Administrator |
| ValidityStartDate | M     | Date   YYYYMMDD          |                                  |       | Date at which the record  becomes valid     | Generated by the ESMA  System                        |
| ValidityEndDate   | O     | Date   YYYYMMDD          |                                  |       | Date of which the records  ends to be valid | Generated by the ESMA  System                        |

TABLE 45 - LIST OF VALID CFI CODES TABLE

<!-- image -->

## 15.5  LEI reference data table

That table contains LEI records, including historical records, composed of all LEI attributes described in http://www.leiroc.org/publications/gls/lou\_20140620.pdf. Only the fields relevant for the COU files will be retained. In addition, for each LEI record, two technical attributes are to be appended (in order to manage history):

| Field Name  M/O   | Data field description   | Data field description  Values   | ISO                                         | Description                   | Source            |
|-------------------|--------------------------|----------------------------------|---------------------------------------------|-------------------------------|-------------------|
| M                 | Date   YYYYMMDD          |                                  | Date at which the record becomes  valid     | Generated by the ESMA  System | ValidityStartDate |
| O                 | Date   YYYYMMDD          |                                  | Date of which the records ends to  be valid | Generated by the ESMA  System | ValidityEndDate   |

TABLE 46 - TECHNICAL ATTRIBUTES OF LEI REFERENCE DATA TABLE

<!-- image -->

## 16 Annex 6 Scenarios of Instrument reference data reporting and distribution

The system shall ensure compliance with the following scenarios.

## 16.1  Modified instrument reported on time

| 08/07/2015 |09/07/2015 10/07/2015   |    |    |     | 12/07/2015                                          |
|-------------------------------------|----|----|-----|-----------------------------------------------------|
| 1                                   |    |    | 3   | Version of the instrument active on                 |
| 1                                   | 1  | 3  | 3   | Version of the instrument reported by the TVto ESMA |
|                                     | 1  | 1  | 2 3 | Record published in the full file                   |
|                                     | 1  |    | 2 3 | Record published in the delta file                  |
|                                     |    | 1  | 2   | Record published in the invalid records file        |

<!-- image -->

## Content of full records file

| date time   | ISIN   | MIC   | ESMA Reception date time   |   Version ofthe record | RTS23 Field 11   | RTS23 - Field 23 (Termination date time]   | Valid From Date   | Valid To Date   |
|-------------|--------|-------|----------------------------|------------------------|------------------|--------------------------------------------|-------------------|-----------------|
| 09/07/2015  |        |       | XPAR | 08/07/2015 17.10.00 |                      1 | 08/07/2015       | NULL                                       | 09/07/2015        | NULL            |
| 10/07/2015  |        |       | XPAR | 09/07/2015 17.20.00 |                      1 | 08/07/2015       | NULL                                       | 09/07/2015        | NULL            |
| 11/07/2015  |        | XPAR  | 10/07/2015 17.30.00        |                      2 | 08/07/2015       | NULL                                       | 11/07/2015        | NULL            |
| 12/07/2015  |        |       | XPAR | 11/07/2015 17.40.00 |                      3 | 08/07/2015       | NULL                                       | 12/07/2015        | NULL            |

## Content of delta records file

| System date time   | ISIN   | MIC   | ESMA Reception date time   | Version of the record   | RTS23 Field 11   | RTS23 - Field 23 (Termination date time)   | Valid From Date   | Valid To Date   |
|--------------------|--------|-------|----------------------------|-------------------------|------------------|--------------------------------------------|-------------------|-----------------|
| 09/07/2015         |        | XPAR  | 08/07/2015 17.10.00        | 1                       | 08/07/2015       | NULL                                       | 09/07/2015        | NULL            |
| 10/07/2015         |        |       |                            |                         |                  |                                            |                   |                 |
| 11/07/2015         |        | XPAR  | 10/07/2015 17.30.00        | 2                       | 08/07/2015       | NULL                                       | 11/07/2015        | NULL            |
| 12/07/2015         |        | XPAR  | 11/07/2015 17.40.00        | 3                       | 08/07/2015       | NULL                                       | 12/07/2015        | NULL            |

## Content of invalid records file

| System date time   | ISIN   | MIC                        | ESMA Reception date time   | Version of the record   | Field 11   | RTS23 - Field 23 (Termination date time)   | Valid From Date         | Valid To Date   |
|--------------------|--------|----------------------------|----------------------------|-------------------------|------------|--------------------------------------------|-------------------------|-----------------|
| 09/07/2015         |        |                            |                            |                         |            |                                            |                         |                 |
| 10/07/2015         |        |                            |                            |                         |            |                                            |                         |                 |
| 11/07/2015         |        | XPAR                       | 10/07/2015 17.30.00 1      |                         | 08/07/2015 | NULL                                       | 09/07/2015              | 10/07/2015      |
| 12/07/2015         |        | XPAR | 11/07/2015 17.40.00 |                            | 2                       | 08/07/2015 | NULL                                       | 11/07/2015 | 12/07/2015 |                 |

FIGURE 17 - MODIFICATION REPORTED ON-TIME

<!-- image -->

## 16.2   Modified instrument reported late

| Modified instrument reported late   | Modified instrument reported late   | Modified instrument reported late   | Modified instrument reported late   | Modified instrument reported late   | Modified instrument reported late   | Modified instrument reported late            |
|-------------------------------------|-------------------------------------|-------------------------------------|-------------------------------------|-------------------------------------|-------------------------------------|----------------------------------------------|
|                                     | 08/07/2015                          |                                     | 10/07/2015                          | 11/07/2015                          |                                     |                                              |
| 1                                   |                                     | 1                                   | 3                                   | 3                                   | 3                                   | Version of the instrument active on TV       |
| 1                                   |                                     |                                     |                                     | 1,2,3 3                             |                                     | Version of the instrument                    |
| 1                                   | 1                                   | 1                                   | 1                                   | 3                                   | 3                                   |                                              |
|                                     |                                     |                                     |                                     |                                     | 3                                   | Record published in the delta file           |
|                                     |                                     |                                     |                                     | 1                                   | 3                                   | Record published in the invalid records file |

<!-- image -->

## Content of full records file

| System date time   | ISIN         | MIC   | ESMA Reception date time   |   Version ofthe record | RTS23 Field 11   | RTS23 (Termination date time)   | Valid From Date   | Valid To Date   |
|--------------------|--------------|-------|----------------------------|------------------------|------------------|---------------------------------|-------------------|-----------------|
| 09/07/2015         |              | XPAR  | 08/07/2015 17.10.00        |                      1 | 03/07/2015       | NULL                            | 09/07/2015        | NULL            |
| 10/07/2015         | FR0000035263 | XPAR  | 08/07/2015 17.10.00        |                      1 | 03/07/2015       | NULL                            | 09/07/2015        | NULL            |
| 11/07/2015         |              | XPAR  | 08/07/2015 17.10.00        |                      1 | 03/07/2015       | NULL                            | 09/07/2015        | NULL            |
| 12/07/2015         | FR0000035263 | XPAR  | 11/07/2015 17.40.00        |                      3 | 03/07/2015       | NULL                            | 12/07/2015        | NULL            |
| 13/07/2015         |              | XPAR  | 12/07/2015 17.50.00        |                      3 | 03/07/2015       | NULL                            | 12/07/2015        | NULL            |

## Content of delta records file

| System date time   | ISIN                         | MIC                          | ESMA Reception date time     | Version ofthe record         | RTS23 Field 11               | RTS23 Field 23 (Termination   | Valid From Date              | Valid To Date                |
|--------------------|------------------------------|------------------------------|------------------------------|------------------------------|------------------------------|-------------------------------|------------------------------|------------------------------|
| 09/07/2015         | FR0000035263                 | XPAR                         | 08/07/2015 17.10.00          | 1                            | 03/07/2015                   | NULL                          | 09/07/2015                   | NULL                         |
| 10/07/2015         | No reference to FR0000035263 | No reference to FR0000035263 | No reference to FR0000035263 | No reference to FR0000035263 | No reference to FR0000035263 | No reference to FR0000035263  | No reference to FR0000035263 | No reference to FR0000035263 |
| 11/07/2015         | No reference to FR0000035263 | No reference to FR0000035263 | No reference to FR0000035263 | No reference to FR0000035263 | No reference to FR0000035263 | No reference to FR0000035263  | No reference to FR0000035263 | No reference to FR0000035263 |
| 12/07/2015         | FR0000035263                 | XPAR                         | 11/07/2015 17.40.00          | 3                            | 03/07/2015                   | NULL                          | 12/07/2015                   | NULL                         |
| 13/07/2015         | No reference to              | No reference to              | No reference to              | No reference to              | No reference to              | No reference to               | No reference to              | No reference to              |

## Content of invalid records file

| System date time   | ISIN                         | MIC                          | ESMIA Reception date time    | Version ofthe record         | RTS23 Field 11               | RTS23 Field 23 Valid From (Termination Date date time]   | Valid To Date                |
|--------------------|------------------------------|------------------------------|------------------------------|------------------------------|------------------------------|----------------------------------------------------------|------------------------------|
| 09/07/2015         | No reference to FR0000035263 | No reference to FR0000035263 | No reference to FR0000035263 | No reference to FR0000035263 | No reference to FR0000035263 | No reference to FR0000035263                             | No reference to FR0000035263 |
| 10/07/2015         |                              |                              |                              |                              |                              |                                                          |                              |
| 11/07/2015         | No reference to FR0000035263 | No reference to FR0000035263 | No reference to FR0000035263 | No reference to FR0000035263 | No reference to FR0000035263 | No reference to FR0000035263                             | No reference to FR0000035263 |
| 12/07/2015         |                              | XPAR                         | 08/07/2015 17.10.00 1        |                              | 03/07/2015                   | NULL 09/07 /2015                                         | 11/07 /2015                  |
| 13/07/2015         | No reference to FR0000035263 | No reference to FR0000035263 | No reference to FR0000035263 | No reference to FR0000035263 | No reference to FR0000035263 | No reference to FR0000035263                             | No reference to FR0000035263 |

FIGURE 18 - MODIFICATION REPORTED LATE

<!-- image -->

## 16.3  Terminated instrument reported on time

| Terminoted instrument reported on time   | Terminoted instrument reported on time   | Terminoted instrument reported on time   | Terminoted instrument reported on time   | Terminoted instrument reported on time   | Terminoted instrument reported on time              |
|------------------------------------------|------------------------------------------|------------------------------------------|------------------------------------------|------------------------------------------|-----------------------------------------------------|
| 10/07/2015 11/07/2015                    | 08/07/2015                               |                                          |                                          |                                          |                                                     |
|                                          |                                          | 1                                        | 1                                        |                                          | Version of the instrument active on                 |
| 1                                        | 1                                        | 1                                        | 1                                        |                                          | Version of the instrument reported the TVto ESMA by |
|                                          | 1                                        |                                          | 1                                        |                                          |                                                     |
|                                          |                                          | 1                                        |                                          | 1                                        |                                                     |
|                                          |                                          |                                          |                                          | 1                                        | Record published in the invalid records file        |

<!-- image -->

## Content of full records file

| System date time   |                 | MIc             | date time            | Version record   | Field 11 for admission date   | Field 23 (Termination date time)   | status          | Date            |
|--------------------|-----------------|-----------------|----------------------|------------------|-------------------------------|------------------------------------|-----------------|-----------------|
| 08/07/2015         | No reference to | No reference to | No reference to      | No reference to  | No reference to               | No reference to                    | No reference to | No reference to |
| 09/07/2015         |                 | XPAR            | 08/07/ 2015 17.10.00 | 1                | 08/07/2015                    | 11/07/2015 14.00.00                | NEWS            | 09/07/2015      |
| 10/07/2015         |                 | XPAR            | 09/07/2015 17.20.00  |                  | 08/07/2015                    | 11/07/2015 14.00.00                | UNCH            | 09/07/2015      |
| 11/07/2015         |                 | XPAR            | 10/07/2015           | 1                | 08/07/2015                    | 11/07/2015 14.00.00                | UNCH            | 09/07/2015      |
| 12/07/2015         |                 | XPAR            | 11/07/2015 17.40.00  | 1                | 08/07/2015                    | 11/07/2015 14.00.00                | UNCH            | 09/07/2015      |
| 13/07/2015         | No reference to | No reference to | No reference to      | No reference to  | No reference to               | No reference to                    | No reference to | No reference to |
| 14/07/2015         |                 |                 |                      |                  |                               |                                    |                 |                 |

## Content of delta records file

| System date time   |      |                     | date time           | Version of the record        | Field 11 (Date Ofrequest for admission (date Of first trade)   | RTs23 Field 23 (Termination date time)   | Status                       | Valid Date                   | Valid To Date                |
|--------------------|------|---------------------|---------------------|------------------------------|----------------------------------------------------------------|------------------------------------------|------------------------------|------------------------------|------------------------------|
| 08/07/2015         |      |                     |                     |                              |                                                                |                                          |                              |                              |                              |
| 09/07/2015         | XPAR |                     | 08/07/2015 17.10.00 | 1                            | 08/07/2015                                                     | 11/07/2015 14.00.00                      | NEWS                         | 09/07/2015                   | NULL                         |
| 10/07/2015         |      |                     |                     | No referenceto               | No referenceto                                                 | No referenceto                           | No referenceto               | No referenceto               | No referenceto               |
| 11/07/2015         |      |                     |                     |                              |                                                                |                                          |                              |                              |                              |
| 12/07/2015         |      |                     |                     | No reference to FR0000035263 | No reference to FR0000035263                                   | No reference to FR0000035263             | No reference to FR0000035263 | No reference to FR0000035263 | No reference to FR0000035263 |
| 13/07/2015         | XPAR | 11/07/2015 17.40.00 |                     |                              | 08/07/2015                                                     | 11/07/2015 14.00.00                      | TERMI                        | 09/07/2015                   | NULL                         |
| 14/07/2015         |      |                     |                     |                              |                                                                |                                          |                              |                              |                              |

## Content ofinvalid records file

| System date time   |                 | ESMIA Reception date time   | Version of the record   | RTS23 Field 11 for   | RTs23 Field 23 (Termination date time)   | Status          | Valid Date   | valid T Date   |
|--------------------|-----------------|-----------------------------|-------------------------|----------------------|------------------------------------------|-----------------|--------------|----------------|
| 08/07/2015         |                 |                             |                         |                      |                                          |                 |              |                |
| 09/07/2015         |                 |                             |                         |                      |                                          |                 |              |                |
| 10/07/2015         |                 |                             |                         |                      |                                          |                 |              |                |
| 11/07/2015         |                 |                             |                         |                      |                                          |                 |              |                |
| 12/07/2015         |                 |                             |                         |                      |                                          |                 |              |                |
| 13/07/2015         | XPAR 11/07/2015 | 17.40.00 1                  |                         | 08/07/2015           | 11/07/2015 14.00.00                      | TERM 09/07/2015 |              |                |
| 14/07/2015         |                 |                             |                         |                      |                                          |                 |              |                |

209 / 216

FIGURE 19 - TERMINATION REPORTED ON-TIME

<!-- image -->

## 16.4  Terminated instrument reported late

## FROOOOO35263(1) is first traded the 09/07 and ceases to be traded the 11/07 on XPAR. Reported only the 13/07.

| 1   | 1   |    |                                              |
|-----|-----|----|----------------------------------------------|
|     |     |    | reported by the\_TVto ESMA                    |
|     |     |    | Record published in the full file            |
|     |     | 1  | Record published in the delta file           |
|     |     | 1  | Record published in the invalid records file |

<!-- image -->

System date time

13/07/2015 17.10.00

System

14/07/2015 02.10.00

15/07/2015 02.10.00

System date time

14/07/2015

first trade)

03/07/2015

03/07/2015

## Content Of full records file

Version of the

record

Field 11 (Date Of request for admission date of first trade)

(Termination date time)

No referenceto FR0000035263

15/07/2015

## Content of delta records file

| Content of delta records file Field 11   | Content of delta records file Field 11   | Content of delta records file Field 11   | Content of delta records file Field 11   | Content of delta records file Field 11   | Content of delta records file Field 11               | Content of delta records file Field 11   | Content of delta records file Field 11   | Content of delta records file Field 11   | Content of delta records file Field 11   |
|------------------------------------------|------------------------------------------|------------------------------------------|------------------------------------------|------------------------------------------|------------------------------------------------------|------------------------------------------|------------------------------------------|------------------------------------------|------------------------------------------|
| System date time                         | ISIN                                     | MIIC                                     | ESMIA Reception date time                | Version of the record                    | (Date of request for admission  date of first trade) | Field 23 (Termination date time)         | Status                                   | Valid From Date                          | Valid To Date                            |
| 14/07/2015                               | XPAR                                     |                                          | 13/07/2015 17.10.00                      |                                          | 03/07/2015                                           | 11/07/2015 14.00.00                      | TERM                                     | 14/07/2015                               | NULL                                     |
| 15/07/2015                               |                                          |                                          |                                          |                                          |                                                      |                                          |                                          |                                          |                                          |

## Content of invalid records file

Version of

ESMIA Reception date time

13/07/2015 17.10.00

RTS23

Field 11

the

Tecord

(Date of request for first trade)

03/07/2015

System date time

14/07/2015

15/07/2015

FR0000035263

ISIN

ISIN

IIC

XPAR

XPAR

XPAR

XPAR

## Received Reference data table

RTS23

ESMIA Reception date time

uhe record

Field 11

(Date of request for first trade)

03/07/2015

## Consistent Reference data table

Version of

Field 11

ESMIA Reception date time

13/07/2015 17.10;00

13/07/2015 17.10,00

ESMA Reception date time

the

RTS23

Field 23

(Termination date time)

11/07/2015 14.00.00

RTS23

(Termination date time)

11/07/2015 14.00.00

11/07/2015 14.00.00

Field 23

(Termination date time)

11/07/2015 14.00.00

Last

Submitted

Yes

Walid From

Date

14/07/2015

14/07/2015

Status

Status

TERM

Walid To

Date

NULL

NULL

Valid From

Date

Valid From

Date

14/07/2015

Valid To

Date

Valid To

NULL

FIGURE 20 - TERMINATION REPORTED LATE

<!-- image -->

## 16.5   Cancelled instrument

## The versions 1c and 2c correspond to the cancelled versions of 1 and 2, respectively

| (08/07/2015 | 09/07/2015 | 10/07/2015   |    |    |    |    |                                                     |
|-----------------------------------------|----|----|----|----|-----------------------------------------------------|
| Ic                                      |    |    |    |    | [Latest version of the instrument on TV             |
| Ic                                      | 2  | Zc |    |    | Version of the instrument reported by the TVto ESMA |
|                                         |    |    |    |    | Record published in the full file                   |
|                                         | Ic |    | 2c |    | Record published in the cancellation full file      |
|                                         | Ic | 2  | 2c | 1  | Record published in the delta file                  |
|                                         | 1  | Ic | 2  |    | Record published in the invalid records file        |

## Received Reference data table

| System date time    | MIC   | ESMA Reception date time   | Version of the record   | Last Submitted   | Status   |
|---------------------|-------|----------------------------|-------------------------|------------------|----------|
| 08/07/2015 17.10.00 | XPAR  | 8/7/2015 17:10             | 1                       | Yes              | R        |
| 09/07/2015 17.10.00 | XPAR  | 9/7/2015 17:10             | Ic                      | Yes              |          |
| 10/07/2015 17.10.00 | XPAR  | 10/7/2015 17:10            | 2                       | Yes              | R        |
| 11/07/2015 17.10.00 | XPAR  | 11/7/2015 17:10            | 2c                      | Yes              |          |

<!-- image -->

## Consistent Reference data table

| System date time    | MIC   | date time       | Version of the record   | Valid From Date   | Valid To Date   | Status   |
|---------------------|-------|-----------------|-------------------------|-------------------|-----------------|----------|
| 09/07/2015 02.10.00 | XPAR  | 8/7/2015 17:10  | 1                       | 09/07/2015        | NULL            | NEWS     |
| 10/07/2015 02.10.00 | XPAR  | 8/7/2015 17:10  | 1                       | 09/07/2015        | 10/07/2015      | NEWS     |
| 10/07/2015 02.10.00 | XPAR  | 9/7/2015 17:10  | Ic                      | 10/07/2015        | NULL            | CANC     |
| 11/07/2015 02.10.00 | XPAR  | 9/7/2015 17:10  | 1c                      | 10/07/2015        | 11/07/2015      | CANC     |
| 11/07/2015 02.10.00 | XPAR  | 10/7/2015 17:10 |                         | 11/07/2015        | NULL            | MODF     |
| 12/07/2015 02.10.00 | XPAR  | 10/7/2015 17:10 | 2                       | 11/07/2015        | 12/07/2015      | MODF     |
| 12/07/2015 02.10.00 | XPAR  | 11/7/2015 17:10 | 2c                      | 12/07/2015        | NULL            | CANC     |

## Content of full canceled records file

| System date time   | ISIN                         | MIIC                         | ESMA Reception date time     | Version of the record        | Valid To Date                | Valid From Date              | Status                       |
|--------------------|------------------------------|------------------------------|------------------------------|------------------------------|------------------------------|------------------------------|------------------------------|
| 08/07/2015         | No reference to FRO000035263 | No reference to FRO000035263 | No reference to FRO000035263 | No reference to FRO000035263 | No reference to FRO000035263 | No reference to FRO000035263 | No reference to FRO000035263 |
| 09/07/2015         | No reference to FRO000035263 | No reference to FRO000035263 | No reference to FRO000035263 | No reference to FRO000035263 | No reference to FRO000035263 | No reference to FRO000035263 | No reference to FRO000035263 |
|                    |                              | XPAR                         | 9/7/2015 17:10               | Ic                           | 10/07/2015                   | NULL                         | CANC                         |
| 11/07/2015         |                              |                              |                              |                              |                              |                              |                              |
| 12/07/2015         |                              | XPAR                         |                              | 2c                           | 12/07/2015                   | NULL                         | CANC                         |
| 13/07/2015         |                              | XPAR                         | 11/7/2015 17:10              | 2c                           | 12/07/2015                   | NULL                         | CANC                         |

<!-- image -->

## Content of full records file

| System date time   | ISIN                         | MIC                          | date time                    | Version of the record        | Status                       | Valid From Date              | Valid To Date                |
|--------------------|------------------------------|------------------------------|------------------------------|------------------------------|------------------------------|------------------------------|------------------------------|
| 08/07/2015         | No reference to FR0000035263 | No reference to FR0000035263 | No reference to FR0000035263 | No reference to FR0000035263 | No reference to FR0000035263 | No reference to FR0000035263 | No reference to FR0000035263 |
| 09/07/2015         |                              | XPAR                         | 8/7/2015 17:10               | 1                            | NEWS                         | 09/07/2015                   | NULL                         |
| 10/07/2015         |                              |                              |                              |                              |                              |                              |                              |
| 11/07/2015         |                              | XPAR                         | 10/7/2015 17.10              | 2                            | MODF                         | 11/07/2015                   | NULL                         |
| 12/07/2015         |                              |                              |                              |                              |                              |                              |                              |
| 13/07/2015         |                              |                              |                              |                              |                              |                              |                              |

## Content of delta records file

| System date time   | ISIN                         | MIC                          | ESMA Reception date time     | Version of the record        | Status                       | Valid From Date              | Valid To Date                |
|--------------------|------------------------------|------------------------------|------------------------------|------------------------------|------------------------------|------------------------------|------------------------------|
| 08/07/2015         | No reference to FRO000035263 | No reference to FRO000035263 | No reference to FRO000035263 | No reference to FRO000035263 | No reference to FRO000035263 | No reference to FRO000035263 | No reference to FRO000035263 |
| 09/07/2015         |                              | XPAR                         | 08/07/2015 17.10.00          | 1                            | NEWS                         | 09/07/2015                   | NULL                         |
| 10/07/2015         | FR000035263                  | XPAR                         | 09/07/2015 17.10.00          | Ic                           | CANC                         | 10/07/2015                   | NULL                         |
| 11/07/2015         |                              | XPAR                         | 10/07/2015 17.10.00          | 2                            | NEWS                         | 11/07/2015                   | NULL                         |
| 12/07/2015         |                              | XPAR                         | 11/07/2015 17.10.00          | 2c                           | CANC                         | 12/07/2015                   | NULL                         |
| 13/07/2015         | No reference to FRO000035263 | No reference to FRO000035263 | No reference to FRO000035263 | No reference to FRO000035263 | No reference to FRO000035263 | No reference to FRO000035263 | No reference to FRO000035263 |

<!-- image -->

## Content of invalid records file

FIGURE 21 - CANCELLATION

| System date time   | ISIN                         | MIC                          | date time                    | Version of the record        | Status                       | Valid From Date              | Date                         |
|--------------------|------------------------------|------------------------------|------------------------------|------------------------------|------------------------------|------------------------------|------------------------------|
| 08/07/2015         |                              |                              |                              |                              |                              |                              |                              |
| 09/07/2015         |                              |                              |                              |                              |                              |                              |                              |
| 1o/07/2015         |                              | XPAR                         | 09/07/2015 17.10.00          | 1                            | NEWS                         | 09/07/2015                   | 10/07/2015                   |
| 11/07/2015         |                              | XPAR                         | 10/07/2015 17.10.00          | Ic                           | CANC                         | 10/07/2015                   | 11/07/2015                   |
| 12/07/2015         |                              | XPAR                         | 11/07/2015 17.10.00          | 2                            | MODF                         | 11/07/2015                   | 12/07/2015                   |
| 13/07/2015         | No reference to FRO00003526} | No reference to FRO00003526} | No reference to FRO00003526} | No reference to FRO00003526} | No reference to FRO00003526} | No reference to FRO00003526} | No reference to FRO00003526} |