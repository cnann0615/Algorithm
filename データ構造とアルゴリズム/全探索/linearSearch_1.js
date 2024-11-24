// N 個の整数 a0, a1, ..., aN－1 のうち，整数値 v が何個含まれるかを求める O(N) のアルゴリズムを設計してください。

function Main(input) {
  input = input.split("\n");
  const n = parseInt(input[0]);
  array = input[1].split(" ");
  const v = parseInt(input[2]);

  let count = 0;
  for (let i = 0; i < n; i++) {
    if (parseInt(array[i]) === v) {
      count++;
    }
  }
  console.log(count);
}

// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
Main(`5
1 3 5 1 5
1`);
