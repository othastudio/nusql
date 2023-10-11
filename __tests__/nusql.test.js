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