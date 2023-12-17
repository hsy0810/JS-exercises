// セミコロンを除去する関数
export function removeSemicolon(sourceCode) {
    return sourceCode.replace(/;/g, '');
}

// セミコロンを追加する関数
export function addSemicolon(sourceCode) {
    if (sourceCode.trim().slice(-1) !== ';') {
        return sourceCode.trim() + ';';
    }
    return sourceCode.trim(); 
}

const code1 = `
console.log("Hello Workld!");
`;
const codeWithoutSemicolon = removeSemicolon(code1);
const code2 = `
console.log("Hello Workld!")
`;
const codeWithSemicolon = addSemicolon(code2);

console.log("セミコロンを除去したコード:\n", codeWithoutSemicolon);
console.log("\nセミコロンを追加したコード:\n", codeWithSemicolon);