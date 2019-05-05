import 'mocha';
import { expect } from 'chai';
import padEnd from '@/padEnd';

describe('padEnd', () => {
  it(`returns 'Fx00'`, () => {
    expect(padEnd('Fx', 4, '0')).to.equal('Fx00');
  });

  it(`returns 'Fx$$$$'`, () => {
    expect(padEnd('Fx', 6, '$')).to.equal('Fx$$$$');
  });

  it('returns original input when the length of target larger than the input', () => {
    expect(padEnd('exstring', 2, '$')).to.equal('exstring');
  });

  it('targetLength < padString.length', () => {
    expect(padEnd('Fx', 3, '$$$$')).to.equal('Fx$');
  });

  it(`padString: string = ''`, () => {
    expect(padEnd('Fx', 3)).to.equal('Fx ');
  });
});
