let x = 4    //allow reassigning
x = 7

var y = 20    //allow reassigning
y = 3

const z = "hello"   //constant values


// console.log(x, y, z)



// Difference between var and let
// let has block scope
// var has function scope

function abc() {
    let p = 10
    var q = 20
    console.log(p,q)
}

abc()


if (true) {
    let p = 100
    var q = 200
    console.log(p,q)
}

// console.log(p)    //This gives error as p exists only inside the block
console.log(q)