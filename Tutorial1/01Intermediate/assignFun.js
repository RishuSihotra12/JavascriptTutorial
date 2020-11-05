let getMyGrade = function(currentMark,totalMarks){
    let myPerc =( currentMark/totalMarks) *100
    let myGrade =''
    if(myPerc >=90) {myGrade = 'A' }
    else if(myPerc >=80) {myGrade = 'B' }
   else if(myPerc >=70) {myGrade = 'C' }
    else if(myPerc >=60) {myGrade = 'D' }
    else {myGrade = 'F'}

    return `your grade is ${myGrade} and percentage is ${myPerc}`
}

let yourResult = getMyGrade(76,100)
console.log(yourResult)