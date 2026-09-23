import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as Location from 'expo-location';
import * as ImagePicker from 'expo-image-picker';
import { RootStackParamList } from '../../../../App';
import { useCrud } from '../../hooks/useCrud';
import { BranchRepositoryImpl } from '../../../data/repositories/BranchRepository';
import { CustomTextInput } from '../../components/CustomTextInput';
import { RoundedButton } from '../../components/RoundedButton';

type Props = NativeStackScreenProps<RootStackParamList, 'BranchForm'>;

export const BranchFormScreen = ({ navigation, route }: Props) => {
  const { create, update, getById } = useCrud(BranchRepositoryImpl);
  const [values, setValues] = useState({
    name: '',
    address: '',
    phone: '',
    latitude: '',
    longitude: '',
    photoUri: '',
  });
  const [error, setError] = useState('');
  const [loadingGps, setLoadingGps] = useState(false);
  const [loadingCamera, setLoadingCamera] = useState(false);

  const id = route.params?.id;

  useEffect(() => {
    if (id) {
      getById(id).then(item => {
        if (item)
          setValues({
            name: item.name,
            address: item.address,
            phone: item.phone,
            latitude: String(item.latitude ?? ''),
            longitude: String(item.longitude ?? ''),
            photoUri: item.photoUri ?? '',
          } as any);
      });
    }
  }, [id]);

  // Capturar GPS
  const getCurrentLocation = async () => {
    setError('');
    setLoadingGps(true);
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setError('Permiso de ubicación denegado');
        setLoadingGps(false);
        return;
      }

      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });

      setValues({
        ...values,
        latitude: String(location.coords.latitude),
        longitude: String(location.coords.longitude),
      });
    } catch (e: any) {
      setError('Error al obtener ubicación: ' + e.message);
    } finally {
      setLoadingGps(false);
    }
  };

  // Capturar foto
  const takePicture = async () => {
    setError('');
    setLoadingCamera(true);
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        setError('Permiso de cámara denegado');
        setLoadingCamera(false);
        return;
      }

      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.8,
      });

      if (!result.canceled) {
        setValues({
          ...values,
          photoUri: result.assets[0].uri,
        });
      }
    } catch (e: any) {
      setError('Error al capturar foto: ' + e.message);
    } finally {
      setLoadingCamera(false);
    }
  };

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const submit = async () => {
    setError('');
    if (!values.name || !values.address || !values.phone) {
      setError('Completa todos los campos requeridos');
      return;
    }

    try {
      const data = {
        name: values.name,
        address: values.address,
        phone: values.phone,
        latitude: values.latitude ? parseFloat(values.latitude) : undefined,
        longitude: values.longitude ? parseFloat(values.longitude) : undefined,
        photoUri: values.photoUri || undefined,
      };
      if (id) {
        await update(id, data);
      } else {
        await create(data);
      }
      navigation.goBack();
    } catch (e: any) {
      setError(e.message ?? 'Error al guardar');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <CustomTextInput
        image={require('../../../../assets/user.png')}
        placeholder='Nombre *'
        keyboardType='default'
        property='name'
        onChangeText={onChange}
        value={values.name}
      />
      <CustomTextInput
        image={require('../../../../assets/user.png')}
        placeholder='Dirección *'
        keyboardType='default'
        property='address'
        onChangeText={onChange}
        value={values.address}
      />
      <CustomTextInput
        image={require('../../../../assets/phone.png')}
        placeholder='Teléfono *'
        keyboardType='phone-pad'
        property='phone'
        onChangeText={onChange}
        value={values.phone}
      />

      {/* SECCIÓN CÁMARA */}
      <View style={styles.sectionTitle}>
        <Text style={styles.sectionTitleText}>📷 Foto de la Sucursal</Text>
      </View>

      {values.photoUri ? (
        <View style={styles.photoContainer}>
          <Image source={{ uri: values.photoUri }} style={styles.photo} />
          <TouchableOpacity
            style={styles.changePhotoButton}
            onPress={takePicture}
            disabled={loadingCamera}
          >
            <Text style={styles.changePhotoText}>
              {loadingCamera ? 'Capturando...' : '📷 Cambiar Foto'}
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.cameraButton}
          onPress={takePicture}
          disabled={loadingCamera}
        >
          <Text style={styles.cameraButtonText}>
            {loadingCamera ? 'Capturando...' : '📷 Tomar Foto'}
          </Text>
        </TouchableOpacity>
      )}

      {/* SECCIÓN GPS */}
      <View style={styles.sectionTitle}>
        <Text style={styles.sectionTitleText}>📍 Ubicación GPS</Text>
      </View>

      <TouchableOpacity
        style={styles.gpsButton}
        onPress={getCurrentLocation}
        disabled={loadingGps}
      >
        <Text style={styles.gpsButtonText}>
          {loadingGps ? ' Obteniendo ubicación...' : '📍 Obtener mi Ubicación'}
        </Text>
      </TouchableOpacity>

      {/* Mostrar coordenadas capturadas */}
      {values.latitude && values.longitude && (
        <View style={styles.coordsBox}>
          <Text style={styles.coordsLabel}> Ubicación capturada:</Text>
          <Text style={styles.coords}>
            Latitud: {parseFloat(values.latitude).toFixed(6)}
          </Text>
          <Text style={styles.coords}>
            Longitud: {parseFloat(values.longitude).toFixed(6)}
          </Text>
          <Text style={styles.mapLink}>
            🗺️ maps.google.com/?q={values.latitude},{values.longitude}
          </Text>
        </View>
      )}

      {/* Alternativa: Inputs manuales */}
      <View style={styles.manualSection}>
        <Text style={styles.manualLabel}>O ingresa manualmente:</Text>
        <CustomTextInput
          image={require('../../../../assets/user.png')}
          placeholder='Latitud'
          keyboardType='decimal-pad'
          property='latitude'
          onChangeText={onChange}
          value={values.latitude}
        />
        <CustomTextInput
          image={require('../../../../assets/user.png')}
          placeholder='Longitud'
          keyboardType='decimal-pad'
          property='longitude'
          onChangeText={onChange}
          value={values.longitude}
        />
      </View>

      {/* Errores */}
      {error && <Text style={styles.error}>{error}</Text>}

      {/* Submit */}
      <View style={styles.button}>
        <RoundedButton text={id ? 'Actualizar' : 'Crear'} onPress={submit} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },

  sectionTitle: {
    marginTop: 20,
    marginBottom: 10,
  },
  sectionTitleText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },

  // CÁMARA
  photoContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  photo: {
    width: '100%',
    height: 200,
    borderRadius: 4,
    marginBottom: 10,
  },
  cameraButton: {
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  cameraButtonText: {
    color: '#333',
    fontWeight: '600',
    fontSize: 14,
  },
  changePhotoButton: {
    padding: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  changePhotoText: {
    color: '#333',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 12,
  },

  // GPS
  gpsButton: {
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  gpsButtonText: {
    color: '#333',
    fontWeight: '600',
    fontSize: 14,
  },

  coordsBox: {
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
  },
  coordsLabel: {
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    fontSize: 12,
  },
  coords: {
    color: '#666',
    fontSize: 12,
    marginBottom: 4,
  },
  mapLink: {
    color: '#666',
    marginTop: 8,
    fontSize: 11,
  },

  // Inputs manuales
  manualSection: {
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
  },
  manualLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 10,
    fontWeight: 'bold',
  },

  error: { color: 'red', marginTop: 10, marginBottom: 10 },
  button: { marginTop: 20, marginBottom: 30 },
});
