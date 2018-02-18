import mongoose from 'mongoose';
const dbUrl = process.env.DB_URL;

console.log(dbUrl);

mongoose.connect(dbUrl);
