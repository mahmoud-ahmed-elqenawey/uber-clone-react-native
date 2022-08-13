import React from 'react';
import { Image, Text, View } from 'react-native';
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';

const HomeScreen = () => {
    return (
        <View style={tw`p-5`}>
            <Image
                style={{
                    width: 100,
                    height: 100,
                    resizeMode: 'contain',
                }}
                source={{
                    uri: 'https://links.papareact.com/gzs',
                }}
            />

            <GooglePlacesAutocomplete
                placeholder='Where From?'
                styles={{
                    container: {
                        flex: 0,
                    },
                    textInput: {
                        fontSize: 18,
                    },
                }}
                query={{
                    key: 'AIzaSyDTVGdeXYdYSy9ocBHbb_dn0IftPQfFks8',
                    language: 'en',
                }}
                nearbyPlacesAPI='GooglePlacesSearch'
                debounce={400}
            />

            {/* <NavOptions /> */}
        </View>
    );
};

export default HomeScreen;
