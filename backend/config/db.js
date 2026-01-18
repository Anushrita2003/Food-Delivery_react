import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://chakrabortyanushrita_db_user:taetUH0dCcpMVSwl@cluster0.aqlkp3n.mongodb.net/FoodDelivery').then(()=>console.log("DB Connected"));
}