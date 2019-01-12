import React, { Component } from 'react';
import { View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export class YouAddMap extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          minLength={2}
          autoFocus={false}
          returnKeyType="search"
          listViewDisplayed="auto"
          fetchDetails
          renderDescription={row => row.description}
          onPress={(data, details = null) => {
            this.props.navigation.navigate('YouAddLocation', { title: details.formatted_address, location: details.geometry.location });
          }}
          getDefaultValue={() => ''}
          query={{

            key: 'AIzaSyADTJeMW8U2JryEcnlYRDNWdobf5W6rPrg',
            language: 'en',
            types: '(cities)'
          }}
          styles={{
            textInputContainer: {
              width: '100%'
            },
            description: {
              fontWeight: 'bold'
            },
            predefinedPlacesDescription: {
              color: '#1faadb'
            }
          }}
          currentLocation={false}
          nearbyPlacesAPI="GooglePlacesSearch"
          filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}
          debounce={200}
        />
      </View>
    );
  }
}

export default YouAddMap;
