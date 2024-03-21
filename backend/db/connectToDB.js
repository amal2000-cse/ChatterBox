import mongoose from 'mongoose';

const connectToMongoDB = async()=>{
    try {
        // console.log(process.env.trial)
        await mongoose.connect(process.env.MONGOURL)
        console.log('Connected to MongoDB')
    } catch (error) {
        console.log(error.message);
        
    }
}

export default connectToMongoDB;