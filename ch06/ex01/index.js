// ハッシュ関数作成、javascirptのライブラリ cryptoを使用する。
// 参考：https://reigle.info/entry/2022/08/03/100000#SHA-256%E3%81%AE%E3%83%8F%E3%83%83%E3%82%B7%E3%83%A5%E5%8C%96
// sha256を指定する
function stringToHash(str) {
    const uint8 = new TextEncoder().encode(str);
    return crypto.subtle.digest('SHA-256', uint8)
            // 非同期処理
        .then(digest => Array.from(new Uint8Array(digest))
            .map(v => v.toString(16).padStart(2, '0')).join('')
        );
}

export function newHashTable() {
    return {
      size: 0, // マッピング数を示すプロパティ
      entries:[], // マッピングを格納する配列
      get(key) {
        // keyにマップされた値を取得する
        const hash = stringToHash(key);
        const bucket = this.entries[hash];
        if (!bucket) {
            return undefined;
        }
        for (const entry of bucket) {
                if (entry.key === key) {
                    return entry.value;
                }
            }
        return undefined;
      },

      put(key, value) {
        // key, valueのマッピングを追加する(keyが存在する場合はvalueを上書きする)
        const hash = stringToHash(key);
        if (!this.entries[hash]) {
            this.entries[hash] = [];
        }

        const bucket = this.entries[hash];
        if (!bucket) {
            return;
        }

        for (const entry of bucket) {
            if (entry.key === key) {
                entry.value = value; 
                return;
            }
        }

        bucket.push({ key, value });
        this.size++;

         // ハッシュ値が衝突した場合はリンクリスト形式で複数のマッピングを保持する
         // TODO
      },


      remove(key) {
        // keyのマッピングを削除する
        const hash = stringToHash(key);
        const bucket = this.entries[hash];
        
        if (!bucket) {
            return;
        }
        
        this.entries[hash] = bucket.filter(entry => entry.key !== key);

        if (this.entries[hash].length === 0) {
            delete this.entries[hash];
        }
        this.size--;
      },
    };
  }
  
function sample() {
    const hashTable = newHashTable();
    hashTable.put("key1", "value1");
    hashTable.put("key2", { value: "value2" });
  
    console.log(`size=${hashTable.size}`); // => size=2
    console.log(`key1=${hashTable.get("key1")}`); // => key1=value1
    console.log(`key2=${JSON.stringify(hashTable.get("key2"))}`); // => key2={"value":"value2"}
  
    hashTable.put("key2", "new value");
  
    console.log(`key2=${hashTable.get("key2")}`); // => key2=new value
  
    hashTable.remove("key2");
  
    console.log(`key2=${hashTable.get("key2")}`); // => key2=undefined
    console.log(`size=${hashTable.size}`); // => size=1
  }

sample();