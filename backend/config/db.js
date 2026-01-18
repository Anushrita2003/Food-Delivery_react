import mongoose from "mongoose";

export const connectDB=async()=>{
    try {
        await mongoose.connect('mongodb+srv://chakrabortyanushrita_db_user:taetUH0dCcpMVSwl@cluster0.aqlkp3n.mongodb.net/FoodDelivery');
        console.log("DB Connected");
    } catch (error) {
        console.log("DB Connection Error:", error);
    }
}