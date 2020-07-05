import mongoose from 'mongoose';

const { Schema } = mongoose;
const UserSchema = new Schema({
    u_id: {
        type: String,
        required: true,
    },
    u_token: {
        type: String,
    },
    u_nickname: {
        type: String,
        required: true,
    },
});

export default mongoose.model("User", UserSchema, "User");