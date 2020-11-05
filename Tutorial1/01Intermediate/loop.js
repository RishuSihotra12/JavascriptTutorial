const days =['Mon','Tue','Wed','Thus','Fri','Sat','Sun']

for (let index = 0; index < days.length; index++) {
    const element = days[index];
    console.log(element)
}

for (let i=days.length-1;i>=0;i--) {
    console.log( days[i]);
}
// for each

days.forEach( function(ele,index){     // first param ==element of array , 2nd param == > index of array
    console.log(`Starts with ${index+1} -- ${ele}`)
})