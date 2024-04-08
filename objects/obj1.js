//singleton
//Object.create

//object literals

const mySym=Symbol("key1")
const user={//here the key treated as a string
    name:"satyajit",
    "fullName":"bapi",
    [mySym]:"myKey1",
    age:20,
    location:"keonjhar",
    email:"ram@gmail.com",
    loggedIn:false,
}

// console.log(user.email);
// console.log(user["email"]);
// console.log(user["fullName"]);
// console.log(user[mySym]);

// console.log(typeof user[mySym]);

// user.name="ram"
// console.log(user["name"]);
// Object.freeze(user)
// user.age=17
// console.log(user["age"]);

// console.log(user);

user.greeting=function(){
    console.log("hello everyone")
}

user.greetingTwo=function(){
    console.log(`Hello js user, ${this.name}`);
}

console.log(user.greeting());
console.log(user.greetingTwo());
