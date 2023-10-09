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
     * Adds a HAVING clause to the SQL query with a specified condition.
     * @param {string} condition - The condition for the HAVING clause.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    having(condition: string): Nusql {
        this.query += `HAVING ${condition} `;
        return this;
    }

    /**
     * Adds an INNER JOIN clause to the SQL query with a specified table and join condition.
     * @param {string} table - The table to join.
     * @param {string} condition - The join condition.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    innerJoin(table: string, condition: string): Nusql {
        this.query += `INNER JOIN ${table} ON ${condition} `;
        return this;
    }

    /**
     * Adds a LEFT JOIN clause to the SQL query with a specified table and join condition.
     * @param {string} table - The table to join.
     * @param {string} condition - The join condition.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    leftJoin(table: string, condition: string): Nusql {
        this.query += `LEFT JOIN ${table} ON ${condition} `;
        return this;
    }

    /**
     * Adds a RIGHT JOIN clause to the SQL query with a specified table and join condition.
     * @param {string} table - The table to join.
     * @param {string} condition - The join condition.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    rightJoin(table: string, condition: string): Nusql {
        this.query += `RIGHT JOIN ${table} ON ${condition} `;
        return this;
    }

    /**
     * Adds a FULL OUTER JOIN clause to the SQL query with a specified table and join condition.
     * @param {string} table - The table to join.
     * @param {string} condition - The join condition.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    fullOuterJoin(table: string, condition: string): Nusql {
        this.query += `FULL OUTER JOIN ${table} ON ${condition} `;
        return this;
    }

    /**
     * Adds a UNION clause to the SQL query with the specified subquery.
     * @param {Nusql} query - The subquery to UNION with the main query.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    union(query: Nusql): Nusql {
        this.query += `UNION (${query.build()}) `;
        return this;
    }

    /**
     * Adds an INSERT INTO statement to the SQL query with the specified table and values.
     * @param {string} table - The name of the table to insert into.
     * @param {Record<string, any>} values - An object containing the column-value pairs to insert.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    insertInto(table: string, values: Record<string, any>): Nusql {
        const columns = Object.keys(values).join(', ');
        const placeholders = Object.keys(values).map(() => '?').join(', ');

        this.query += `INSERT INTO ${table} (${columns}) VALUES (${placeholders}) `;
        return this;
    }

    /**
     * Adds an UPDATE statement to the SQL query with the specified table and values.
     * @param {string} table - The name of the table to update.
     * @param {Record<string, any>} values - An object containing the column-value pairs to update.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    update(table: string, values: Record<string, any>): Nusql {
        const columnsToUpdate = Object.keys(values)
            .map(column => `${column} = ?`)
            .join(', ');

        this.query += `UPDATE ${table} SET ${columnsToUpdate} `;
        return this;
    }

    /**
     * Adds a DELETE FROM statement to the SQL query for the specified table.
     * @param {string} table - The name of the table from which to delete rows.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    deleteFrom(table: string): Nusql {
        this.query += `DELETE FROM ${table} `;
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