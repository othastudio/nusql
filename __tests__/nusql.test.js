"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../src/index"));

describe('Nusql core iting', function () {
    it('should construct an instance', function () {
        var nusql = index_1.default.create();
        expect(nusql).toBeInstanceOf(index_1.default);
    });
});

describe('nusql Data types', function () {
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
    it('should generate a BINARY column type with a specified size', function () {
        nusql.binary(8);
        expect(nusql.build()).toBe('BINARY(8)');
    });

    it('should generate a VARBINARY column type with a specified size', function () {
        nusql.varbinary(16);
        expect(nusql.build()).toBe('VARBINARY(16)');
    });

    it('should generate a BLOB column type with a specified size', function () {
        nusql.blob(32);
        expect(nusql.build()).toBe('BLOB(32)');
    });
    it('should generate a DATE column type', function () {
        nusql.date();
        expect(nusql.build()).toBe('DATE');
    });

    it('should generate a DATETIME column type with fractional seconds precision', function () {
        nusql.datetime(3);
        expect(nusql.build()).toBe('DATETIME(3)');
    });

    it('should generate a TIMESTAMP column type with fractional seconds precision', function () {
        nusql.timestamp(6);
        expect(nusql.build()).toBe('TIMESTAMP(6)');
    });

    it('should generate a TIME column type with fractional seconds precision', function () {
        nusql.time(2);
        expect(nusql.build()).toBe('TIME(2)');
    });

    it('should generate a YEAR column type', function () {
        nusql.year();
        expect(nusql.build()).toBe('YEAR');
    });
    it('should generate a BIT column type with a specified size', function () {
        nusql.bit(8);
        expect(nusql.build()).toBe('BIT(8)');
    });

    it('should generate a TINYINT column type with a specified size', function () {
        nusql.tinyint(4);
        expect(nusql.build()).toBe('TINYINT(4)');
    });

    it('should generate a BOOLEAN (BOOL) column type', function () {
        nusql.boolean();
        expect(nusql.build()).toBe('BOOLEAN');
    });

    it('should generate a SMALLINT column type with a specified size', function () {
        nusql.smallint(6);
        expect(nusql.build()).toBe('SMALLINT(6)');
    });

    it('should generate a MEDIUMINT column type with a specified size', function () {
        nusql.mediumint(9);
        expect(nusql.build()).toBe('MEDIUMINT(9)');
    });

    it('should generate an INT column type with a specified size', function () {
        nusql.int(11);
        expect(nusql.build()).toBe('INT(11)');
    });

    it('should generate an INTEGER column type with a specified size', function () {
        nusql.integer(11);
        expect(nusql.build()).toBe('INTEGER(11)');
    });

    it('should generate a BIGINT column type with a specified size', function () {
        nusql.bigint(20);
        expect(nusql.build()).toBe('BIGINT(20)');
    });

    it('should generate a FLOAT column type with size and decimal places', function () {
        nusql.float(10, 2);
        expect(nusql.build()).toBe('FLOAT(10, 2)');
    });

    it('should generate a FLOAT column type with precision', function () {
        nusql.floatPrecision(5);
        expect(nusql.build()).toBe('FLOAT(5)');
    });

    it('should generate a DOUBLE column type with size and decimal places', function () {
        nusql.double(15, 4);
        expect(nusql.build()).toBe('DOUBLE(15, 4)');
    });

    it('should generate a DOUBLE PRECISION column type with size and decimal places', function () {
        nusql.doublePrecision(18, 6);
        expect(nusql.build()).toBe('DOUBLE PRECISION(18, 6)');
    });

    it('should generate a DECIMAL column type with size and decimal places', function () {
        nusql.decimal(12, 3);
        expect(nusql.build()).toBe('DECIMAL(12, 3)');
    });

    it('should generate a DEC column type with size and decimal places', function () {
        nusql.dec(10, 2);
        expect(nusql.build()).toBe('DEC(10, 2)');
    });

    it('should generate an ENUM column type with specified values', function () {
        nusql.enum('value1', 'value2', 'value3');
        expect(nusql.build()).toBe("ENUM('value1', 'value2', 'value3')");
    });

    it('should generate a SET column type with specified values', function () {
        nusql.set('option1', 'option2', 'option3');
        expect(nusql.build()).toBe("SET('option1', 'option2', 'option3')");
    });

    it('should generate a GEOMETRY column type', function () {
        nusql.geometry();
        expect(nusql.build()).toBe('GEOMETRY');
    });

    it('should generate a POINT column type', function () {
        nusql.point();
        expect(nusql.build()).toBe('POINT');
    });

    it('should generate a LINESTRING column type', function () {
        nusql.linestring();
        expect(nusql.build()).toBe('LINESTRING');
    });

    it('should generate a POLYGON column type', function () {
        nusql.polygon();
        expect(nusql.build()).toBe('POLYGON');
    });

    it('should generate a MULTIPOINT column type', function () {
        nusql.multipoint();
        expect(nusql.build()).toBe('MULTIPOINT');
    });

    it('should generate a MULTILINESTRING column type', function () {
        nusql.multilinestring();
        expect(nusql.build()).toBe('MULTILINESTRING');
    });

    it('should generate a MULTIPOLYGON column type', function () {
        nusql.multipolygon();
        expect(nusql.build()).toBe('MULTIPOLYGON');
    });

    it('should generate a GEOMETRYCOLLECTION column type', function () {
        nusql.geometrycollection();
        expect(nusql.build()).toBe('GEOMETRYCOLLECTION');
    });

    it('should generate a JSON column type', function () {
        nusql.json();
        expect(nusql.build()).toBe('JSON');
    });

    it('should generate a JSONB column type', function () {
        nusql.jsonb();
        expect(nusql.build()).toBe('JSONB');
    });
    it('should generate an XML column type', function () {
        nusql.xml();
        expect(nusql.build()).toBe('XML');
    });

    it('should generate a MEDIUMBLOB column type', function () {
        nusql.mediumblob();
        expect(nusql.build()).toBe('MEDIUMBLOB');
    });

    it('should generate a LONGBLOB column type', function () {
        nusql.longblob();
        expect(nusql.build()).toBe('LONGBLOB');
    });

    it('should generate a MEDIUMTEXT column type', function () {
        nusql.mediumtext();
        expect(nusql.build()).toBe('MEDIUMTEXT');
    });

    it('should generate a LONGTEXT column type', function () {
        nusql.longtext();
        expect(nusql.build()).toBe('LONGTEXT');
    });
    it('should generate a NUMERIC column type with specified size and decimal places', function () {
        nusql.numeric(10, 2);
        expect(nusql.build()).toBe('NUMERIC(10, 2)');
    });

    it('should generate a REAL column type', function () {
        nusql.real();
        expect(nusql.build()).toBe('REAL');
    });

    it('should generate a MONEY column type', function () {
        nusql.money();
        expect(nusql.build()).toBe('MONEY');
    });

    it('should generate a UUID column type', function () {
        nusql.uuid();
        expect(nusql.build()).toBe('UUID');
    });

    it('should generate a MACADDR column type', function () {
        nusql.macaddr();
        expect(nusql.build()).toBe('MACADDR');
    });

    it('should generate an INET column type', function () {
        nusql.inet();
        expect(nusql.build()).toBe('INET');
    });

    it('should generate a CIDR column type', function () {
        nusql.cidr();
        expect(nusql.build()).toBe('CIDR');
    });

    it('should generate a MACADDR8 column type', function () {
        nusql.macaddr8();
        expect(nusql.build()).toBe('MACADDR8');
    });

    it('should generate a TSQUERY column type', function () {
        nusql.tsquery();
        expect(nusql.build()).toBe('TSQUERY');
    });

    it('should generate a TSVECTOR column type', function () {
        nusql.tsvector();
        expect(nusql.build()).toBe('TSVECTOR');
    });

    it('should generate a GTSVECTOR column type', function () {
        nusql.gtsvector();
        expect(nusql.build()).toBe('GTSVECTOR');
    });
});

