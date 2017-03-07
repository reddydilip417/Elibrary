var mongoose =require('mongoose');
var bcrypt=require('bcrypt-nodejs');
var UserSchema=new mongoose.Schema({
    	email:{type:String,unique:true,required: true},
    	password:{type:String,required: true},
        name:{type:String,required: true},
        tel:{type:Number , min:1000000000, max:9999999999, required: true }
	});
UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
UserSchema.methods.validPassword = function(password) {
	console.log(password)
	console.log(this)
	
    return bcrypt.compareSync(password, this.password);
};
module.exports=mongoose.model('User',UserSchema);