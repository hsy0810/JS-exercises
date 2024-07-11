export class IgnoreAccentPattern {
    constructor(pattern) {
      if (typeof pattern === 'string') {
        this.pattern = this.removeDiacritics(pattern);
        this.regex = new RegExp(this.pattern, 'g');
      } else if (pattern instanceof RegExp) {
        this.pattern = this.removeDiacritics(pattern.source);
        const flags = pattern.flags;
        this.regex = new RegExp(this.pattern, flags);
      }
    }
  
    removeDiacritics(str) {
      // 文字列をNFD（正規化形式分解）に変換
      const normalized = str.normalize('NFD');
      // \u0300-\u036fの範囲の文字（ダイアクリティカルマーク）を削除
      return normalized.replace(/[\u0300-\u036f]/g, '');
    }
  
    [Symbol.search](string) {
      const normalizedString = this.removeDiacritics(string);
      return normalizedString.search(this.regex);
    }
  
    [Symbol.match](string) {
        const normalizedString = this.removeDiacritics(string);
        const matches = [];
        let result;
        
        // 正規表現で一致を検索
        while ((result = this.regex.exec(normalizedString)) !== null) {
          // 一致した位置を元の文字列から取得
          const startIndex = result.index;
          const endIndex = startIndex + result[0].length;
          
          // 元の文字列から一致部分を取り出す
          matches.push(string.substring(startIndex, endIndex));
        }
    
        return matches.length > 0 ? matches : null;
      }
  }
  