import mongoose from "mongoose";

const url = process.env.DB_URL;

export const connectToMongoose = async ()=>{
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected using mongoose');
    } catch (error) {
        console.log(error);
    }
}