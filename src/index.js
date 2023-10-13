"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var Nusql = /** @class */ (function () {
    function Nusql() {
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
    Nusql.prototype.char = function (size) {
        this.query += "CHAR(".concat(size, ") ");
        return this;
    };
    /**
     * Specifies the VARCHAR data type with the given size.
     * @param {number} size - The size of the VARCHAR column.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.varchar = function (size) {
        this.query += "VARCHAR(".concat(size, ") ");
        return this;
    };
    /**
     * Specifies the TEXT data type.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.text = function () {
        this.query += 'TEXT ';
        return this;
    };
    /**
     * Specifies the NCHAR data type with the given size.
     * @param {number} size - The size of the NCHAR column.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.nchar = function (size) {
        this.query += "NCHAR(".concat(size, ") ");
        return this;
    };
    /**
     * Specifies the NVARCHAR data type with the given size.
     * @param {number} size - The size of the NVARCHAR column.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.nvarchar = function (size) {
        this.query += "NVARCHAR(".concat(size, ") ");
        return this;
    };
    /**
     * Specifies the NTEXT data type.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.ntext = function () {
        this.query += 'NTEXT ';
        return this;
    };
    /**
 * Specifies the BINARY data type with the given size.
 * @param {number} size - The size of the BINARY column.
 * @returns {Nusql} - The Nusql instance for method chaining.
 */
    Nusql.prototype.binary = function (size) {
        this.query += "BINARY(".concat(size, ") ");
        return this;
    };
    /**
 * Specifies the DATE data type.
 * @returns {Nusql} - The Nusql instance for method chaining.
 */
    Nusql.prototype.date = function () {
        this.query += 'DATE ';
        return this;
    };
    /**
     * Specifies the DATETIME data type with fractional seconds precision (fsp).
     * @param {number} fsp - Fractional seconds precision.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.datetime = function (fsp) {
        this.query += "DATETIME(".concat(fsp, ") ");
        return this;
    };
    /**
     * Specifies the TIMESTAMP data type with fractional seconds precision (fsp).
     * @param {number} fsp - Fractional seconds precision.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.timestamp = function (fsp) {
        this.query += "TIMESTAMP(".concat(fsp, ") ");
        return this;
    };
    /**
     * Specifies the TIME data type with fractional seconds precision (fsp).
     * @param {number} fsp - Fractional seconds precision.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.time = function (fsp) {
        this.query += "TIME(".concat(fsp, ") ");
        return this;
    };
    /**
     * Specifies the YEAR data type.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.year = function () {
        this.query += 'YEAR ';
        return this;
    };
    /**
     * Specifies the VARBINARY data type with the given size.
     * @param {number} size - The size of the VARBINARY column.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.varbinary = function (size) {
        this.query += "VARBINARY(".concat(size, ") ");
        return this;
    };
    /**
     * Specifies the BLOB data type with the given size.
     * @param {number} size - The size of the BLOB column.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.blob = function (size) {
        this.query += "BLOB(".concat(size, ") ");
        return this;
    };
    /**
 * Specifies the BIT data type with the given size.
 * @param {number} size - The size of the BIT column.
 * @returns {Nusql} - The Nusql instance for method chaining.
 */
    Nusql.prototype.bit = function (size) {
        this.query += "BIT(".concat(size, ") ");
        return this;
    };
    /**
     * Specifies the TINYINT data type with the given size.
     * @param {number} size - The size of the TINYINT column.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.tinyint = function (size) {
        this.query += "TINYINT(".concat(size, ") ");
        return this;
    };
    /**
     * Specifies the BOOLEAN (BOOL) data type.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.boolean = function () {
        this.query += 'BOOLEAN ';
        return this;
    };
    /**
     * Specifies the SMALLINT data type with the given size.
     * @param {number} size - The size of the SMALLINT column.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.smallint = function (size) {
        this.query += "SMALLINT(".concat(size, ") ");
        return this;
    };
    /**
     * Specifies the MEDIUMINT data type with the given size.
     * @param {number} size - The size of the MEDIUMINT column.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.mediumint = function (size) {
        this.query += "MEDIUMINT(".concat(size, ") ");
        return this;
    };
    /**
     * Specifies the INT data type with the given size.
     * @param {number} size - The size of the INT column.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.int = function (size) {
        this.query += "INT(".concat(size, ") ");
        return this;
    };
    /**
     * Specifies the INTEGER data type with the given size.
     * @param {number} size - The size of the INTEGER column.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.integer = function (size) {
        this.query += "INTEGER(".concat(size, ") ");
        return this;
    };
    /**
     * Specifies the BIGINT data type with the given size.
     * @param {number} size - The size of the BIGINT column.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.bigint = function (size) {
        this.query += "BIGINT(".concat(size, ") ");
        return this;
    };
    /**
     * Specifies the FLOAT data type with the given size and decimal places.
     * @param {number} size - The size of the FLOAT column.
     * @param {number} d - The number of decimal places.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.float = function (size, d) {
        this.query += "FLOAT(".concat(size, ", ").concat(d, ") ");
        return this;
    };
    /**
     * Specifies the FLOAT data type with the given precision.
     * @param {number} p - The precision of the FLOAT column.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.floatPrecision = function (p) {
        this.query += "FLOAT(".concat(p, ") ");
        return this;
    };
    /**
     * Specifies the DOUBLE data type with the given size and decimal places.
     * @param {number} size - The size of the DOUBLE column.
     * @param {number} d - The number of decimal places.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.double = function (size, d) {
        this.query += "DOUBLE(".concat(size, ", ").concat(d, ") ");
        return this;
    };
    /**
     * Specifies the DOUBLE PRECISION data type with the given size and decimal places.
     * @param {number} size - The size of the DOUBLE PRECISION column.
     * @param {number} d - The number of decimal places.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.doublePrecision = function (size, d) {
        this.query += "DOUBLE PRECISION(".concat(size, ", ").concat(d, ") ");
        return this;
    };
    /**
     * Specifies the DECIMAL data type with the given size and decimal places.
     * @param {number} size - The size of the DECIMAL column.
     * @param {number} d - The number of decimal places.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.decimal = function (size, d) {
        this.query += "DECIMAL(".concat(size, ", ").concat(d, ") ");
        return this;
    };
    /**
     * Specifies the DEC data type with the given size and decimal places.
     * @param {number} size - The size of the DEC column.
     * @param {number} d - The number of decimal places.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.dec = function (size, d) {
        this.query += "DEC(".concat(size, ", ").concat(d, ") ");
        return this;
    };
    /**
 * Specifies the ENUM data type with the given values.
 * @param {...string} values - The values for the ENUM column.
 * @returns {Nusql} - The Nusql instance for method chaining.
 */
    Nusql.prototype.enum = function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        this.query += "ENUM('".concat(values.join("', '"), "') ");
        return this;
    };
    /**
     * Specifies the SET data type with the given values.
     * @param {...string} values - The values for the SET column.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.set = function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        this.query += "SET('".concat(values.join("', '"), "') ");
        return this;
    };
    /**
 * Specifies the GEOMETRY data type.
 * @returns {Nusql} - The Nusql instance for method chaining.
 */
    Nusql.prototype.geometry = function () {
        this.query += 'GEOMETRY ';
        return this;
    };
    /**
     * Specifies the POINT data type.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.point = function () {
        this.query += 'POINT ';
        return this;
    };
    /**
     * Specifies the LINESTRING data type.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.linestring = function () {
        this.query += 'LINESTRING ';
        return this;
    };
    /**
     * Specifies the POLYGON data type.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.polygon = function () {
        this.query += 'POLYGON ';
        return this;
    };
    /**
     * Specifies the MULTIPOINT data type.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.multipoint = function () {
        this.query += 'MULTIPOINT ';
        return this;
    };
    /**
     * Specifies the MULTILINESTRING data type.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.multilinestring = function () {
        this.query += 'MULTILINESTRING ';
        return this;
    };
    /**
     * Specifies the MULTIPOLYGON data type.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.multipolygon = function () {
        this.query += 'MULTIPOLYGON ';
        return this;
    };
    /**
     * Specifies the GEOMETRYCOLLECTION data type.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.geometrycollection = function () {
        this.query += 'GEOMETRYCOLLECTION ';
        return this;
    };
    /**
 * Specifies the JSON data type.
 * @returns {Nusql} - The Nusql instance for method chaining.
 */
    Nusql.prototype.json = function () {
        this.query += 'JSON ';
        return this;
    };
    /**
     * Specifies the JSONB data type.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.jsonb = function () {
        this.query += 'JSONB ';
        return this;
    };
    /**
 * Specifies the XML data type.
 * @returns {Nusql} - The Nusql instance for method chaining.
 */
    Nusql.prototype.xml = function () {
        this.query += 'XML ';
        return this;
    };
    /**
   * Specifies the MEDIUMBLOB data type.
   * @returns {Nusql} - The Nusql instance for method chaining.
   */
    Nusql.prototype.mediumblob = function () {
        this.query += 'MEDIUMBLOB ';
        return this;
    };
    /**
     * Specifies the LONGBLOB data type.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.longblob = function () {
        this.query += 'LONGBLOB ';
        return this;
    };
    /**
 * Specifies the MEDIUMTEXT data type.
 * @returns {Nusql} - The Nusql instance for method chaining.
 */
    Nusql.prototype.mediumtext = function () {
        this.query += 'MEDIUMTEXT ';
        return this;
    };
    /**
     * Specifies the LONGTEXT data type.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.longtext = function () {
        this.query += 'LONGTEXT ';
        return this;
    };
    /**
   * Specifies the NUMERIC data type with the given size and decimal places.
   * @param {number} size - The size of the NUMERIC column.
   * @param {number} decimalPlaces - The number of decimal places.
   * @returns {Nusql} - The Nusql instance for method chaining.
   */
    Nusql.prototype.numeric = function (size, decimalPlaces) {
        this.query += "NUMERIC(".concat(size, ", ").concat(decimalPlaces, ") ");
        return this;
    };
    /**
     * Specifies the REAL data type.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.real = function () {
        this.query += 'REAL ';
        return this;
    };
    /**
 * Specifies the MONEY data type.
 * @returns {Nusql} - The Nusql instance for method chaining.
 */
    Nusql.prototype.money = function () {
        this.query += 'MONEY ';
        return this;
    };
    /**
   * Specifies the UUID data type.
   * @returns {Nusql} - The Nusql instance for method chaining.
   */
    Nusql.prototype.uuid = function () {
        this.query += 'UUID ';
        return this;
    };
    /**
     * Specifies the MACADDR data type.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.macaddr = function () {
        this.query += 'MACADDR ';
        return this;
    };
    /**
     * Specifies the INET data type.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.inet = function () {
        this.query += 'INET ';
        return this;
    };
    /**
     * Specifies the CIDR data type.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.cidr = function () {
        this.query += 'CIDR ';
        return this;
    };
    /**
     * Specifies the MACADDR8 data type.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.macaddr8 = function () {
        this.query += 'MACADDR8 ';
        return this;
    };
    /**
     * Specifies the TSQUERY data type.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.tsquery = function () {
        this.query += 'TSQUERY ';
        return this;
    };
    /**
     * Specifies the TSVECTOR data type.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.tsvector = function () {
        this.query += 'TSVECTOR ';
        return this;
    };
    /**
     * Specifies the GTSVECTOR data type.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.gtsvector = function () {
        this.query += 'GTSVECTOR ';
        return this;
    };
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
    Nusql.prototype.equal = function (column, value) {
        this.query += "".concat(column, " = ").concat(value, " ");
        return this;
    };
    /**
     * Specifies a not equal (<>) operator.
     * @param {string} column - The column to compare.
     * @param {string} value - The value to compare against.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.notEqual = function (column, value) {
        this.query += "".concat(column, " <> ").concat(value, " ");
        return this;
    };
    /**
     * Specifies a greater than (>) operator.
     * @param {string} column - The column to compare.
     * @param {string} value - The value to compare against.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.greaterThan = function (column, value) {
        this.query += "".concat(column, " > ").concat(value, " ");
        return this;
    };
    /**
     * Specifies a less than (<) operator.
     * @param {string} column - The column to compare.
     * @param {string} value - The value to compare against.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.lessThan = function (column, value) {
        this.query += "".concat(column, " < ").concat(value, " ");
        return this;
    };
    /**
     * Specifies a greater than or equal to (>=) operator.
     * @param {string} column - The column to compare.
     * @param {string} value - The value to compare against.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.greaterThanOrEqual = function (column, value) {
        this.query += "".concat(column, " >= ").concat(value, " ");
        return this;
    };
    /**
     * Specifies a less than or equal to (<=) operator.
     * @param {string} column - The column to compare.
     * @param {string} value - The value to compare against.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.lessThanOrEqual = function (column, value) {
        this.query += "".concat(column, " <= ").concat(value, " ");
        return this;
    };
    /**
     * Specifies an IS NULL condition.
     * @param {string} column - The column to check for null.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.isNull = function (column) {
        this.query += "".concat(column, " IS NULL ");
        return this;
    };
    /**
     * Specifies an IS NOT NULL condition.
     * @param {string} column - The column to check for not null.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.isNotNull = function (column) {
        this.query += "".concat(column, " IS NOT NULL ");
        return this;
    };
    /**
     * Specifies an IN condition to match a column against a set of values.
     * @param {string} column - The column to match.
     * @param {string[]} values - The values to match against.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.in = function (column, values) {
        this.query += "".concat(column, " IN (").concat(values.join(', '), ") ");
        return this;
    };
    /**
     * Specifies a NOT IN condition to exclude a column from a set of values.
     * @param {string} column - The column to exclude.
     * @param {string[]} values - The values to exclude.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.notIn = function (column, values) {
        this.query += "".concat(column, " NOT IN (").concat(values.join(', '), ") ");
        return this;
    };
    /**
     * Specifies a BETWEEN condition to match a column within a range.
     * @param {string} column - The column to match.
     * @param {string} min - The minimum value in the range.
     * @param {string} max - The maximum value in the range.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.between = function (column, min, max) {
        this.query += "".concat(column, " BETWEEN ").concat(min, " AND ").concat(max, " ");
        return this;
    };
    /*********************************************************************************************
        * This functions section contain functions of SQL Querying,
        * It allows you to create, modify, and manipulate SQL operations easily using method chaining.
    *********************************************************************************************/
    /**
 * Specifies a SELECT statement.
 * @param {string[]} columns - The columns to select.
 * @returns {Nusql} - The Nusql instance for method chaining.
 */
    Nusql.prototype.select = function (columns) {
        this.query += "SELECT ".concat(columns.join(', '), " ");
        return this;
    };
    /**
     * Specifies a SELECT DISTINCT statement.
     * @param {string[]} columns - The columns to select distinct values from.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.selectDistinct = function (columns) {
        this.query += "SELECT DISTINCT ".concat(columns.join(', '), " ");
        return this;
    };
    /**
 * Specifies a FROM clause to specify the source table for the query.
 * @param {string} table - The name of the source table.
 * @returns {Nusql} - The Nusql instance for method chaining.
 */
    Nusql.prototype.from = function (table) {
        this.query += "FROM ".concat(table, " ");
        return this;
    };
    /**
     * Specifies a WHERE clause with an optional condition.
     * @param {string} condition - The condition to filter results.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.where = function (condition) {
        if (condition) {
            this.query += "WHERE ".concat(condition, " ");
        }
        return this;
    };
    /**
     * Specifies an ORDER BY clause with an optional direction.
     * @param {string} column - The column to order by.
     * @param {string} direction - The ordering direction (e.g., ASC or DESC).
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.orderBy = function (column, direction) {
        this.query += "ORDER BY ".concat(column, " ");
        if (direction) {
            this.query += "".concat(direction, " ");
        }
        return this;
    };
    /**
     * Specifies an AND condition for combining multiple conditions.
     * @param {string} condition - The additional condition to join with AND.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.and = function (condition) {
        this.query += "AND ".concat(condition, " ");
        return this;
    };
    /**
     * Specifies an OR condition for combining multiple conditions.
     * @param {string} condition - The additional condition to join with OR.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.or = function (condition) {
        this.query += "OR ".concat(condition, " ");
        return this;
    };
    /**
     * Specifies a NOT condition to negate a condition.
     * @param {string} condition - The condition to negate.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.not = function (condition) {
        this.query += "NOT ".concat(condition, " ");
        return this;
    };
    /**
     * Specifies a LIKE condition for pattern matching.
     * @param {string} column - The column to match against.
     * @param {string} pattern - The pattern to match.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.like = function (column, pattern) {
        this.query += "".concat(column, " LIKE '").concat(pattern, "' ");
        return this;
    };
    /**
     * Specifies wildcard characters for use in LIKE conditions.
     * @param {string} wildcards - The wildcard characters to use.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.wildcards = function (wildcards) {
        this.query += "LIKE '".concat(wildcards, "' ");
        return this;
    };
    /**
     * Specifies aliases for tables or columns.
     * @param {string} alias - The alias to use.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.aliases = function (alias) {
        this.query += "AS ".concat(alias, " ");
        return this;
    };
    /*********************************************************************************************
      * This functions section contain SQL Aggregation and Functions,
      * It allows you to create, modify, and manipulate SQL operations easily using method chaining.
    *********************************************************************************************/
    /**
 * Specifies a MIN() function to find the minimum value in a column.
 * @param {string} column - The column to find the minimum value in.
 * @returns {Nusql} - The Nusql instance for method chaining.
 */
    Nusql.prototype.min = function (column) {
        this.query += "MIN(".concat(column, ") ");
        return this;
    };
    /**
     * Specifies a MAX() function to find the maximum value in a column.
     * @param {string} column - The column to find the maximum value in.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.max = function (column) {
        this.query += "MAX(".concat(column, ") ");
        return this;
    };
    /**
     * Specifies a COUNT() function to count the number of rows.
     * @param {string} column - The column to count (optional).
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.count = function (column) {
        this.query += "COUNT(".concat(column ? column : '*', ") ");
        return this;
    };
    /**
     * Specifies a SUM() function to calculate the sum of a column's values.
     * @param {string} column - The column to calculate the sum for.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.sum = function (column) {
        this.query += "SUM(".concat(column, ") ");
        return this;
    };
    /**
     * Specifies an AVG() function to calculate the average of a column's values.
     * @param {string} column - The column to calculate the average for.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.avg = function (column) {
        this.query += "AVG(".concat(column, ") ");
        return this;
    };
    /**
     * Specifies ANY() function to check if any of the subquery values match.
     * @param {Nusql} subquery - The subquery to check.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.any = function (subquery) {
        var state = subquery.build();
        this.query += "ANY(".concat(state, ") ");
        return this;
    };
    /**
     * Specifies ALL() function to check if all of the subquery values match.
     * @param {Nusql} subquery - The subquery to check.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.all = function (subquery) {
        var state = subquery.build();
        this.query += "ALL(".concat(state, ") ");
        return this;
    };
    /**
     * Specifies a CASE expression for conditional logic.
     * @param {string} condition - The condition to evaluate.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.case = function (condition) {
        this.query += "CASE ".concat(condition, " ");
        return this;
    };
    /**
     * Specifies a NULLIF() function to compare two expressions and return null if they are equal.
     * @param {string} expression1 - The first expression to compare.
     * @param {string} expression2 - The second expression to compare.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.nullIf = function (expression1, expression2) {
        this.query += "NULLIF(".concat(expression1, ", ").concat(expression2, ") ");
        return this;
    };
    /**
     * Specifies a COALESCE() function to return the first non-null expression in a list.
     * @param {string[]} expressions - The list of expressions to evaluate.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.coalesce = function (expressions) {
        this.query += "COALESCE(".concat(expressions.join(', '), ") ");
        return this;
    };
    /*********************************************************************************************
      * This functions section contain SQL Joins,
      * It allows you to create, modify, and manipulate SQL operations easily using method chaining.
    *********************************************************************************************/
    /**
 * Specifies a JOIN clause with a table using INNER JOIN.
 * @param {string} table - The name of the table to join.
 * @param {string} onCondition - The ON condition for the join.
 * @returns {Nusql} - The Nusql instance for method chaining.
 */
    Nusql.prototype.innerJoin = function (table, onCondition) {
        this.query += "INNER JOIN ".concat(table, " ON ").concat(onCondition, " ");
        return this;
    };
    /**
     * Specifies a JOIN clause with a table using LEFT JOIN.
     * @param {string} table - The name of the table to join.
     * @param {string} onCondition - The ON condition for the join.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.leftJoin = function (table, onCondition) {
        this.query += "LEFT JOIN ".concat(table, " ON ").concat(onCondition, " ");
        return this;
    };
    /**
     * Specifies a JOIN clause with a table using RIGHT JOIN.
     * @param {string} table - The name of the table to join.
     * @param {string} onCondition - The ON condition for the join.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.rightJoin = function (table, onCondition) {
        this.query += "RIGHT JOIN ".concat(table, " ON ").concat(onCondition, " ");
        return this;
    };
    /**
     * Specifies a JOIN clause with a table using FULL JOIN.
     * @param {string} table - The name of the table to join.
     * @param {string} onCondition - The ON condition for the join.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.fullJoin = function (table, onCondition) {
        this.query += "FULL JOIN ".concat(table, " ON ").concat(onCondition, " ");
        return this;
    };
    /**
     * Specifies a JOIN clause with a table using SELF JOIN.
     * @param {string} table - The name of the table to join.
     * @param {string} onCondition - The ON condition for the join.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.selfJoin = function (table, onCondition) {
        this.query += "SELF JOIN ".concat(table, " ON ").concat(onCondition, " ");
        return this;
    };
    /**
     * Specifies a UNION clause with another query.
     * @param {Nusql} query - The query to union with.
     * @param {boolean} all - Optional. Set to true for UNION ALL, false for UNION (default).
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.union = function (query, all) {
        if (all === void 0) { all = false; }
        this.query += "UNION".concat(all ? ' ALL' : '', " ").concat(query.build(), " ");
        return this;
    };
    /*********************************************************************************************
      * This functions section contain SQL Grouping and Filtering
      * It allows you to create, modify, and manipulate SQL operations easily using method chaining.
    *********************************************************************************************/
    /**
 * Specifies a GROUP BY clause for grouping the results by one or more columns.
 * @param {string | string[]} columns - The column(s) to group by.
 * @returns {Nusql} - The Nusql instance for method chaining.
 */
    Nusql.prototype.groupBy = function (columns) {
        if (Array.isArray(columns)) {
            this.query += "GROUP BY ".concat(columns.join(', '), " ");
        }
        else {
            this.query += "GROUP BY ".concat(columns, " ");
        }
        return this;
    };
    /**
     * Specifies a HAVING clause for filtering the grouped results based on a condition.
     * @param {string} condition - The condition for the HAVING clause.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.having = function (condition) {
        this.query += "HAVING ".concat(condition, " ");
        return this;
    };
    /**
     * Specifies an EXISTS clause for checking the existence of a subquery.
     * @param {Nusql} subquery - The subquery to check for existence.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.exists = function (subquery) {
        this.query += "EXISTS (".concat(subquery.build(), ") ");
        return this;
    };
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
    Nusql.prototype.insertInto = function (table, columns) {
        this.query += "INSERT INTO ".concat(table, " (").concat(columns.join(', '), ") ");
        return this;
    };
    /**
     * Specifies a NULL VALUES statement to insert rows with NULL values.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.nullValues = function () {
        this.query += 'NULL VALUES ';
        return this;
    };
    /**
     * Specifies an UPDATE statement to modify existing rows in a table.
     * @param {string} table - The name of the table to update.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.update = function (table) {
        this.query += "UPDATE ".concat(table, " ");
        return this;
    };
    /**
     * Specifies a DELETE statement to remove rows from a table.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.delete = function () {
        this.query += 'DELETE ';
        return this;
    };
    /**
     * Specifies a SELECT TOP clause to limit the number of rows returned.
     * @param {number} count - The number of rows to select.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.selectTop = function (count) {
        this.query += "SELECT TOP ".concat(count, " ");
        return this;
    };
    /**
     * Specifies a SELECT INTO statement to create a new table from the results of a query.
     * @param {string} newTable - The name of the new table to create.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.selectInto = function (newTable) {
        this.query += "SELECT INTO ".concat(newTable, " ");
        return this;
    };
    /**
     * Specifies an INSERT INTO SELECT statement to insert rows into a table from the results of a query.
     * @param {string} table - The name of the table to insert into.
     * @param {string[]} columns - The columns to insert data into.
     * @param {Nusql} subquery - The subquery to select data from.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.insertIntoSelect = function (table, columns, subquery) {
        this.query += "INSERT INTO ".concat(table, " (").concat(columns.join(', '), ") ").concat(subquery.build(), " ");
        return this;
    };
    /*********************************************************************************************
      * This functions section contain SQL Constraints
      * It allows you to create, modify, and manipulate SQL operations easily using method chaining.
    *********************************************************************************************/
    /**
 * Specifies a CONSTRAINT clause to define a custom constraint in the query.
 * @param {string} constraint - The custom constraint definition.
 * @returns {Nusql} - The Nusql instance for method chaining.
 */
    Nusql.prototype.constraint = function (constraint) {
        this.query += "CONSTRAINT ".concat(constraint, " ");
        return this;
    };
    /**
     * Specifies a NOT NULL constraint on the current column.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.notNull = function () {
        this.query += 'NOT NULL ';
        return this;
    };
    /**
     * Specifies a UNIQUE constraint on the current column.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.unique = function () {
        this.query += 'UNIQUE ';
        return this;
    };
    /**
     * Specifies a PRIMARY KEY constraint on the current column.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.primaryKey = function () {
        this.query += 'PRIMARY KEY ';
        return this;
    };
    /**
     * Specifies a FOREIGN KEY constraint on the current column.
     * @param {string} references - The referenced table and column(s).
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.foreignKey = function (column, references) {
        this.query += "FOREIGN KEY (".concat(column, ") REFERENCES ").concat(references, " ");
        return this;
    };
    /**
     * Specifies a CHECK constraint on the current column.
     * @param {string} condition - The condition for the CHECK constraint.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.check = function (condition) {
        this.query += "CHECK (".concat(condition, ") ");
        return this;
    };
    /**
     * Specifies a DEFAULT constraint on the current column.
     * @param {string} value - The default value for the column.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.default = function (value) {
        this.query += "DEFAULT ".concat(value, " ");
        return this;
    };
    /*********************************************************************************************
      * This functions section contain SQL Indexing
      * It allows you to create, modify, and manipulate SQL operations easily using method chaining.
    *********************************************************************************************/
    /**
     * Specifies an INDEX clause to create an index on the current column(s).
     * @param {string} indexName - The name of the index.
     * @returns {Nusql} - The Nusql instance for method chaining.
    */
    Nusql.prototype.index = function (indexName) {
        this.query += "INDEX ".concat(indexName, " ");
        return this;
    };
    /**
     * Specifies an AUTO_INCREMENT property for the current column.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.autoIncrement = function () {
        this.query += 'AUTO_INCREMENT ';
        return this;
    };
    /*********************************************************************************************
      * This functions section contain SQL Database Management,
      * It allows you to create, modify, and manipulate SQL operations easily using method chaining.
    *********************************************************************************************/
    /**
     * Specifies a CREATE DATABASE statement to create a new database.
     * @param {string} dbName - The name of the database to create.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.createDatabase = function (dbName) {
        this.query = "CREATE DATABASE IF NOT EXISTS ".concat(dbName, ";");
        return this;
    };
    /**
     * Specifies a DROP DATABASE statement to drop an existing database.
     * @param {string} dbName - The name of the database to drop.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.dropDatabase = function (dbName) {
        this.query = "DROP DATABASE IF EXISTS ".concat(dbName, ";");
        return this;
    };
    /**
     * Specifies a backup database command to create a backup of an existing database.
     * @param {string} dbName - The name of the database to backup.
     * @param {string} backupPath - The path where the backup will be stored.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.backupDatabase = function (dbName, backupPath) {
        this.query = "BACKUP DATABASE ".concat(dbName, " TO DISK = '").concat(backupPath, "'");
        return this;
    };
    /*********************************************************************************************
      * This functions section contain Build, create functions,
      * It allows you to create, modify, and manipulate SQL operations easily using method chaining.
    *********************************************************************************************/
    /**
     * Builds and returns the SQL query as a string.
     * @returns {string} - The generated SQL query.
     */
    Nusql.prototype.build = function () {
        var buildQuery = this.query.trim();
        this.query = '';
        return buildQuery;
    };
    Nusql.create = function () {
        return new Nusql();
    };
    return Nusql;
}());
exports.default = Nusql;
