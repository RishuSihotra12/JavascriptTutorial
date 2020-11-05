var whoIsHere = 'abc'

if(whoIsHere === 'user'){
    console.log("Greeting message from user")
    console.log("Allow access to view all courses")
}else if(whoIsHere === 'teacher'){
    console.log("Greeting message from teacher")
    console.log("Allow access to view his courses")
}else {
    console.log("MESSAGE : Please verify your email")
    console.log("Send your email for verification")    
}