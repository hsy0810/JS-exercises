import * as fsPromises from "node:fs/promises";
import { join } from "node:path";

export function fetchFirstFileSize(path) {
    return fsPromises.readdir(path)
        .then(files => {
            if (files.length === 0) {
                return null;
            }
            return fsPromises.stat(join(path, files[0]))
                .then(stats => stats.size)
                .catch(err => {
                    throw err;
                });
        })
        .catch(err => {
            throw err;
        });
}

export function fetchSumOfFileSizes(path) {
  return fsPromises.readdir(path)
      .then(files => {
          let total = 0;
          const promises = files.map(file => {
              return fsPromises.stat(join(path, file))
                  .then(stats => {
                      total += stats.size;
                  });
          });
          return Promise.all(promises)
              .then(() => total)
              .catch(err => {
                  throw err;
              });
      })
      .catch(err => {
          throw err;
      });
}