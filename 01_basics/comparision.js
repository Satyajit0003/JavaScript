// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2==1)
// console.log(2!=1)


// console.log("2">1);
// console.log("02">1);

// console.log(null>=0);
// console.log(null<0);
// console.log(null>0);
// console.log(null==0);

/*
The reason is that an equality check == and comaprision > < >= <=
work differently

Comparision convert null to a number,treating it as 0.
That's why (1)null>=0 is true and (2)null<0 and (3)null>0 is false 
 */

//for undefined case it give always false
// console.log(undefined==0)
// console.log(undefined>0)
// console.log(undefined<0)

//===
console.log("1"===1);