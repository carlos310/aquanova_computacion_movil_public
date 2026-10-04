import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../App';
import { UserRepositoryImpl } from '../../../data/repositories/UserRepository';
import { User } from '../../../domain/entities/User';

type Props = NativeStackScreenProps<RootStackParamList, 'UserDetail'>;

export const UserDetailScreen = ({ route, navigation }: Props) => {
  const [item, setItem] = useState<User | undefined>(undefined);
  const { id } = route.params;

  useEffect(() => {
    UserRepositoryImpl.getById(id).then(setItem);
  }, [id]);

  if (!item) return <Text>Cargando...</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre:</Text>
      <Text style={styles.value}>
        {item.name} {item.lastname}
      </Text>
      <Text style={styles.label}>Email:</Text>
      <Text style={styles.value}>{item.email}</Text>
      <Text style={styles.label}>Teléfono:</Text>
      <Text style={styles.value}>{item.phone}</Text>
      <Text style={styles.label}>Rol:</Text>
      <Text style={styles.value}>{item.role}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('UserForm', { id })}
      >
        <Text style={styles.buttonText}>Editar</Text>
      </TouchableOpacity>
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
