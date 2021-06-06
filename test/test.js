const expect = require('chai').expect;
const stempor = require('../index.js');

// tests step 1a of the algorithm
describe('step 1a', () => {
  it('should build the correct stem for caresses', () => {
    const word = 'caresses';
    const stem = 'caress';

    expect(stempor.oneA(word)).to.equal(stem);
  });

  it('should build the correct stem for ponies', () => {
    const word = 'ponies';
    const stem = 'poni';

    expect(stempor.oneA(word)).to.equal(stem);
  });

  it('should build the correct stem for ties', () => {
    const word = 'ties';
    const stem = 'ti';

    expect(stempor.oneA(word)).to.equal(stem);
  });

  it('should build the correct stem for caress', () => {
    const word = 'caress';
    const stem = 'caress';

    expect(stempor.oneA(word)).to.equal(stem);
  });

  it('should build the correct stem for cats', () => {
    const word = 'cats';
    const stem = 'cat';

    expect(stempor.oneA(word)).to.equal(stem);
  });
});