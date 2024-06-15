import * as fsPromises from "node:fs/promises";
import { join } from "node:path";

  
export function fetchSumOfFileSizes(path) {
    return fsPromises.readdir(path)
        .then(files => {
            const promises = files.map(file => {
                return fsPromises.stat(join(path, file))
                    .then(stats => stats.size);
            });
            return Promise.all(promises)
                .then(sizes => sizes.reduce((acc, size) => acc + size, 0))
                .catch(err => {
                    throw err;
                });
        })
        .catch(err => {
            throw err;
        });
}



const path = 'ch13/ex02/';
fetchSumOfFileSizes(path)
.then(total => console.log(total))
.catch(err => console.error(err));