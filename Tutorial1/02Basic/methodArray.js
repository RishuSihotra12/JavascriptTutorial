const numbers = ['one', 'Two','Three','Four','Five','Six']

//=======================
// numbers[1] = 'SOMETHING'
// console.log(numbers)
//  o/p = > [ 'one', 'SOMETHING', 'Three', 'Four', 'Five', 'Six' ]
//=======================

//===============START=================
// numbers.shift()                     // delete first element
// console.log(numbers)
// o/p = > [ 'Two', 'Three', 'Four', 'Five', 'Six' ]

//Inserts new elements at the start of an array.
// numbers.unshift('somethinG')
// console.log(numbers)

//===============END=================
//Removes the last element from an array and returns it.
// numbers.pop()
// console.log(numbers)
// o/p = > [ 'one', 'Two', 'Three', 'Four', 'Five' ]

//Appends new elements to an array, and returns the new length of the array
// numbers.push("Seven")
// console.log(numbers)
// o/p =>
// [
//     'one',   'Two',
//     'Three', 'Four',
//     'Five',  'Six',
//     'Seven'
//   ]

//===============MIDDLE=================
//Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
numbers.splice(2,3,"SOMETHING")
console.log(numbers)

// o/p = > [ 'one', 'Two', 'SOMETHING', 'Six' ]



