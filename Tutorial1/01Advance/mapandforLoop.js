const { map } = require("mathjs")

var john =  {name:"i am John" ,  age:10 ,isActive:true}
var marry = {name:"i am marry" , age:20 ,isActive:true}
var sam =   {name:"i am sam" ,   age:60 ,isActive:false}

let users = new Map()
console.log(typeof users)
console.log(users)
users.set('john',john)
users.set('marry',marry)
users.set('sam',sam)
console.log(users)
console.log("size of map = ",users.size)
console.log(users.get('sam'))          // pass key and get
console.log(users.keys())              // get all keys present in map
console.log(users.values())            // get all value present in map
///map returns iterable


//  ============  how to iterate using FOR OF

console.log("=================================================")

console.log("Fetching all keys using FOR OF iterator =>")
for (const keys of users.keys()) {
    console.log(keys)
}

console.log("=================================================")

console.log("Fetching all values using FOR OF iterator =>")
for (const values of users.values()) {
    console.log(values)
}
for (const values of users.values()) {
    console.log(values.name)
}

console.log("=================================================")

console.log("Fetching all keys and Values using FOR OF iterator =>")
for (const [key,value]  of users.entries()) {
    console.log(key + ' + '+value.name)       ///convert line in literals
}
console.log("======================FOR  EACH===========================")
users.forEach((value,key) => console.log(key + ' => '+value.name) )


console.log("=================================================")
var arrOfarr = [['one',1],['Two',2],['Three',3]]
var newMap = new Map(arrOfarr)

console.log(newMap)
