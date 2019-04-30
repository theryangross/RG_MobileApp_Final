import React from 'react';
import { MapView } from 'expo';

export default class App extends React.Component {
  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 41.499538,
          longitude: -81.695900,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
      <MapView.Marker
      coordinate = {{latitude:41.4986,
      longitude:-81.6945}}
      title={"EDSIGCON"}
      description={"Renaissance Cleaveland Hotel"}
      />
      </MapView>
    );
  }
}