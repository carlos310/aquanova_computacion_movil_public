import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Linking } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../App';
import { BranchRepositoryImpl } from '../../../data/repositories/BranchRepository';
import { Branch } from '../../../domain/entities/Branch';
import { useAuth } from '../../context/AuthContext';
import { getAbsoluteImageUrl } from '../../../utils/ImageUrlHelper';

type Props = NativeStackScreenProps<RootStackParamList, 'BranchDetail'>;

export const BranchDetailScreen = ({ route, navigation }: Props) => {
  const [item, setItem] = useState<Branch | undefined>(undefined);
  const { id } = route.params;
  const { isAdmin } = useAuth();

  useEffect(() => {
    BranchRepositoryImpl.getById(id).then(setItem);
  }, [id]);

  if (!item) return <Text>Cargando...</Text>;

  return (
    <ScrollView style={styles.container}>
      {/*  Foto */}
      {item.photoUri && (
        <View style={styles.photoSection}>
          <Text style={styles.label}> Foto:</Text>
          <Image source={{ uri: getAbsoluteImageUrl(item.photoUri) }} style={styles.photo} />
        </View>
      )}

      {/* Información básica */}
      <Text style={styles.label}>Nombre:</Text>
      <Text style={styles.value}>{item.name}</Text>
      <Text style={styles.label}>Dirección:</Text>
      <Text style={styles.value}>{item.address}</Text>
      <Text style={styles.label}>Teléfono:</Text>
      <Text style={styles.value}>{item.phone}</Text>

      {/*  Ubicación */}
      {item.latitude && item.longitude && (
        <View style={styles.locationSection}>
          <Text style={styles.label}> Ubicación GPS:</Text>
          <Text style={styles.coords}>
            Lat: {item.latitude.toFixed(6)}
          </Text>
          <Text style={styles.coords}>
            Lng: {item.longitude.toFixed(6)}
          </Text>

          {/* Botón para abrir Google Maps */}
          <TouchableOpacity
            style={styles.mapButton}
            onPress={() =>
              Linking.openURL(`https://maps.google.com/?q=${item.latitude},${item.longitude}`)
            }
          >
            <Text style={styles.mapButtonText}>
              🗺️ Ver en Google Maps
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Botón editar (solo admin) */}
      {isAdmin && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('BranchForm', { id })}
        >
          <Text style={styles.buttonText}> Editar</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },

  photoSection: { marginBottom: 15 },
  photo: {
    width: '100%',
    height: 200,
    borderRadius: 4,
    marginTop: 8,
  },

  locationSection: {
    padding: 10,
    marginTop: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
  },
  coords: {
    fontSize: 12,
    color: '#666',
    marginBottom: 6,
  },
  mapButton: {
    marginTop: 10,
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
  },
  mapButtonText: {
    color: '#333',
    fontWeight: '600',
    fontSize: 12,
  },

  label: { fontWeight: 'bold', marginTop: 12, color: '#333', fontSize: 13 },
  value: { fontSize: 14, marginBottom: 8, color: '#666' },
  button: { padding: 10, borderRadius: 4, marginTop: 15, marginBottom: 30, borderWidth: 1, borderColor: '#ddd', alignItems: 'center' },
  buttonText: { color: '#333', textAlign: 'center', fontWeight: '600', fontSize: 12 },
});
