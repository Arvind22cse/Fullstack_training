function isTimeConsumption(t){
    time=1000;
    return time<=t
}
function isvalidlocation(loc){
    location="Ooty";
    return loc==location
}
function locfinder(){
    loc="Ooty"
    time=1000
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(isTimeConsumption(time) && isvalidlocation(loc)){
                resolve("LocationFound")
            }
            else{
                reject("location not found")
            }
        }, 1000);
    })
}
locfinder().then((par)=>{
console.log(par);

}).catch((err)=>{
    console.log(err);
    
})