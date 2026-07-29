import { Router } from 'express';
import Memory from '../models/Memory.js';

const router = Router();

// GET /api/memories - Obtener todos los recuerdos
router.get('/', async (req, res) => {
  try {
    let memories = [];
    try {
      memories = await Memory.find().sort({ createdAt: -1 });
    } catch (dbError) {
      console.warn('[API Warning] No se pudo consultar MongoDB, respondiendo con colección vacía.', dbError.message);
    }
    return res.status(200).json({
      success: true,
      count: memories.length,
      data: memories
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error al obtener los recuerdos',
      error: error.message
    });
  }
});

// POST /api/memories - Crear un nuevo recuerdo
router.post('/', async (req, res) => {
  try {
    const { title, description, lat, lng, clue, unlocked } = req.body;

    if (!title || !description || lat === undefined || lng === undefined) {
      return res.status(400).json({
        success: false,
        message: 'Por favor proporcione título, descripción, latitud y longitud.'
      });
    }

    const newMemory = await Memory.create({
      title,
      description,
      lat: Number(lat),
      lng: Number(lng),
      clue: clue || '',
      unlocked: unlocked !== undefined ? Boolean(unlocked) : false
    });

    return res.status(201).json({
      success: true,
      message: 'Recuerdo registrado exitosamente',
      data: newMemory
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error al crear el recuerdo',
      error: error.message
    });
  }
});

export default router;
