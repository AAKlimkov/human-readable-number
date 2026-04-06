module.exports = function toReadable(number) {
  const before13 = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const hundred = before13[Math.floor(number / 100)];

  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];
  const ten = tens[Math.floor((number % 100) / 10)];
  const tenless = number % 100;

  const one = before13[number % 10];
  if (!number) {
    return 'zero';
  }
  if (hundred) {
    if (tenless > 19) {
      return `${hundred} hundred ${ten} ${one}`.replace('  ', ' ').trim();
    }
    return `${hundred} hundred ${before13[tenless]}`.replace('  ', ' ').trim();
  }
  if (tenless > 19) {
    return ` ${ten} ${one}`.replace('  ', ' ').trim();
  }
  return `${before13[tenless]}`.replace('  ', ' ').trim();
};
