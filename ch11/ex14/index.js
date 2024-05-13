function sortJapanese(jsStr) {
    const collator = new Intl.Collator('ja', {
        sensitivity: 'base', // 大文字・小文字、濁点・半濁点を無視
        usage: 'sort'
    }).compare;


    return jsStr.sort(collator);
}

function toJapaneseDateString(inputDate) {
    const options = {
        era: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        calendar: 'japanese',
        timeZone: 'Asia/Tokyo'
    };

    const formatter = new Intl.DateTimeFormat('ja-JP', options);
    return formatter.format(inputDate);
}

export { sortJapanese, toJapaneseDateString };
