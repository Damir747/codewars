function pigIt(str) {
	const words = str.split(' ');
	return words.map(word => word[0] === '!'
		? word : word[0] === '?'
			? word : word[0] === '.'
				? word : word[1] === '.'
					? `${word[0]}${word[1]}` : `${word.slice(1)}${word[0]}ay`).join(' ');
}