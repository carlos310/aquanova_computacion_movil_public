import React from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../App';
import { useCrud } from '../../hooks/useCrud';
import { UserRepositoryImpl } from '../../../data/repositories/UserRepository';

type Props = NativeStackScreenProps<RootStackParamList, 'UserList'>;

export const UserListScreen = ({ navigation }: Props) => {
  const { items, loading, remove } = useCrud(UserRepositoryImpl);

  const handleDelete = (id: string) => {
    if (confirm('¿Eliminar?')) remove(id);
  };

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('UserDetail', { id: item.id })}
    >
      <View>
        <Text style={styles.name}>
          {item.name} {item.lastname}
        </Text>
        <Text>{item.email}</Text>
        <Text style={styles.role}>{item.role}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity
          onPress={() => navigation.navigate('UserForm', { id: item.id })}
        >
          <Text style={styles.btnEdit}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete(item.id)}>
          <Text style={styles.btnDelete}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.fabButton}
        onPress={() => navigation.navigate('UserForm')}
      >
        <Text style={styles.fabText}>+ Nuevo Usuario</Text>
      </TouchableOpacity>
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
  role: { fontSize: 12, color: '#666', marginTop: 5 },
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
