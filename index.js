/**
 * References:
 * 
 * - https://tartarus.org/martin/PorterStemmer/
 * - https://github.com/jedp/porter-stemmer
 */

// const CONSONANT = /[b-df-hj-np-tv-z]/;
// const VOWEL = /[aeiou]/;

// ugly, but effective..
const M_NOT_ZERO = /^([b-df-hj-np-tv-z]+)?[aeiou]+[b-df-hj-np-tv-z]+/;
const M_IS_ONE = /^([b-df-hj-np-tv-z]+)?[aeiou]+[b-df-hj-np-tv-z]+([aeiou]+)?$/;
const M_IS_TWO = /^([b-df-hj-np-tv-z]+)?[aeiou]+[b-df-hj-np-tv-z]+([aeiou]+)?/;

// conditional checks
const STEM_CONTAINS_VOWEL = /^([b-df-hj-np-tv-z]+)?[aeiou]/;
const ENDS_DOUBLE_CONSONANT = /([b-df-hjkmnp-rt-vx-y])\1$/;
const ENDS_CVC = /[b-df-hj-np-tv-z][aeiou][b-df-hj-np-tvz]$/;

/**
 * Given a word, this will compute the word's measure
 * 
 * @param {String} word the word to compute the measure for
 * @returns the measure of the word (i.e. 0, 1, 2)
 */
function measure (word) {
  if (!word.match(M_NOT_ZERO)) {
    return 0;
  } else if (word.match(M_IS_ONE)) {
    return 1;
  } else if (word.match(M_IS_TWO)) {
    return 2;
  }
}


/**
 * Checks if a particular
 * @param {String} word the word to match against
 * @param {String} letter the letter to check if the word ends
 * @returns 
 */
function endsWith (word, letter) {
  return word.match(`${letter}+$`);
}

/**
 * Checks if the stem of a provided word contains a vowel.
 * 
 * @param {String} word the word to check
 * @returns true if the stem of the word contains a vowel
 */
function stemContainsVowel (word) {
  return word.match(STEM_CONTAINS_VOWEL);
}

/**
 * Checks if the stem of the supplied word ends with a double consonant.
 * 
 * @param {String} word the word to check
 * @returns true if the supplied word ends with a double consonant
 */
function endsWithDoubleConsonant (word) {
  return word.match(ENDS_DOUBLE_CONSONANT);
}

/**
 * Checks if the stem of the word ends in the "cvc" pattern where the last 
 * "c" group does not contain W, X, or Y
 * 
 * @param {String} word the word to check
 * @returns true if the supplied word ends in the "cvc" pattern
 */
function endsWithCVC (word) {
  return word.match(ENDS_CVC);
}

// rules for step 1a of the algorithm
const ONE_A_RULES = [
  {
    regex: /^(.+?)(sses)$/, 
    suffix: 'ss'
  }, {
    regex: /^(.+?)(ies)$/,
    suffix: 'i'
  }, {
    regex: /^(.+?)(ss)$/, 
    suffix: 'ss'
  }, {
    regex: /^(.+?)(s)$/, 
    suffix: ''
  }
];

// rules for step 1b of the algorithm
const ONE_B_RULES = [
  {
    cond (word) {
      return measure(
        word.replace(this.regex, '$1')
      ) > 0;
    },
    regex: /^(.+?)(eed)$/,
    suffix: 'ee'
  }, {
    cond (word) {
      return stemContainsVowel(
        word.replace(this.regex, '$1')
      );
    },
    regex: /^(.+?)(ed)$/,
    suffix: ''
  }, {
    cond (word) {
      return stemContainsVowel(
        word.replace(this.regex, '$1')
      );
    },
    regex: /^(.+?)(ing)$/,
    suffix: ''
  }
];

// some of the rules for 1b - 2 of the algorithm
const ONE_B_RULES_2 = [
  {
    regex: /^(.+?)(at)$/,
    suffix: 'ate'
  }, {
    regex: /^(.+?)(bl)$/,
    suffix: 'ble'
  }, {
    regex: /^(.+?)(iz)$/,
    suffix: 'ize'
  }
];

