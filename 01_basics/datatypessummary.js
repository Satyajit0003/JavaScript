/*
Primitive have 7 type
1.String
2.Number
3.Boolean
4.null
5.undefned
6.Symabol->give unique or new value to that variable
7.bigInt
 */

/*
Reference (Non Primitive)
1.Array
2.Objects
3.Functions
 */

/*
  JavaScript is a dynamically typed programming language. 
  This means that the type of a variable is not declared 
  when the variable is created, but rather is determined 
  by the value that is assigned to the variable 
 */

  const score=100
  const scoreValue=100.4

  const isLoggedIn=false
  const outsideTemp=null
  let userEmail;//undefined

  const id=Symbol('123')
  const anotherId=Symbol('123')

  //console.log(id===anotherId)->false

  const bigNumber=123456789123456789123n

  const heros=["Ram","Mahadev","Jaganath"]
  let myObj={
    name:"satyajit",
    age:20,
  }
  const myFunction=function(){
    console.log("Hello world")
  }
  //myFunction
  //console.log(typeof bigNumber);

  /*
  Type of 
  String->string
  Number->number
  NaN->object
  bigInt->bigint
  boolean->boolean
  symbol->symbol
  undefined->undefined
   */

  //console.log(typeof userEmail);
  
  //type of
  console.log(typeof myFunction);//object function
  console.log(typeof heros);//object
  console.log(typeof myObj);//object

  console.log(Object);