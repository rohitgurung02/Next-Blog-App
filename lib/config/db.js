import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://rohitgurung086:gurungrohit@cluster0.ffp4s.mongodb.net/next-blog-app');
    console.log('DB Connected')
}