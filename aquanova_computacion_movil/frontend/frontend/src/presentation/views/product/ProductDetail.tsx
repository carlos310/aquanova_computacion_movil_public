import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../App';
import { ProductRepositoryImpl } from '../../../data/repositories/ProductRepository';
import { Product } from '../../../domain/entities/Product';
import { useAuth } from '../../context/AuthContext';

type Props = NativeStackScreenProps<RootStackParamList, 'ProductDetail'>;

export const ProductDetailScreen = ({ route, navigation }: Props) => {
  const [item, setItem] = useState<Product | undefined>(undefined);
  const { id } = route.params;
  const { isAdmin } = useAuth();

  useEffect(() => {
    ProductRepositoryImpl.getById(id).then(setItem);
  }, [id]);

  if (!item) return <Text>Cargando...</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre:</Text>
      <Text style={styles.value}>{item.name}</Text>
      <Text style={styles.label}>Descripción:</Text>
      <Text style={styles.value}>{item.description}</Text>
      <Text style={styles.label}>Precio:</Text>
      <Text style={styles.value}>${item.price}</Text>
      <Text style={styles.label}>Stock:</Text>
      <Text style={styles.value}>{item.stock}</Text>
      {isAdmin && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ProductForm', { id })}
        >
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  label: { fontWeight: 'bold', marginTop: 15 },
  value: { fontSize: 16, marginBottom: 10 },
  button: { backgroundColor: '#1a9df4', padding: 12, borderRadius: 8, marginTop: 20 },
  buttonText: { color: 'white', textAlign: 'center', fontWeight: 'bold' },
});
