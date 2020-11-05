// const sayHello = function(name){
//     return "Hey there, "+ name +"!"
// }

// console.log(sayHello('Rishu'))

//=======================ARROW FUNCTIONS ===============
const sayHello = (name) =>   `Hey there ${name} !`

console.log(sayHello('Rishu'))

const todos = [{
    title : 'Buy Bread',
    isDone : true
},
    {
        title : 'Go to Gym',
        isDone : true
    },
    {
        title : 'Record youtube video',
        isDone : false
    }]
 //======Returns the elements of an array that meet the condition specified in a callback function.
 // loop through every single object and returns the only one which are meeting up the condition
    const thingsDone = todos.filter((todos) =>  todos.isDone === true)
    console.log(thingsDone)