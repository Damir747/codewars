function onlyDuplicates(str) {
	const obj = {};
	for (let i = 0; i < str.length; i++) {
		obj[str[i]] = (obj[str[i]] || 0) + 1;
	}

	let result = '';
	for (let i = 0; i < str.length; i++) {
		if (obj[str[i]] > 1) {
			result += str[i];
		}
	}
	return result;
}

console.log(onlyDuplicates('aabbcc'));
console.log(onlyDuplicates('aabbc'));
console.log(onlyDuplicates('abccdefee'));
console.log(onlyDuplicates('aabbccdddeee'));
console.log(onlyDuplicates('aabbccdddeeeffggh'));

