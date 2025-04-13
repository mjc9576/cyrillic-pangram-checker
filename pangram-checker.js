'use strict';

// See index.html for context.
class PangramChecker {
  constructor() {
    this.ALPHA_ARRAY = ["а","б","в","г","д","ё","ж","з","и","й","к","л","м","н","о","п","р","с","т","у","ф","х","ц","ч","ш","щ","ъ","ы","ь","э","ю","я"];
    this.FREQ_ARRAY = ["о","е","а","и","н","т","с","р","в","л","к","м","д","п","у","я","ы","ь","г","з","б","ч","й","х","ж","ш","ю","ц","щ","э","ф","ъ","ё"];
    this.SCRAMBLE_ARRAY = ["а","б","в","г","д","ё","ж","з","и","й","к","л","м","н","о","п","р","с","т","у","ф","х","ц","ч","ш","щ","ъ","ы","ь","э","ю","я"];

    this.letters_set = new Set();
    for (let c of this.ALPHA_ARRAY) {
      this.letters_set.add(c)
    }

    this.letters_array = [...this.ALPHA_ARRAY]
  }

  alphabetize() {
    this.letters_array = [...this.ALPHA_ARRAY]
  }

  // Credit: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }

  arrangeByFrequency() {
    this.letters_array = [...this.FREQ_ARRAY]
  }

  scramble() {
    this.letters_array = [...this.SCRAMBLE_ARRAY]
    this.shuffleArray(this.letters_array)
  }

  getCounts(text) {
    const lettersPresentSet = new Set();
    for (let c of text.toLowerCase()) {
      lettersPresentSet.add(c);
    }

    const lettersPresentVec = [];
    const lettersAbsentVec = [];

    for (let c of this.letters_array) {
      if (lettersPresentSet.has(c)) {
        lettersPresentVec.push(c)
      } else {
        lettersAbsentVec.push(c)
      }
    }

    return {present: lettersPresentVec, absent: lettersAbsentVec}
  }
}
