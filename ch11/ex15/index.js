import { URL } from 'url';

export function modifyUrl({ base, addQuery, path }) {
    const url = new URL(base);

    // パスを追加
    if (path) {
        url.pathname = path;
    }

    // クエリを追加
    if (addQuery) {
        for (const [key, value] of addQuery) {
            url.searchParams.append(key, value);
        }
    }

    return url.toString();
}
