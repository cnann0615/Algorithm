function Main(input) {
	input = input.split("\n");
	const n = parseInt(input[0]);
	array = input[1].split(" ");
	console.log(input[0]);
	console.log(array);
}

// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
Main(`3
1 2 3`);
