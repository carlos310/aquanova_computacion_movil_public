import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../App';
import { useAuth } from '../../context/AuthContext';
import { RoundedButton } from '../../components/RoundedButton';

type Props = NativeStackScreenProps<RootStackParamList, 'Menu'>;

export const MenuScreen = ({ navigation }: Props) => {
  const { user, logout, isAdmin } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>¡Bienvenido, {user?.name}!</Text>
      <Text style={styles.role}>{isAdmin ? '(Admin)' : '(Usuario)'}</Text>

      <View style={styles.menu}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('ProductList')}
        >
          <Text style={styles.menuText}>Productos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('BranchList')}
        >
          <Text style={styles.menuText}>Sucursales</Text>
        </TouchableOpacity>

        {isAdmin && (
          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => navigation.navigate('UserList')}
          >
            <Text style={styles.menuText}>Usuarios</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.logoutButton}>
        <RoundedButton text='Cerrar Sesión' onPress={handleLogout} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  welcome: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  role: { fontSize: 14, textAlign: 'center', color: '#666', marginBottom: 40 },
  menu: { gap: 15, marginBottom: 40 },
  menuButton: {
    backgroundColor: '#1a9df4',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  menuText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  logoutButton: { marginTop: 'auto' },
});
