export function push(seq, num) {
  seq = [...seq, num]; 
  return seq; 
}

export function pop(seq) {
  return seq.slice(0, -1);
}

export function shift(seq) {
  return seq.slice(1);
}

export function unshift(seq, num) {
  seq = [num, ...seq];
  return seq;
}

export function sort(seq, callback) {
  const copiedSeq = [...seq]; // 配列をコピー
  copiedSeq.sort(callback); // 並べ替え

  return copiedSeq; 
}