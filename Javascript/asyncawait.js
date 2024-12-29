async function fun1() {
    setTimeout(()=>{
        console.log("Luffy");
        
    },2000)
    // console.log(await "zoro");
    return (await "zoro")
    
}
fun2=async () => {
    setTimeout(()=>{
        console.log("Sanzi");
        
    },4000)
    // console.log(await "Ushop");
    return ( "Ushop")
    
}
fun1().then((a)=>{
console.log(a);
})
console.log(fun2())