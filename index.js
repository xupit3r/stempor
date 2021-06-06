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
const M_IS_ONE = /^([b-df-hj-np-tv-z]+)?[aeiou]+[b-df-hj-np-tv-z]+[aeiou]+/;
const M_IS_TWO = /^([b-df-hj-np-tv-z]+)?[aeiou]+[b-df-hj-np-tv-z]+[aeiou]+/;

// conditional checks
const STEM_ENDS_WITH_S = /.+s$/;
const STEM_CONTAINS_VOWEL = /[b-df-hj-np-tv-z]+[aeiou]/;
const ENDS_DOUBLE_CONSONANT = /[b-df-hj-np-tv-z]{2}$/;
const ENDS_CVC = /[b-df-hj-np-tv-z][aeiou][b-df-hj-np-tvz]$/;

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
 * @param {String | RegExp} suffix the suffix to check for (can be a 
 * string or a regular expression)
 * @returns 
 */
function endsWith (word, suffix) {
  if (suffix instanceof RegExp) {
    return word.match(suffix);
  }

  return word.match(`${suffix}`);
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
 * Checks if the word's stem ends with S
 * 
 * @param {String} word the word to check
 * @returns 
 */
function stemEndsWithS (word) {
  return word.match(STEM_ENDS_WITH_S);
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

/**
 * Perform step 1a of the algorithm.
 * 
 * @param {String} word 
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
 * Retrieve the stem for the supplied word.
 * 
 * @param {String} word the word for which we are generating a stem
 */
exports.stemmer = function (word) {

}



