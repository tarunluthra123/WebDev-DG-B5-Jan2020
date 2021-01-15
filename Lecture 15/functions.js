function checkPrime(n) {
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
}


let q = checkPrime(23)
checkPrime(100)
checkPrime(45)

console.log(q)

function square(x) {
    return x * x;
}

console.log(square(5))
console.log(square(6))


function sayHello(name) {
    console.log("Hello "+name)
}


sayHello("Tony Stark")
sayHello("Thor")
sayHello()
sayHello("Black Widow", "Hawkeye")
sayHello(3)


console.log(square()) // NaN = Not a Number

checkPrime()


