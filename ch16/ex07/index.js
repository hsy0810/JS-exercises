import fs from 'fs';

export function checkEntry(path) {
    const stats = fs.statSync(path);
    try {
        if (stats.isFile()) {
            return 'file';
        } else if (stats.isDirectory()) {
            return 'directory';
        }
    } catch (error) {
        console.log(error)
    }
}
