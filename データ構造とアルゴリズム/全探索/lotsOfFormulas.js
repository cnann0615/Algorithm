// 各桁の値が１以上９以下の数値のみである整数とみなせるような，長さ N の文字列 S が与えられます．
// この文字列の中で，文字と文字の間のうちのいくつかの場所に「＋」を入れることができます．１つも入れなくてもかまいませんが，「＋」が連続してはいけません．
// このようにしてできるすべての文字列を数値とみなして，総和を計算する O(2N) のアルゴリズムを設計してください．
// たとえば S＝"125" のときは，125, 1＋25 (＝26), 12＋5 (＝17), 1＋2＋5 (＝8) の総和をとって176となります．

function Main(input) {
  input = input.split("\n");
  const len = input[0];
  const st = input[1];

  let ans = 0;

  for (let bit = 0; bit < 1 << (len - 1); bit++) {
    let tmp = 0;
    for (let i = 0; i < len - 1; i++) {
      tmp *= 10;
      tmp += parseInt(st[i]);
      if (bit & (1 << i)) {
        ans += tmp;
        tmp = 0;
      }
    }
    tmp *= 10;
    tmp += parseInt(st[st.length - 1]);
    ans += tmp;
  }

  console.log(ans);
}

Main(`3
125`);
