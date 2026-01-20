import mongoose from 'mongoose'
import app from './app.ts'
import dotenv from 'dotenv';
dotenv.config();
async function main() {
    
  try {
    await mongoose.connect(process.env.db_url!)

    console.log('✅ MongoDB connected successfully')
    app.listen(process.env.PORT, () => {
      console.log(`Example app listening on port ${process.env.PORT}`)
    })
  } catch (error) {
    console.error('❌ Failed to connect to MongoDB:')
  }
}
main()