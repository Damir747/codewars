const convertIp = (ip) => {
	const arr = ip.split('.').map(Number);
	return arr[0] * 256 * 256 * 256 + arr[1] * 256 * 256 + arr[2] * 256 + arr[3];
}

const ipsBetween = (start, end) => Math.abs(convertIp(end) - convertIp(start));