describe('nusql Operators', () => {
    var nusql;

    beforeEach(function () {
        nusql = index_1.default.create();
    });

    it('should generate an equal (=) operator condition', () => {
        nusql.equal('column1', 'value1');
        expect(nusql.build()).toBe('column1 = value1');
    });

    it('should generate a not equal (<>) operator condition', () => {
        nusql.notEqual('column1', 'value1');
        expect(nusql.build()).toBe('column1 <> value1');
    });

    it('should generate a greater than (>) operator condition', () => {
        nusql.greaterThan('column1', 'value1');
        expect(nusql.build()).toBe('column1 > value1');
    });

    it('should generate a less than (<) operator condition', () => {
        nusql.lessThan('column1', 'value1');
        expect(nusql.build()).toBe('column1 < value1');
    });

    it('should generate a greater than or equal to (>=) operator condition', () => {
        nusql.greaterThanOrEqual('column1', 'value1');
        expect(nusql.build()).toBe('column1 >= value1');
    });

    it('should generate a less than or equal to (<=) operator condition', () => {
        nusql.lessThanOrEqual('column1', 'value1');
        expect(nusql.build()).toBe('column1 <= value1');
    });

    it('should generate an IS NULL condition', () => {
        nusql.isNull('column1');
        expect(nusql.build()).toBe('column1 IS NULL');
    });

    it('should generate an IS NOT NULL condition', () => {
        nusql.isNotNull('column1');
        expect(nusql.build()).toBe('column1 IS NOT NULL');
    });

    it('should generate an IN condition', () => {
        nusql.in('column1', ['value1', 'value2', 'value3']);
        expect(nusql.build()).toBe('column1 IN (value1, value2, value3)');
    });

    it('should generate a NOT IN condition', () => {
        nusql.notIn('column1', ['value1', 'value2', 'value3']);
        expect(nusql.build()).toBe('column1 NOT IN (value1, value2, value3)');
    });

    it('should generate a BETWEEN condition', () => {
        nusql.between('column1', 'minValue', 'maxValue');
        expect(nusql.build()).toBe('column1 BETWEEN minValue AND maxValue');
    });
});

