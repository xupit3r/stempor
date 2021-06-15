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

    expect(stempor.oneBTwo(result)).to.equal(stem);
  });

  it('should build the correct stem for troubled', () => {
    const word = 'troubled';
    const stem = 'trouble';
    const result = stempor.oneB(stempor.oneA(word));

    expect(stempor.oneBTwo(result)).to.equal(stem);
  });

  it('should build the correct stem for sized', () => {
    const word = 'sized';
    const stem = 'size';
    const result = stempor.oneB(stempor.oneA(word));

    expect(stempor.oneBTwo(result)).to.equal(stem);
  });

  it('should build the correct stem for hopping', () => {
    const word = 'hopping';
    const stem = 'hop';
    const result = stempor.oneB(stempor.oneA(word));

    expect(stempor.oneBTwo(result)).to.equal(stem);
  });

  it('should build the correct stem for tanning', () => {
    const word = 'tanning';
    const stem = 'tan';
    const result = stempor.oneB(stempor.oneA(word));

    expect(stempor.oneBTwo(result)).to.equal(stem);
  });

  it('should build the correct stem for falling', () => {
    const word = 'falling';
    const stem = 'fall';
    const result = stempor.oneB(stempor.oneA(word));

    expect(stempor.oneBTwo(result)).to.equal(stem);
  });

  it('should build the correct stem for hissing', () => {
    const word = 'hissing';
    const stem = 'hiss';
    const result = stempor.oneB(stempor.oneA(word));

    expect(stempor.oneBTwo(result)).to.equal(stem);
  });

  it('should build the correct stem for fizzed', () => {
    const word = 'fizzed';
    const stem = 'fizz';
    const result = stempor.oneB(stempor.oneA(word));

    expect(stempor.oneBTwo(result)).to.equal(stem);
  });

  it('should build the correct stem for failing', () => {
    const word = 'failing';
    const stem = 'fail';
    const result = stempor.oneB(stempor.oneA(word));

    expect(stempor.oneBTwo(result)).to.equal(stem);
  });

  it('should build the correct stem for filing', () => {
    const word = 'filing';
    const stem = 'file';
    const result = stempor.oneB(stempor.oneA(word));

    expect(stempor.oneBTwo(result)).to.equal(stem);
  });
});

describe('step 1c', () => {
  it('should build the correct stem for happy', () => {
    const word = 'happy';
    const stem = 'happi';
    const result = stempor.oneB(stempor.oneA(word));

    expect(stempor.oneC(
      stempor.oneBTwo(result)
    )).to.equal(stem);
  });

  it('should build the correct stem for happy', () => {
    const word = 'happy';
    const stem = 'happi';
    const result = stempor.oneB(stempor.oneA(word));

    expect(stempor.oneC(
      stempor.oneBTwo(result)
    )).to.equal(stem);
  });
});

