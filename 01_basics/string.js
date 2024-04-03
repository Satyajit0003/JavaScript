//console.log(String)

const name="Bapi"
const repoCount=6

//console.log(name+repoCount+" value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName=new String("Satyajit-Sahoo-Bapi")

// console.log(gameName[0])
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(1))
// console.log(gameName.indexOf('p'))

const newString=gameName.substring(0,4);
//here in substring start idx is included and the end index is not included
console.log(newString);

const anotherString=gameName.slice(0,4)
console.log(anotherString)

const newStringOne="     bapi     "
console.log(newStringOne)
console.log(newStringOne.trim());//it use to remove the sarting and ending spaces

const url="https://satyajit.com/satyajit%20sahoo"

console.log(url.replace('%20','-'));
console.log(url.includes('bapi'));

console.log(gameName.split('-'))
