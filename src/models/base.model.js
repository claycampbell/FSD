class BaseModel {
    constructor(data = {}) {
        this._data = this.validate(data);
    }

    /**
     * Validate data before setting
     * @param {Object} data Data to validate
     * @returns {Object} Validated data
     * @throws {Error} If validation fails
     */
    validate(data) {
        if (this.schema && typeof this.schema === 'function') {
            const validationResult = this.schema(data);
            if (validationResult.error) {
                throw new Error(`Validation error: ${validationResult.error}`);
            }
            return validationResult.value;
        }
        return data;
    }

    /**
     * Get all data
     * @returns {Object} Model data
     */
    getData() {
        return this._data;
    }

    /**
     * Update model data
     * @param {Object} data New data to set
     * @throws {Error} If validation fails
     */
    update(data) {
        this._data = this.validate({ ...this._data, ...data });
    }

    /**
     * Convert model to JSON
     * @returns {Object} JSON representation
     */
    toJSON() {
        return this._data;
    }

    /**
     * Create a new instance from JSON
     * @param {Object} json JSON data
     * @returns {BaseModel} New model instance
     */
    static fromJSON(json) {
        return new this(json);
    }
}

module.exports = BaseModel;