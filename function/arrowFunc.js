const user={
    username:"satyajit",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`)
        console.log(this)
    }

}
// user.welcomeMessage()
// user.username="Bapi"
// user.welcomeMessage()


//browser global object is window object
//console.log(this)//empty object

// function chai(){
//     let username="satyajit"
//     //in this function we cannot use this keyword.Here this keyword is undefined and it applicable on object

//     console.log(this.username);
// }
// chai()


// const chai=function(){
//     let username="satyajit"
//     console.log(this.username)
//     //undefined
// }

const chai=()=>{
    let username="satyajit"
    console.log(this.username)
    //undefined
}

//chai()

// const addTwo=(num1,num2)=>{
//     return num1+num2;
// }

//const addTwo=(num1,num2)=>num1+num2;

//const addTwo=(num1,num2)=>(num1+num2);

const addTwo=(num1,num2)=>({username:"satyajit"})


console.log(addTwo(5,3))

const myArray=[2,5,3,7,8]
//myArray.forEach=(()=>{})

