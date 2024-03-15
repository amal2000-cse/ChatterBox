import mongoose from 'mongoose';

const connectToMongoDB = async()=>{
    try {
        // console.log(process.env.MONGOURL)
        await mongoose.connect(process.env.MONGOURL)
        console.log('Connected to MongoDB')
    } catch (error) {
        console.log(error.message)
        
    }
}

export default connectToMongoDB;