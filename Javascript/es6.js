function fun(){
console.log("Fun");
}
fun()

fun2=(a,b)=>{
    return a+b;
}
console.log(fun2(1,2));

//destructuring
var mark=[90,95,99]
var[m1,m2]=mark
console.log(m1,m2);


//spread

a=["hai","bye","hello","world"]
b=["arvi","luffy","zoro"]


comb=[...a,...b]
console.log(comb);

//rest
const[x,y,...z]=a;
console.log(x);
console.log(y);
console.log(z);


function rest(...foods){

}

//scope
//let-block or local scope
//const,var-global scope 
a=5
b=5
console.log(a,b);
{
    let a=10
    let b=20
    console.log(a,b);
}
console.log(a,b);

//hoisting

console.log(a);
var a=10;
console.log(a);

console.log(a);
const a=10;
console.log(a);

console.log(a);
let a=10;
console.log(a);

