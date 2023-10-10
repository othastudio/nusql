"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../src/index"));
describe('Nusql core testing', function () {
    it('should construct an instance', function () {
        var nusql = index_1.default.create();
        expect(nusql).toBeInstanceOf(index_1.default);
    });
});

describe('Nusql Data types', function () {
    var nusql;

    beforeEach(function () {
        nusql = index_1.default.create();
    });

    it('should generate a CHAR column type with a specified size', function () {
        nusql.char(10);
        expect(nusql.build()).toBe('CHAR(10)');
    });

    it('should generate a VARCHAR column type with a specified size', function () {
        nusql.varchar(20);
        expect(nusql.build()).toBe('VARCHAR(20)');
    });

    it('should generate a TEXT column type', function () {
        nusql.text();
        expect(nusql.build()).toBe('TEXT');
    });

    it('should generate a NCHAR column type with a specified size', function () {
        nusql.nchar(5);
        expect(nusql.build()).toBe('NCHAR(5)');
    });

    it('should generate a NVARCHAR column type with a specified size', function () {
        nusql.nvarchar(15);
        expect(nusql.build()).toBe('NVARCHAR(15)');
    });

    it('should generate a NTEXT column type', function () {
        nusql.ntext();
        expect(nusql.build()).toBe('NTEXT');
    });
});
/*
describe('Nusql methods', function () {
    var nusql;
    beforeEach(function () {
        nusql = index_1.default.create();
    });
    it('should generate a SELECT query', function () {
        nusql.select('column1, column2');
        expect(nusql.build()).toBe('SELECT column1, column2');
    });
    it('should generate a FROM query', function () {
        nusql.from('table1');
        expect(nusql.build()).toBe('FROM table1');
    });
    it('should generate a WHERE query', function () {
        nusql.where('condition1');
        expect(nusql.build()).toBe('WHERE condition1');
    });
    it('should generate an ORDER BY query', function () {
        nusql.orderBy('column1', 'ASC');
        expect(nusql.build()).toBe('ORDER BY column1 ASC');
    });
    it('should generate an ORDER BY ASC query', function () {
        nusql.orderByAsc('column2');
        expect(nusql.build()).toBe('ORDER BY column2 ASC');
    });
    it('should generate an ORDER BY DESC query', function () {
        nusql.orderByDesc('column3');
        expect(nusql.build()).toBe('ORDER BY column3 DESC');
    });
    it('should generate a GROUP BY query', function () {
        nusql.groupBy('field1');
        expect(nusql.build()).toBe('GROUP BY field1');
    });
    it('should generate a HAVING query', function () {
        nusql.having('condition2');
        expect(nusql.build()).toBe('HAVING condition2');
    });
    it('should generate an INNER JOIN query', function () {
        nusql.innerJoin('table2', 'condition3');
        expect(nusql.build()).toBe('INNER JOIN table2 ON condition3');
    });
    it('should generate a LEFT JOIN query', function () {
        nusql.leftJoin('table3', 'condition4');
        expect(nusql.build()).toBe('LEFT JOIN table3 ON condition4');
    });
    it('should generate a RIGHT JOIN query', function () {
        nusql.rightJoin('table4', 'condition5');
        expect(nusql.build()).toBe('RIGHT JOIN table4 ON condition5');
    });
    it('should generate a FULL OUTER JOIN query', function () {
        nusql.fullOuterJoin('table5', 'condition6');
        expect(nusql.build()).toBe('FULL OUTER JOIN table5 ON condition6');
    });
    it('should generate a UNION query', function () {
        var subquery = new index_1.default().select('column').from('table').where('condition');
        nusql.union(subquery);
        expect(nusql.build()).toBe('UNION (SELECT column FROM table WHERE condition)');
    });
    it('should generate an INSERT INTO query', function () {
        var values = { column1: 'value1', column2: 'value2' };
        nusql.insertInto('table', values);
        expect(nusql.build()).toBe("INSERT INTO table (column1, column2) VALUES ('value1', 'value2')");
    });
    it('should generate an UPDATE query', function () {
        var values = { column1: 'value1', column2: 'value2' };
        nusql.update('table', values);
        expect(nusql.build()).toBe("UPDATE table SET column1 = 'value1', column2 = 'value2'");
    });
    it('should generate a DELETE FROM query', function () {
        nusql.deleteFrom('table');
        expect(nusql.build()).toBe('DELETE FROM table');
    });
    it('should generate a CREATE TABLE statement with column definitions', function () {
        var tableName = 'my_table';
        var columns = {
            column1: 'INT',
            column2: 'VARCHAR(50)',
        };
        nusql.createTable(tableName, columns);
        expect(nusql.build()).toBe('CREATE TABLE my_table (column1 INT, column2 VARCHAR(50))');
    });
    it('should generate an ALTER TABLE query', function () {
        nusql.alterTable('table', 'ADD COLUMN column3 INT');
        expect(nusql.build()).toBe('ALTER TABLE table ADD COLUMN column3 INT');
    });
    it('should generate a DROP TABLE query', function () {
        nusql.dropTable('table');
        expect(nusql.build()).toBe('DROP TABLE table');
    });
    it('should generate a DISTINCT query', function () {
        nusql.distinct();
        expect(nusql.build()).toBe('DISTINCT');
    });
    it('should generate an AS query', function () {
        nusql.as('alias');
        expect(nusql.build()).toBe('AS alias');
    });
    it('should generate a COUNT query', function () {
        nusql.count('column1');
        expect(nusql.build()).toBe('COUNT(column1)');
    });
    it('should generate a SUM query', function () {
        nusql.sum('column2');
        expect(nusql.build()).toBe('SUM(column2)');
    });
    it('should generate an AVG query', function () {
        nusql.avg('column3');
        expect(nusql.build()).toBe('AVG(column3)');
    });
    it('should generate a MAX query', function () {
        nusql.max('column4');
        expect(nusql.build()).toBe('MAX(column4)');
    });
    it('should generate a MIN query', function () {
        nusql.min('column5');
        expect(nusql.build()).toBe('MIN(column5)');
    });
    it('should generate a BETWEEN query', function () {
        nusql.between('column6', 10, 20);
        expect(nusql.build()).toBe('WHERE column6 BETWEEN 10 AND 20');
    });
    it('should generate a LIKE query', function () {
        nusql.like('column7', '%pattern%');
        expect(nusql.build()).toBe('WHERE column7 LIKE \'%pattern%\'');
    });
    it('should generate an IN query', function () {
        nusql.in('column8', ['value1', 'value2', 'value3']);
        expect(nusql.build()).toBe('WHERE column8 IN (\'value1\', \'value2\', \'value3\')');
    });
    it('should generate an IS NULL query', function () {
        nusql.isNull('column9');
        expect(nusql.build()).toBe('WHERE column9 IS NULL');
    });
    it('should generate an IS NOT NULL query', function () {
        nusql.isNotNull('column10');
        expect(nusql.build()).toBe('WHERE column10 IS NOT NULL');
    });
    it('should generate an AND condition', function () {
        nusql.and('condition1');
        expect(nusql.build()).toBe('AND condition1');
    });
    it('should generate an OR condition', function () {
        nusql.or('condition2');
        expect(nusql.build()).toBe('OR condition2');
    });
    it('should generate a LIMIT query', function () {
        nusql.limit(10);
        expect(nusql.build()).toBe('LIMIT 10');
    });
    it('should generate an OFFSET query', function () {
        nusql.offset(5);
        expect(nusql.build()).toBe('OFFSET 5');
    });
    it('should generate a GROUP_CONCAT function with the specified column and separator', function () {
        var column = 'column_name';
        var separator = ', ';
        var orderBy = 'column_name ASC';
        nusql.groupByConcat(column, separator, orderBy);
        var expectedSql = "GROUP_CONCAT(".concat(column, " ORDER BY ").concat(orderBy, " SEPARATOR '").concat(separator, "')");
        expect(nusql.build()).toBe(expectedSql);
    });
    it('should generate a GROUP_CONCAT function without an ORDER BY clause when orderBy is not specified', function () {
        var column = 'column_name';
        var separator = ', ';
        nusql.groupByConcat(column, separator);
        var expectedSql = "GROUP_CONCAT(".concat(column, " SEPARATOR '").concat(separator, "')");
        expect(nusql.build()).toBe(expectedSql);
    });
});
describe('SQL Query Generation', function () {
    var nusql;
    beforeEach(function () {
        nusql = index_1.default.create();
    });
    it('should generate the correct SQL query to test select, from, where, and', function () {
        nusql
            .select('ProductName, Price')
            .from('Products')
            .where("Category = 'Electronics'")
            .and('Price < 500.00');
        var expectedSql = 'SELECT ProductName, Price FROM Products WHERE Category = \'Electronics\' AND Price < 500.00';
        expect(nusql.build()).toBe(expectedSql);
    });
    it('should generate a CREATE TABLE statement with column definitions', function () {
        var tableName = 'students';
        var columns = {
            studentID: nusql.int().primaryKey().build(),
            studentName: nusql.varchar(50).build(),
        };
        var nusqlQuery = nusql.createTable(tableName, columns);
        var sqlQuery = nusqlQuery.build();
        var expectedSql = 'CREATE TABLE students (studentID INT PRIMARY KEY, studentName VARCHAR(50))';
        expect(sqlQuery).toBe(expectedSql);
    });
    it('should generate the correct SQL query for INSERT INTO', function () {
        nusql
            .insertInto('Students', {
            StudentID: 1,
            StudentName: 'John Doe'
        });
        var expectedSql = "INSERT INTO Students (StudentID, StudentName) VALUES (1, 'John Doe')";
        expect(nusql.build()).toBe(expectedSql);
    });
    it('should generate the correct SQL query for updating a student name', function () {
        nusql
            .update('Students', {
            StudentName: 'Jane Smith'
        })
            .where('StudentID = 1');
        var expectedSql = "UPDATE Students SET StudentName = 'Jane Smith' WHERE StudentID = 1";
        expect(nusql.build()).toBe(expectedSql);
    });
    it('should generate the correct SQL query to delete from a table with a WHERE condition', function () {
        nusql
            .deleteFrom('Students')
            .where('StudentID = 1');
        var expectedSql = 'DELETE FROM Students WHERE StudentID = 1';
        expect(nusql.build()).toBe(expectedSql);
    });
    it('should generate the correct SQL query to alter a table by adding a column', function () {
        nusql
            .alterTable('Students', 'ADD Age INT');
        var expectedSql = 'ALTER TABLE Students ADD Age INT';
        expect(nusql.build()).toBe(expectedSql);
    });
    it('should generate the correct SQL query to insert multiple rows into a table', function () {
        var values = [{
                OrderID: 1,
                CustomerID: 121,
                OrderDate: '2023-01-15',
                TotalAmount: 250.50,
            }, {
                OrderID: 2,
                CustomerID: 101,
                OrderDate: '2023-03-15',
                TotalAmount: 350.50,
            }, {
                OrderID: 4,
                CustomerID: 102,
                OrderDate: '2023-02-15',
                TotalAmount: 2550.50,
            }];
        nusql
            .insertInto('Orders', values);
        var expectedSql = "INSERT INTO Orders (OrderID, CustomerID, OrderDate, TotalAmount) VALUES (1, 121, '2023-01-15', 250.5), (2, 101, '2023-03-15', 350.5), (4, 102, '2023-02-15', 2550.5)";
        expect(nusql.build()).toBe(expectedSql);
    });
    it('should generate the correct SQL query for inserting a single row into a table', function () {
        nusql
            .insertInto('Orders', {
            OrderID: 1,
            CustomerID: 101,
            OrderDate: '2023-01-15',
            TotalAmount: 250.50,
        });
        var expectedSql = "INSERT INTO Orders (OrderID, CustomerID, OrderDate, TotalAmount) VALUES (1, 101, '2023-01-15', 250.5)";
        expect(nusql.build()).toBe(expectedSql);
    });
    it('should generate the correct SQL query for a FOREIGN KEY constraint with multiple columns', function () {
        var columns = {
            OrderID: nusql.int().primaryKey().build(),
            CustomerID: nusql.int().build(),
            ProductID: nusql.int().build(),
        };
        nusql
            .createTable('OrderDetails', columns)
            .foreignKey(['CustomerID', 'ProductID'], 'Customers', ['CustomerID', 'ProductID']);
        var expectedSql = "CREATE TABLE OrderDetails (OrderID INT PRIMARY KEY, CustomerID INT, ProductID INT) FOREIGN KEY (CustomerID, ProductID) REFERENCES Customers(CustomerID, ProductID)";
        expect(nusql.build()).toBe(expectedSql);
    });
    it('should generate the correct SQL query for selecting count and average', function () {
        nusql
            .select('COUNT(*) AS TotalOrders, AVG(TotalAmount) AS AverageAmount')
            .from('Orders');
        var expectedSql = 'SELECT COUNT(*) AS TotalOrders, AVG(TotalAmount) AS AverageAmount FROM Orders';
        expect(nusql.build()).toBe(expectedSql);
    });
    it('should generate the correct SQL query for subquery with IN clause', function () {
        nusql
            .select('CustomerName')
            .from('Customers')
            .where('CustomerID IN (SELECT DISTINCT CustomerID FROM Orders WHERE TotalAmount > 500.00)');
        var expectedSql = 'SELECT CustomerName FROM Customers WHERE CustomerID IN (SELECT DISTINCT CustomerID FROM Orders WHERE TotalAmount > 500.00)';
        expect(nusql.build()).toBe(expectedSql);
    });
});
*/