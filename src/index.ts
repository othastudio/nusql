/**
 * The `Nusql` class provides a fluent interface for building SQL Nusql in a structured manner.
 * It allows you to create, modify, and manipulate SQL Nusql easily using method chaining.
 * You can use this class to construct SQL statements for SELECT, INSERT, UPDATE, DELETE, and more.
 *
 * Example Usage:
 * ```javascript
 * const Nusql = new Nusql();
 *
 * Nusql
 *     .select('ProductName, Price')
 *     .from('Products')
 *     .where("Category = 'Electronics'")
 *     .and('Price < 500.00');
 *
 * const sqlQuery = Nusql.build(); // Get the generated SQL query
 * ```
 */

class Nusql {
    private query: string;

    constructor() {
        this.query = '';
    }

    /*********************************************************************************************
      * This functions section contain Data types for different SQL data types, 
      * It allows you to create, modify, and manipulate SQL data types easily using method chaining.
    *********************************************************************************************/

    /**
 * Specifies the CHAR data type with the given size.
 * @param {number} size - The size of the CHAR column.
 * @returns {Nusql} - The Nusql instance for method chaining.
 */
    char(size: number): Nusql {
        this.query += `CHAR(${size}) `;
        return this;
    }

    /**
     * Specifies the VARCHAR data type with the given size.
     * @param {number} size - The size of the VARCHAR column.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    varchar(size: number): Nusql {
        this.query += `VARCHAR(${size}) `;
        return this;
    }

    /**
     * Specifies the TEXT data type.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    text(): Nusql {
        this.query += 'TEXT ';
        return this;
    }

    /**
     * Specifies the NCHAR data type with the given size.
     * @param {number} size - The size of the NCHAR column.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    nchar(size: number): Nusql {
        this.query += `NCHAR(${size}) `;
        return this;
    }

    /**
     * Specifies the NVARCHAR data type with the given size.
     * @param {number} size - The size of the NVARCHAR column.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    nvarchar(size: number): Nusql {
        this.query += `NVARCHAR(${size}) `;
        return this;
    }

    /**
     * Specifies the NTEXT data type.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    ntext(): Nusql {
        this.query += 'NTEXT ';
        return this;
    }

    /**
 * Specifies the BINARY data type with the given size.
 * @param {number} size - The size of the BINARY column.
 * @returns {Nusql} - The Nusql instance for method chaining.
 */
    binary(size: number): Nusql {
        this.query += `BINARY(${size}) `;
        return this;
    }
    /**
 * Specifies the DATE data type.
 * @returns {Nusql} - The Nusql instance for method chaining.
 */
    date(): Nusql {
        this.query += 'DATE ';
        return this;
    }

    /**
     * Specifies the DATETIME data type with fractional seconds precision (fsp).
     * @param {number} fsp - Fractional seconds precision.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    datetime(fsp: number): Nusql {
        this.query += `DATETIME(${fsp}) `;
        return this;
    }

    /**
     * Specifies the TIMESTAMP data type with fractional seconds precision (fsp).
     * @param {number} fsp - Fractional seconds precision.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    timestamp(fsp: number): Nusql {
        this.query += `TIMESTAMP(${fsp}) `;
        return this;
    }

    /**
     * Specifies the TIME data type with fractional seconds precision (fsp).
     * @param {number} fsp - Fractional seconds precision.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    time(fsp: number): Nusql {
        this.query += `TIME(${fsp}) `;
        return this;
    }

    /**
     * Specifies the YEAR data type.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    year(): Nusql {
        this.query += 'YEAR ';
        return this;
    }
    /**
     * Specifies the VARBINARY data type with the given size.
     * @param {number} size - The size of the VARBINARY column.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    varbinary(size: number): Nusql {
        this.query += `VARBINARY(${size}) `;
        return this;
    }

    /**
     * Specifies the BLOB data type with the given size.
     * @param {number} size - The size of the BLOB column.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    blob(size: number): Nusql {
        this.query += `BLOB(${size}) `;
        return this;
    }
    /**
 * Specifies the BIT data type with the given size.
 * @param {number} size - The size of the BIT column.
 * @returns {Nusql} - The Nusql instance for method chaining.
 */
    bit(size: number): Nusql {
        this.query += `BIT(${size}) `;
        return this;
    }

