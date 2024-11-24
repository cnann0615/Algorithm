// N(>=2) 個の相異なる整数 a0, a1, ..., aN－1 が与えられます．このうち２番目に小さい値を求める O(N) のアルゴリズムを設計してください。

function Main(input) {
  input = input.split("\n");
  const num = parseInt(input[0]);
  const array = input[1].split(" ");

  console.log(input);

  let min = Number.MAX_SAFE_INTEGER;
  let secondMin = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < num; i++) {
    const n = parseInt(array[i]);
    if (n < min) {
      secondMin = min;
      min = n;
    } else if (n < secondMin) {
      secondMin = n;
    }
  }
  console.log(secondMin);
}

Main(`5
1 3 5 2 5`);
