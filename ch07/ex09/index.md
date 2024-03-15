`"𠮷野家"[0]`　＝＞　`𠮷`
𠮷野家を分割すると、𠮷,野,家の三つ文字になる。インデックス0番は最初の文字`𠮷`である。



`"👨‍👨‍👧‍👧"[0]` ＝＞　`👨‍👨‍👧‍👧‍`
- 👨‍👨‍👧‍👧の最小描画単位は👨‍👨‍👧‍👧であるため、それ以上は分割できなかった。
- でも[参考](https://0g0.org/topic/zero-width-joiner/)を見ると、四人に分けられそう。出力は`👨`にになるはず‍だが、自分はうまくいかなかった

```js
function createSegment(str) {
    const segmenter = new Intl.Segmenter( { granularity: 'grapheme' });
    const segments = Array.from(segmenter.segment(str), ({ segment }) => segment);
    return segments;
}
```

メモ：ゼロ幅接合子
- ゼロ幅接合子(zero width joiner,ZWJ)という特別な文字「U+200D」を絵文字と組み合わせて使うと、 絵文字を合体させることができます。

- 例えば「👨(男性 U+1F468)」、「👧(女子 U+1F467)」、「👦(男子 U+1F466)」の3つの文字を 「U+200D」でつなげると「👨‍👧‍👦」となります 