    /**
     * Specifies the TINYINT data type with the given size.
     * @param {number} size - The size of the TINYINT column.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    tinyint(size: number): Nusql {
        this.query += `TINYINT(${size}) `;
        return this;
    }

    /**
     * Specifies the BOOLEAN (BOOL) data type.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    boolean(): Nusql {
        this.query += 'BOOLEAN ';
        return this;
    }

    /**
     * Specifies the SMALLINT data type with the given size.
     * @param {number} size - The size of the SMALLINT column.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    smallint(size: number): Nusql {
        this.query += `SMALLINT(${size}) `;
        return this;
    }

    /**
     * Specifies the MEDIUMINT data type with the given size.
     * @param {number} size - The size of the MEDIUMINT column.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    mediumint(size: number): Nusql {
        this.query += `MEDIUMINT(${size}) `;
        return this;
    }

    /**
     * Specifies the INT data type with the given size.
     * @param {number} size - The size of the INT column.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    int(size: number): Nusql {
        this.query += `INT(${size}) `;
        return this;
    }

    /**
     * Specifies the INTEGER data type with the given size.
     * @param {number} size - The size of the INTEGER column.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    integer(size: number): Nusql {
        this.query += `INTEGER(${size}) `;
        return this;
    }

    /**
     * Specifies the BIGINT data type with the given size.
     * @param {number} size - The size of the BIGINT column.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    bigint(size: number): Nusql {
        this.query += `BIGINT(${size}) `;
        return this;
    }

    /**
     * Specifies the FLOAT data type with the given size and decimal places.
     * @param {number} size - The size of the FLOAT column.
     * @param {number} d - The number of decimal places.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    float(size: number, d: number): Nusql {
        this.query += `FLOAT(${size}, ${d}) `;
        return this;
    }

    /**
     * Specifies the FLOAT data type with the given precision.
     * @param {number} p - The precision of the FLOAT column.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    floatPrecision(p: number): Nusql {
        this.query += `FLOAT(${p}) `;
        return this;
    }

    /**
     * Specifies the DOUBLE data type with the given size and decimal places.
     * @param {number} size - The size of the DOUBLE column.
     * @param {number} d - The number of decimal places.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    double(size: number, d: number): Nusql {
        this.query += `DOUBLE(${size}, ${d}) `;
        return this;
    }

    /**
     * Specifies the DOUBLE PRECISION data type with the given size and decimal places.
     * @param {number} size - The size of the DOUBLE PRECISION column.
     * @param {number} d - The number of decimal places.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    doublePrecision(size: number, d: number): Nusql {
        this.query += `DOUBLE PRECISION(${size}, ${d}) `;
        return this;
    }

    /**
     * Specifies the DECIMAL data type with the given size and decimal places.
     * @param {number} size - The size of the DECIMAL column.
     * @param {number} d - The number of decimal places.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    decimal(size: number, d: number): Nusql {
        this.query += `DECIMAL(${size}, ${d}) `;
        return this;
    }

    /**
     * Specifies the DEC data type with the given size and decimal places.
     * @param {number} size - The size of the DEC column.
     * @param {number} d - The number of decimal places.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    dec(size: number, d: number): Nusql {
        this.query += `DEC(${size}, ${d}) `;
        return this;
    }
    /**
 * Specifies the ENUM data type with the given values.
 * @param {...string} values - The values for the ENUM column.
 * @returns {Nusql} - The Nusql instance for method chaining.
 */
    enum(...values: string[]): Nusql {
        this.query += `ENUM('${values.join("', '")}') `;
        return this;
    }

    /**
     * Specifies the SET data type with the given values.
     * @param {...string} values - The values for the SET column.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    set(...values: string[]): Nusql {
        this.query += `SET('${values.join("', '")}') `;
        return this;
    }

    /**
 * Specifies the GEOMETRY data type.
 * @returns {Nusql} - The Nusql instance for method chaining.
 */
    geometry(): Nusql {
        this.query += 'GEOMETRY ';
        return this;
    }

