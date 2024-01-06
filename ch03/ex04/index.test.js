describe("getLength", () => {
  it("絵文字のlength値を確認する", async () => {
    const emoji = "💯";
    expect(emoji.length).toBe(2);
  });

  it("length値を比較する", async () => {
    const unicode1 = "\uD83D\uDCAF";
    const unicode2 = "\u{0001F4AF}";
    const emoji = "💯";
    expect(unicode1.length === emoji.length).toBe(true);
    expect(unicode2.length === emoji.length).toBe(true);
   });
});