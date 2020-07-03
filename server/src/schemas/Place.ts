import mongoose from 'mongoose';

const { Schema } = mongoose;
const PlaceSchema = new Schema({
    p_id: {
        type: String,
        required: true,
    },
    p_name: {
        type: String,
        required: true,
    },
    p_address: {
        type: String,
        required: true,
    },
    p_phone: {
        type: String,
    },
    p_description: {
        type: String,
        default: "",
    },
    p_x: {
        type: String,
        required: true,
    },
    p_y: {
        type: String,
        required: true,
    },
    p_img: {
        type: String,
        default: "default.png",
    },
    tags: [{ type: String }],
    menu: [new mongoose.Schema({m_name: String, m_price: String})]
});

export default mongoose.model("Place", PlaceSchema, "Place");