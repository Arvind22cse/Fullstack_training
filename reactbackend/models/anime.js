import mdb from "mongoose"
var anime_schmea=new mdb.Schema({
animename:String,
type:String,
rating:Number,
})
var Animeschem=mdb.model("anime",anime_schmea)
export default Animeschem