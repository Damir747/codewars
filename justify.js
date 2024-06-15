function justify(text, width) {
	if (!text) {
		return text;
	}
	const words = text.split(' ');
	let index = 0;
	const lines = [];
	let indexLine = 0;
	while (index < words.length) {
		lines.push('');
		while (index < words.length && (lines[indexLine] === '' || lines[indexLine].concat(' ').concat(words[index]).length <= width)) {
			lines[indexLine] = lines[indexLine].concat(' ').concat(words[index]).trimStart();
			index++;
		}
		indexLine++;
	}

	for (let i = 0; i < lines.length - 1; i++) {
		let position = lines[i].indexOf(' ');
		if (position !== -1) {
			while (lines[i].length < width) {
				lines[i] = lines[i].slice(0, position).concat(' ').concat(lines[i].slice(position));
				while (lines[i][position] === ' ') {
					position++;
				}
				position = lines[i].indexOf(' ', position);
				if (position === -1) {
					position = lines[i].indexOf(' ', 0);
				}
			}
		}
	}
	return lines.join('\n');
}


// console.log(justify('ab cd ab c d efghi jkl', 10));
// console.log(justify('12 45 1234 12', 6), '12  45\n1234\n12');
// console.log(justify('123', 7), '123');
// console.log(justify('', 10), '');
const LIPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.';
console.log(justify(LIPSUM, 30));

// https://www.codewars.com/kata/537e18b6147aa838f600001b/train/javascript