    /**
     * Specifies the POINT data type.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    point(): Nusql {
        this.query += 'POINT ';
        return this;
    }

    /**
     * Specifies the LINESTRING data type.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    linestring(): Nusql {
        this.query += 'LINESTRING ';
        return this;
    }

    /**
     * Specifies the POLYGON data type.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    polygon(): Nusql {
        this.query += 'POLYGON ';
        return this;
    }

    /**
     * Specifies the MULTIPOINT data type.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    multipoint(): Nusql {
        this.query += 'MULTIPOINT ';
        return this;
    }

    /**
     * Specifies the MULTILINESTRING data type.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    multilinestring(): Nusql {
        this.query += 'MULTILINESTRING ';
        return this;
    }

    /**
     * Specifies the MULTIPOLYGON data type.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    multipolygon(): Nusql {
        this.query += 'MULTIPOLYGON ';
        return this;
    }

    /**
     * Specifies the GEOMETRYCOLLECTION data type.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    geometrycollection(): Nusql {
        this.query += 'GEOMETRYCOLLECTION ';
        return this;
    }

    /**
 * Specifies the JSON data type.
 * @returns {Nusql} - The Nusql instance for method chaining.
 */
    json(): Nusql {
        this.query += 'JSON ';
        return this;
    }

    /**
     * Specifies the JSONB data type.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    jsonb(): Nusql {
        this.query += 'JSONB ';
        return this;
    }
    /**
 * Specifies the XML data type.
 * @returns {Nusql} - The Nusql instance for method chaining.
 */
    xml(): Nusql {
        this.query += 'XML ';
        return this;
    }
    /**
   * Specifies the MEDIUMBLOB data type.
   * @returns {Nusql} - The Nusql instance for method chaining.
   */
    mediumblob(): Nusql {
        this.query += 'MEDIUMBLOB ';
        return this;
    }

    /**
     * Specifies the LONGBLOB data type.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    longblob(): Nusql {
        this.query += 'LONGBLOB ';
        return this;
    }
    /**
 * Specifies the MEDIUMTEXT data type.
 * @returns {Nusql} - The Nusql instance for method chaining.
 */
    mediumtext(): Nusql {
        this.query += 'MEDIUMTEXT ';
        return this;
    }

    /**
     * Specifies the LONGTEXT data type.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    longtext(): Nusql {
        this.query += 'LONGTEXT ';
        return this;
    }
    /**
   * Specifies the NUMERIC data type with the given size and decimal places.
   * @param {number} size - The size of the NUMERIC column.
   * @param {number} decimalPlaces - The number of decimal places.
   * @returns {Nusql} - The Nusql instance for method chaining.
   */
    numeric(size: number, decimalPlaces: number): Nusql {
        this.query += `NUMERIC(${size}, ${decimalPlaces}) `;
        return this;
    }

    /**
     * Specifies the REAL data type.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    real(): Nusql {
        this.query += 'REAL ';
        return this;
    }

    /**
 * Specifies the MONEY data type.
 * @returns {Nusql} - The Nusql instance for method chaining.
 */
    money(): Nusql {
        this.query += 'MONEY ';
        return this;
    }
    /**
   * Specifies the UUID data type.
   * @returns {Nusql} - The Nusql instance for method chaining.
   */
    uuid(): Nusql {
        this.query += 'UUID ';
        return this;
    }
    /**
     * Specifies the MACADDR data type.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    macaddr(): Nusql {
        this.query += 'MACADDR ';
        return this;
    }
    /**
     * Specifies the INET data type.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    inet(): Nusql {
        this.query += 'INET ';
        return this;
    }
    /**
     * Specifies the CIDR data type.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    cidr(): Nusql {
        this.query += 'CIDR ';
        return this;
    }
    /**
     * Specifies the MACADDR8 data type.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    macaddr8(): Nusql {
        this.query += 'MACADDR8 ';
        return this;
    }
    /**
     * Specifies the TSQUERY data type.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    tsquery(): Nusql {
        this.query += 'TSQUERY ';
        return this;
    }
    /**
     * Specifies the TSVECTOR data type.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    tsvector(): Nusql {
        this.query += 'TSVECTOR ';
        return this;
    }
    /**
     * Specifies the GTSVECTOR data type.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    gtsvector(): Nusql {
        this.query += 'GTSVECTOR ';
        return this;
    }



    /*********************************************************************************************
      * This functions section contain functions of queries for different SQL functions and queries, 
      * It allows you to create, modify, and manipulate SQL operations easily using method chaining.
    *********************************************************************************************/

