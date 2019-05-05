import 'mocha';
import { expect } from 'chai';
import guid from '@/guid';

describe('guid', () => {
  it('returns the length of 36', () => {
    expect(guid().length).to.equal(36);
  });

  it('returns a different guid', () => {
    expect(guid()).to.not.equal(guid());
  });
});
