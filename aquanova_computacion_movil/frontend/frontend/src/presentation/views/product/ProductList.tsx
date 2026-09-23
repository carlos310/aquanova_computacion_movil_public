import React from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../App';
import { useCrud } from '../../hooks/useCrud';
import { ProductRepositoryImpl } from '../../../data/repositories/ProductRepository';
import { useAuth } from '../../context/AuthContext';

type Props = NativeStackScreenProps<RootStackParamList, 'ProductList'>;

export const ProductListScreen = ({ navigation }: Props) => {
  const { items, loading, remove } = useCrud(ProductRepositoryImpl);
  const { isAdmin } = useAuth();

  const handleDelete = (id: string) => {
    if (confirm('¿Eliminar?')) remove(id);
  };

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('ProductDetail', { id: item.id })}
    >
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text>${item.price}</Text>
      </View>
      {isAdmin && (
        <View style={styles.actions}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ProductForm', { id: item.id })}
          >
            <Text style={styles.btnEdit}>Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDelete(item.id)}>
            <Text style={styles.btnDelete}>Eliminar</Text>
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {isAdmin && (
        <TouchableOpacity
          style={styles.fabButton}
          onPress={() => navigation.navigate('ProductForm')}
        >
          <Text style={styles.fabText}>+ Nuevo</Text>
        </TouchableOpacity>
      )}
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={i => i.id}
        refreshing={loading}
        onRefresh={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
  },
  name: { fontWeight: 'bold', fontSize: 16 },
  actions: { flexDirection: 'row', gap: 10 },
  btnEdit: { color: '#1a9df4', fontWeight: 'bold' },
  btnDelete: { color: 'red', fontWeight: 'bold' },
  fabButton: {
    backgroundColor: '#1a9df4',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  fabText: { color: 'white', fontWeight: 'bold' },
});
