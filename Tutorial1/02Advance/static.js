class User{
    constructor(name,email){
        this.name=name
        this.email=email
    }
    getInfo(){
        return {name : this.name,email:this.email}
    }

    // static login(){                   // Private property can not inherit
    //     console.log(" Logged in USER")
    // }
     login(){                   // Private property can not inherit
        console.log(" Logged in USER")
    }
}
class SubAdmin extends User{
    constructor(name,email)     { super(name,email)}
    getAdminInfo()              { console.log("I aM ===SubADMIN ===")}
    login() { 
        console.log(" LOGGED in SUBADMIN  ")
        super.login()          // access methos using SUPER Keyword from parent class
    }
}
// const john = new User("John","Andreson",34)
// console.log(john)
// console.log(john.getFullName())

console.log("====================================")
const child = new SubAdmin("Rishu","Sihotra@fsdfdsf");
console.log(child.getAdminInfo())
console.log(child.login())
console.log(child.getInfo())