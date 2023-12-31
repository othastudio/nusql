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
    private column: string;

    constructor() {
        this.query = '';
        this.column = '';
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
      * This functions section contain functions of SQL Operators,
      * It allows you to create, modify, and manipulate SQL operations easily using method chaining.
    *********************************************************************************************/
    /**
  * Specifies an equal (=) operator.
  * @param {string} column - The column to compare.
  * @param {string} value - The value to compare against.
  * @returns {Nusql} - The Nusql instance for method chaining.
  */
    equal(column: string, value: string): Nusql {
        this.query += `${column} = ${value} `;
        return this;
    }

    /**
     * Specifies a not equal (<>) operator.
     * @param {string} column - The column to compare.
     * @param {string} value - The value to compare against.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    notEqual(column: string, value: string): Nusql {
        this.query += `${column} <> ${value} `;
        return this;
    }

    /**
     * Specifies a greater than (>) operator.
     * @param {string} column - The column to compare.
     * @param {string} value - The value to compare against.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    greaterThan(column: string, value: string): Nusql {
        this.query += `${column} > ${value} `;
        return this;
    }

    /**
     * Specifies a less than (<) operator.
     * @param {string} column - The column to compare.
     * @param {string} value - The value to compare against.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    lessThan(column: string, value: string): Nusql {
        this.query += `${column} < ${value} `;
        return this;
    }

    /**
     * Specifies a greater than or equal to (>=) operator.
     * @param {string} column - The column to compare.
     * @param {string} value - The value to compare against.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    greaterThanOrEqual(column: string, value: string): Nusql {
        this.query += `${column} >= ${value} `;
        return this;
    }

    /**
     * Specifies a less than or equal to (<=) operator.
     * @param {string} column - The column to compare.
     * @param {string} value - The value to compare against.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    lessThanOrEqual(column: string, value: string): Nusql {
        this.query += `${column} <= ${value} `;
        return this;
    }

    /**
     * Specifies an IS NULL condition.
     * @param {string} column - The column to check for null.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    isNull(column: string): Nusql {
        this.query += `${column} IS NULL `;
        return this;
    }

    /**
     * Specifies an IS NOT NULL condition.
     * @param {string} column - The column to check for not null.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    isNotNull(column: string): Nusql {
        this.query += `${column} IS NOT NULL `;
        return this;
    }

    /**
     * Specifies an IN condition to match a column against a set of values.
     * @param {string} column - The column to match.
     * @param {string[]} values - The values to match against.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    in(column: string, values: string[]): Nusql {
        this.query += `${column} IN (${values.join(', ')}) `;
        return this;
    }

    /**
     * Specifies a NOT IN condition to exclude a column from a set of values.
     * @param {string} column - The column to exclude.
     * @param {string[]} values - The values to exclude.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    notIn(column: string, values: string[]): Nusql {
        this.query += `${column} NOT IN (${values.join(', ')}) `;
        return this;
    }

    /**
     * Specifies a BETWEEN condition to match a column within a range.
     * @param {string} column - The column to match.
     * @param {string} min - The minimum value in the range.
     * @param {string} max - The maximum value in the range.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    between(column: string, min: string, max: string): Nusql {
        this.query += `${column} BETWEEN ${min} AND ${max} `;
        return this;
    }

    /*********************************************************************************************
        * This functions section contain functions of SQL Querying, 
        * It allows you to create, modify, and manipulate SQL operations easily using method chaining.
    *********************************************************************************************/

    /**
 * Specifies a SELECT statement.
 * @param {string[]} columns - The columns to select.
 * @returns {Nusql} - The Nusql instance for method chaining.
 */
    select(columns: string | string[]): Nusql {
        if (Array.isArray(columns)) {
            this.query += `SELECT ${columns.join(', ')} `;
        } else if (typeof columns === 'string') {
            this.query += `SELECT ${columns} `;
        } else {
            // Handle invalid input or throw an error
            throw new Error('Invalid input for columns');
        }
        return this;
    }

    /**
     * Specifies a SELECT DISTINCT statement.
     * @param {string[]} columns - The columns to select distinct values from.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    selectDistinct(columns: string[]): Nusql {
        this.query += `SELECT DISTINCT ${columns.join(', ')} `;
        return this;
    }
    /**
 * Specifies a FROM clause to specify the source table for the query.
 * @param {string} table - The name of the source table.
 * @returns {Nusql} - The Nusql instance for method chaining.
 */
    from(table: string): Nusql {
        this.query += `FROM ${table} `;
        return this;
    }
    /**
     * Specifies a WHERE clause with an optional condition.
     * @param {string} condition - The condition to filter results.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    where(condition?: string): Nusql {
        if (condition) {
            this.query += `WHERE ${condition} `;
        }
        return this;
    }

    /**
     * Specifies an ORDER BY clause with an optional direction.
     * @param {string} column - The column to order by.
     * @param {string} direction - The ordering direction (e.g., ASC or DESC).
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    orderBy(column: string, direction?: string): Nusql {
        this.query += `ORDER BY ${column} `;
        if (direction) {
            this.query += `${direction} `;
        }
        return this;
    }

    /**
     * Specifies an AND condition for combining multiple conditions.
     * @param {string} condition - The additional condition to join with AND.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    and(condition: string): Nusql {
        this.query += `AND ${condition} `;
        return this;
    }

    /**
     * Specifies an OR condition for combining multiple conditions.
     * @param {string} condition - The additional condition to join with OR.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    or(condition: string): Nusql {
        this.query += `OR ${condition} `;
        return this;
    }

    /**
     * Specifies a NOT condition to negate a condition.
     * @param {string} condition - The condition to negate.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    not(condition: string): Nusql {
        this.query += `NOT ${condition} `;
        return this;
    }

    /**
     * Specifies a LIKE condition for pattern matching.
     * @param {string} column - The column to match against.
     * @param {string} pattern - The pattern to match.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    like(column: string, pattern: string): Nusql {
        this.query += `${column} LIKE '${pattern}' `;
        return this;
    }

    /**
     * Specifies wildcard characters for use in LIKE conditions.
     * @param {string} wildcards - The wildcard characters to use.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    wildcards(wildcards: string): Nusql {
        this.query += `LIKE '${wildcards}' `;
        return this;
    }

    /**
     * Specifies aliases for tables or columns.
     * @param {string} alias - The alias to use.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    aliases(alias: string): Nusql {
        this.query += `AS ${alias} `;
        return this;
    }

    /*********************************************************************************************
      * This functions section contain SQL Aggregation and Functions,
      * It allows you to create, modify, and manipulate SQL operations easily using method chaining.
    *********************************************************************************************/

    /**
 * Specifies a MIN() function to find the minimum value in a column.
 * @param {string} column - The column to find the minimum value in.
 * @returns {Nusql} - The Nusql instance for method chaining.
 */
    min(column: string): Nusql {
        this.query += `MIN(${column}) `;
        return this;
    }

    /**
     * Specifies a MAX() function to find the maximum value in a column.
     * @param {string} column - The column to find the maximum value in.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    max(column: string): Nusql {
        this.query += `MAX(${column}) `;
        return this;
    }

    /**
     * Specifies a COUNT() function to count the number of rows.
     * @param {string} column - The column to count (optional).
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    count(column?: string): Nusql {
        this.query += `COUNT(${column ? column : '*'}) `;
        return this;
    }

    /**
     * Specifies a SUM() function to calculate the sum of a column's values.
     * @param {string} column - The column to calculate the sum for.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    sum(column: string): Nusql {
        this.query += `SUM(${column}) `;
        return this;
    }

    /**
     * Specifies an AVG() function to calculate the average of a column's values.
     * @param {string} column - The column to calculate the average for.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    avg(column: string): Nusql {
        this.query += `AVG(${column}) `;
        return this;
    }

    /**
     * Specifies ANY() function to check if any of the subquery values match.
     * @param {Nusql} subquery - The subquery to check.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    any(subquery: Nusql): Nusql {
        const state = subquery.build()
        this.query += `ANY(${state}) `;
        return this;
    }

    /**
     * Specifies ALL() function to check if all of the subquery values match.
     * @param {Nusql} subquery - The subquery to check.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    all(subquery: Nusql): Nusql {
        const state = subquery.build()
        this.query += `ALL(${state}) `;
        return this;
    }

    /**
     * Specifies a CASE expression for conditional logic.
     * @param {string} condition - The condition to evaluate.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    case(condition: string): Nusql {
        this.query += `CASE ${condition} `;
        return this;
    }

    /**
     * Specifies a NULLIF() function to compare two expressions and return null if they are equal.
     * @param {string} expression1 - The first expression to compare.
     * @param {string} expression2 - The second expression to compare.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    nullIf(expression1: string, expression2: string): Nusql {
        this.query += `NULLIF(${expression1}, ${expression2}) `;
        return this;
    }

    /**
     * Specifies a COALESCE() function to return the first non-null expression in a list.
     * @param {string[]} expressions - The list of expressions to evaluate.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    coalesce(expressions: string[]): Nusql {
        this.query += `COALESCE(${expressions.join(', ')}) `;
        return this;
    }
    /*********************************************************************************************
      * This functions section contain SQL Joins,
      * It allows you to create, modify, and manipulate SQL operations easily using method chaining.
    *********************************************************************************************/
    /**
     * Specifies a JOIN operation to combine the current table with another table.
     * @param {string} tableName - The name of the table to join.
     * @param {string} condition - The join condition (e.g., 'table1.column = table2.column').
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    flatJoin(tableName: string, condition: string): Nusql {
        this.query += `JOIN ${tableName} ON ${condition} `;
        return this;
    }

    /**
 * Specifies a JOIN clause with a table using INNER JOIN.
 * @param {string} table - The name of the table to join.
 * @param {string} onCondition - The ON condition for the join.
 * @returns {Nusql} - The Nusql instance for method chaining.
 */
    innerJoin(table: string, onCondition: string): Nusql {
        this.query += `INNER JOIN ${table} ON ${onCondition} `;
        return this;
    }

    /**
     * Specifies a JOIN clause with a table using LEFT JOIN.
     * @param {string} table - The name of the table to join.
     * @param {string} onCondition - The ON condition for the join.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    leftJoin(table: string, onCondition: string): Nusql {
        this.query += `LEFT JOIN ${table} ON ${onCondition} `;
        return this;
    }

    /**
     * Specifies a JOIN clause with a table using RIGHT JOIN.
     * @param {string} table - The name of the table to join.
     * @param {string} onCondition - The ON condition for the join.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    rightJoin(table: string, onCondition: string): Nusql {
        this.query += `RIGHT JOIN ${table} ON ${onCondition} `;
        return this;
    }

    /**
     * Specifies a JOIN clause with a table using FULL JOIN.
     * @param {string} table - The name of the table to join.
     * @param {string} onCondition - The ON condition for the join.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    fullJoin(table: string, onCondition: string): Nusql {
        this.query += `FULL JOIN ${table} ON ${onCondition} `;
        return this;
    }

    /**
     * Specifies a JOIN clause with a table using SELF JOIN.
     * @param {string} table - The name of the table to join.
     * @param {string} onCondition - The ON condition for the join.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    selfJoin(table: string, onCondition: string): Nusql {
        this.query += `SELF JOIN ${table} ON ${onCondition} `;
        return this;
    }

    /**
     * Specifies a UNION clause with another query.
     * @param {Nusql} query - The query to union with.
     * @param {boolean} all - Optional. Set to true for UNION ALL, false for UNION (default).
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    union(query: Nusql, all: boolean = false): Nusql {
        this.query += `UNION${all ? ' ALL' : ''} ${query.build()} `;
        return this;
    }

    /*********************************************************************************************
      * This functions section contain SQL Grouping and Filtering
      * It allows you to create, modify, and manipulate SQL operations easily using method chaining.
    *********************************************************************************************/

    /**
 * Specifies a GROUP BY clause for grouping the results by one or more columns.
 * @param {string | string[]} columns - The column(s) to group by.
 * @returns {Nusql} - The Nusql instance for method chaining.
 */
    groupBy(columns: string | string[]): Nusql {
        if (Array.isArray(columns)) {
            this.query += `GROUP BY ${columns.join(', ')} `;
        } else {
            this.query += `GROUP BY ${columns} `;
        }
        return this;
    }

    /**
     * Specifies a HAVING clause for filtering the grouped results based on a condition.
     * @param {string} condition - The condition for the HAVING clause.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    having(condition: string): Nusql {
        this.query += `HAVING ${condition} `;
        return this;
    }

    /**
     * Specifies an EXISTS clause for checking the existence of a subquery.
     * @param {Nusql} subquery - The subquery to check for existence.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    exists(subquery: Nusql): Nusql {
        this.query += `EXISTS (${subquery.build()}) `;
        return this;
    }

    /*********************************************************************************************
      * This functions section contain SQL Data Modification
      * It allows you to create, modify, and manipulate SQL operations easily using method chaining.
    *********************************************************************************************/
    /**
  * Specifies an INSERT INTO statement to insert rows into a table.
  * @param {string} table - The name of the table to insert into.
  * @param {string[]} columns - The columns to insert data into.
  * @returns {Nusql} - The Nusql instance for method chaining.
  */
    insertInto(table: string, columns: string[]): Nusql {
        this.query += `INSERT INTO ${table} (${columns.join(', ')}) `;
        return this;
    }

    /**
     * Specifies a NULL VALUES statement to insert rows with NULL values.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    nullValues(): Nusql {
        this.query += 'NULL VALUES ';
        return this;
    }

    /**
     * Specifies an UPDATE statement to modify existing rows in a table.
     * @param {string} table - The name of the table to update.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    update(table: string): Nusql {
        this.query += `UPDATE ${table} `;
        return this;
    }

    /**
     * Specifies a DELETE statement to remove rows from a table.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    delete(): Nusql {
        this.query += 'DELETE ';
        return this;
    }

    /**
     * Specifies a SELECT TOP clause to limit the number of rows returned.
     * @param {number} count - The number of rows to select.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    selectTop(count: number): Nusql {
        this.query += `SELECT TOP ${count} `;
        return this;
    }

    /**
     * Specifies a SELECT INTO statement to create a new table from the results of a query.
     * @param {string} newTable - The name of the new table to create.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    selectInto(newTable: string): Nusql {
        this.query += `SELECT INTO ${newTable} `;
        return this;
    }

    /**
     * Specifies an INSERT INTO SELECT statement to insert rows into a table from the results of a query.
     * @param {string} table - The name of the table to insert into.
     * @param {string[]} columns - The columns to insert data into.
     * @param {Nusql} subquery - The subquery to select data from.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    insertIntoSelect(table: string, columns: string[], subquery: Nusql): Nusql {
        this.query += `INSERT INTO ${table} (${columns.join(', ')}) ${subquery.build()} `;
        return this;
    }

    /*********************************************************************************************
      * This functions section contain SQL Constraints
      * It allows you to create, modify, and manipulate SQL operations easily using method chaining.
    *********************************************************************************************/

    /**
 * Specifies a CONSTRAINT clause to define a custom constraint in the query.
 * @param {string} constraint - The custom constraint definition.
 * @returns {Nusql} - The Nusql instance for method chaining.
 */
    constraint(constraint: string): Nusql {
        this.query += `CONSTRAINT ${constraint} `;
        return this;
    }

    /**
     * Specifies a NOT NULL constraint on the current column.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    notNull(): Nusql {
        this.query += 'NOT NULL ';
        return this;
    }

    /**
     * Specifies a UNIQUE constraint on the current column.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    unique(): Nusql {
        this.query += 'UNIQUE ';
        return this;
    }

    /**
     * Specifies a PRIMARY KEY constraint on the current column.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    primaryKey(): Nusql {
        this.query += 'PRIMARY KEY ';
        return this;
    }
    /**
     * Specifies a FOREIGN KEY constraint on the current column.
     * @param {string} references - The referenced table and column(s).
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    foreignKey(column: string, references: string,): Nusql {
        this.query += `FOREIGN KEY (${column}) REFERENCES ${references} `;
        return this;
    }

    /**
     * Specifies a CHECK constraint on the current column.
     * @param {string} condition - The condition for the CHECK constraint.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    check(condition: string): Nusql {
        this.query += `CHECK (${condition}) `;
        return this;
    }

    /**
     * Specifies a DEFAULT constraint on the current column.
     * @param {string} value - The default value for the column.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    default(value: string): Nusql {
        this.query += `DEFAULT ${value} `;
        return this;
    }

    /*********************************************************************************************
      * This functions section contain SQL Indexing
      * It allows you to create, modify, and manipulate SQL operations easily using method chaining.
    *********************************************************************************************/

    /**
     * Specifies an INDEX clause to create an index on the current column(s).
     * @param {string} indexName - The name of the index.
     * @returns {Nusql} - The Nusql instance for method chaining.
    */
    index(indexName: string): Nusql {
        this.query += `INDEX ${indexName} `;
        return this;
    }

    /**
     * Specifies an AUTO_INCREMENT property for the current column.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    autoIncrement(): Nusql {
        this.query += 'AUTO_INCREMENT ';
        return this;
    }

    /*********************************************************************************************
      * This functions section contain SQL Database Management,
      * It allows you to create, modify, and manipulate SQL operations easily using method chaining.
    *********************************************************************************************/

    /**
     * Specifies a CREATE DATABASE statement to create a new database.
     * @param {string} dbName - The name of the database to create.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    createDatabase(dbName: string): Nusql {
        this.query = `CREATE DATABASE IF NOT EXISTS ${dbName};`;
        return this;
    }

    /**
     * Specifies a DROP DATABASE statement to drop an existing database.
     * @param {string} dbName - The name of the database to drop.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    dropDatabase(dbName: string): Nusql {
        this.query = `DROP DATABASE IF EXISTS ${dbName};`;
        return this;
    }

    /**
     * Specifies a backup database command to create a backup of an existing database.
     * @param {string} dbName - The name of the database to backup.
     * @param {string} backupPath - The path where the backup will be stored.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    backupDatabase(dbName: string, backupPath: string): Nusql {
        this.query = `BACKUP DATABASE ${dbName} TO DISK = '${backupPath}'`;
        return this;
    }

    /**
 * Specifies a CREATE TABLE statement to create a new table.
 * @param {string} tableName - The name of the table to create.
 * @returns {Nusql} - The Nusql instance for method chaining.
 */
    createTable(tableName: string): Nusql {
        this.query = `CREATE TABLE ${tableName} `;
        return this;
    }

    /**
     * Specifies a DROP TABLE statement to drop an existing table.
     * @param {string} tableName - The name of the table to drop.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    dropTable(tableName: string): Nusql {
        this.query = `DROP TABLE ${tableName} `;
        return this;
    }

    /**
     * Specifies an ALTER TABLE statement to modify an existing table.
     * @param {string} tableName - The name of the table to alter.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    alterTable(tableName: string): Nusql {
        this.query = `ALTER TABLE ${tableName} `;
        return this;
    }
    /*********************************************************************************************
          * This functions section contain SQL Advanced Concepts
          * It allows you to create, modify, and manipulate SQL operations easily using method chaining.
        *********************************************************************************************/
    /**
 * Specifies a CREATE VIEW statement to create a new SQL View.
 * @param {string} viewName - The name of the SQL View.
 * @param {string} selectStatement - The SELECT statement defining the view's structure.
 * @param {boolean} updatable - Indicates whether the view is updatable (default is false).
 * @returns {Nusql} - The Nusql instance for method chaining.
 */
    createView(viewName: string, selectStatement: string, updatable = false): Nusql {
        this.query = `CREATE VIEW ${viewName} AS ${selectStatement}`;
        if (updatable) {
            this.query += ' WITH CHECK OPTION';
        }
        return this;
    }
    /*********************************************************************************************
      * This functions section contain Build, create functions,
      * It allows you to create, modify, and manipulate SQL operations easily using method chaining.
    *********************************************************************************************/

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
