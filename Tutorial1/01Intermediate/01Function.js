let sayHello = function(name){
    console.log("Greeting message for user")
    console.log(`Hey ${name}`)
}

sayHello('John')

let fullName = function(firstName, lastName){
    console.log("welcome to LCO")
    console.log(`Happy to have you , ${firstName} ${lastName}`)
}
fullName("Rishu","Sihotra")
 
let myAdder = function(num1,num2){
    let added = num1 + num2
    return added
}
let result = myAdder(3,6)
console.log(result)

let myMulti = function(num1,num2){
    return num1 * num2
}
console.log(myMulti(4,5))


let guestUser = function(name = 'unName',courseCount =0){
    return 'Hello= '+name+' '+'and your course count is: '+courseCount
}
console.log(guestUser('Rishu',1))