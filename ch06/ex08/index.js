export function restrict(target, template){
    for(let key of Object.keys(target)){
        if(!(key in template) && target.hasOwnProperty(key)) {
            delete target[key]
        }
    }
    return target;
}

// 通らなかった
export function substract(target, ...sources) {
    for (let source of sources) {
        for (let key of Object.keys(source)) {
            if (source.hasOwnProperty(key) && key in target) {
                delete target[key];
            }
        }
    }
    return target;
}
