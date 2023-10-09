import Nusql from '../index';

describe('Nusql core testing', () => {
    it('should construct an instance', () => {
        const nusql = Nusql.create();
        expect(nusql).toBeInstanceOf(Nusql);
    });
});

describe('Nusql Data types', () => {
    let nusql;

    beforeEach(() => {
        nusql = Nusql.create();
    });

    it('should generate a CHAR column type with a specified size', () => {
        nusql.char(10);
        expect(nusql.build()).toBe('CHAR(10)');
    });

    it('should generate a VARCHAR column type with a specified size', () => {
        nusql.varchar(20);
        expect(nusql.build()).toBe('VARCHAR(20)');
    });

    it('should generate a BINARY column type with a specified size', () => {
        nusql.binary(15);
        expect(nusql.build()).toBe('BINARY(15)');
    });

    it('should generate a VARBINARY column type with a specified size', () => {
        nusql.varbinary(25);
        expect(nusql.build()).toBe('VARBINARY(25)');
    });

    it('should generate a TINYBLOB column type', () => {
        nusql.tinyblob();
        expect(nusql.build()).toBe('TINYBLOB');
    });

    it('should generate a TINYTEXT column type', () => {
        nusql.tinytext();
        expect(nusql.build()).toBe('TINYTEXT');
    });

    it('should generate a TEXT column type with a specified size', () => {
        nusql.text(30);
        expect(nusql.build()).toBe('TEXT(30)');
    });

    it('should generate a BLOB column type with a specified size', () => {
        nusql.blob(35);
        expect(nusql.build()).toBe('BLOB(35)');
    });

    it('should generate a MEDIUMTEXT column type', () => {
        nusql.mediumtext();
        expect(nusql.build()).toBe('MEDIUMTEXT');
    });

    it('should generate a MEDIUMBLOB column type', () => {
        nusql.mediumblob();
        expect(nusql.build()).toBe('MEDIUMBLOB');
    });

    it('should generate a LONGTEXT column type', () => {
        nusql.longtext();
        expect(nusql.build()).toBe('LONGTEXT');
    });

    it('should generate a LONGBLOB column type', () => {
        nusql.longblob();
        expect(nusql.build()).toBe('LONGBLOB');
    });

    it('should generate an ENUM column type with specified values', () => {
        nusql.enum('Value1', 'Value2', 'Value3');
        expect(nusql.build()).toBe("ENUM('Value1', 'Value2', 'Value3')");
    });

    it('should generate a SET column type with specified values', () => {
        nusql.set('Option1', 'Option2', 'Option3');
        console.log(nusql.create)
        expect(nusql.build()).toBe("SET('Option1', 'Option2', 'Option3')");
    });

    it('should generate a BIT column type with a specified size', () => {
        nusql.bit(8);
        expect(nusql.build()).toBe('BIT(8)');
    });

    it('should generate a TINYINT column type with a specified size', () => {
        nusql.tinyint(4);
        expect(nusql.build()).toBe('TINYINT(4)');
    });

    it('should generate a BOOL column type', () => {
        nusql.bool();
        expect(nusql.build()).toBe('BOOL');
    });

    it('should generate a BOOLEAN column type', () => {
        nusql.boolean();
        expect(nusql.build()).toBe('BOOLEAN');
    });

    it('should generate a SMALLINT column type with a specified size', () => {
        nusql.smallint(6);
        expect(nusql.build()).toBe('SMALLINT(6)');
    });

    it('should generate a MEDIUMINT column type with a specified size', () => {
        nusql.mediumint(8);
        expect(nusql.build()).toBe('MEDIUMINT(8)');
    });

    it('should generate an INT column type with a specified size', () => {
        nusql.int(10);
        expect(nusql.build()).toBe('INT(10)');
    });

    it('should generate an INTEGER column type with a specified size', () => {
        nusql.integer(10);
        expect(nusql.build()).toBe('INTEGER(10)');
    });

    it('should generate a BIGINT column type with a specified size', () => {
        nusql.bigint(19);
        expect(nusql.build()).toBe('BIGINT(19)');
    });

    it('should generate a FLOAT column type', () => {
        nusql.float();
        expect(nusql.build()).toBe('FLOAT');
    });

    it('should generate a FLOAT column type with size', () => {
        nusql.float(10);
        expect(nusql.build()).toBe('FLOAT(10)');
    });

    it('should generate a FLOAT column type with size and precision', () => {
        nusql.float(10, 2);
        expect(nusql.build()).toBe('FLOAT(10, 2)');
    });

    it('should generate a DOUBLE column type with a specified size and precision', () => {
        nusql.double(15, 3);
        expect(nusql.build()).toBe('DOUBLE(15, 3)');
    });

    it('should generate a DOUBLE PRECISION column type with a specified size and precision', () => {
        nusql.doublePrecision(15, 3);
        expect(nusql.build()).toBe('DOUBLE PRECISION(15, 3)');
    });

    it('should generate a DECIMAL column type with a specified size and precision', () => {
        nusql.decimal(12, 4);
        expect(nusql.build()).toBe('DECIMAL(12, 4)');
    });

    it('should generate a DEC column type with a specified size and precision', () => {
        nusql.dec(12, 4);
        expect(nusql.build()).toBe('DEC(12, 4)');
    });

    it('should generate a DATE column type', () => {
        nusql.date();
        expect(nusql.build()).toBe('DATE');
    });

    it('should generate a DATETIME column type', () => {
        nusql.datetime();
        expect(nusql.build()).toBe('DATETIME');
    });

    it('should generate a DATETIME column type with fractional seconds precision', () => {
        nusql.datetime(6);
        expect(nusql.build()).toBe('DATETIME(6)');
    });

    it('should generate a TIMESTAMP column type', () => {
        nusql.timestamp();
        expect(nusql.build()).toBe('TIMESTAMP');
    });

    it('should generate a TIMESTAMP column type with fractional seconds precision', () => {
        nusql.timestamp(6);
        expect(nusql.build()).toBe('TIMESTAMP(6)');
    });

    it('should generate a TIME column type', () => {
        nusql.time();
        expect(nusql.build()).toBe('TIME');
    });

    it('should generate a TIME column type with fractional seconds precision', () => {
        nusql.time(3);
        expect(nusql.build()).toBe('TIME(3)');
    });

    it('should generate a YEAR column type', () => {
        nusql.year();
        expect(nusql.build()).toBe('YEAR');
    });
});

