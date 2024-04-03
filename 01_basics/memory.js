//Stack->Primitive->call by value
//Heap->Non-Primitive->call by refernce

let myName="Satyajit"

let anothername=myName//so here we see that a copy of original value was given to anothername not the original value
anothername="Bapi"//when we change the value of anothername so it not change in main/myname location or memory
console.log(myName);
console.log(anothername);

let userOne={
    email:"user@gmail.com",
    upi:"user@bl"
}

let userTwo=userOne //give refernce to userOne not copy of userone
userTwo.email="satyajit28sahoo@gmail.com" //so it update the value of both userone and usertwo in original memory

console.log(userOne.email);
console.log(userTwo.email);
