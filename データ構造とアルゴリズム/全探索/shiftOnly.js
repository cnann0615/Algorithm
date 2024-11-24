// N個の正の整数 a0, a1, ..., aN－1 が与えられます．これらに対して「N 個の整数がすべて偶数ならば２で割った値に置き換える」という操作を，
// 操作が行えなくなるまで繰り返します．何回の操作を行うことになるかを求めるアルゴリズムを設計してください．

function howManyTimes(num) {
  let count = 0;
  while (num % 2 === 0) {
    num /= 2;
    count++;
  }
  return count;
}

function Main(input) {
  input = input.split(`\n`);
  const n = input[0];
  const array = input[1].split(" ");

  let ans = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < n; i++) {
    ans = Math.min(ans, howManyTimes(parseInt(array[i])));
  }
  console.log(ans);
}

Main(`5
24 12 72 36 36`);
