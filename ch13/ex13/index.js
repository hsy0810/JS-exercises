import fs from 'fs';
import path from 'path';

export async function* walk(rootPath) {
    const stack = [rootPath];

    while (stack.length > 0) {
        // カレントパスの情報を取得
        const currentPath = stack.pop();
        const stats = await fs.promises.stat(currentPath);

        // パスがディレクトリの場合
        if (stats.isDirectory()) {
            yield { path: currentPath, isDirectory: true };

            // カレントディレクトリ内のすべてのエントリを取得
            const files = await fs.promises.readdir(currentPath);
            for (const file of files) {
                // カレントパスとファイルパスを結合
                stack.push(path.join(currentPath, file));
            }
        } else if (stats.isFile()) {
            yield { path: currentPath, isDirectory: false };
        }
    }
}

// 利用例
(async () => {
    // カレントディレクトリ (.) のファイル・フォルダを再帰的に取得し表示する
    for await (const elem of walk("ch13/walk/")) {
      console.log(elem);
    }
  
    // NOTE: walk に与えたパスが以下のようなディレクトリ・ファイルを持つ時を考える
    // .
    // ├── A
    // ├── B
    // │   └── C
    // │       └── buz.txt
    // └── foo.txt
    //
    // この気 `walk` は以下を返す (順序は任意):
    // - { path: "A", isDirectory: true }
    // - { path: "B", isDirectory: true }
    // - { path: "B/C", isDirectory: true }
    // - { path: "B/C/buz.txt", isDirectory: false }
    // - { path: "foo.txt", isDirectory: false }
  })();

