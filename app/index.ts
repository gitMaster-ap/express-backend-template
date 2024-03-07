import dotenv from 'dotenv';
import connectDB from './db';
import app from './app';

dotenv.config();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log('Mongod DB connection failed !!!: ', error);
    process.exit(1);
  });