    /**
     * Specifies the columns to select in the SQL query.
     * @param {string} columns - The columns to select.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    select(columns: string): Nusql {
        this.query += `SELECT ${columns} `;
        return this;
    }
    /**
     * Specifies the table from which to retrieve data in the SQL query.
     * @param {string} table - The table name.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    from(table: string): Nusql {
        this.query += `FROM ${table} `;
        return this;
    }

    /**
     * Adds a WHERE clause to the SQL query to filter results based on a condition.
     * @param {string} condition - The condition to apply in the WHERE clause.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    where(condition: string): Nusql {
        this.query += `WHERE ${condition} `;
        return this;
    }

    /**
     * Specifies the column to use for ordering the result set and the sort direction (ASC or DESC).
     * @param {string} column - The column to use for ordering.
     * @param {'ASC' | 'DESC'} direction - The sort direction (optional, defaults to 'ASC').
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    orderBy(column: string, direction: 'ASC' | 'DESC' = 'ASC'): Nusql {
        this.query += `ORDER BY ${column} ${direction} `;
        return this;
    }

    /**
     * Adds an ascending (ASC) sorting to the ORDER BY clause.
     * @param {string} column - The column to sort by.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    orderByAsc(column: string): Nusql {
        this.query += `ORDER BY ${column} ASC `;
        return this;
    }

    /**
     * Adds a descending (DESC) sorting to the ORDER BY clause.
     * @param {string} column - The column to sort by.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    orderByDesc(column: string): Nusql {
        this.query += `ORDER BY ${column} DESC `;
        return this;
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
    insertInto(table: string, values: Record<string, any> | Record<string, any>[]): Nusql {
        // Check if the values parameter is an array
        const isArray = Array.isArray(values);

        if (isArray) {
            // Handle inserting multiple rows
            if (values.length === 0) {
                // If the array is empty, do nothing
                return this;
            }

            const columns = Object.keys(values[0]).join(', ');
            const placeholdersArray = values.map((row) =>
                Object.values(row)
                    .map((value) => {
                        if (typeof value === 'number') {
                            return value.toString(); // Convert numbers to strings without quotes
                        } else {
                            return `'${value}'`; // Wrap strings in single quotes
                        }
                    })
                    .join(', ')
            );
            const placeholders = placeholdersArray.join('), (');

            this.query += `INSERT INTO ${table} (${columns}) VALUES (${placeholders}) `;
        } else {
            // Handle inserting a single row (values is an object)
            const columns = Object.keys(values).join(', ');
            const placeholders = Object.values(values)
                .map((value) => {
                    if (typeof value === 'number') {
                        return value.toString(); // Convert numbers to strings without quotes
                    } else {
                        return `'${value}'`; // Wrap strings in single quotes
                    }
                })
                .join(', ');

            this.query += `INSERT INTO ${table} (${columns}) VALUES (${placeholders}) `;
        }

        return this;
    }


    /**
     * Adds an UPDATE statement to the SQL query with the specified table and values.
     * @param {string} table - The name of the table to update.
     * @param {Record<string, any>} values - An object containing the column-value pairs to update.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    update(table: string, values: Record<string, any>): Nusql {
        const columnsToUpdate = Object.entries(values)
            .map(([key, value]) => {
                if (Number.isInteger(value)) {
                    // If the value is an integer, treat it as an integer in the SQL query
                    return `${key} = ${value}`;
                } else {
                    // If the value is not an integer, treat it as a string in single quotes
                    return `${key} = '${value}'`;
                }
            })
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
     * Adds a CREATE TABLE statement to the SQL query for creating a table with specified columns.
     * @param {string} table - The name of the table to create.
     * @param {Record<string, (type: Nusql) => Nusql>} columns - An object representing column names and their data types as functions.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    createTable(table: string, columns: Record<string, string>): Nusql {
        function parseObjectToSql(object) {
            const sqlColumns = [];

            for (const [columnName, columnDefinition] of Object.entries(object)) {
                sqlColumns.push(`${columnName} ${columnDefinition}`);
            }

            return sqlColumns.join(', ');
        }
        const sqlString = parseObjectToSql(columns);
        this.query += `CREATE TABLE ${table} (`;
        this.query += sqlString;
        this.query += `) `;
        return this;
    }
    /**
 * Adds a FOREIGN KEY constraint to the table with the specified column(s) and references another table.
 * @param {string|string[]} columns - The column(s) to add the FOREIGN KEY constraint on.
 * @param {string} referencedTable - The name of the referenced table.
 * @param {string|string[]} referencedColumns - The column(s) in the referenced table.
 * @returns {Nusql} - The updated Nusql instance for method chaining.
 */
    foreignKey(columns, referencedTable, referencedColumns) {
        if (!Array.isArray(columns)) {
            columns = [columns];
        }
        if (!Array.isArray(referencedColumns)) {
            referencedColumns = [referencedColumns];
        }

        const columnsStr = columns.join(', ');
        const referencedColumnsStr = referencedColumns.join(', ');

        this.query += `FOREIGN KEY (${columnsStr}) REFERENCES ${referencedTable}(${referencedColumnsStr}) `;
        return this;
    }
    /**
     * Generates an ALTER TABLE statement for the specified table with the given action.
     * @param {string} table - The name of the table to alter.
     * @param {string} action - The ALTER TABLE action to perform (e.g., "ADD COLUMN column_name data_type").
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    alterTable(table: string, action: string): Nusql {
        this.query += `ALTER TABLE ${table} ${action} `;
        return this;
    }

    /**
     * Generates a DROP TABLE statement for the specified table.
     * @param {string} table - The name of the table to drop.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    dropTable(table: string): Nusql {
        this.query += `DROP TABLE ${table} `;
        return this;
    }

    /**
     * Adds the DISTINCT keyword to the SELECT statement.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    distinct(): Nusql {
        this.query += 'DISTINCT ';
        return this;
    }

    /**
     * Alias a column or table with a specified alias name.
     * @param {string} alias - The alias name.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    as(alias: string): Nusql {
        this.query += `AS ${alias} `;
        return this;
    }

    /**
     * Adds a COUNT aggregate function to the SELECT statement.
     * @param {string} column - The column to count.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    count(column: string): Nusql {
        this.query += `COUNT(${column}) `;
        return this;
    }

    /**
     * Adds a SUM aggregate function to the SELECT statement.
     * @param {string} column - The column to sum.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    sum(column: string): Nusql {
        this.query += `SUM(${column}) `;
        return this;
    }

    /**
     * Adds an AVG aggregate function to the SELECT statement.
     * @param {string} column - The column to average.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    avg(column: string): Nusql {
        this.query += `AVG(${column}) `;
        return this;
    }

    /**
     * Adds a MAX aggregate function to the SELECT statement.
     * @param {string} column - The column to find the maximum value.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    max(column: string): Nusql {
        this.query += `MAX(${column}) `;
        return this;
    }

    /**
     * Adds a MIN aggregate function to the SELECT statement.
     * @param {string} column - The column to find the minimum value.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    min(column: string): Nusql {
        this.query += `MIN(${column}) `;
        return this;
    }

    /**
     * Adds a WHERE clause with the BETWEEN operator.
     * @param {string} column - The column to check.
     * @param {any} value1 - The start of the range.
     * @param {any} value2 - The end of the range.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    between(column: string, value1: any, value2: any): Nusql {
        this.query += `WHERE ${column} BETWEEN ${value1} AND ${value2} `;
        return this;
    }

    /**
     * Adds a WHERE clause with the LIKE operator.
     * @param {string} column - The column to check.
     * @param {string} pattern - The pattern to match.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    like(column: string, pattern: string): Nusql {
        this.query += `WHERE ${column} LIKE '${pattern}' `;
        return this;
    }

    /**
     * Adds a WHERE clause with the IN operator.
     * @param {string} column - The column to check.
     * @param {string[]} values - An array of values to check against.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    in(column: string, values: string[]): Nusql {
        const formattedValues = values.map(value => `'${value}'`).join(', ');
        this.query += `WHERE ${column} IN (${formattedValues}) `;
        return this;
    }

    /**
     * Adds a WHERE clause to check if a column is NULL.
     * @param {string} column - The column to check for NULL.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    isNull(column: string): Nusql {
        this.query += `WHERE ${column} IS NULL `;
        return this;
    }

    /**
     * Adds a WHERE clause to check if a column is NOT NULL.
     * @param {string} column - The column to check for NOT NULL.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    isNotNull(column: string): Nusql {
        this.query += `WHERE ${column} IS NOT NULL `;
        return this;
    }

    /**
     * Adds an AND condition to the WHERE clause.
     * @param {string} condition - The condition to add.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    and(condition: string): Nusql {
        this.query += `AND ${condition} `;
        return this;
    }

    /**
     * Adds an OR condition to the WHERE clause.
     * @param {string} condition - The condition to add.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    or(condition: string): Nusql {
        this.query += `OR ${condition} `;
        return this;
    }

    /**
     * Adds a LIMIT clause to limit the number of rows returned in the result set.
     * @param {number} limit - The maximum number of rows to return.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    limit(limit: number): Nusql {
        this.query += `LIMIT ${limit} `;
        return this;
    }

    /**
     * Adds an OFFSET clause to skip a specified number of rows in the result set.
     * @param {number} offset - The number of rows to skip.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    offset(offset: number): Nusql {
        this.query += `OFFSET ${offset} `;
        return this;
    }

    /**
   * Adds a GROUP_CONCAT function to the SQL query for string aggregation.
   * @param {string} column - The column to concatenate.
   * @param {string} separator - The optional separator between concatenated values (default: ', ').
   * @param {string} orderBy - The optional ORDER BY clause for sorting the concatenated values.
   * @returns {Nusql} - The updated Nusql instance for method chaining.
   */
    groupByConcat(column: string, separator: string = ', ', orderBy?: string): Nusql {
        // Start building the GROUP_CONCAT function with the provided column
        this.query += `GROUP_CONCAT(${column}`;

        // Add an optional ORDER BY clause if specified
        if (orderBy) {
            this.query += ` ORDER BY ${orderBy}`;
        }

        // Complete the function with an optional separator and closing parenthesis
        this.query += ` SEPARATOR '${separator}') `;

        return this; // Return the updated Nusql instance for method chaining
    }

