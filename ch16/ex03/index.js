import crypto from "crypto";
import fs from "fs/promises";

// 鍵を生成する
function generateKey() {
    // 32バイトの暗号論的疑似乱数を生成する
    return crypto.randomBytes(32);
}

// 平文を鍵とAES-256-CBCで暗号化する。次に、暗号文と初期化ベクトル(IV)を、Base64エンコードして返す。
function encrypt64(text, key) {
    // 16バイトの暗号論的疑似乱数を初期化ベクトル (IV) とする
    const iv = crypto.randomBytes(16);
    // 暗号器を生成
    const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
    // 暗号化とBase64エンコード
    const encryptedData = Buffer.concat([
        cipher.update(text),
        cipher.final()
    ]);
    const encryptedBase64 = encryptedData.toString("base64");
    // 暗号文とIVをbase64で返す
    return {
        value: encryptedBase64,
        iv: iv.toString("base64"),
    };
}

// generateKeyの返り値を、JSON形式でファイルに保存する(非同期)
async function writeKey(key) {
    // ここを埋める（fs.promisesで鍵を保存）
    // fs.promises.writeFile を使って、指定されたファイルにデータを書き込む
    // Base64 形式の文字列に変換
    await fs.writeFile("key.json", JSON.stringify({ key: key.toString("base64") }));
}

// encrypt64の返り値を、JSON形式でファイルに保存する(非同期)
async function writeEncrypt64(data) {
    // ここを埋める（fs.promisesで暗号データを保存）
    // fs.writeFileは、Node.jsのfs.promisesモジュールを使ってファイルにデータを書き込む非同期処理です。
// JSON.stringify(data)は、dataオブジェクトをJSON文字列に変換し、それをencryptedData.jsonというファイルに書き込みます。
    await fs.writeFile("encryptedData.json", JSON.stringify(data));
}

async function readKey() {
    // ここを埋める（return Promise<鍵>）
    //key.json ファイルを読み込む。
// 読み込んだJSONデータをパースし、Base64形式の鍵文字列を取得。
// その鍵を Buffer に変換して返す。
    const keyData = await fs.readFile("key.json");
    const parsedKey = JSON.parse(keyData);
    return Buffer.from(parsedKey.key, "base64");
}

// ファイルから暗号データを読み込む (非同期)
async function readEncrypt64() {
    // ここを埋める（return Promise<data>）
    const encryptedData = await fs.readFile("encryptedData.json");
    return JSON.parse(encryptedData);
}

// 復号して平文を返す
//encrypt64 で暗号化されたデータとIVを渡すことで、復号処理を行い、元のテキスト（平文）を返します。
function decrypt64(data, key) {
    // ここを埋める
    const iv = Buffer.from(data.iv, "base64");
    // 復号器を生成
    const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);

    // encryptedData を復号
    const decryptedData = Buffer.concat([
        decipher.update(data.value, "base64"),
        decipher.final()
    ]);
    const decryptedBase64 = decryptedData.toString("utf-8");

    return decryptedBase64;

}

// 指定の平文を暗号化とBase64エンコードし、後に復号する一連の処理
(async () => {
    // 平文
    const text = "Hello, World!";

    // 暗号化とBase64エンコード
    const key = generateKey();
    const encryptedData = encrypt64(text, key);

    // 鍵と暗号データをJSONで保存
    await writeKey(key);
    await writeEncrypt64(encryptedData);

    console.log("Encrypted Text (Base64):", encryptedData.value);

    // Base64デコードと復号
    const storedKey = await readKey();
    const storedEncryptedData = await readEncrypt64();
    const decryptedText = decrypt64(storedEncryptedData, storedKey);

    console.log("Decrypted Text:", decryptedText);
})();