describe('step 2', () => {
  it('should build the correct stem for relational', () => {
    const word = 'relational';
    const stem = 'relate';
    
    const result = stempor.oneB(stempor.oneA(word));
    const tempStem = stempor.oneC(stempor.oneBTwo(result));


    expect(stempor.two(tempStem)).to.equal(stem);
  });

  it('should build the correct stem for conditional', () => {
    const word = 'conditional';
    const stem = 'condition';

    const result = stempor.oneB(stempor.oneA(word));
    const tempStem = stempor.oneC(stempor.oneBTwo(result));


    expect(stempor.two(tempStem)).to.equal(stem);
  });

  it('should build the correct stem for rational', () => {
    const word = 'rational';
    const stem = 'rational';

    const result = stempor.oneB(stempor.oneA(word));
    const tempStem = stempor.oneC(stempor.oneBTwo(result));


    expect(stempor.two(tempStem)).to.equal(stem);
  });

  it('should build the correct stem for valenci', () => {
    const word = 'valenci';
    const stem = 'valence';

    const result = stempor.oneB(stempor.oneA(word));
    const tempStem = stempor.oneC(stempor.oneBTwo(result));


    expect(stempor.two(tempStem)).to.equal(stem);
  });

  it('should build the correct stem for hesitenci', () => {
    const word = 'hesitanci';
    const stem = 'hesitance';

    const result = stempor.oneB(stempor.oneA(word));
    const tempStem = stempor.oneC(stempor.oneBTwo(result));


    expect(stempor.two(tempStem)).to.equal(stem);
  });

  it('should build the correct stem for digitizer', () => {
    const word = 'digitizer';
    const stem = 'digitize';

    const result = stempor.oneB(stempor.oneA(word));
    const tempStem = stempor.oneC(stempor.oneBTwo(result));


    expect(stempor.two(tempStem)).to.equal(stem);
  });

  it('should build the correct stem for digitizer', () => {
    const word = 'comfortabli';
    const stem = 'comfortable';

    const result = stempor.oneB(stempor.oneA(word));
    const tempStem = stempor.oneC(stempor.oneBTwo(result));


    expect(stempor.two(tempStem)).to.equal(stem);
  });

  it('should build the correct stem for radicali', () => {
    const word = 'radicalli';
    const stem = 'radical';

    const result = stempor.oneB(stempor.oneA(word));
    const tempStem = stempor.oneC(stempor.oneBTwo(result));


    expect(stempor.two(tempStem)).to.equal(stem);
  });

  it('should build the correct stem for differentli', () => {
    const word = 'differentli';
    const stem = 'different';

    const result = stempor.oneB(stempor.oneA(word));
    const tempStem = stempor.oneC(stempor.oneBTwo(result));


    expect(stempor.two(tempStem)).to.equal(stem);
  });

  it('should build the correct stem for vileli', () => {
    const word = 'vileli';
    const stem = 'vile';

    const result = stempor.oneB(stempor.oneA(word));
    const tempStem = stempor.oneC(stempor.oneBTwo(result));


    expect(stempor.two(tempStem)).to.equal(stem);
  });

  it('should build the correct stem for analogousli', () => {
    const word = 'analogousli';
    const stem = 'analogous';

    const result = stempor.oneB(stempor.oneA(word));
    const tempStem = stempor.oneC(stempor.oneBTwo(result));


    expect(stempor.two(tempStem)).to.equal(stem);
  });

  it('should build the correct stem for vietnamization', () => {
    const word = 'vietnamization';
    const stem = 'vietnamize';

    const result = stempor.oneB(stempor.oneA(word));
    const tempStem = stempor.oneC(stempor.oneBTwo(result));


    expect(stempor.two(tempStem)).to.equal(stem);
  });

  it('should build the correct stem for predication', () => {
    const word = 'predication';
    const stem = 'predicate';

    const result = stempor.oneB(stempor.oneA(word));
    const tempStem = stempor.oneC(stempor.oneBTwo(result));


    expect(stempor.two(tempStem)).to.equal(stem);
  });

  it('should build the correct stem for operator', () => {
    const word = 'operator';
    const stem = 'operate';

    const result = stempor.oneB(stempor.oneA(word));
    const tempStem = stempor.oneC(stempor.oneBTwo(result));


    expect(stempor.two(tempStem)).to.equal(stem);
  });

  it('should build the correct stem for feudalism', () => {
    const word = 'feudalism';
    const stem = 'feudal';

    const result = stempor.oneB(stempor.oneA(word));
    const tempStem = stempor.oneC(stempor.oneBTwo(result));


    expect(stempor.two(tempStem)).to.equal(stem);
  });

  it('should build the correct stem for decisiveness', () => {
    const word = 'decisiveness';
    const stem = 'decisive';

    const result = stempor.oneB(stempor.oneA(word));
    const tempStem = stempor.oneC(stempor.oneBTwo(result));


    expect(stempor.two(tempStem)).to.equal(stem);
  });

  it('should build the correct stem for hopefulness', () => {
    const word = 'hopefulness';
    const stem = 'hopeful';

    const result = stempor.oneB(stempor.oneA(word));
    const tempStem = stempor.oneC(stempor.oneBTwo(result));


    expect(stempor.two(tempStem)).to.equal(stem);
  });

  it('should build the correct stem for callousness', () => {
    const word = 'callousness';
    const stem = 'callous';

    const result = stempor.oneB(stempor.oneA(word));
    const tempStem = stempor.oneC(stempor.oneBTwo(result));


    expect(stempor.two(tempStem)).to.equal(stem);
  });

  it('should build the correct stem for formaliti', () => {
    const word = 'formaliti';
    const stem = 'formal';

    const result = stempor.oneB(stempor.oneA(word));
    const tempStem = stempor.oneC(stempor.oneBTwo(result));


    expect(stempor.two(tempStem)).to.equal(stem);
  });

  it('should build the correct stem for sensitiviti', () => {
    const word = 'sensitiviti';
    const stem = 'sensitive';

    const result = stempor.oneB(stempor.oneA(word));
    const tempStem = stempor.oneC(stempor.oneBTwo(result));


    expect(stempor.two(tempStem)).to.equal(stem);
  });

  it('should build the correct stem for sensibiliti', () => {
    const word = 'sensibiliti';
    const stem = 'sensible';

    const result = stempor.oneB(stempor.oneA(word));
    const tempStem = stempor.oneC(stempor.oneBTwo(result));


    expect(stempor.two(tempStem)).to.equal(stem);
  });
});

