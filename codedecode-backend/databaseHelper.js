const mongoose=require("mongoose")

const userSchema = new mongoose.Schema({
    username: String,
    level1:String,
    level2:String,
    level3:String,
    level4:String,
    level5:String
})
const User = mongoose.model('levelprogresses', userSchema);
module.exports=User