import 'mocha';
import { expect } from 'chai';
import padStart from '@/padStart';

describe('padStart', () => {
  it(`returns '00Fx'`, () => {
    expect(padStart('Fx', 4, '0')).to.equal('00Fx');
  });

  it(`returns '$$$Fx'`, () => {
    expect(padStart('Fx', 5, '$')).to.equal('$$$Fx');
  });

  it('targetLength < padString.length', () => {
    expect(padStart('Fx', 3, '$$$$')).to.equal('$Fx');
  });

  it('returns original input when the length of target larger than the input', () => {
    expect(padStart('exstring', 2, '$')).to.equal('exstring');
  });

  it(`padString: string = ''`, () => {
    expect(padStart('Fx', 3)).to.equal(' Fx');
  });
});
