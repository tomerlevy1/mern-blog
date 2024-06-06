import { configDotenv } from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import userRoute from './routes/user.route.js';

const app = express();
const port = 3001;

configDotenv();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB: ', err);
  });

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});

app.use('/api/user', userRoute);
