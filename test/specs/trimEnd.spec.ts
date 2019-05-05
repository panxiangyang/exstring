import 'mocha';
import { expect } from 'chai';
import trimEnd from '@/trimEnd';

describe('trimRight', () => {
  it('remove right whitespace', () => {
    expect(trimEnd(' Fx ')).to.equal(' Fx');
  });

  it('remove right whitespace', () => {
    expect(trimEnd(' Fx')).to.equal(' Fx');
  });

  it('returns original input', () => {
    expect(trimEnd('Fx')).to.equal('Fx');
  });
});
