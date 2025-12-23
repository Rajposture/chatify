import mongoose from "mongoose";
export const connectDB = async () => {
    try{
      const conn = await mongoose.connect (process.env.MONGO_URI);
        console.log("MongoDB connected succesfully: " , conn .connection.host);
    }catch(error){
        console.error ("error connection to MongoBD: ",error);
        process.exit(1); //

    }
}