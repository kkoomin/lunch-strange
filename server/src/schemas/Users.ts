import mongoose from 'mongoose';

const { Schema } = mongoose;
const PlaceSchema = new Schema({
    u_id: {
        type: String,
        required: true,
    },
    u_password: {
        type: String,
        required: true,
    },
    u_nickname: {
        type: String,
        required: true,
    },
});

export default mongoose.model("Place", PlaceSchema, "Place");