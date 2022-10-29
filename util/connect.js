import mongoose from 'mongoose';

export default async function connect() {
    mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Database Connected Successfully!"))
    .catch(() => console.log("Database Can't Connect!"))
}