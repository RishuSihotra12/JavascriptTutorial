class User {
    constructor(name,email){
        this.name=name
        this.email=email
    }
    #courseList = []                             // Private access modifier
    getInfo(){
        return {name : this.name,email:this.email}
    }
    enrollCourse(name){                          //  setter because setting a value
        this.#courseList.push(name)
    }
    getCourseList(){                             // getter to get value
        return this.#courseList;
    }
}

const ele = new User("Rishu","rishusihotra@hdsda")
console.log(ele.getInfo())
ele.enrollCourse("Javascript")
console.log(ele.getCourseList())