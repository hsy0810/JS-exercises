//プライベートフィールド
export class C1 {
    // プライベートにする
    #x = 42;
  
    getX() {
        return this.#x;
    }
  }

  export class C2 {
    constructor() {
        const x = 42;
        this.getX = () => {
            return x;
          };
      }

  }
  const instance1 = new C1();
  // console.log(instance1.#x); => プロパティ '#x' には private 識別子が指定されているため、クラス 'C1' の外部ではアクセスできません。
  console.log(instance1.getX()); //42
  const instance2 = new C2();
  console.log(instance2.x); //外部から直接アクセスするとundifinedが返す
  console.log(instance2.getX()); //42