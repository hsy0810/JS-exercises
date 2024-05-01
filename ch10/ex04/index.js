import sum from './myModule.js'; // デフォルトインポート
import { Range as NewRange } from './myModule.js'; //名前変更を伴うインポート
export {Range, sum as add} from './myModule.js'; //再エクスポートされた関数をインポート

const result = sum(1, 3);
console.log(result);

const obj = new NewRange(1, 3);
const result2 = obj.toString();
console.log(result2);
