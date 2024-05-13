export class TypeMap {
    constructor() {
        this.map = new Map();
    }
    set(key, value) {
        if (typeof key !== 'function') {
            throw new Error('Keyはコンストラクタ関数に限定する');
        }
        if ((typeof value !== 'object' && typeof value !== key.name.toLowerCase()) || (typeof value === 'object' && !(value instanceof key))) {
            throw new Error('コンストラクタ関数の `key` と そのクラスの `value` のみ受け付ける');
          }
        this.map.set(key, value);
    }
    get(key) {

        return this.map.get(key);
    }

}

