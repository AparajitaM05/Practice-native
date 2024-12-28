import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import EditScreen from './src/screens/EditScreen';
import Feather from '@expo/vector-icons/Feather';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider>
    <NavigationContainer>
      <Stack.Navigator>


        <Stack.Screen 
        name="Index" 
        component={IndexScreen} 
        options={({ navigation }) => ({
          title: "Blogs",
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Create")}>
              <AntDesign name="plus" size={30} color="black" style={{ marginRight: 10 }} />
            </TouchableOpacity>
          ),
        })}
        />


        <Stack.Screen name="Show" component={ShowScreen} options={({navigation,route})=>({title:"Expanded Blog", headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Edit",{id : route.params.id})}>
              <Feather name="edit" size={24} color="black" style={{ marginRight: 15 }} />
            </TouchableOpacity>
          ),})} />


        <Stack.Screen name="Create" component={CreateScreen} options={{title:"Create Blog"}} />

        <Stack.Screen name="Edit" component={EditScreen} options={{title:"Edit Blog"}} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}