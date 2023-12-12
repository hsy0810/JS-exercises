// F(n) = F(n-1) + F(n-2)
export function fib(n){
    if(n <= 1){
        return n;
    }else{
        return fib(n - 1) + fib(n - 2);
    }
}