import { userModel } from '../models/User.js';
import { hashPassword, comparePassword } from '../utils/passwordUtils.js';
import { generateToken } from '../middleware/authMiddleware.js';




export const authController = {
  // POST: Login con email y contraseña
  async login(req, res) {
    try {
      const { email, password } = req.body;

      // Validar campos requeridos
      if (!email || !password) {
        return res.status(400).json({
          success: false,
          message: 'Email y contraseña son requeridos',
        });
      }

      // Buscar usuario por email
      const user = await userModel.getUserByEmail(email);
      if (!user) {
        return res.status(401).json({
          success: false,
          message: 'Correo o contraseña incorrectos',
        });
      }

      // Verificar contraseña
      const isPasswordValid = await comparePassword(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({
          success: false,
          message: 'Correo o contraseña incorrectos',
        });
      }

      // Generar token JWT
      const token = generateToken(user);

      // Retornar usuario sin la contraseña
      const userWithoutPassword = {
        id: user.id,
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        phone: user.phone,
        role: user.role,
      };

      res.json({
        success: true,
        message: 'Login exitoso',
        data: userWithoutPassword,
        token,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error en el login',
        error: error.message,
      });
    }
  },

  // POST: Registro de nuevo usuario
  async register(req, res) {
    try {
      const { name, lastname, email, password, phone } = req.body;

      // Validar campos requeridos
      if (!name || !lastname || !email || !password || !phone) {
        return res.status(400).json({
          success: false,
          message: 'Todos los campos son requeridos',
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

      // Crear nuevo usuario
      const newUser = {
        id: Date.now().toString(),
        name,
        lastname,
        email,
        password: hashedPassword,
        phone,
        role: 'usuario',
      };

      await userModel.createUser(newUser);

      // Generar token
      const token = generateToken(newUser);

      // Retornar usuario sin la contraseña
      const userWithoutPassword = {
        id: newUser.id,
        name: newUser.name,
        lastname: newUser.lastname,
        email: newUser.email,
        phone: newUser.phone,
        role: newUser.role,
      };

      res.status(201).json({
        success: true,
        message: 'Usuario registrado correctamente',
        data: userWithoutPassword,
        token,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error en el registro',
        error: error.message,
      });
    }
  },

  // GET: Obtener perfil del usuario autenticado
  async getProfile(req, res) {
    try {
      const user = await userModel.getUserById(req.user.id);

      if (!user) {
        return res.status(404).json({
          success: false,
          message: 'Usuario no encontrado',
        });
      }

      const userWithoutPassword = {
        id: user.id,
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        phone: user.phone,
        role: user.role,
      };

      res.json({
        success: true,
        message: 'Perfil obtenido correctamente',
        data: userWithoutPassword,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al obtener perfil',
        error: error.message,
      });
    }
  },
};
