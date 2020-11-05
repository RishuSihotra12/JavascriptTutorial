let myTodo = {
    day : 'Monday',
    meetings: 0,
    meetDone: 0,

    addMeeting: function(num){
      this.meetings = this.meetings + num
    },
    summary: function(){
        return `you have ${this.meetings} meetings today`
    }
}
myTodo.addMeeting(4)
console.log(myTodo.summary())
