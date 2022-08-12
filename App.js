import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// redux
import { store } from './redux/store';
import { Provider } from 'react-redux';

export default function App() {
    return (
        <Provider store={store}>
            <View>
                <Text>Qeno</Text>
                {/* <StatusBar style='auto' /> */}
            </View>
        </Provider>
    );
}
