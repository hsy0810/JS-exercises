export function* counterGen() {
    let count = 0;
    while (true) {
        try {
            yield count++;
        } catch (e) {
            if (e === 'reset') {
                count = 0;
                yield count;
            } else {
                throw e;
            }
        }
    }
}
