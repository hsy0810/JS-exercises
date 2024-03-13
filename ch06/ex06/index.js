export function getProperties(obj) {
    const properties = [];

    // 独自プロパティを配列に追加
    const ownProps = Object.getOwnPropertyNames(obj);
    properties.push(ownProps);
    // properties.push(...ownProps.map(prop => ({ property: prop, value: obj[prop] })));

    // 列挙可能な継承プロパティを配列に追加
    let prototype = Object.getPrototypeOf(obj);
    for (let inheritedProp in prototype) {
        properties.push(inheritedProp); 
        // properties.push({ property: inheritedProp, value: prototype[inheritedProp] });
    }

    return properties;
}