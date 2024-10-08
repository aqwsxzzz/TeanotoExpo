import * as React from "react";
import Home from "@/Screens/Home/Home";
import Products from "@/Screens/Products/Products";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Brands from "@/Screens/Brands/Brands";
import Stores from "@/Screens/Stores/Stores";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ItemsDetails from "@/Screens/Products/ItemDetails";
import { RootStackParamList } from "@/interfaces";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

const Stack = createNativeStackNavigator<RootStackParamList>();
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <StatusBar
          translucent={false}
          backgroundColor="black"
          barStyle="light-content"
        />
        <SafeAreaView className="flex-1 bg-transparent">
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Products"
                component={Products}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Brands"
                component={Brands}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Stores"
                component={Stores}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ItemDetails"
                component={ItemsDetails}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
export default App;
