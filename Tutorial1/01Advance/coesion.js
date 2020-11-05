console.log('5'+5)
const giveType= typeof 5
console.log(giveType)

const addr = 3 + true         //take true as 1
const add = 6 + false         // take false as 0

console.log("Value = ",addr)
console.log(add)

//=========================
const loginDetails = ''
//login getting details from DB
const loginID = loginDetails[0]
if(loginDetails){
    console.log("Allow user to login")
}else{
    console.log("Auth Failed ")
}

// values that interpret as  false
//false
//0
//''
//null
//undefined