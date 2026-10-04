import { userModel } from '../models/User.js';
import { hashPassword } from '../utils/passwordUtils.js';



export const userController = {
  // GET: Obtener todos los usuarios
  async getAllUsers(req, res) {
    try {
      const users = await userModel.getAllUsers();
      res.json({
        success: true,
        message: 'Usuarios obtenidos correctamente',
        data: users,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al obtener usuarios',
        error: error.message,
      });
    }
  },

  // GET: Obtener usuario por ID
  async getUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await userModel.getUserById(id);

      if (!user) {
        return res.status(404).json({
          success: false,
          message: 'Usuario no encontrado',
        });
      }

      res.json({
        success: true,
        message: 'Usuario obtenido correctamente',
        data: user,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al obtener usuario',
        error: error.message,
      });
    }
  },

  // POST: Crear nuevo usuario
  async createUser(req, res) {
    try {
      const { id, name, lastname, email, password, phone, role } = req.body;

      // Validar campos requeridos
      if (!name || !lastname || !email || !password || !phone) {
        return res.status(400).json({
          success: false,
          message: 'Faltan campos requeridos',
        });
      }

      // Verificar si el email ya existe
      const existingUser = await userModel.getUserByEmail(email);
      if (existingUser) {
        return res.status(409).json({
          success: false,
          message: 'El email ya está registrado',
        });
      }

      // Hashear contraseña
      const hashedPassword = await hashPassword(password);

      const newUser = {
        id,
        name,
        lastname,
        email,
        password: hashedPassword,
        phone,
        role: role || 'usuario',
      };

      await userModel.createUser(newUser);

      res.status(201).json({
        success: true,
        message: 'Usuario creado correctamente',
        data: {
          id: newUser.id,
          name: newUser.name,
          lastname: newUser.lastname,
          email: newUser.email,
          phone: newUser.phone,
          role: newUser.role,
        },
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al crear usuario',
        error: error.message,
      });
    }
  },

  // PUT: Actualizar usuario
  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { name, lastname, email, password, phone, role } = req.body;

      // Verificar que el usuario existe
      const user = await userModel.getUserById(id);
      if (!user) {
        return res.status(404).json({
          success: false,
          message: 'Usuario no encontrado',
        });
      }

      // Hashear contraseña si se proporciona
      let hashedPassword = password;
      if (password && password !== user.password) {
        hashedPassword = await hashPassword(password);
      }

      await userModel.updateUser(id, {
        name,
        lastname,
        email,
        password: hashedPassword,
        phone,
        role,
      });

      res.json({
        success: true,
        message: 'Usuario actualizado correctamente',
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al actualizar usuario',
        error: error.message,
      });
    }
  },

  // DELETE: Eliminar usuario
  async deleteUser(req, res) {
    try {
      const { id } = req.params;

      // Verificar que el usuario existe
      const user = await userModel.getUserById(id);
      if (!user) {
        return res.status(404).json({
          success: false,
          message: 'Usuario no encontrado',
        });
      }

      await userModel.deleteUser(id);

      res.json({
        success: true,
        message: 'Usuario eliminado correctamente',
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al eliminar usuario',
        error: error.message,
      });
    }
  },

  // GET: Obtener usuarios por rol
  async getUsersByRole(req, res) {
    try {
      const { role } = req.query;

      if (!role) {
        return res.status(400).json({
          success: false,
          message: 'El parámetro role es requerido',
        });
      }

      const users = await userModel.getUsersByRole(role);

      res.json({
        success: true,
        message: 'Usuarios obtenidos por rol',
        data: users,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al obtener usuarios por rol',
        error: error.message,
      });
    }
  },
};
