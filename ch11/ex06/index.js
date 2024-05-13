/**
 * 参考記事
 * https://qiita.com/komekami0131/items/7a7834ea63eb0f22d161
 * 
 */

export function isEmailAddress(email) {
    // メールアドレスの正規表現パターン
    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // メールアドレス全体の長さ制限
    const maxLengthCheck = /^.{1,64}@.{1,253}$/;
    return emailPattern.test(email) && maxLengthCheck.test(email) && !hasSpaces(email) && isASCII(email);
    
}

// expect(isEmailAddress("f o o@example.com")).toBe(false);
function hasSpaces(email) {
    return /\s/.test(email);
}

// expect(isEmailAddress("あいうえお@example.com")).toBe(false);
function isASCII(str) {  
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > 127) {
            return false;
        }
    }
    return true;
}

