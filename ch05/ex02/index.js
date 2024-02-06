export function escapeString1(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        let a = str.charAt(i);

        if (a === '\u005c') {
            newStr += '\\\\';
        } else if (a === '\u0027') {
            newStr += '\\\'';
        } else if (a === '\u0022') {
            newStr += '\\\"';
        } else if (a === '\u000D') {
            newStr += '\\r';
        } else if (a === '\u000C') {
            newStr += '\\f';
        } else if (a === '\u000B') {
            newStr += '\\v';
        } else if (a === '\u000A') {
            newStr += '\\n';
        } else if (a === '\u0009') {
            newStr += '\\t';
        } else if (a === '\u0008') {
            newStr += '\\b';
        } else if (a === '\u0000') {
            newStr += '\\0';
        } else {
            newStr += a;
        }
    }
    return newStr;
}

export function escapeString2(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        let a = str.charAt(i);

        switch (a) {
            case '\u005c':
                newStr += '\\\\';
                break;
            case '\u0027':
                newStr += '\\\'';
                break;
            case '\u0022':
                newStr += '\\\"';
                break;
            case '\u000D':
                newStr += '\\r';
                break;
            case '\u000C':
                newStr += '\\f';
                break;
            case '\u000B':
                newStr += '\\v';
                break;
            case '\u000A':
                newStr += '\\n';
                break;
            case '\u0009':
                newStr += '\\t';
                break;
            case '\u0008':
                newStr += '\\b';
                break;
            case '\u0000':
                newStr += '\\0';
                break;
            default:
                newStr += a;
        }
    }
    return newStr;
}

