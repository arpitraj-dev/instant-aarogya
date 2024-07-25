import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    username: {type:String, required: true, unique:true,},
    email: {type:String, required: true, unique:true,},
    password: {type:String, required: true,},
    tokens:[
        {
            token: {
                type: String,
                required:true
            }
        }
    ]
})

UserSchema.methods.generateAuthToken = async function () {
    try{

        let token = jwt.sign({_id: this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token: token});
        await this.save();
        return token;
    }catch(err) {
        console.log(err);
    }
}
const UserModel = mongoose.model("User",UserSchema)

export {UserModel as User}