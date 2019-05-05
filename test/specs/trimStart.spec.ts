import 'mocha';
import { expect } from 'chai';
import trimStart from '@/trimStart';

describe('trimLeft', () => {
  it('remove the left and right whitespace', () => {
    expect(trimStart(' Fx ')).to.equal('Fx ');
  });

  it('remove the left whitespace', () => {
    expect(trimStart(' Fx')).to.equal('Fx');
  });

  it('returns original input', () => {
    expect(trimStart('Fx')).to.equal('Fx');
  });
});
