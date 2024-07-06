function sliding(arr, k) {
	const result = [];
	let left = 0;
	while (left + k - 1 < arr.length) {
		const sum = Math.max(...arr.slice(left, left + k));
		result.push(sum);
		left++;
	}
	return result;
}

console.log(sliding([1, 2, 3, 4], 1));	// [1, 2, 3, 4]
console.log(sliding([1, 2, 3, 4], 2));	// [2, 3, 4]
console.log(sliding([1, 2, 3, 4], 3));	// [3, 4]
console.log(sliding([1, 2, 3, 4], 4));	// [4]
console.log(sliding([1, 2, 3, 4], 5));	// []