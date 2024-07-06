function findPosition(num) {
	const MAX_LENGTH = 15;
	const length = num.length;

	const checkDigital = (num) => {
		if (+num[0] === 0) {
			return 0;
		}
		const left = 0;
		let right = Math.floor(num.length / 2);
		while (left < right) {
			// console.log(+num.slice(left, right) === +num.slice(right, right + right - left) + 1,
			// 	+num.slice(left, right), +num.slice(right, right + right - left) - 1);
			if (+num.slice(left, right) === +num.slice(right, right + right - left) - 1) {
				return right - 1;
			}
			right--;
		}
		for (let i = 0; i < num.length - 1; i++) {
			if (+num[i] === 9 && +num[i + 1] === 1) {
				return 0;
			}
		}
		return num.length;
	};

	const digital = checkDigital(num);
	// console.log(digital);
	let count = 0;
	let position = 0;
	for (let i = 0; i < digital; i++) {
		if (+num > count + 9 * Math.pow(10, i)) {
			count += 9 * Math.pow(10, i);
			position += 9 * Math.pow(10, i) * (i + 1);
		}
	}
	if (num.length === digital) {
		// console.log(`${num} num.length === digital === ${digital}`);
		// console.log(digital * (+num - count));
		return position + digital * (+num - count);
	}
	count++;
	// console.log(num, digital, count, position);

	let str = '';
	while (true) {
		while (str.length < length * 100) {
			str += count.toString();
			count++;
		}

		const currentPosition = str.indexOf(num);
		if (currentPosition !== -1) {
			return position + currentPosition;
		}

		position += length * 99;
		str = str.slice(length * 99);
	}
}

console.log(findPosition("456"), 3, "...3456...")
console.log(findPosition("454"), 79, "...444546...")
console.log(findPosition("455"), 98, "...545556...")
console.log(findPosition("910"), 8, "...7891011...")
console.log(findPosition("9100"), 188, "...9899100...")
console.log(findPosition("99100"), 187, "...9899100...")
console.log(findPosition("00101"), 190, "...99100101...")
console.log(findPosition("001"), 190, "...9899100...")
console.log(findPosition("00"), 190, "...9899100...")
console.log(findPosition("123456789"), 0)
console.log(findPosition("1234567891"), 0)
console.log(findPosition("123456798"), 1000000071, '2.283 seconds')
console.log(findPosition("10"), 9)
console.log(findPosition("949225100"), '5.142 seconds')
console.log(findPosition("58257860625"), 24674951477, '307.796 seconds')
