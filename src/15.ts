function sumEvenNumbers(numbers: number[]): number {
    let total = 0;
    numbers.forEach(number => {
        if (number % 2 === 0) {
            total += number;
        }
    });
    return total;
}

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumEvenNumbers(myNumbers));
