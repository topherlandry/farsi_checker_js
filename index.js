function farsi_checker(input) {
  var farsiWord = true;
  var farsi_chraacter = ['‌', ' ', 'آ', 'ا', 'ب', 'پ', 'ت', 'ث', 'ج', 'چ', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'ژ', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ک', 'گ', 'ل', 'م', 'ن', 'و', 'ه', 'ی', 'ي', 'ك', 'ة'];
  for (var i = 0; i < input.length; i++) {
    if (farsi_character.indexOf(input.substr(i, 1)) == -1) {
      farsiWord = false;
      break;
    }
  }

  return farsiWord;
}
