export function IsHoliday1(day){
    const week = ["月","火","水","木","金","土","日"];
    for(let i=0; i<=week.length; i++){
        if(day==="土" || day==="日"){
            return true;
        }else{
            return false;
        }
    }
}


export function IsHoliday2(day){
    const week = ["月","火","水","木","金","土","日"];
    for(let i=0; i<=week.length; i++){
        switch (day) {
            case "土":
            case "日":
                return true;
            default:
                return false;
        }
    }
}

//if-elseのメリット
 //複数条件に対応可
 //処理が早い

//switch
 //複数条件に対応しづらい
 //コードの一貫性を維持する。可読性が高い