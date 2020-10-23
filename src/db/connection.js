import mongoose from 'mongoose'

export const mongooseConnection = MONGO_DB =>
  mongoose.connect(
    `mongodb://localhost:27017/${MONGO_DB}`,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
    e => {
      if (!e) {
        console.log('Successfully Established Connection with MongoDB')
      } else {
        console.log('Failed to Establish Connection with MongoDB with Error: ' + e)
      }
    }
  )
