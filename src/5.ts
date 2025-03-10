function romanNumerals(num: number): string {
  let roman = '';
  while (num > 0) {
    const digit = Math.floor(Math.log10(num)) % 3;
    switch (digit) {
      case 0:
        roman += 'I';
        break;
      case 1:
        roman += 'V';
        break;
      case 2:
        roman += 'X';
        break;
    }
    num = Math.floor(num / 3);
  }
  return roman;
}
