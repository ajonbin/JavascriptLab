let fibonacci_by_loop = function(n){
    let fib_array = [0,1];
    if(n === 0){
        return 0
    }else if( n === 1){
        return 1
    }else{
        for (let i = 2; i <= n ; i++){
            fib_array[i] = fib_array[i-1] + fib_array[i-2];
        }
        return fib_array[n];
    }
}

//Runtime complexity of this recursive is 2^n, very slow
var runtime_complexity_counter = 0;
let fibonacci_by_recurse = function(n){
    console.log(++runtime_complexity_counter);
    if(n === 0){
        return 0
    }else if( n === 1){
        return 1
    }else{
        return fibonacci_by_recurse(n-1) + fibonacci_by_recurse(n-2)
    }
}


//Fix for the slow recurisve
function memorize(fn) {
    let cache = {};

    return function(...args){
        if(cache[args]){
            return cache[args];
        }else{
            const result = fn.apply(this,args);
            cache[args] = result;
            return result;
        }
    }
}

let fibonacci_slow = function(n){
    if(n < 2){
        return n;
    }else{
        return fibonacci_fast(n - 1) + fibonacci_fast(n - 2)
    }
}

let fibonacci_fast = memorize(fibonacci_slow);

export default { fibonacci_by_recurse, fibonacci_by_loop, fibonacci_fast }