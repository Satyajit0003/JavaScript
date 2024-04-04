//Dates
let myDate=new Date()
//console.log(myDate.toString())
//Thu Apr 04 2024 14:31:53 GMT+0000 (Coordinated Universal Time)
//console.log(myDate.toDateString());
//Thu Apr 04 2024
//console.log(myDate.toISOString());
//2024-04-04T14:31:53.233Z
//console.log(myDate.toJSON())
//2024-04-04T14:34:38.124Z
//console.log(myDate.toTimeString())
//14:35:28 GMT+0000 (Coordinated Universal Time)
//console.log(myDate.toLocaleString())
//4/4/2024, 2:36:06 PM

//console.log(typeof myDate)
//object

// let myCreatedDate=new Date(2024,1,28)
// console.log(myCreatedDate.toDateString())
//Wed Feb 28 2024

let myCreatedDate=new Date("01-14-2023")
//console.log(myCreatedDate.toLocaleString())
//2/28/2024, 12:00:00 AM

let myTimeStamp=Date.now()
//console.log(myTimeStamp)
//console.log(myCreatedDate.getTime())
//console.log(Math.floor(Date.now()/1000))

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);//so it starting from 0
console.log(newDate.getDay());
console.log(newDate.getFullYear());

newDate.toLocaleString('default',{
    weekday:"long"
})
