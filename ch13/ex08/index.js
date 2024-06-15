import * as fsPromises from "node:fs/promises";
import { join } from "node:path";


export async function fetchFirstFileSize(path) {
    try {
      const files = await fsPromises.readdir(path);
      if (files.length === 0) {
        return null;
      }
  
      const stats = await fsPromises.stat(join(path, files[0]));
      return stats.size;
    } catch (err) {
      throw err;
    }
  }

export async function fetchSumOfFileSizes(path) {
  try {
    const files = await fsPromises.readdir(path);
    let total = 0;

    for (let file of files) {
      const stats = await fsPromises.stat(join(path, file));
      total += stats.size;
    }

    return total;
  } catch (err) {
    throw err; 
  }
}

const path = 'ch13/ex02/';
fetchSumOfFileSizes(path)
.then(total => console.log(total))
.catch(err => console.error(err));