describe('step 3', () => {
  it('should build the correct stem for triplicate', () => {
    const word = 'triplicate';
    const stem = 'triplic';

    const result = stempor.oneB(stempor.oneA(word));
    const tempStem = stempor.oneC(stempor.oneBTwo(result));


    expect(stempor.three(stempor.two(tempStem))).to.equal(stem);
  });

  it('should build the correct stem for formative', () => {
    const word = 'formative';
    const stem = 'form';

    const result = stempor.oneB(stempor.oneA(word));
    const tempStem = stempor.oneC(stempor.oneBTwo(result));


    expect(stempor.three(stempor.two(tempStem))).to.equal(stem);
  });

  it('should build the correct stem for formalize', () => {
    const word = 'formalize';
    const stem = 'formal';

    const result = stempor.oneB(stempor.oneA(word));
    const tempStem = stempor.oneC(stempor.oneBTwo(result));


    expect(stempor.three(stempor.two(tempStem))).to.equal(stem);
  });

  it('should build the correct stem for electriciti', () => {
    const word = 'electriciti';
    const stem = 'electric';

    const result = stempor.oneB(stempor.oneA(word));
    const tempStem = stempor.oneC(stempor.oneBTwo(result));


    expect(stempor.three(stempor.two(tempStem))).to.equal(stem);
  });

  it('should build the correct stem for electrical', () => {
    const word = 'electrical';
    const stem = 'electric';

    const result = stempor.oneB(stempor.oneA(word));
    const tempStem = stempor.oneC(stempor.oneBTwo(result));


    expect(stempor.three(stempor.two(tempStem))).to.equal(stem);
  });

  it('should build the correct stem for hopeful', () => {
    const word = 'hopeful';
    const stem = 'hope';

    const result = stempor.oneB(stempor.oneA(word));
    const tempStem = stempor.oneC(stempor.oneBTwo(result));


    expect(stempor.three(stempor.two(tempStem))).to.equal(stem);
  });

  it('should build the correct stem for goodness', () => {
    const word = 'goodness';
    const stem = 'good';

    const result = stempor.oneB(stempor.oneA(word));
    const tempStem = stempor.oneC(stempor.oneBTwo(result));


    expect(stempor.three(stempor.two(tempStem))).to.equal(stem);
  });
});