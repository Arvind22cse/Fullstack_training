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

//the spread operator expands elements, while the rest operator collects elements into an array
//spread

a=["hai","bye","hello","world"]
b=["arvi","luffy","zoro"]


comb=[...a,...b]
console.log(comb);

//rest
funct=(...r)=>{
console.log(r);

}
funct("hello",1,3)


const[x,y,...z]=a;
console.log(x);
console.log(y);
console.log(z);




//scope
//let-block or local scope
//const,var-global scope 
k=5
h=5
console.log(a,b);
{
    let k=10
    let h=20
    console.log(k,h);
}
console.log(k,h);

//hoisting

// console.log(a);
// var a=10;
// console.log(a);

// console.log(a);
// const a=10;
// console.log(a);

// console.log(a);
// let a=10;
// console.log(a);