// some of the rules for 1c of the algorithm
const ONE_C_RULES = [
  {
    cond (word) {
      let stem = word.replace(this.regex, '$1');
      return stemContainsVowel(stem);
    },
    regex: /^(.+?)(y)$/,
    suffix: 'i'
  }
];

// the rules for step 2 of the algorithm
const TWO_RULES = [
    {
      regex: /^(.+?)(ational)$/,
      suffix: 'ate'
    },
    {
      regex: /^(.+?)(tional)$/,
      suffix: 'tion'
    },
    {
      regex: /^(.+?)(enci)$/,
      suffix: 'ence'
    },
    {
      regex: /^(.+?)(anci)$/,
      suffix: 'ance'
    },
    {
      regex: /^(.+?)(izer)$/,
      suffix: 'ize'
    },
    {
      regex: /^(.+?)(abli)$/,
      suffix: 'able'
    },
    {
      regex: /^(.+?)(alli)$/,
      suffix: 'al'
    },
    {
      regex: /^(.+?)(entli)$/,
      suffix: 'ent'
    },
    {
      regex: /^(.+?)(eli)$/,
      suffix: 'e'
    },
    {
      regex: /^(.+?)(ousli)$/,
      suffix: 'ous'
    },
    {
      regex: /^(.+?)(ization)$/,
      suffix: 'ize'
    },
    {
      regex: /^(.+?)(ation)$/,
      suffix: 'ate'
    },
    {
      regex: /^(.+?)(ator)$/,
      suffix: 'ate'
    },
    {
      regex: /^(.+?)(alism)$/,
      suffix: 'al'
    },
    {
      regex: /^(.+?)(iveness)$/,
      suffix: 'ive'
    },
    {
      regex: /^(.+?)(fulness)$/,
      suffix: 'ful'
    },
    {
      regex: /^(.+?)(ousness)$/,
      suffix: 'ous'
    },
    {
      regex: /^(.+?)(aliti)$/,
      suffix: 'al'
    },
    {
      regex: /^(.+?)(iviti)$/,
      suffix: 'ive'
    },
    {
      regex: /^(.+?)(biliti)$/,
      suffix: 'ble'
    },
];

const THREE_RULES = [
  {
    regex:  /^(.+?)(icate)$/,
    suffix: 'ic'
  }, {
    regex: /^(.+?)(ative)$/,
    suffix: ''
  }, {
    regex: /^(.+?)(alize)$/,
    suffix: 'al'
  }, {
    regex: /^(.+?)(iciti)$/,
    suffix: 'ic'
  }, {
    regex: /^(.+?)(ical)$/,
    suffix: 'ic'
  }, {
    regex: /^(.+?)(ful)$/,
    suffix: ''
  }, {
    regex: /^(.+?)(ness)$/,
    suffix: ''
  }
];

const FOUR_RULES = [
  {
    regex: /^(.+?)(al)$/,
    suffix: ''
  }, {
    regex: /^(.+?)(ance)$/,
    suffix: ''
  }, {
    regex: /^(.+?)(ence)$/,
    suffix: ''
  }, {
    regex: /^(.+?)(er)$/,
    suffix: ''
  }, {
    regex: /^(.+?)(ic)$/,
    suffix: ''
  }, {
    regex: /^(.+?)(able)$/,
    suffix: ''
  }, {
    regex: /^(.+?)(ible)$/,
    suffix: ''
  }, {
    regex: /^(.+?)(ant)$/,
    suffix: ''
  }, {
    regex: /^(.+?)(ement)$/,
    suffix: ''
  }, {
    regex: /^(.+?)(ment)$/,
    suffix: ''
  }, {
    regex: /^(.+?)(ent)$/,
    suffix: ''
  }, {
    cond: stem => {
      return (
        endsWith(stem, 's') ||
        endsWith(stem, 't')
      );
    },
    regex: /^(.+?)(ion)$/,
    suffix: ''
  }, {
    regex: /^(.+?)(ou)$/,
    suffix: ''
  }, {
    regex: /^(.+?)(ism)$/,
    suffix: ''
  }, {
    regex: /^(.+?)(ate)$/,
    suffix: ''
  }, {
    regex: /^(.+?)(iti)$/,
    suffix: ''
  }, {
    regex: /^(.+?)(ous)$/,
    suffix: ''
  }, {
    regex: /^(.+?)(ive)$/,
    suffix: ''
  }, {
    regex: /^(.+?)(ize)$/,
    suffix: ''
  }
].map(rule => {
  if (typeof rule.cond === 'function') {
    return rule;
  }

  rule.cond = () => true;

  return rule;
});

