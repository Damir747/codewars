function validateBattlefield(field) {
	const X_SIZE = 10;
	const Y_SIZE = 10;
	const MAX_SHIP_COUNT = [4, 3, 2, 1];
	const shipCount = new Array(MAX_SHIP_COUNT.length).fill(0);
	const diagonalFields = [[-1, -1], [-1, 1], [1, -1], [1, 1]];
	const rightWay = [0, 1];
	const downWay = [1, 0];
	const checkInsideField = (x, y) => (x >= 0 && x < X_SIZE && y >= 0 && y < Y_SIZE);

	const checkDiagonal = (x, y) => {
		for (let i = 0; i < diagonalFields.length; i++) {
			const xTemp = x + diagonalFields[i][0];
			const yTemp = y + diagonalFields[i][1]
			if (checkInsideField(xTemp, yTemp) && field[xTemp][yTemp] === 1) {
				return false;
			}
		}
		return true;
	}

	function calcShipSize(x, y) {
		const calcWay = (nextWay) => {
			let count = 0;
			let xNext = x + nextWay[0];
			let yNext = y + nextWay[1];
			while (checkInsideField(xNext, yNext) && field[xNext][yNext] === 1) {
				count++;
				xNext = xNext + nextWay[0];
				yNext = yNext + nextWay[1];
			}
			return count;
		}
		return 1 + calcWay(downWay) + calcWay(rightWay);
	}

	for (let i = 0; i < X_SIZE; i++) {
		for (let j = 0; j < X_SIZE; j++) {
			if (field[i][j] === 1) {
				if (!checkDiagonal(i, j)) {
					return false;
				}
				const indexShipSize = calcShipSize(i, j) - 1;
				if (indexShipSize > 4) {
					return false;
				}
				shipCount[indexShipSize]++;
			}
		}
	}

	let accumulate = shipCount[MAX_SHIP_COUNT.length - 1];
	for (let i = MAX_SHIP_COUNT.length - 2; i >= 0; i--) {
		shipCount[i] = shipCount[i] - accumulate;
		accumulate += shipCount[i];
	}

	for (let i = 0; i < 4; i++) {
		if (shipCount[i] !== MAX_SHIP_COUNT[i]) {
			return false;
		}
	}

	return true;
}

const field = [
	[1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
	[1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
	[1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
	[0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
	[0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
console.log(validateBattlefield(field));

// https://www.codewars.com/kata/52bb6539a4cf1b12d90005b7/train/javascript