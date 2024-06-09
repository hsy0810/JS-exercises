import fs from 'fs';
import path from 'path';

export function* walk(rootPath) {
    const stack = [rootPath];

    while (stack.length > 0) {
        // カレントパスの情報を取得
        const currentPath = stack.pop();
        const stats = fs.statSync(currentPath);

        // パスがディレクトリの場合
        if (stats.isDirectory()) {
            yield { path: currentPath, isDirectory: true };

            // カレントディレクトリ内のすべてのエントリを取得
            const files = fs.readdirSync(currentPath);
            for (const file of files) {
                // カレントパスとファイルパスを結合
                stack.push(path.join(currentPath, file));
            }
        } else if (stats.isFile()) {
            yield { path: currentPath, isDirectory: false };
        }
    }
}

