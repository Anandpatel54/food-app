import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://panand054:Anand9516075967@cluster0.kob5zcg.mongodb.net/food-App"
    )
    .then(() => console.log("Connect to MongoDB"));
};
