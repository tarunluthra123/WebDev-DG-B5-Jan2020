let n = 100

// n is a prime number if it has only two factors i.e. 1, n

// Algorithm
// 1. Iterate from 1 to n
// 2. Check whether i divides n ( i is a factor of n) 
// 3. If it does, then increase the factor count
// 4. Check whether factor count == 2, if yes, then the number is prime
// 5. Else it is not prime.

// let factors = 0

// for (let i = 1; i <= n; i++){
//     if (n % i == 0) {
//         // Check whether i is a factor of n
//         // factors = factors + 1
//         factors++
//     }
// }

// if (factors == 2) {
//     console.log(n,"is prime")
// }
// else {
//     console.log(n,"is not prime")
// }


n = 23

// Flag variable method
let flag = true         //Assume that number is a prime

for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
        flag = false
        break          //Terminates the loop at this point
    }
}

if (flag) {
    console.log(n, "is prime"); //Use semicolon if you prefer
}
else {
    console.log(n,"is not prime") //Do not use semicolor if you prefer that
}