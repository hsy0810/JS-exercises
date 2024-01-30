//正規表現を使用すべき
export const replaceLfToCrlf = (str) => {
    // LF -> CRLF
    return str.replace(/\n/g, '\r\n');
}

export const replaceCrltToLf = (str) => {
    // CRLF -> LF
    return str.replace(/\r\n/g, '\n');
}