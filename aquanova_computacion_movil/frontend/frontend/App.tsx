import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ActivityIndicator, View } from "react-native";

import { HomeScreen } from "./src/presentation/views/home/Home";
import { RegisterScreen } from "./src/presentation/views/register/Register";
import { AuthProvider, useAuth } from "./src/presentation/context/AuthContext";
import { ProductListScreen } from "./src/presentation/views/product/ProductList";
import { ProductFormScreen } from "./src/presentation/views/product/ProductForm";
import { ProductDetailScreen } from "./src/presentation/views/product/ProductDetail";
import { BranchListScreen } from "./src/presentation/views/branch/BranchList";
import { BranchFormScreen } from "./src/presentation/views/branch/BranchForm";
import { BranchDetailScreen } from "./src/presentation/views/branch/BranchDetail";
import { UserListScreen } from "./src/presentation/views/user/UserList";
import { UserFormScreen } from "./src/presentation/views/user/UserForm";
import { UserDetailScreen } from "./src/presentation/views/user/UserDetail";
import { MenuScreen } from "./src/presentation/views/menu/MenuScreen";

export type RootStackParamList = {
  HomeScreen: undefined;
  RegisterScreen: undefined;
  Menu: undefined;
  ProductList: undefined;
  ProductForm: { id?: string } | undefined;
  ProductDetail: { id: string };
  BranchList: undefined;
  BranchForm: { id?: string } | undefined;
  BranchDetail: { id: string };
  UserList: undefined;
  UserForm: { id?: string } | undefined;
  UserDetail: { id: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen
      name="RegisterScreen"
      component={RegisterScreen}
      options={{ headerShown: true, title: "Registro" }}
    />
  </Stack.Navigator>
);

const AppStack = () => {
  const { isAdmin } = useAuth();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerBackTitle: "Atrás",
      }}
    >
      <Stack.Screen name="Menu" component={MenuScreen} options={{ title: "Menú", headerShown: false }} />
      <Stack.Screen name="ProductList" component={ProductListScreen} options={{ title: "Productos" }} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ title: "Detalle" }} />
      {isAdmin && (
        <Stack.Screen name="ProductForm" component={ProductFormScreen} options={{ title: "Producto" }} />
      )}
      <Stack.Screen name="BranchList" component={BranchListScreen} options={{ title: "Sucursales" }} />
      <Stack.Screen name="BranchDetail" component={BranchDetailScreen} options={{ title: "Detalle" }} />
      {isAdmin && (
        <Stack.Screen name="BranchForm" component={BranchFormScreen} options={{ title: "Sucursal" }} />
      )}
      {isAdmin && (
        <>
          <Stack.Screen name="UserList" component={UserListScreen} options={{ title: "Usuarios" }} />
          <Stack.Screen name="UserDetail" component={UserDetailScreen} options={{ title: "Detalle" }} />
          <Stack.Screen name="UserForm" component={UserFormScreen} options={{ title: "Usuario" }} />
        </>
      )}
    </Stack.Navigator>
  );
};

const RootNavigator = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return user ? <AppStack /> : <AuthStack />;
};

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
