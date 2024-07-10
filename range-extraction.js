function solution(list) {
	const result = [];
	let left = 0;

	while (left < list.length) {
		let right = left;
		while (right + 1 < list.length && list[right] + 1 === list[right + 1]) {
			right++;
		}

		if (right - left > 1) {
			result.push(`${list[left]}-${list[right]}`);
			left = right + 1;
		} else {
			while (left <= right) {
				result.push(list[left]);
				left++;
			}
		}
	}

	return result.join(',');
}

console.log(solution(([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])), "-6,-3-1,3-5,7-11,14,15,17-20");