const FIVE_A_RULES = [
  {
    cond: stem => {
      return measure(stem) > 1;
    },
    regex: /^(.+?)(e)$/,
    suffix: ''
  }, {
    cond: stem => {
      return (
        measure(stem) === 1 && 
        !endsWithCVC(stem)
      );
    },
    regex: /^(.+?)(e)$/,
    suffix: ''
  }
];

/**
 * Perform step 1a of the algorithm.
 * 
 * @param {String} word the word to stem
 * @returns the stem of the word after this step
 */
exports.oneA = function oneA (word) {
  let stem;

  if (word.match(ONE_A_RULES[0].regex)) {
    stem = word.replace(ONE_A_RULES[0].regex, `$1${ONE_A_RULES[0].suffix}`);
  } else if (word.match(ONE_A_RULES[1].regex)) {
    stem = word.replace(ONE_A_RULES[1].regex, `$1${ONE_A_RULES[1].suffix}`);
  } else if (word.match(ONE_A_RULES[2].regex)) {
    stem = word.replace(ONE_A_RULES[2].regex, `$1${ONE_A_RULES[2].suffix}`);
  } else if (word.match(ONE_A_RULES[3].regex)) {
    stem = word.replace(ONE_A_RULES[3].regex, `$1${ONE_A_RULES[3].suffix}`);
  } else {
    stem = word;
  }

  return stem;
}

/**
 * 
 * @param {String} word the word to stem
 * @returns an object containing the stem and the rule number that applied. 
 * object will be of the form:
 * 
 *  {
 *    stem: <the stem>,
 *    rule: <the rule number that applied, 0 based>
 *  }
 */
exports.oneB = function oneB (word) {
  let result = {
    stem: word,
    rule: -1
  };

  if (word.match(ONE_B_RULES[0].regex)) {
    if (ONE_B_RULES[0].cond(word)) {
      result.stem = word.replace(ONE_B_RULES[0].regex, `$1${ONE_B_RULES[0].suffix}`);
      result.rule = 0;
    }
  } else if (word.match(ONE_B_RULES[1].regex)) {
    if (ONE_B_RULES[1].cond(word)) {
      result.stem = word.replace(ONE_B_RULES[1].regex, `$1${ONE_B_RULES[1].suffix}`);
      result.rule = 1;
    }
  } else if (word.match(ONE_B_RULES[2].regex)) {
    if (ONE_B_RULES[2].cond(word)) {
      result.stem = word.replace(ONE_B_RULES[2].regex, `$1${ONE_B_RULES[2].suffix}`);
      result.rule = 2;
    }
  }

  return result;
}

/**
 * Applies subsequent 1b rules (operating on the stem from 1b)
 * 
 * @param {String} word the word to stem
 * @returns the stem of the supplied word
 */
