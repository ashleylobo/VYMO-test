import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen  from './src/screens/HomeScreen'
import PullScreen  from './src/screens/PullScreen'






// function HomeStackScreen() {
//   return (

//       <HomeScreen />

//   );
// }

// const PullStack = createStackNavigator();

// function PullStackScreen() {
//   return (
//     <SettingsStack.Navigator>
//       <SettingsStack.Screen name="Settings" component={PullScreen} />
//       {/* <SettingsStack.Screen name="Details" component={DetailsScreen} /> */}
//     </SettingsStack.Navigator>
//   );
// }



const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
       <Stack.Screen name="Pull" component={PullScreen} />

    </Stack.Navigator>
  );
}



export default function App() {
  return (


        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>



  );
}