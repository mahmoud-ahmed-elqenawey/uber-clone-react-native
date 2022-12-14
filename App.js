// redux
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import EatsScreen from './components/EatsScreen';
// import android.os.Bundle

export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        <Provider store={store}>
            <NavigationContainer>
                <SafeAreaProvider>
                    <Stack.Navigator>
                        <Stack.Screen
                            name='HomeScreen'
                            component={HomeScreen}
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name='MapScreen'
                            component={MapScreen}
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name='EatsScreen'
                            component={EatsScreen}
                            options={{
                                headerShown: false,
                            }}
                        />
                    </Stack.Navigator>
                    {/* <HomeScreen /> */}
                </SafeAreaProvider>
            </NavigationContainer>
        </Provider>
    );
}
