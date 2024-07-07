function findMinCost(money, days, cost) {
	let left = 0;
	let sum = 0;
	let maxDays = 0;
	let minSum = Infinity;

	for (let right = 0; right < cost.length; right++) {
		sum += cost[right];
		while (sum > money || right - left + 1 > days) {
			sum -= cost[left];
			left++;
		}
		if (right - left + 1 === days && sum <= money) {
			maxDays = days;
			minSum = Math.min(minSum, sum);
		} else {
			maxDays = Math.max(maxDays, right - left + 1);
		}

	};

	if (maxDays < days) {
		return `days: ${maxDays}`;
	}
	return `money: ${minSum}`;

}

console.log(findMinCost(100, 3, [1, 2, 3]));
console.log(findMinCost(100, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(findMinCost(100, 5, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(findMinCost(10, 1, [3, 2, 4]));
console.log(findMinCost(10, 2, [3, 7, 6]));
console.log(findMinCost(10, 1, [5]));
console.log(findMinCost(9, 3, [10, 2, 8, 2, 10, 1]));
console.log(findMinCost(29, 11, [9, 7, 6, 10, 2, 8, 2, 10, 1, 9, 7, 7, 4, 3, 1, 2, 4, 3, 8, 5, 6, 2, 7, 5, 2, 5, 10, 5, 9, 5, 3, 7, 9, 10, 6, 7, 1, 10, 1, 2, 4, 8, 4, 4, 7, 7, 7, 4, 8]));
console.log(findMinCost(6, 18, [6, 6, 7, 2, 5, 7, 6, 10, 4, 4, 8, 2, 4, 6, 5, 1, 7, 10]));
