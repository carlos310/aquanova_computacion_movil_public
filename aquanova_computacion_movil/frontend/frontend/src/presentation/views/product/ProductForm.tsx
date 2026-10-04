import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../App';
import { useCrud } from '../../hooks/useCrud';
import { ProductRepositoryImpl } from '../../../data/repositories/ProductRepository';
import { CustomTextInput } from '../../components/CustomTextInput';
import { RoundedButton } from '../../components/RoundedButton';

type Props = NativeStackScreenProps<RootStackParamList, 'ProductForm'>;

export const ProductFormScreen = ({ navigation, route }: Props) => {
  const { create, update, getById } = useCrud(ProductRepositoryImpl);
  const [values, setValues] = useState({ name: '', description: '', price: '', stock: '' });
  const [error, setError] = useState('');

  const id = route.params?.id;

  useEffect(() => {
    if (id) {
      getById(id).then(item => {
        if (item) setValues({ name: item.name, description: item.description, price: String(item.price), stock: String(item.stock) });
      });
    }
  }, [id]);

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const submit = async () => {
    setError('');
    try {
      const data = { name: values.name, description: values.description, price: parseFloat(values.price), stock: parseInt(values.stock) };
      if (id) {
        await update(id, data);
      } else {
        await create(data);
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
        image={require('../../../../assets/user.png')}
        placeholder='Descripción'
        keyboardType='default'
        property='description'
        onChangeText={onChange}
        value={values.description}
      />
      <CustomTextInput
        image={require('../../../../assets/user.png')}
        placeholder='Precio'
        keyboardType='decimal-pad'
        property='price'
        onChangeText={onChange}
        value={values.price}
      />
      <CustomTextInput
        image={require('../../../../assets/user.png')}
        placeholder='Stock'
        keyboardType='numeric'
        property='stock'
        onChangeText={onChange}
        value={values.stock}
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
