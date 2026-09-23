import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../App';
import { useCrud } from '../../hooks/useCrud';
import { UserRepositoryImpl } from '../../../data/repositories/UserRepository';
import { CustomTextInput } from '../../components/CustomTextInput';
import { RoundedButton } from '../../components/RoundedButton';

type Props = NativeStackScreenProps<RootStackParamList, 'UserForm'>;

export const UserFormScreen = ({ navigation, route }: Props) => {
  const { create, update, getById } = useCrud(UserRepositoryImpl);
  const [values, setValues] = useState({
    name: '',
    lastname: '',
    phone: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const id = route.params?.id;

  useEffect(() => {
    if (id) {
      getById(id).then(item => {
        if (item)
          setValues({
            name: item.name,
            lastname: item.lastname,
            phone: item.phone,
            email: item.email,
            password: item.password,
          });
      });
    }
  }, [id]);

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const submit = async () => {
    setError('');
    try {
      if (id) {
        await update(id, values);
      } else {
        await create({ ...values, role: 'usuario' });
      }
      navigation.goBack();
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <CustomTextInput
        image={require('../../../../assets/user.png')}
        placeholder='Nombre'
        keyboardType='default'
        property='name'
        onChangeText={onChange}
        value={values.name}
      />
      <CustomTextInput
        image={require('../../../../assets/my_user.png')}
        placeholder='Apellido'
        keyboardType='default'
        property='lastname'
        onChangeText={onChange}
        value={values.lastname}
      />
      <CustomTextInput
        image={require('../../../../assets/phone.png')}
        placeholder='Teléfono'
        keyboardType='phone-pad'
        property='phone'
        onChangeText={onChange}
        value={values.phone}
      />
      <CustomTextInput
        image={require('../../../../assets/email.png')}
        placeholder='Email'
        keyboardType='email-address'
        property='email'
        onChangeText={onChange}
        value={values.email}
      />
      <CustomTextInput
        image={require('../../../../assets/password.png')}
        placeholder='Contraseña'
        keyboardType='default'
        property='password'
        onChangeText={onChange}
        value={values.password}
        secureTextEntry={true}
      />
      {error && <Text style={styles.error}>{error}</Text>}
      <View style={styles.button}>
        <RoundedButton text={id ? 'Actualizar' : 'Crear'} onPress={submit} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  error: { color: 'red', marginTop: 10 },
  button: { marginTop: 20 },
});
