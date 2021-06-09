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
describe('step 1b - 1', () => {
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

// tests step 1b of the algorithm
describe('step 1b - 2', () => {
  it('should build the correct stem for conflated', () => {
    const word = 'conflated';
    const stem = 'conflate';
    const result = stempor.oneB(stempor.oneA(word));

    expect(stempor.oneBTwo(result.stem)).to.equal(stem);
  });

  it('should build the correct stem for troubled', () => {
    const word = 'troubled';
    const stem = 'trouble';
    const result = stempor.oneB(stempor.oneA(word));

    expect(stempor.oneBTwo(result.stem)).to.equal(stem);
  });

  it('should build the correct stem for sized', () => {
    const word = 'sized';
    const stem = 'size';
    const result = stempor.oneB(stempor.oneA(word));

    expect(stempor.oneBTwo(result.stem)).to.equal(stem);
  });

  it('should build the correct stem for hopping', () => {
    const word = 'hopping';
    const stem = 'hop';
    const result = stempor.oneB(stempor.oneA(word));

    expect(stempor.oneBTwo(result.stem)).to.equal(stem);
  });

  it('should build the correct stem for tanning', () => {
    const word = 'tanning';
    const stem = 'tan';
    const result = stempor.oneB(stempor.oneA(word));

    expect(stempor.oneBTwo(result.stem)).to.equal(stem);
  });

  it('should build the correct stem for falling', () => {
    const word = 'falling';
    const stem = 'fall';
    const result = stempor.oneB(stempor.oneA(word));

    expect(stempor.oneBTwo(result.stem)).to.equal(stem);
  });

  it('should build the correct stem for hissing', () => {
    const word = 'hissing';
    const stem = 'hiss';
    const result = stempor.oneB(stempor.oneA(word));

    expect(stempor.oneBTwo(result.stem)).to.equal(stem);
  });

  it('should build the correct stem for fizzed', () => {
    const word = 'fizzed';
    const stem = 'fizz';
    const result = stempor.oneB(stempor.oneA(word));

    expect(stempor.oneBTwo(result.stem)).to.equal(stem);
  });

  it('should build the correct stem for failing', () => {
    const word = 'failing';
    const stem = 'fail';
    const result = stempor.oneB(stempor.oneA(word));

    expect(stempor.oneBTwo(result.stem)).to.equal(stem);
  });

  it('should build the correct stem for filing', () => {
    const word = 'filing';
    const stem = 'file';
    const result = stempor.oneB(stempor.oneA(word));

    expect(stempor.oneBTwo(result.stem)).to.equal(stem);
  });
});

describe('step 1c', () => {
  it('should build the correct stem for happy', () => {
    const word = 'happy';
    const stem = 'happi';
    const result = stempor.oneB(stempor.oneA(word));

    expect(stempor.oneC(
      stempor.oneBTwo(result.stem)
    )).to.equal(stem);
  });

  it('should build the correct stem for sky', () => {
    const word = 'sky';
    const stem = 'sky';
    const result = stempor.oneB(stempor.oneA(word));

    expect(stempor.oneC(
      stempor.oneBTwo(result.stem)
    )).to.equal(stem);
  });
});