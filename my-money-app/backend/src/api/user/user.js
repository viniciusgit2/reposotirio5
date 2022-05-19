const restiful=require('Node-restiful')
const mongose=restiful.mongose
const userSchema= new mongose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    passaword:{type:String,min:6, max:12,required:true}

}
)
module.export= restiful.model("user",userSchema)
