function countContiguousDistinct(k, arr) {
	const result = [];
	let count = 0;
	const obj = {};
	for (let i = 0; i < k; i++) {
		if (!obj[arr[i]]) {
			obj[arr[i]] = 0;
			count++;
		}
		obj[arr[i]]++;
	}
	let left = 0;
	while (left + k - 1 < arr.length) {
		result.push(count);
		obj[arr[left]]--;

		if (obj[arr[left]] === 0) {
			delete obj[arr[left]];
			count--;
		}

		left++;
		if (!obj[arr[left + k - 1]]) {
			obj[arr[left + k - 1]] = 0;
			count++;
		}
		obj[arr[left + k - 1]]++;
	}
	return result;
}

console.log(countContiguousDistinct(4, [1, 2, 1, 3, 4, 2, 3]), [3, 4, 4, 3]);
console.log(countContiguousDistinct(2, [1, 2, 1, 3, 4, 2, 3, 3]), [2, 2, 2, 2, 2, 2, 1]);
console.log(countContiguousDistinct(8, [1, 2, 1, 3, 4, 2, 3, 3]), [4]);