describe('nusql Querying', () => {
    var nusql;

    beforeEach(function () {
        nusql = index_1.default.create();
    });

    it('should generate a SELECT statement', () => {
        nusql.select(['column1', 'column2']);
        expect(nusql.build()).toBe('SELECT column1, column2');
    });

    it('should generate a SELECT DISTINCT statement', () => {
        nusql.selectDistinct(['column1', 'column2']);
        expect(nusql.build()).toBe('SELECT DISTINCT column1, column2');
    });

    it('should generate a WHERE clause with a condition', () => {
        nusql.where('condition = value');
        expect(nusql.build()).toBe('WHERE condition = value');
    });

    it('should generate an ORDER BY clause', () => {
        nusql.orderBy('column1');
        expect(nusql.build()).toBe('ORDER BY column1');
    });

    it('should generate an ORDER BY clause with direction', () => {
        nusql.orderBy('column1', 'DESC');
        expect(nusql.build()).toBe('ORDER BY column1 DESC');
    });

    it('should generate an AND condition', () => {
        nusql.and('condition1 = value1');
        expect(nusql.build()).toBe('AND condition1 = value1');
    });

    it('should generate an OR condition', () => {
        nusql.or('condition2 = value2');
        expect(nusql.build()).toBe('OR condition2 = value2');
    });

    it('should generate a NOT condition', () => {
        nusql.not('condition3 = value3');
        expect(nusql.build()).toBe('NOT condition3 = value3');
    });

    it('should generate a LIKE condition', () => {
        nusql.like('column1', 'pattern');
        expect(nusql.build()).toBe('column1 LIKE \'pattern\'');
    });

    it('should generate wildcard characters for a LIKE condition', () => {
        nusql.wildcards('%pattern%');
        expect(nusql.build()).toBe('LIKE \'%pattern%\'');
    });

    it('should generate an IN condition', () => {
        nusql.in('column1', ['value1', 'value2', 'value3']);
        expect(nusql.build()).toBe('column1 IN (value1, value2, value3)');
    });

    it('should generate a BETWEEN condition', () => {
        nusql.between('column1', 'minValue', 'maxValue');
        expect(nusql.build()).toBe('column1 BETWEEN minValue AND maxValue');
    });

    it('should generate aliases for tables or columns', () => {
        nusql.aliases('alias1');
        expect(nusql.build()).toBe('AS alias1');
    });
})

