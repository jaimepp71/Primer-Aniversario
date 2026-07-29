import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import memoryRoutes from './routes/memories.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Conexión a la base de datos MongoDB
connectDB();

// Rutas API REST
app.use('/api/memories', memoryRoutes);

// Ruta de estado del servidor
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Servidor API REST Atlas de Recuerdos & Deducciones operando correctamente',
    timestamp: new Date().toISOString()
  });
});

// Inicialización del servidor HTTP
app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`🕵️‍♂️ Servidor escuchando en http://localhost:${PORT}`);
  console.log(`📖 Endpoint API Recuerdos: http://localhost:${PORT}/api/memories`);
  console.log(`====================================================`);
});
