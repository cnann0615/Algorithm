function Main(input) {
	input = input.split("\n");
	const n = parseInt(input[0]);
	array = input[1].split(" ");
	console.log(input);
	console.log(array);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
