var express=require("express")
var path=require("path")
var app=express()
const PORT=3001
app.use(express.static(path.join(__dirname, 'reactbackend')));
app.get('/',(req,res)=>{
      res.sendFile(path.join(__dirname,"index.html"));
})
app.get('/page2',(req,res)=>{
    res.sendFile(path.join(__dirname,"index2.html"));
})
//development server - react ,production server - backend
app.listen(PORT,()=>{
    console.log(`server started \n URL: http://localhost:${PORT}/`);  
})