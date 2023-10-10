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
    /*********************************************************************************************
      * This functions section contain functions of queries for different SQL functions and queries,
      * It allows you to create, modify, and manipulate SQL operations easily using method chaining.
    *********************************************************************************************/
    /**
     * Specifies the columns to select in the SQL query.
     * @param {string} columns - The columns to select.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.select = function (columns) {
        this.query += "SELECT ".concat(columns, " ");
        return this;
    };
    /**
     * Specifies the table from which to retrieve data in the SQL query.
     * @param {string} table - The table name.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.from = function (table) {
        this.query += "FROM ".concat(table, " ");
        return this;
    };
    /**
     * Adds a WHERE clause to the SQL query to filter results based on a condition.
     * @param {string} condition - The condition to apply in the WHERE clause.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.where = function (condition) {
        this.query += "WHERE ".concat(condition, " ");
        return this;
    };
    /**
     * Specifies the column to use for ordering the result set and the sort direction (ASC or DESC).
     * @param {string} column - The column to use for ordering.
     * @param {'ASC' | 'DESC'} direction - The sort direction (optional, defaults to 'ASC').
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.orderBy = function (column, direction) {
        if (direction === void 0) { direction = 'ASC'; }
        this.query += "ORDER BY ".concat(column, " ").concat(direction, " ");
        return this;
    };
    /**
     * Adds an ascending (ASC) sorting to the ORDER BY clause.
     * @param {string} column - The column to sort by.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.orderByAsc = function (column) {
        this.query += "ORDER BY ".concat(column, " ASC ");
        return this;
    };
    /**
     * Adds a descending (DESC) sorting to the ORDER BY clause.
     * @param {string} column - The column to sort by.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.orderByDesc = function (column) {
        this.query += "ORDER BY ".concat(column, " DESC ");
        return this;
    };
    /**
     * Adds a GROUP BY clause to the SQL query to group results by a specified field.
     * @param {string} field - The field to group by.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.groupBy = function (field) {
        this.query += "GROUP BY ".concat(field, " ");
        return this;
    };
    /**
     * Adds a HAVING clause to the SQL query with a specified condition.
     * @param {string} condition - The condition for the HAVING clause.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.having = function (condition) {
        this.query += "HAVING ".concat(condition, " ");
        return this;
    };
    /**
     * Adds an INNER JOIN clause to the SQL query with a specified table and join condition.
     * @param {string} table - The table to join.
     * @param {string} condition - The join condition.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.innerJoin = function (table, condition) {
        this.query += "INNER JOIN ".concat(table, " ON ").concat(condition, " ");
        return this;
    };
    /**
     * Adds a LEFT JOIN clause to the SQL query with a specified table and join condition.
     * @param {string} table - The table to join.
     * @param {string} condition - The join condition.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.leftJoin = function (table, condition) {
        this.query += "LEFT JOIN ".concat(table, " ON ").concat(condition, " ");
        return this;
    };
    /**
     * Adds a RIGHT JOIN clause to the SQL query with a specified table and join condition.
     * @param {string} table - The table to join.
     * @param {string} condition - The join condition.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.rightJoin = function (table, condition) {
        this.query += "RIGHT JOIN ".concat(table, " ON ").concat(condition, " ");
        return this;
    };
    /**
     * Adds a FULL OUTER JOIN clause to the SQL query with a specified table and join condition.
     * @param {string} table - The table to join.
     * @param {string} condition - The join condition.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.fullOuterJoin = function (table, condition) {
        this.query += "FULL OUTER JOIN ".concat(table, " ON ").concat(condition, " ");
        return this;
    };
    /**
     * Adds a UNION clause to the SQL query with the specified subquery.
     * @param {Nusql} query - The subquery to UNION with the main query.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.union = function (query) {
        this.query += "UNION (".concat(query.build(), ") ");
        return this;
    };
    /**
     * Adds an INSERT INTO statement to the SQL query with the specified table and values.
     * @param {string} table - The name of the table to insert into.
     * @param {Record<string, any>} values - An object containing the column-value pairs to insert.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.insertInto = function (table, values) {
        // Check if the values parameter is an array
        var isArray = Array.isArray(values);
        if (isArray) {
            // Handle inserting multiple rows
            if (values.length === 0) {
                // If the array is empty, do nothing
                return this;
            }
            var columns = Object.keys(values[0]).join(', ');
            var placeholdersArray = values.map(function (row) {
                return Object.values(row)
                    .map(function (value) {
                    if (typeof value === 'number') {
                        return value.toString(); // Convert numbers to strings without quotes
                    }
                    else {
                        return "'".concat(value, "'"); // Wrap strings in single quotes
                    }
                })
                    .join(', ');
            });
            var placeholders = placeholdersArray.join('), (');
            this.query += "INSERT INTO ".concat(table, " (").concat(columns, ") VALUES (").concat(placeholders, ") ");
        }
        else {
            // Handle inserting a single row (values is an object)
            var columns = Object.keys(values).join(', ');
            var placeholders = Object.values(values)
                .map(function (value) {
                if (typeof value === 'number') {
                    return value.toString(); // Convert numbers to strings without quotes
                }
                else {
                    return "'".concat(value, "'"); // Wrap strings in single quotes
                }
            })
                .join(', ');
            this.query += "INSERT INTO ".concat(table, " (").concat(columns, ") VALUES (").concat(placeholders, ") ");
        }
        return this;
    };
    /**
     * Adds an UPDATE statement to the SQL query with the specified table and values.
     * @param {string} table - The name of the table to update.
     * @param {Record<string, any>} values - An object containing the column-value pairs to update.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.update = function (table, values) {
        var columnsToUpdate = Object.entries(values)
            .map(function (_a) {
            var key = _a[0], value = _a[1];
            if (Number.isInteger(value)) {
                // If the value is an integer, treat it as an integer in the SQL query
                return "".concat(key, " = ").concat(value);
            }
            else {
                // If the value is not an integer, treat it as a string in single quotes
                return "".concat(key, " = '").concat(value, "'");
            }
        })
            .join(', ');
        this.query += "UPDATE ".concat(table, " SET ").concat(columnsToUpdate, " ");
        return this;
    };
    /**
     * Adds a DELETE FROM statement to the SQL query for the specified table.
     * @param {string} table - The name of the table from which to delete rows.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.deleteFrom = function (table) {
        this.query += "DELETE FROM ".concat(table, " ");
        return this;
    };
    /**
     * Adds a CREATE TABLE statement to the SQL query for creating a table with specified columns.
     * @param {string} table - The name of the table to create.
     * @param {Record<string, (type: Nusql) => Nusql>} columns - An object representing column names and their data types as functions.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.createTable = function (table, columns) {
        function parseObjectToSql(object) {
            var sqlColumns = [];
            for (var _i = 0, _a = Object.entries(object); _i < _a.length; _i++) {
                var _b = _a[_i], columnName = _b[0], columnDefinition = _b[1];
                sqlColumns.push("".concat(columnName, " ").concat(columnDefinition));
            }
            return sqlColumns.join(', ');
        }
        var sqlString = parseObjectToSql(columns);
        this.query += "CREATE TABLE ".concat(table, " (");
        this.query += sqlString;
        this.query += ") ";
        return this;
    };
    /**
 * Adds a FOREIGN KEY constraint to the table with the specified column(s) and references another table.
 * @param {string|string[]} columns - The column(s) to add the FOREIGN KEY constraint on.
 * @param {string} referencedTable - The name of the referenced table.
 * @param {string|string[]} referencedColumns - The column(s) in the referenced table.
 * @returns {Nusql} - The updated Nusql instance for method chaining.
 */
    Nusql.prototype.foreignKey = function (columns, referencedTable, referencedColumns) {
        if (!Array.isArray(columns)) {
            columns = [columns];
        }
        if (!Array.isArray(referencedColumns)) {
            referencedColumns = [referencedColumns];
        }
        var columnsStr = columns.join(', ');
        var referencedColumnsStr = referencedColumns.join(', ');
        this.query += "FOREIGN KEY (".concat(columnsStr, ") REFERENCES ").concat(referencedTable, "(").concat(referencedColumnsStr, ") ");
        return this;
    };
    /**
     * Generates an ALTER TABLE statement for the specified table with the given action.
     * @param {string} table - The name of the table to alter.
     * @param {string} action - The ALTER TABLE action to perform (e.g., "ADD COLUMN column_name data_type").
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.alterTable = function (table, action) {
        this.query += "ALTER TABLE ".concat(table, " ").concat(action, " ");
        return this;
    };
    /**
     * Generates a DROP TABLE statement for the specified table.
     * @param {string} table - The name of the table to drop.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.dropTable = function (table) {
        this.query += "DROP TABLE ".concat(table, " ");
        return this;
    };
    /**
     * Adds the DISTINCT keyword to the SELECT statement.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.distinct = function () {
        this.query += 'DISTINCT ';
        return this;
    };
    /**
     * Alias a column or table with a specified alias name.
     * @param {string} alias - The alias name.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.as = function (alias) {
        this.query += "AS ".concat(alias, " ");
        return this;
    };
    /**
     * Adds a COUNT aggregate function to the SELECT statement.
     * @param {string} column - The column to count.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.count = function (column) {
        this.query += "COUNT(".concat(column, ") ");
        return this;
    };
    /**
     * Adds a SUM aggregate function to the SELECT statement.
     * @param {string} column - The column to sum.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.sum = function (column) {
        this.query += "SUM(".concat(column, ") ");
        return this;
    };
    /**
     * Adds an AVG aggregate function to the SELECT statement.
     * @param {string} column - The column to average.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.avg = function (column) {
        this.query += "AVG(".concat(column, ") ");
        return this;
    };
    /**
     * Adds a MAX aggregate function to the SELECT statement.
     * @param {string} column - The column to find the maximum value.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.max = function (column) {
        this.query += "MAX(".concat(column, ") ");
        return this;
    };
    /**
     * Adds a MIN aggregate function to the SELECT statement.
     * @param {string} column - The column to find the minimum value.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.min = function (column) {
        this.query += "MIN(".concat(column, ") ");
        return this;
    };
    /**
     * Adds a WHERE clause with the BETWEEN operator.
     * @param {string} column - The column to check.
     * @param {any} value1 - The start of the range.
     * @param {any} value2 - The end of the range.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.between = function (column, value1, value2) {
        this.query += "WHERE ".concat(column, " BETWEEN ").concat(value1, " AND ").concat(value2, " ");
        return this;
    };
    /**
     * Adds a WHERE clause with the LIKE operator.
     * @param {string} column - The column to check.
     * @param {string} pattern - The pattern to match.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.like = function (column, pattern) {
        this.query += "WHERE ".concat(column, " LIKE '").concat(pattern, "' ");
        return this;
    };
    /**
     * Adds a WHERE clause with the IN operator.
     * @param {string} column - The column to check.
     * @param {string[]} values - An array of values to check against.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.in = function (column, values) {
        var formattedValues = values.map(function (value) { return "'".concat(value, "'"); }).join(', ');
        this.query += "WHERE ".concat(column, " IN (").concat(formattedValues, ") ");
        return this;
    };
    /**
     * Adds a WHERE clause to check if a column is NULL.
     * @param {string} column - The column to check for NULL.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.isNull = function (column) {
        this.query += "WHERE ".concat(column, " IS NULL ");
        return this;
    };
    /**
     * Adds a WHERE clause to check if a column is NOT NULL.
     * @param {string} column - The column to check for NOT NULL.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.isNotNull = function (column) {
        this.query += "WHERE ".concat(column, " IS NOT NULL ");
        return this;
    };
    /**
     * Adds an AND condition to the WHERE clause.
     * @param {string} condition - The condition to add.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.and = function (condition) {
        this.query += "AND ".concat(condition, " ");
        return this;
    };
    /**
     * Adds an OR condition to the WHERE clause.
     * @param {string} condition - The condition to add.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.or = function (condition) {
        this.query += "OR ".concat(condition, " ");
        return this;
    };
    /**
     * Adds a LIMIT clause to limit the number of rows returned in the result set.
     * @param {number} limit - The maximum number of rows to return.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.limit = function (limit) {
        this.query += "LIMIT ".concat(limit, " ");
        return this;
    };
    /**
     * Adds an OFFSET clause to skip a specified number of rows in the result set.
     * @param {number} offset - The number of rows to skip.
     * @returns {Nusql} - The Nusql instance for method chaining.
     */
    Nusql.prototype.offset = function (offset) {
        this.query += "OFFSET ".concat(offset, " ");
        return this;
    };
    /**
   * Adds a GROUP_CONCAT function to the SQL query for string aggregation.
   * @param {string} column - The column to concatenate.
   * @param {string} separator - The optional separator between concatenated values (default: ', ').
   * @param {string} orderBy - The optional ORDER BY clause for sorting the concatenated values.
   * @returns {Nusql} - The updated Nusql instance for method chaining.
   */
    Nusql.prototype.groupByConcat = function (column, separator, orderBy) {
        if (separator === void 0) { separator = ', '; }
        // Start building the GROUP_CONCAT function with the provided column
        this.query += "GROUP_CONCAT(".concat(column);
        // Add an optional ORDER BY clause if specified
        if (orderBy) {
            this.query += " ORDER BY ".concat(orderBy);
        }
        // Complete the function with an optional separator and closing parenthesis
        this.query += " SEPARATOR '".concat(separator, "') ");
        return this; // Return the updated Nusql instance for method chaining
    };
    /**
   * Adds a conditional expression using the CASE WHEN statement.
   * @param {string} condition - The condition to evaluate.
   * @param {string} result - The result value when the condition is true.
   * @param {string} elseResult - The optional result value when the condition is false.
   * @returns {Nusql} - The updated Nusql instance for method chaining.
   */
    Nusql.prototype.caseWhen = function (condition, result, elseResult) {
        // Start building the CASE WHEN statement with the provided condition
        this.query += "CASE WHEN ".concat(condition, " THEN ").concat(result);
        // Add an optional ELSE clause if an elseResult is provided
        if (elseResult) {
            this.query += " ELSE ".concat(elseResult);
        }
        // Complete the statement with an END clause
        this.query += ' END ';
        return this; // Return the updated Nusql instance for method chaining
    };
    /**
   * Casts a column or value to a specified data type using the CAST function.
   * @param {string} columnOrValue - The column or value to cast.
   * @param {string} dataType - The target data type for casting.
   * @returns {Nusql} - The updated Nusql instance for method chaining.
   */
    Nusql.prototype.cast = function (columnOrValue, dataType) {
        // Use the CAST function to cast the column or value to the specified data type
        this.query += "CAST(".concat(columnOrValue, " AS ").concat(dataType, ") ");
        return this; // Return the updated Nusql instance for method chaining
    };
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