exports.oneBTwo = function oneBTwo (result) {
  let word = result.stem;
  let stem;

  if (result. rule < 1) {
    return word;
  }

  if (word.match(ONE_B_RULES_2[0].regex)) {
    stem = word.replace(ONE_B_RULES_2[0].regex, `$1${ONE_B_RULES_2[0].suffix}`);
  } else if (word.match(ONE_B_RULES_2[1].regex)) {
    stem = word.replace(ONE_B_RULES_2[1].regex, `$1${ONE_B_RULES_2[1].suffix}`);
  } else if (word.match(ONE_B_RULES_2[2].regex)) {
    stem = word.replace(ONE_B_RULES_2[2].regex, `$1${ONE_B_RULES_2[2].suffix}`);
  } else if (endsWithDoubleConsonant(word)) {
    stem = word.replace(/^(.+?)([b-df-hjkmnp-rt-vx-y])[b-df-hjkmnp-rt-vx-y]$/, '$1$2');
  } else if (measure(word) === 1 && endsWithCVC(word)) {
    stem = word + 'e';
  } else {
    stem = word;
  }

  return stem;
}

/**
 * Applies the 1c rules (or, really, rule :)).
 * 
 * @param {String} word the word to stem
 * @returns the stem of the supplied word
 */
exports.oneC = function oneC (word) {
  let stem;

  if (word.match(ONE_C_RULES[0].regex)) {
    if (ONE_C_RULES[0].cond(word)) {
      stem = word.replace(ONE_C_RULES[0].regex, `$1${ONE_C_RULES[0].suffix}`);
    } else {
      stem = word;
    }
  } else {
    stem = word;
  }

  return stem;
}

/**
 * Applies the step 2 rules
 * 
 * @param {String} word the word to stem
 * @returns the stem of the supplied word
 */
exports.two = function two (word) {
  let stem = word;
  let idx = 0;
  let matched = false;

  while (!matched && idx < TWO_RULES.length) {
    let { regex, suffix } = TWO_RULES[idx++];

    if (word.match(regex)) {
      let stripped = word.replace(regex, `$1`);

      if (measure(stripped) > 0) {
        stem = word.replace(regex, `$1${suffix}`);
        matched = true;
      }
    }
  }
  
  return stem;
}

/**
 * Applies the step 3 rules
 * 
 * @param {String} word the word to stem
 * @returns the stem of the word supplied
 */
exports.three = function three (word) {
  let stem = word;
  let idx = 0;
  let matched = false;

  while (!matched && idx < THREE_RULES.length) {
    let { regex, suffix } = THREE_RULES[idx++];

    if (word.match(regex)) {
      let stripped = word.replace(regex, `$1`);

      if (measure(stripped) > 0) {
        stem = word.replace(regex, `$1${suffix}`);
        matched = true;
      }
    }
  }

  return stem;
}

/**
 * Applies the step 4 rules
 * 
 * @param {String} word the word to stem
 * @returns the stem of the word supplied
 */
exports.four = function four (word) {
  let stem = word;
  let idx = 0;
  let matched = false;

  while (!matched && idx < FOUR_RULES.length) {
    let { regex, suffix, cond } = FOUR_RULES[idx++];

    if (word.match(regex)) {
      let stripped = word.replace(regex, `$1`);
      
      if (measure(stripped) > 1 && cond(stripped)) {
        stem = word.replace(regex, `$1${suffix}`);
        matched = true;
      }
    }
  }

  return stem;
}

/**
 * Applies the step 5 rules
 * 
 * @param {String} word the word to stem
 * @return the stem of the word supplied
 */
exports.fiveA = function (word) {
  let stem = word;
  let idx = 0;
  let matched = false;

  while (!matched && idx < FIVE_A_RULES.length) {
    let { regex, suffix, cond } = FIVE_A_RULES[idx++];

    if (word.match(regex)) {
      let stripped = word.replace(regex, `$1`);

      if (cond(stripped)) {
        stem = word.replace(regex, `$1${suffix}`);
        matched = true;
      }
    }
  }

  return stem;
}

/**
 * Retrieve the stem for the supplied word.
 * 
 * @param {String} word the word for which we are generating a stem
 */
exports.stemmer = function (word) {

}



