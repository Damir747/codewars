function sumOfSquares(n) {
	const isPerfectSquare = (x) => x === Math.pow(Math.floor(Math.sqrt(x)), 2);

	if (isPerfectSquare(n)) {
		return 1;
	}
	const sqrt = Math.floor(Math.sqrt(n));
	for (let i = 1; i <= sqrt; i++) {
		if (isPerfectSquare(n - i * i)) {
			return 2;
		}
	}
	while (n % 4 === 0) {
		n /= 4;
	}
	if (n % 8 === 7) {
		return 4;
	}
	return 3;
}

console.log(sumOfSquares(12));  // Вывод: 3 (12 = 4 + 4 + 4)
console.log(sumOfSquares(13));  // Вывод: 2 (13 = 4 + 9)
console.log(sumOfSquares(500000000));  // 2 Для большого числа
