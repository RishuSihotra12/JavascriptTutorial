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
const john = new User("John","Andreson",34)
console.log(john)
console.log(john.getFullName())
john.editName("Rishu Sihotra")
console.log(john.getFullName())