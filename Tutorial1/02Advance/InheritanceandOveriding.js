class User{
    constructor(firstName,lastName,credit){
        this.firstName = firstName
        this.lastName = lastName
        this.credit = credit
    }
    getFullName(){
        return this.firstName +" "+this.lastName
    }
    editName(newName){
        const myName = newName.split(" ")
        this.firstName = myName[0]
        this.lastName = myName[1]
    }
}

class Teacher extends User{
    constructor(firstName,lastName,credit,subject){
        super(firstName,lastName,credit)
        this.subject=subject
    }
    getFullName(){
        return this.firstName+" "+this.lastName+" and Subject is = "+this.subject
    }
}
const john = new User("John","Andreson",34)
console.log(john)
console.log(john.getFullName())
console.log("===================================================")
const teac = new Teacher("Dinesh","Mahale",29,"Javascript")
console.log(teac.getFullName())
