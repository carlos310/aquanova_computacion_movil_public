import { useState } from "react";
import { useAuth } from '../../context/AuthContext';

const RegisterViewModel = () => {
  const [values, setValues] = useState({
    name: '',
    lastname: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const { register } = useAuth();

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const submit = async () => {
    setError('');
    if (values.password !== values.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }
    try {
      const { confirmPassword, ...data } = values;
      await register(data);
    } catch (e: any) {
      setError(e.message ?? 'No se pudo completar el registro');
    }
  };

  return {
    ...values,
    error,
    onChange,
    register: submit,
  };
}

export default RegisterViewModel;
