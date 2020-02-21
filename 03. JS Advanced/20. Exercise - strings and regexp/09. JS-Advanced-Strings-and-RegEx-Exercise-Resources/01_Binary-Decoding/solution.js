function solve() {
	let input = document.getElementById("input").value;
	const output = document.getElementById("resultOutput");

	let strWeight = input;
	while (strWeight.length > 1) {
		strWeight = strWeight.split('')
			.map(Number)
			.reduce((a, b) => a + b, 0)
			.toString();
	}

	input = input.split('');
	input.splice(0, strWeight);
	input.splice(input.length - 4, strWeight);
	let strJoined = input.join('');

	let chunks = [];

	for (let i = 0; i < strJoined.length; i += 8) {
		chunks.push(strJoined.substring(i, i + 8));
	}

	let decimalsToLetters = chunks
		.map((x) => parseInt(+x, 2))
		.filter((x) => {
			if (x === 32 || (x >= 65 && x <= 90) || (x >= 97 && x <= 122)) {
				return x;
			}
		})
		.map((x) => String.fromCharCode(x));

	output.innerHTML = decimalsToLetters.join('');
}