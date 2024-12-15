import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    authorImage: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: Date.now() //it will store the current date and time.
    },
});

const BlogModel = mongoose.models.blog || mongoose.model('blog', Schema);

export default BlogModel;
