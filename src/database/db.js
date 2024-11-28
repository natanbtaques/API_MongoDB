import mongoose from "mongoose";

async function connectDatabase() {
  await mongoose.connect(
    "mongodb+srv://natanbtaques:Q3lm0YtxTGSpZMaB@cluster0.ykpq0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
}

export default connectDatabase;
