// class記法
export class Warrior1 {
    constructor(atk) {
        this.atk = atk;
    }
    attack() {
        return this.atk * 2;
    }
}

export class MagicWarrior1 extends Warrior1 {
    constructor(atk, mgc) {
        super(atk);
        this.mgc = mgc;
    }

    attack() {
        return super.attack() + this.mgc;
    }
}

//prototype記法
//戦士のコンストラクタ
export function Warrior2(atk) {
    this.atk = atk;
}

//attackメソッドをプロトタイプに定義する
Warrior2.prototype = {
    attack: function () {
        return this.atk * 2;
    }
}

export function MagicWarrior2(atk, mgc) {
    Warrior2.call(this, atk); // 戦士のコンストラクタを呼び出す
    this.mgc = mgc;
}

// 魔法戦士のプロトタイプは戦士のプロトタイプを継承する
MagicWarrior2.prototype = Object.create(Warrior2.prototype);
MagicWarrior2.prototype.constructor = MagicWarrior2;

// 戦士のattackメソッドをオーバーライド
MagicWarrior2.prototype.attack = function () {
    return Warrior2.prototype.attack.call(this) + this.mgc;
};
