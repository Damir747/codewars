function solve(values, ops) {
	const n = values.length;
	const arrTrue = Array.from({ length: n }, () => new Array(n).fill(0));
	const arrFalse = new Array(n).fill().map(_el => new Array(n).fill(0));

	for (let i = 0; i < n; i++) {
		arrTrue[i][i] = values[i] === 't' ? 1 : 0;
		arrFalse[i][i] = values[i] === 'f' ? 1 : 0;

	}

	for (let len = 2; len <= n; len++) {
		for (let i = 0; i < n - len + 1; i++) {
			const j = len + i - 1;
			for (let k = i; k < j; k++) {
				const leftTrue = arrTrue[i][k];
				const leftFalse = arrFalse[i][k];
				const downTrue = arrTrue[k + 1][j];
				const downFalse = arrFalse[k + 1][j];

				switch (ops[k]) {
					case '&':
						arrTrue[i][j] += leftTrue * downTrue;
						arrFalse[i][j] += leftTrue * downFalse + leftFalse * downTrue + leftFalse * downFalse;
						break;
					case '|':
						arrTrue[i][j] += leftTrue * downTrue + leftTrue * downFalse + leftFalse * downTrue;
						arrFalse[i][j] += leftFalse * downFalse;
						break;
					case '^':
						arrTrue[i][j] += leftTrue * downFalse + leftFalse * downTrue;
						arrFalse[i][j] += leftTrue * downTrue + leftFalse * downFalse;
						break;
					default:
						console.log('Unknown operation', currentOperation);
						break;
				}
			}
		}
	}
	return arrTrue[0][n - 1];
};

console.log(solve('tft', '^&'), 2);
console.log(solve('ttftff', '|&^&&'), 16);
console.log(solve('ttftfftf', '|&^&&||'), 339);
console.log(solve('ttftfftft', '|&^&&||^'), 851);
console.log(solve('ttftfftftf', '|&^&&||^&'), 2434);