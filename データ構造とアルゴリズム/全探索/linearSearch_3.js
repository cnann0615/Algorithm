// N 個の整数 a0, a1, ..., aN－1 が与えられます．この中から２つ選んで差をとります．その差の最大値を求める O(N) のアルゴリズムを設計してください。
function Main(input) {
  input = input.split("\n");
  const N = input[0];
  const array = input[1].split(" ");

  let MAX = Number.MIN_SAFE_INTEGER;
  let MIN = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < N; i++) {
    const num = parseInt(array[i]);
    if (num > MAX) {
      MAX = parseInt(num);
    }
    if (num < MIN) {
      MIN = parseInt(num);
    }
  }

  console.log(MAX - MIN);
}

Main(`5
1 3 4 6 12`);
