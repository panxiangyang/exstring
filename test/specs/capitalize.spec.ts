import 'mocha';
import { expect } from 'chai';
import capitalize from '@/capitalize';

describe('capitalize', () => {
  it(`returns 'Fx'`, () => {
    expect(capitalize('fx')).to.equal('Fx');
  });
});
