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
const STEM_ENDS_WITH_S = /+s$/;
const STEM_CONTAINS_VOWEL = /[b-df-hj-np-tv-z]+[aeiou]/;
const DOUBLE_CONSONANT = /[b-df-hj-np-tv-z]{2}$/;
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

function stemContainsVowel (word) {

}

function endsWithDoubleConsonant (word) {
  
}

function endsWithCVC (word) {

}



