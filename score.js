function score(dice) {
	let score = 0;
	const obj = {};
	for (let i = 0; i < dice.length; i++) {
		obj[dice[i]] = (obj[dice[i]] || 0) + 1;
	}
	const priority = [1, 6, 5, 4, 3, 2];
	const three = [1000, 600, 500, 400, 300, 200];
	for (let i = 0; i < priority.length; i++) {
		if (obj[priority[i]] >= 3) {
			score += three[i];
			obj[priority[i]] -= 3;
		}
	}
	while (obj[1] > 0) {
		score += 100;
		obj[1] -= 1;
	}
	while (obj[5] > 0) {
		score += 50;
		obj[5] -= 1;
	}

	return score;
}