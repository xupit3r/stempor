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

// tests step 1b of the algorithm
describe('step 1b', () => {
  it('should build the correct stem for feed', () => {
    const word = 'feed';
    const stem = 'feed';
    const result = stempor.oneB(stempor.oneA(word));

    expect(result.stem).to.equal(stem);
    expect(result.rule).to.equal(-1);
  });

  it('should build the correct stem for agreed', () => {
    const word = 'agreed';
    const stem = 'agree';
    const result = stempor.oneB(stempor.oneA(word));

    expect(result.stem).to.equal(stem);
    expect(result.rule).to.equal(0);
  });

  it('should build the correct stem for plastered', () => {
    const word = 'plastered';
    const stem = 'plaster';
    const result = stempor.oneB(stempor.oneA(word));

    expect(result.stem).to.equal(stem);
    expect(result.rule).to.equal(1);
  });

  it('should build the correct stem for bled', () => {
    const word = 'bled';
    const stem = 'bled';
    const result = stempor.oneB(stempor.oneA(word));

    expect(result.stem).to.equal(stem);
    expect(result.rule).to.equal(-1);
  });

  it('should build the correct stem for motoring', () => {
    const word = 'motoring';
    const stem = 'motor';
    const result = stempor.oneB(stempor.oneA(word));

    expect(result.stem).to.equal(stem);
    expect(result.rule).to.equal(2);
  });

  it('should build the correct stem for sing', () => {
    const word = 'sing';
    const stem = 'sing';
    const result = stempor.oneB(stempor.oneA(word));

    expect(result.stem).to.equal(stem);
    expect(result.rule).to.equal(-1);
  });
});