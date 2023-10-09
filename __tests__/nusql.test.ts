import Nusql from '../index';

describe('Nusql core testing', () => {
  it('should construct an instance', () => {
    const nusql = new Nusql();
    expect(nusql).toBeInstanceOf(Nusql);
  });
});