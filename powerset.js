function powerset(nums) {
	const result = [];

	function dfs(subResult, index) {
		if (index === nums.length) {
			result.push([...subResult]);
			return;
		}
		dfs(subResult, index + 1);
		subResult.push(nums[index]);
		dfs(subResult, index + 1);
		subResult.pop();
	}

	dfs([], 0);
	return result;
}

console.log(powerset([1, 2, 3]));
