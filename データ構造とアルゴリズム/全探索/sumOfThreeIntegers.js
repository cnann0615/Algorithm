// ２つの正の整数 K, N が与えられます．0 <= X, Y, Z <= K を満たす整数 (X, Y, Z) の組であって X＋Y＋Z＝N を満たすものが何通りあるかを求める O(N2) のアルゴリズムを設計してください．

function Main(input) {
  input = input.split("\n");
  const k = parseInt(input[0]);
  const n = parseInt(input[1]);

  let count = 0;

  for (let x = 0; x < Math.min(k, n); x++) {
    for (let y = 0; y < Math.min(k, n); y++) {
      const z = n - (x + y);
      if (z >= 0 && z <= k) {
        count++;
      }
    }
  }
  console.log(count);
}

// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
Main(`10
12`);
