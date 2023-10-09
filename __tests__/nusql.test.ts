import Nusql from'../index';

describe('Nusql core testing', () => {
    it('should construct an instance', () => {
        const nusql = new Nusql();
        expect(nusql).toBeInstanceOf(Nusql);
    });
});

describe('Nusql Data', () => {
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
        nusql.enum('Value1','Value2','Value3');
        expect(nusql.build()).toBe("ENUM('Value1','Value2','Value3') ");
    });

    it('should generate a SET column type with specified values', () => {
        nusql.set('Option1','Option2','Option3');
        expect(nusql.build()).toBe("SET('Option1','Option2','Option3') ");
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
