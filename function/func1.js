function sayMyName(){
    console.log("S")
    console.log("A")
    console.log("T")
    console.log("y")
    console.log("A")
    console.log("j")
    console.log("i")
    console.log("T")
}

//sayMyName()

// function addTwoNum(x,y){
//     console.log(x+y)
// }

function addTwoNum(num1,num2){
    // let result=num1+num2;
    // return result;
    return num1+num2;
}

const result=addTwoNum(3,5)
//console.log(`result:${result}`);

function logInUserMessage(username="Ram"){
    //if(username===undefined){
        if(!username){
         console.log(`please enter a username`)
         return
    }
      return `${username} just logged in`
}

//console.log(logInUserMessage("Satyajit"));
//console.log(logInUserMessage())

//...num1->rest operator
function calculateCartPrice(val1,val2,...num1){
    return num1
}

//console.log(calculateCartPrice(200,400,500,2000));

const user={
    username:"satyajit",
    age:20
}

function handleObject(anyobject){
    //console.log(`Username is ${anyobject.username} and age is ${anyobject.age}`)
    console.log(`Username is ${anyobject.username} and type is ${anyobject.type}`)
}

//handleObject(user)
handleObject({
    username:"Ram",
    type:"big brother"
})

const myNewArray=[100,200,300,400]

function returnSecondvalue(getArray){
   return getArray[1]
}

//console.log(returnSecondvalue(myNewArray))
console.log(returnSecondvalue([200,400,600,800]))






