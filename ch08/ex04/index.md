  実行結果：
  1. this === obj =>false  
  2. this === nest =>true
  理由：ここのthisはオブジェクトnestを指しているため、1.はfalse、2.はtrueです

  3. this === obj =>true 
  4. this === nest =>false
  理由：アロー関数はthisを継承します。ここのthisはオブジェクトobjを指しているため、3.はtrue、4.はfalseです