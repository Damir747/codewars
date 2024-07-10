function formatDuration(seconds) {
	if (seconds === 0) {
		return 'now';
	}

	const units = [
		[31536000, 'year'],
		[86400, 'day'],
		[3600, 'hour'],
		[60, 'minute'],
		[1, 'second']
	];

	const result = [];

	for (const [unitSeconds, unitName] of units) {
		const value = Math.floor(seconds / unitSeconds);
		if (value > 0) {
			result.push(value + ' ' + unitName + (value > 1 ? 's' : ''));
			seconds -= value * unitSeconds;
		}
	}

	if (result.length === 1) {
		return result[0];
	}
	return result.slice(0, -1).join(', ') + ' and ' + result.slice(-1);
}

console.log(formatDuration(0), '-', 'now');
console.log(formatDuration(1), '-', '1 second');
console.log(formatDuration(2), '-', '2 seconds');
console.log(formatDuration(62), '-', '1 minute and 2 seconds');
console.log(formatDuration(15731080), '-', '26 years, 1 hour, 44 minutes and 40 s…');
console.log(formatDuration(359999), '-', '1 year, 11 months, 7 days, 23 hours, 59 minutes and 59 seconds');