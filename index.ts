class Nusql {
    private query: string;

    constructor() {
        this.query = '';
    }

    /**
     * Specifies the columns to select in the SQL query.
     * @param {string} columns - The columns to select.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    static select(columns: string): Nusql {
        const nusql = new Nusql();
        nusql.query += `SELECT ${columns} `;
        return nusql;
    }

    /**
     * Specifies the table from which to retrieve data in the SQL query.
     * @param {string} table - The table name.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    static from(table: string): Nusql {
        const nusql = new Nusql();
        nusql.query += `FROM ${table} `;
        return nusql;
    }

    /**
     * Adds a WHERE clause to the SQL query to filter results based on a condition.
     * @param {string} condition - The condition to apply in the WHERE clause.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    static where(condition: string): Nusql {
        const nusql = new Nusql();
        nusql.query += `WHERE ${condition} `;
        return nusql;
    }

    /**
     * Specifies the column to use for ordering the result set and the sort direction (ASC or DESC).
     * @param {string} column - The column to use for ordering.
     * @param {'ASC' | 'DESC'} direction - The sort direction (optional, defaults to 'ASC').
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    static orderBy(column: string, direction: 'ASC' | 'DESC' = 'ASC'): Nusql {
        const nusql = new Nusql();
        nusql.query += `ORDER BY ${column} ${direction} `;
        return nusql;
    }
    
    /**
     * Adds a GROUP BY clause to the SQL query to group results by a specified field.
     * @param {string} field - The field to group by.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    groupBy(field: string): Nusql {
        this.query += `GROUP BY ${field} `;
        return this;
    }

    /**
     * Builds and returns the SQL query as a string.
     * @returns {string} - The generated SQL query.
     */
    build(): string {
        return this.query.trim(); // Remove trailing whitespace
    }
}

export default Nusql;
