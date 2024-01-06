export const replaceLfToCrlf = (str) => {
    // LF -> CRLF
    return str.replace("\n", "\r\n");
}

export const replaceCrltToLf = (str) => {
    // CRLF -> LF
    return str.replace("\r\n", "\n");
}