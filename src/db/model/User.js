import mongoose from 'mongoose'
const schema = new mongoose.Schema(
  {
    email: {
      desc: "The user's email address.",
      trim: true,
      type: String,
      index: true,
      unique: true,
      required: true
    },
    password: {
      desc: 'user password',
      trim: true,
      type: String,
      required: true,
      select: false
    },
    name: {
      desc: "The user's name.",
      trim: true,
      type: String,
      required: true
    },
    isActive: {
      desc: 'is Active.',
      type: Boolean,
      default: true,
      required: true
    }
  },
  {
    strict: true,
    versionKey: false,
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
  }
)

export default mongoose.model('User', schema)
