import mongoose from 'mongoose';

const { Schema } = mongoose;
const PostSchema = new Schema({
    c_title: {
        type: String,
        required: true,
    },
    c_content: {
        type: String,
        required: true,
    },
    c_likes: {
        type: Number,
        default: 0,
    },
    c_views: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    }
});

export default mongoose.model("Post", PostSchema, "Post");