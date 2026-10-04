import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const HomeViewModel = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const { login } = useAuth();

  const onChange = (property: string, value: any) => {
    setValues({
      ...values,
      [property]: value
    });
  };

  const submit = async () => {
    setError('');
    try {
      await login(values.email, values.password);
    } catch (e: any) {
      setError(e.message ?? 'No se pudo iniciar sesión');
    }
  };

  return {
    ...values,
    error,
    onChange,
    submit,
  };
};

export default HomeViewModel;
