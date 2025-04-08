function calculateTotalCost(items: number[]): number {
  let total = 0;
  
  items.forEach((item) => {
    total += item;
  });
  
  return total;
}

console.log(calculateTotalCost([5, 10, 15])); // Output: 30
