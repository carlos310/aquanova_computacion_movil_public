// 
// CONTROLADOR DE SUBIDA DE ARCHIVOS
// 

export const uploadController = {
  // POST: Subir imagen
  async uploadImage(req, res) {
    try {
      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: 'No se proporcionó ningún archivo',
        });
      }

      // Construir URL relativa del archivo
      const fileUrl = `/assets/uploads/${req.file.filename}`;

      res.json({
        success: true,
        message: 'Imagen subida correctamente',
        data: {
          filename: req.file.filename,
          url: fileUrl,
          size: req.file.size,
          mimetype: req.file.mimetype,
        },
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al subir imagen',
        error: error.message,
      });
    }
  },

  // POST: Subir múltiples imágenes
  async uploadMultipleImages(req, res) {
    try {
      if (!req.files || req.files.length === 0) {
        return res.status(400).json({
          success: false,
          message: 'No se proporcionaron archivos',
        });
      }

      const uploadedFiles = req.files.map(file => ({
        filename: file.filename,
        url: `/assets/uploads/${file.filename}`,
        size: file.size,
        mimetype: file.mimetype,
      }));

      res.json({
        success: true,
        message: 'Imágenes subidas correctamente',
        data: uploadedFiles,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al subir imágenes',
        error: error.message,
      });
    }
  },
};
