function tryCatch() {
    try {
        console.log("1. Try");
        let n;
        do {
            n = Number(prompt("Please enter a positive integer", ""));
        }while(isNaN(n) || n<0);
        
        let f = factorial(n);
        console.log( n + "! = " + f);
       
    } catch (ex) {
        console.log("2. Catch:" + ex);
    } finally {
        console.log("3. Finally");
    }
}

function factorial(x) {
 if(x < 0) throw new Error("x must not be negative");
 let f;
 for(f=1; x>1; f*=x, x--)
 return f;
}

tryCatch();