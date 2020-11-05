console.log(2==2)

//-------------------"==" checking equality
//-------------------"===" checking object referencing LHS should equal object referencing to RHS

// let myVar=''
// let myVarTwo = ''

//console.log(myVar == myVarTwo)      // o/p => true
//console.log(myVar === myVarTwo)   // o/p => true


//=========================================
// let myVar={}
// let myVarTwo = {}
// console.log(myVar === myVarTwo)    //o/p=> false
//=========================================
let myVar={}
let myVarTwo = myVar
console.log(myVar === myVarTwo)    //o/p=> true

let da= 'abc'

console.log(da === 'rishu')
