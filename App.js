import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "./src/components/login"
import pelicula from './src/components/pelicula';
import { useState } from 'react';
import { UserInfo, onAuthStateChanged } from "firebase/auth"
import { useEffect } from 'react';
import { Firebase_auth } from './firebase';
 

const Stack = createNativeStackNavigator();

const insidePelicula = createNativeStackNavigator();

function LayoutPelicula(){
  return(
    <insidePelicula.Navigator>
      <insidePelicula.Screen name="pelicula" component={pelicula}></insidePelicula.Screen>
    </insidePelicula.Navigator>
  )
}

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(()=> {
    onAuthStateChanged(Firebase_auth, (user)=>{
      console.log("user", user);
      setUser(user);
    })
  },[])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        {user ? (
                  <Stack.Screen name='pelicula' component={pelicula} options={{headerShown: false}}></Stack.Screen>
        ) : (        <Stack.Screen name='Login' component={Login} options={{headerShown: false}}></Stack.Screen>)}
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
