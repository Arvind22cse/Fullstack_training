import mdb from 'mongoose'

var userSchema=mdb.Schema({
  firstName:String,
  lastName:String,
  password:String,
  email:String  
})
var User=mdb.model("users",userSchema)
export default User