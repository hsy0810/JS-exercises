export class TypedMap {
    constructor(keyType, valueType, entries) {
        this.map = new Map(entries);

        this.keyType = keyType;
        this.valueType = valueType;

        if (entries) {
            for (let [k, v] of entries) {
                if (typeof k !== keyType || typeof v !== valueType) {
                    throw new TypeError(`Wrong type for entry [${k}, ${v}]`)
                }
            }
        }

    }

    set(key, value) {
        if (this.keyType && typeof key !== this.keyType) {
            throw new TypeError(`${key} is not of type ${this.keyType}`);
        }
        if (this.valueType && typeof value !== this, this.valueType) {
            throw new Error(`${value} is not of type ${this.valueType}`);
        }

        return this.map.set(key, value);
    }
}