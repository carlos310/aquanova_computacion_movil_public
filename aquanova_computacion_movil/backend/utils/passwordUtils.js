import bcrypt from 'bcryptjs';


// UTILIDADES DE CONTRASEÑA CON BCRYPT


const SALT_ROUNDS = 10;

// Hashear contraseña
export const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (error) {
    throw new Error('Error al hashear contraseña: ' + error.message);
  }
};

// Comparar contraseña con hash
export const comparePassword = async (password, hashedPassword) => {
  try {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
  } catch (error) {
    throw new Error('Error al comparar contraseña: ' + error.message);
  }
};