describe('nusql Aggregation and Functions', () => {
    var nusql;

    beforeEach(function () {
        nusql = index_1.default.create();
    });

    it('should generate a MIN() function', () => {
        nusql.min('column1');
        expect(nusql.build()).toBe('MIN(column1)');
    });

    it('should generate a MAX() function', () => {
        nusql.max('column1');
        expect(nusql.build()).toBe('MAX(column1)');
    });

    it('should generate a COUNT() function without a column', () => {
        nusql.count();
        expect(nusql.build()).toBe('COUNT(*)');
    });

    it('should generate a COUNT() function with a column', () => {
        nusql.count('column1');
        expect(nusql.build()).toBe('COUNT(column1)');
    });

    it('should generate a SUM() function', () => {
        nusql.sum('column1');
        expect(nusql.build()).toBe('SUM(column1)');
    });

    it('should generate an AVG() function', () => {
        nusql.avg('column1');
        expect(nusql.build()).toBe('AVG(column1)');
    });

    it('should generate an ANY() function', () => {
        nusql.any(nusql.select(['column2']).where('condition = value'));
        expect(nusql.build()).toBe('ANY(SELECT column2 WHERE condition = value)');
    });

    it('should generate an ALL() function', () => {
        nusql.all(nusql.select(['column2']).where('condition = value'));
        expect(nusql.build()).toBe('ALL(SELECT column2 WHERE condition = value)');
    });

    it('should generate a CASE expression', () => {
        nusql.case('WHEN condition1 THEN result1 WHEN condition2 THEN result2 ELSE result3 END');
        expect(nusql.build()).toBe('CASE WHEN condition1 THEN result1 WHEN condition2 THEN result2 ELSE result3 END');
    });

    it('should generate a NULLIF() function', () => {
        nusql.nullIf('expression1', 'expression2');
        expect(nusql.build()).toBe('NULLIF(expression1, expression2)');
    });

    it('should generate a COALESCE() function', () => {
        nusql.coalesce(['expression1', 'expression2', 'expression3']);
        expect(nusql.build()).toBe('COALESCE(expression1, expression2, expression3)');
    });

})

describe('SQL Joins', () => {
    var nusql;

    beforeEach(function () {
        nusql = index_1.default.create();
    });

    it('should generate an INNER JOIN clause', () => {
        nusql.innerJoin('table2', 'table1.id = table2.id');
        expect(nusql.build()).toBe('INNER JOIN table2 ON table1.id = table2.id');
    });

    it('should generate a LEFT JOIN clause', () => {
        nusql.leftJoin('table2', 'table1.id = table2.id');
        expect(nusql.build()).toBe('LEFT JOIN table2 ON table1.id = table2.id');
    });

    it('should generate a RIGHT JOIN clause', () => {
        nusql.rightJoin('table2', 'table1.id = table2.id');
        expect(nusql.build()).toBe('RIGHT JOIN table2 ON table1.id = table2.id');
    });

    it('should generate a FULL JOIN clause', () => {
        nusql.fullJoin('table2', 'table1.id = table2.id');
        expect(nusql.build()).toBe('FULL JOIN table2 ON table1.id = table2.id');
    });

    it('should generate a SELF JOIN clause', () => {
        nusql.selfJoin('table2', 'table1.id = table2.id');
        expect(nusql.build()).toBe('SELF JOIN table2 ON table1.id = table2.id');
    });
});

describe('SQL Union', () => {
    var nusql1, nusql2;

    beforeEach(function () {
        nusql1 = index_1.default.create();
        nusql2 = index_1.default.create();
    });

    it('should generate a UNION clause', () => {
        nusql1.union(nusql2);
        expect(nusql1.build()).toBe('UNION' + nusql2.build());
    });

    it('should generate a UNION ALL clause', () => {
        nusql1.union(nusql2, true);
        expect(nusql1.build()).toBe('UNION ALL' + nusql2.build());
    });
});

describe('SQL Grouping and Filtering', () => {
    var nusql, subquery;

    beforeEach(function () {
        nusql = index_1.default.create();
        subquery = index_1.default.create();
    });

    it('should generate a GROUP BY clause with a single column', () => {
        nusql.groupBy('column1');
        expect(nusql.build()).toBe('GROUP BY column1');
    });

    it('should generate a GROUP BY clause with multiple columns', () => {
        nusql.groupBy(['column1', 'column2']);
        expect(nusql.build()).toBe('GROUP BY column1, column2');
    });
    it('should generate a HAVING clause with a condition', () => {
        nusql.having('SUM(column1) > 100');
        expect(nusql.build()).toBe('HAVING SUM(column1) > 100');
    });
    it('should generate an EXISTS clause with a subquery', () => {
        const state = subquery.select(['column1']).from('table2').where('column1 = value');
        nusql.exists(state);
        expect(nusql.build()).toBe('EXISTS (SELECT column1 FROM table2 WHERE column1 = value)');
    });
});

