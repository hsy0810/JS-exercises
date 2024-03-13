import { newHashTable } from "./index.js";

describe("newHashTable", () => {
  it("ハッシュテーブルにマッピングを追加、取得できる", async () => {
    const hashTable = newHashTable();
    hashTable.put("key1", "value1");
    hashTable.put("key2", { value: "value2" });

    expect(hashTable.size).toBe(2);
    expect(hashTable.get("key1")).toBe("value1");
    expect(hashTable.get("key2")).toEqual({"value":"value2"});
  });

  it("マッピングを追加するとき、keyが存在する場合はvalueを上書きできる", async () => {
    const hashTable = newHashTable();
    hashTable.put("key1", "value1");
    hashTable.put("key1", "new value");

    expect(hashTable.get("key1")).toBe("new value");
  });

  it("ハッシュテーブルにマッピングを削除できる", async () => {
    const hashTable = newHashTable();
    hashTable.put("key1", "value1");
    hashTable.put("key2", { value: "value2" });
    hashTable.remove("key2");
   
    expect(hashTable.size).toBe(1);
    expect(hashTable.get("key2")).toEqual(undefined);
  });

  it("ハッシュ値が衝突した場合はリンクリスト形式で複数のマッピングを保持する", async () => {
   // TODO
  });
});
