import mongoose from 'mongoose';

export const connect = async () => {
  return mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log(`Database connected successfully`))
    .catch((err) => console.log(err));
};
