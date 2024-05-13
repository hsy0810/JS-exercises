export function detectFileType(buffer) {
    const data = new Uint8Array(buffer);

    const signature = data.slice(0, 4);

    const fileTypes = {
        [compareSignature(signature, new Uint8Array([0x25, 0x50, 0x44, 0x46]))]: "PDF",
        [compareSignature(signature, new Uint8Array([0x50, 0x4B, 0x03, 0x04])) ||
         compareSignature(signature, new Uint8Array([0x50, 0x4B, 0x05, 0x06])) ||
         compareSignature(signature, new Uint8Array([0x50, 0x4B, 0x07, 0x08]))]: "ZIP",
        [compareSignature(signature, new Uint8Array([0x47, 0x49, 0x46, 0x38]))]: "GIF",
        [compareSignature(signature, new Uint8Array([0x89, 0x50, 0x4E, 0x47]))]: "PNG",
    };

    return fileTypes[true] || "UNKNOWN";
}

function compareSignature(signature, expected) {
    if (signature.length !== expected.length) {
        return false;
    }
    return signature.every((value, index) => value === expected[index]);
}
