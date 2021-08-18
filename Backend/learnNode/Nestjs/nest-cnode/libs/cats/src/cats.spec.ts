import { Cats } from './cats';

describe('Cats', () => {
  it('should be defined', () => {
    expect(new Cats()).toBeDefined();
  });
});
