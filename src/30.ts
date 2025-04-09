function calculateAverage(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error('The array is empty');
  }

  const sum = numbers.reduce((acc, current) => acc + current, 0);
  return sum / numbers.length;
}

console.log(calculateAverage([1.5, 2.3, 4.8])); // Expected output: 2.7
