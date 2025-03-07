# Technical ESMA Business Administrator Tools Development Plan

## Use Cases:
### 1. Setting Termination Dates:
#### Goal:
- Enable administrators to submit termination date requests.
- Prevent conflicts with active instruments.

#### API Endpoints:
- `POST /admin/termination-date`:
  - Accepts instrument termination date requests.
  - Validates conflicts:
    ```javascript
    const validateTerminationDate = (terminationDate, instrument) => {
      if (terminationDate < instrument.activationDate || instrument.isActive) {
        throw new Error("Termination date conflicts detected");
      }
    };
    ```

#### Backend Logic:
- Termination date update workflow:
  ```javascript
  const updateTerminationDate = (instrumentId, terminationDate) => {
    Instrument.update({ id: instrumentId }, { terminationDate });
  };
  ```

---

### 2. Changing RCA_MIC:
#### Goal:
- Allow submission of RCA_MIC assignment changes.

#### Validation Rules:
- Validate RCA_MIC assignments against active codes:
  ```javascript
  const validateRCAMIC = (rcaMic) => {
    if (!RCACodePool.includes(rcaMic)) {
      throw new Error("Invalid RCA_MIC assignment");
    }
  };
  ```

#### API Endpoints:
- `POST /admin/rca-mic`:
  - Accepts updates to the RCA_MIC field for instruments.

---

## User Interface Elements:
### Design:
- **Termination Date Form:**
  - Input field: Termination date (date picker).
  - Dropdown menu: Instrument selection.

- **RCA_MIC Update Form:**
  - Dropdown: Valid MIC codes.
  - Display validation feedback (error outlines).

#### Example UI Code:
```javascript
const renderTerminationForm = () => {
  return `
    <form>
      <label for="instrument">Instrument:</label>
      <select name="instrument">
        <option value="instrument1">Instrument 1</option>
      </select>
      <label for="terminationDate">Termination Date:</label>
      <input type="date" name="terminationDate" />
      <button type="submit">Submit</button>
    </form>`;
};
```

---

## Navigation:
### Workflow:
- Provide admin dashboard:
  - Breadcrumb navigation for switching between Termination Dates and RCA_MIC tools.

---

## Data Validation Rules:
### Pseudocode Implementation:
- Enforce lifecycle compliance:
  ```javascript
  const enforceLifecycleRules = (terminationDate, instrumentCycle) => {
    if (terminationDate < instrumentCycle.startDate || terminationDate > instrumentCycle.endDate) {
      throw new Error("Violation of instrument lifecycle rules");
    }
  };
  ```
- Verify active RCA_MIC codes:
  ```javascript
  const verifyRCAStatus = (rcaMic) => {
    return RCACodePool.find(code => code === rcaMic);
  };
  ```

---

## Tools:
### Frontend:
- Use `React` for dynamic form interactions.
- Use `Material-UI` for component styling.

### Backend:
- Frameworks:
  - Express.js for API handling.
  - Sequelize for database updates.

---

## Integration Pathways:
- API integrations:
  - Termination Date submissions handled via `/termination-date-processing`.
  - RCA_MIC requests fed into `/mic-validation-pipeline`.

---

## Output Feedback:
### Error Logs:
- Return errors via JSON:
  ```json
  {
    "field": "terminationDate",
    "message": "Conflict with instrument activation date"
  }
  ```

---

## Security:
- Implement role-based admin access control:
  ```javascript
  const authorizeAdmin = (userRole) => {
    if (userRole !== "admin") {
      throw new Error("Unauthorized access");
    }
  };