import {connect, set} from "mongoose";

set('strictQuery', true);

export const connectDB = async () => {
  try{
    connect(process.env.MONGO_URI,{
      useNewUrlParser:true,
      useUnifiedTopology:true,
    });
    console.log('Database Connected Successful')
  }catch(error){
    console.log(error);
  }
}
