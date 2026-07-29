import mongoose from 'mongoose';

const memorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'El título es obligatorio']
    },
    description: {
      type: String,
      required: [true, 'La descripción es obligatoria']
    },
    lat: {
      type: Number,
      required: [true, 'La latitud es obligatoria']
    },
    lng: {
      type: Number,
      required: [true, 'La longitud es obligatoria']
    },
    clue: {
      type: String,
      default: ''
    },
    unlocked: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

const Memory = mongoose.model('Memory', memorySchema);

export default Memory;
