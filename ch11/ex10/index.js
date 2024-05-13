
// 参考：https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date 


// 特定の年と月(1-12)を数値の引数で受け取り、その月の日数を返す関数
function getDays(year, month) {
    return new Date(year, month, 0).getDate();
}



// 期間の開始日と終了日を'YYYY-MM-DD'形式の日付で二つ引数で受け取り、その期間(開始日と終了日を含む)の土日以外の日数を返す関数
function getWeekdays(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    let count = 0;
    for (const d = start; d <= end; d.setDate(d.getDate() + 1)) {
        const day = d.getDay();
        if (day != 0 && day != 6) {
            count++;
        }
    }
    return count;
}

// 'YYYY-MM-DD'形式の日付とロケールを引数で受け取り、その日の曜日をロケールの形式の文字列で返す関数
function getDayOfWeek(inputDate, locale) {
    const date = new Date(inputDate);
    return date.toLocaleDateString(locale, { weekday: 'long' });
}

// ローカルのタイムゾーンにおいて先月 1 日 0 時 0 分 0 秒の Date オブジェクトを返す関数
function getMyDate() {
    const now = new Date();
    //今月の1日
    const firstDayOfThisMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    //先月の1日
    const firstDayOfLastMonth = new Date(firstDayOfThisMonth - 1);
    firstDayOfLastMonth.setHours(0, 0, 0, 0);
    return firstDayOfLastMonth;
}

export {getDays, getWeekdays, getDayOfWeek, getMyDate}
