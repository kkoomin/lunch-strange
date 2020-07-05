import mongoose from 'mongoose';
import moment from 'moment';

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
    c_author: {
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
        type: String,
        default: moment(new Date()).format("YYYY-MM-DD HH:MM:SS"),
    }
});

export default mongoose.model("Post", PostSchema, "Post");