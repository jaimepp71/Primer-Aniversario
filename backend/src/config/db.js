import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/aniversario_db');
    console.log(`[MongoDB] Conectado exitosamente a: ${conn.connection.host}/${conn.connection.name}`);
  } catch (error) {
    console.error(`[MongoDB Error] Error al conectar a la base de datos: ${error.message}`);
  }
};