describe('Nusql methods', () => {
    let nusql;

    beforeEach(() => {
        nusql = Nusql.create();
    });

    it('should generate a SELECT query', () => {
        nusql.select('column1, column2');
        expect(nusql.build()).toBe('SELECT column1, column2');
    });

    it('should generate a FROM query', () => {
        nusql.from('table1');
        expect(nusql.build()).toBe('FROM table1');
    });

    it('should generate a WHERE query', () => {
        nusql.where('condition1');
        expect(nusql.build()).toBe('WHERE condition1');
    });

    it('should generate an ORDER BY query', () => {
        nusql.orderBy('column1', 'ASC');
        expect(nusql.build()).toBe('ORDER BY column1 ASC');
    });

    it('should generate an ORDER BY ASC query', () => {
        nusql.orderByAsc('column2');
        expect(nusql.build()).toBe('ORDER BY column2 ASC');
    });

    it('should generate an ORDER BY DESC query', () => {
        nusql.orderByDesc('column3');
        expect(nusql.build()).toBe('ORDER BY column3 DESC');
    });

    it('should generate a GROUP BY query', () => {
        nusql.groupBy('field1');
        expect(nusql.build()).toBe('GROUP BY field1');
    });

    it('should generate a HAVING query', () => {
        nusql.having('condition2');
        expect(nusql.build()).toBe('HAVING condition2');
    });

    it('should generate an INNER JOIN query', () => {
        nusql.innerJoin('table2', 'condition3');
        expect(nusql.build()).toBe('INNER JOIN table2 ON condition3');
    });

    it('should generate a LEFT JOIN query', () => {
        nusql.leftJoin('table3', 'condition4');
        expect(nusql.build()).toBe('LEFT JOIN table3 ON condition4');
    });

    it('should generate a RIGHT JOIN query', () => {
        nusql.rightJoin('table4', 'condition5');
        expect(nusql.build()).toBe('RIGHT JOIN table4 ON condition5');
    });

    it('should generate a FULL OUTER JOIN query', () => {
        nusql.fullOuterJoin('table5', 'condition6');
        expect(nusql.build()).toBe('FULL OUTER JOIN table5 ON condition6');
    });

    it('should generate a UNION query', () => {
        const subquery = new Nusql().select('column').from('table').where('condition');
        nusql.union(subquery);
        expect(nusql.build()).toBe('UNION (SELECT column FROM table WHERE condition)');
    });

    it('should generate an INSERT INTO query', () => {
        const values = { column1: 'value1', column2: 'value2' };
        nusql.insertInto('table', values);
        expect(nusql.build()).toBe('INSERT INTO table (column1, column2) VALUES (?, ?)');
    });

    it('should generate an UPDATE query', () => {
        const values = { column1: 'value1', column2: 'value2' };
        nusql.update('table', values);
        expect(nusql.build()).toBe('UPDATE table SET column1 = ?, column2 = ?');
    });

    it('should generate a DELETE FROM query', () => {
        nusql.deleteFrom('table');
        expect(nusql.build()).toBe('DELETE FROM table');
    });

    it('should generate a CREATE TABLE statement with column definitions', () => {
        const tableName = 'my_table';
        const columns = {
            column1: 'INT',
            column2: 'VARCHAR(50)',
        };
        nusql.createTable(tableName, columns);
        expect(nusql.build()).toBe('CREATE TABLE my_table (column1 INT, column2 VARCHAR(50))');
    });

    it('should generate an ALTER TABLE query', () => {
        nusql.alterTable('table', 'ADD COLUMN column3 INT');
        expect(nusql.build()).toBe('ALTER TABLE table ADD COLUMN column3 INT');
    });

    it('should generate a DROP TABLE query', () => {
        nusql.dropTable('table');
        expect(nusql.build()).toBe('DROP TABLE table');
    });

    it('should generate a DISTINCT query', () => {
        nusql.distinct();
        expect(nusql.build()).toBe('DISTINCT');
    });

    it('should generate an AS query', () => {
        nusql.as('alias');
        expect(nusql.build()).toBe('AS alias');
    });

    it('should generate a COUNT query', () => {
        nusql.count('column1');
        expect(nusql.build()).toBe('COUNT(column1)');
    });

    it('should generate a SUM query', () => {
        nusql.sum('column2');
        expect(nusql.build()).toBe('SUM(column2)');
    });

    it('should generate an AVG query', () => {
        nusql.avg('column3');
        expect(nusql.build()).toBe('AVG(column3)');
    });

    it('should generate a MAX query', () => {
        nusql.max('column4');
        expect(nusql.build()).toBe('MAX(column4)');
    });

    it('should generate a MIN query', () => {
        nusql.min('column5');
        expect(nusql.build()).toBe('MIN(column5)');
    });

    it('should generate a BETWEEN query', () => {
        nusql.between('column6', 10, 20);
        expect(nusql.build()).toBe('WHERE column6 BETWEEN 10 AND 20');
    });

    it('should generate a LIKE query', () => {
        nusql.like('column7', '%pattern%');
        expect(nusql.build()).toBe('WHERE column7 LIKE \'%pattern%\'');
    });

    it('should generate an IN query', () => {
        nusql.in('column8', ['value1', 'value2', 'value3']);
        expect(nusql.build()).toBe('WHERE column8 IN (\'value1\', \'value2\', \'value3\')');
    });

    it('should generate an IS NULL query', () => {
        nusql.isNull('column9');
        expect(nusql.build()).toBe('WHERE column9 IS NULL');
    });

    it('should generate an IS NOT NULL query', () => {
        nusql.isNotNull('column10');
        expect(nusql.build()).toBe('WHERE column10 IS NOT NULL');
    });

    it('should generate an AND condition', () => {
        nusql.and('condition1');
        expect(nusql.build()).toBe('AND condition1');
    });

    it('should generate an OR condition', () => {
        nusql.or('condition2');
        expect(nusql.build()).toBe('OR condition2');
    });

    it('should generate a LIMIT query', () => {
        nusql.limit(10);
        expect(nusql.build()).toBe('LIMIT 10');
    });

    it('should generate an OFFSET query', () => {
        nusql.offset(5);
        expect(nusql.build()).toBe('OFFSET 5');
    });

    it('should generate a GROUP_CONCAT function with the specified column and separator', () => {
        const column = 'column_name';
        const separator = ', ';
        const orderBy = 'column_name ASC';

        nusql.groupByConcat(column, separator, orderBy);

        const expectedSql = `GROUP_CONCAT(${column} ORDER BY ${orderBy} SEPARATOR '${separator}')`;
        expect(nusql.build()).toBe(expectedSql);
    });

    it('should generate a GROUP_CONCAT function without an ORDER BY clause when orderBy is not specified', () => {
        const column = 'column_name';
        const separator = ', ';

        nusql.groupByConcat(column, separator);

        const expectedSql = `GROUP_CONCAT(${column} SEPARATOR '${separator}')`;
        expect(nusql.build()).toBe(expectedSql);
    });
});

describe('SQL Query Generation easy level', () => {
    let nusql;

    beforeEach(() => {
        nusql = Nusql.create();
    });
    it('should generate the correct SQL query to test select, from, where, and', () => {
        nusql
            .select('ProductName, Price')
            .from('Products')
            .where("Category = 'Electronics'")
            .and('Price < 500.00');

        const expectedSql = 'SELECT ProductName, Price FROM Products WHERE Category = \'Electronics\' AND Price < 500.00';
        expect(nusql.build()).toBe(expectedSql);
    });
    
    it('should generate the correct SQL query to create a table', () => {
        const nusql = new Nusql();
        
        const columns:any = {
            StudentID: nusql.int(10).build(),
            StudentName: nusql.varchar(50).build()
        }
    
        nusql
            .createTable('Students', columns);
    
        const expectedSql = 'CREATE TABLE Students (StudentID INT PRIMARY KEY, StudentName VARCHAR(50)) ';
        expect(nusql.build()).toBe(expectedSql);
    });
});
