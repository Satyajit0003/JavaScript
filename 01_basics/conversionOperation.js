//*******conversions******** */
let score=true
//console.log(typeof score);
//console.log(typeof (score));

let valueInNumber=Number(score)
//console.log(typeof valueInNumber)
//console.log(valueInNumber);
//if score is null, after conver to Number the output give 0
//score=undefined then it give output nan
//true->1 /false->0

//"33"=>33
//"33abc"=>NaN
//true=>1
//false=>0
//null=>0
//undefined=>NaN

//NaN->not a number
//console.log(typeof NaN) ->nan

let isLoggedIn=7

let booleanIsLoggedIn=Boolean(isLoggedIn)
//console.log(typeof booleanIsLoggedIn)
//console.log(booleanIsLoggedIn)

//1=>true
//0=>false
//""=>false
//"satyajit"=>true


//why in js we canot start with zero like 0001,01 etc
let someNumber=1

let stringSomeNumber=String(someNumber)
//console.log(typeof stringSomeNumber)
//console.log(stringSomeNumber)


/********Operations********** */

let value=3
let negValue=-value
//console.log(negValue);

//console.log(Object)
let str1="Hello"
let str2=" Satyajit"
// console.log(str1+str2);

// console.log("1"+2);//12
// console.log(2+"1");//21
// console.log("1"+2+2);//122
// console.log(2+2+"1");//41

// console.log(+true);
// console.log(+"");

let num1,num2,num3

num1=num2=num3=2+2

let gameCounter=100
++gameCounter
console.log(gameCounter);

let p=10
console.log(--p)
let q=10
console.log(q--)