    /**
   * Adds a conditional expression using the CASE WHEN statement.
   * @param {string} condition - The condition to evaluate.
   * @param {string} result - The result value when the condition is true.
   * @param {string} elseResult - The optional result value when the condition is false.
   * @returns {Nusql} - The updated Nusql instance for method chaining.
   */
    caseWhen(condition: string, result: string, elseResult?: string): Nusql {
        // Start building the CASE WHEN statement with the provided condition
        this.query += `CASE WHEN ${condition} THEN ${result}`;

        // Add an optional ELSE clause if an elseResult is provided
        if (elseResult) {
            this.query += ` ELSE ${elseResult}`;
        }

        // Complete the statement with an END clause
        this.query += ' END ';

        return this; // Return the updated Nusql instance for method chaining
    }

    /**
   * Casts a column or value to a specified data type using the CAST function.
   * @param {string} columnOrValue - The column or value to cast.
   * @param {string} dataType - The target data type for casting.
   * @returns {Nusql} - The updated Nusql instance for method chaining.
   */
    cast(columnOrValue: string, dataType: string): Nusql {
        // Use the CAST function to cast the column or value to the specified data type
        this.query += `CAST(${columnOrValue} AS ${dataType}) `;

        return this; // Return the updated Nusql instance for method chaining
    }

    /**
     * Builds and returns the SQL query as a string.
     * @returns {string} - The generated SQL query.
     */
    build(): string {
        const buildQuery = this.query.trim();
        this.query = '';
        return buildQuery;
    }

    static create() {
        return new Nusql();
    }
}

export default Nusql;
