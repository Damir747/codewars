function smaller(arr) {
	const n = arr.length;
	const result = new Array(n).fill(0);

	if (n === 0) return result;

	// Сжатие координат
	const sortedArr = Array.from(new Set(arr)).sort((a, b) => a - b);
	const rankMap = new Map();
	for (let i = 0; i < sortedArr.length; i++) {
		rankMap.set(sortedArr[i], i + 1); // Ранги начинаются с 1
	}

	// Дерево Фенвика
	const bit = new Array(sortedArr.length + 1).fill(0);

	const update = (index, value) => {
		while (index < bit.length) {
			bit[index] += value;
			index += index & -index;
		}
	};

	const query = (index) => {
		let sum = 0;
		while (index > 0) {
			sum += bit[index];
			index -= index & -index;
		}
		return sum;
	};

	// Обработка массива справа налево
	for (let i = n - 1; i >= 0; i--) {
		const rank = rankMap.get(arr[i]);
		result[i] = query(rank - 1);
		update(rank, 1);
	}

	return result;
}

console.log(smaller([5, 4, 3, 2, 1]), [4, 3, 2, 1, 0]); // 
console.log(smaller([1, 2, 0]), [1, 1, 0]);
console.log(smaller([5, 4, 4, 2, 10]));
console.log(smaller([5, 4, 3, 2, 1]), [4, 3, 2, 1, 0]);
console.log(smaller([1, 2, 3]), [0, 0, 0]);
console.log(smaller([1, 2, 0]), [1, 1, 0]);
console.log(smaller([1, 2, 1]), [0, 1, 0]);
console.log(smaller([1, 1, -1, 0, 0]), [3, 3, 0, 0, 0]);
console.log(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6]), [4, 1, 5, 5, 0, 0, 0, 0, 0]);
console.log(smaller([5, 4, 7, 9, 2, 4, 1, 4, 5, 6]), [5, 2, 6, 6, 1, 1, 0, 0, 0, 0]);

// https://www.codewars.com/kata/56a1c63f3bc6827e13000006/train/javascript