describe('SQL Insert Into', () => {
    var nusql;

    beforeEach(function () {
        nusql = index_1.default.create();
    });

    it('should generate an INSERT INTO statement', () => {
        nusql.insertInto('table1', ['column1', 'column2']);
        expect(nusql.build()).toBe('INSERT INTO table1 (column1, column2)');
    });
});

describe('SQL Null Values', () => {
    var nusql;

    beforeEach(function () {
        nusql = index_1.default.create();
    });

    it('should generate a NULL VALUES statement', () => {
        nusql.nullValues();
        expect(nusql.build()).toBe('NULL VALUES');
    });
});

describe('SQL Update', () => {
    var nusql;

    beforeEach(function () {
        nusql = index_1.default.create();
    });

    it('should generate an UPDATE statement', () => {
        nusql.update('table1');
        expect(nusql.build()).toBe('UPDATE table1');
    });
});

describe('SQL Delete', () => {
    var nusql;

    beforeEach(function () {
        nusql = index_1.default.create();
    });

    it('should generate a DELETE statement', () => {
        nusql.delete();
        expect(nusql.build()).toBe('DELETE');
    });
});

describe('SQL Select Top', () => {
    var nusql;

    beforeEach(function () {
        nusql = index_1.default.create();
    });

    it('should generate a SELECT TOP statement', () => {
        nusql.selectTop(10);
        expect(nusql.build()).toBe('SELECT TOP 10');
    });
});

describe('SQL Select Into', () => {
    var nusql;

    beforeEach(function () {
        nusql = index_1.default.create();
    });

    it('should generate a SELECT INTO statement', () => {
        nusql.selectInto('newTable');
        expect(nusql.build()).toBe('SELECT INTO newTable');
    });
});

describe('SQL Insert Into Select', () => {
    var nusql, subquery;

    beforeEach(function () {
        nusql = index_1.default.create();
        subquery = index_1.default.create();
    });

    it('should generate an INSERT INTO SELECT statement', () => {
        subquery.select(['column1']).from('table2').where('column1 = value');
        nusql.insertIntoSelect('table1', ['column1', 'column2'], subquery);
        expect(nusql.build()).toBe(
            'INSERT INTO table1 (column1, column2) SELECT column1 FROM table2 WHERE column1 = value'
        );
    });
});

describe('SQL Constraints', ()=>{
    var nusql, subquery;

    beforeEach(function () {
        nusql = index_1.default.create();
        subquery = index_1.default.create();
    });

    it('Adds a custom constraint to the query', () => {
        nusql.constraint('custom_constraint');
        expect(nusql.build()).toBe('CONSTRAINT custom_constraint');
      });
      
      it('Adds a NOT NULL constraint to the query', () => {
        nusql.notNull();
        expect(nusql.build()).toBe('NOT NULL');
      });
      
      it('Adds a UNIQUE constraint to the query', () => {
        nusql.unique();
        expect(nusql.build()).toBe('UNIQUE');
      });
      
      it('Adds a PRIMARY KEY constraint to the query', () => {
        nusql.primaryKey();
        expect(nusql.build()).toBe('PRIMARY KEY');
      });
      
      it('Adds a FOREIGN KEY constraint to the query', () => {
        nusql.foreignKey('current_column', 'referenced_table(referenced_column)');
        expect(nusql.build()).toBe('FOREIGN KEY (current_column) REFERENCES referenced_table(referenced_column)');
      });
      
      it('Adds a CHECK constraint to the query', () => {
        nusql.check('column > 0');
        expect(nusql.build()).toBe('CHECK (column > 0)');
      });
      
      it('Adds a DEFAULT constraint to the query', () => {
        nusql.default('42');
        expect(nusql.build()).toBe('DEFAULT 42');
      });
})