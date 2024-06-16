function findPosition(num) {
	const MAX_LENGTH = 15;
	const length = num.length;

	const checkDigital = (num) => {
		for (let i = 0; i < length - 1; i++) {
			if (+num[i + 1] < +num[i] &&
				!(+num[i] === 9 && +num[i + 1] === 1) &&
				!(+num[i] === 1 && +num[i + 1] === 0)) {
				if (+num[0] === +num[i + 1]) {
					return i;
				}
				return i + 1;
			}
		}
		return 0;
	};

	const digital = checkDigital(num);
	let count = 0;
	let position = 0;
	for (let i = 0; i < digital; i++) {
		count += 9 * Math.pow(10, i);
		position += 9 * Math.pow(10, i) * (i + 1);
	}
	count++;
	// console.log(num, digital, count, position);

	let str = '';
	while (true) {
		while (str.length < length * 1000) {
			str += count.toString();
			count++;
		}

		const currentPosition = str.indexOf(num);
		if (currentPosition !== -1) {
			return position + currentPosition;
		}

		position += length * 999;
		str = str.slice(length * 999);
	}
}

// console.log(findPosition("456"), 3, "...3456...")
// console.log(findPosition("454"), 79, "...444546...")
// console.log(findPosition("455"), 98, "...545556...")
// console.log(findPosition("910"), 8, "...7891011...")
// console.log(findPosition("9100"), 188, "...9899100...")
// console.log(findPosition("99100"), 187, "...9899100...")
// console.log(findPosition("00101"), 190, "...99100101...")
// console.log(findPosition("001"), 190, "...9899100...")
// console.log(findPosition("00"), 190, "...9899100...")
// console.log(findPosition("123456789"), 0)
// console.log(findPosition("1234567891"), 0)
// console.log(findPosition("123456798"), 1000000071, '3.883 seconds')
// console.log(findPosition("10"), 9)
// console.log(findPosition("949225100"), '5.142 seconds')
console.log(findPosition("58257860625"), '307.796 seconds')
