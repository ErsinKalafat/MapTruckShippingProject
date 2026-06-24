import { useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import JourneyInfo from './src/components/JourneyInfo';
import MapControls from './src/components/MapControls';
import OsmMap from './src/components/OsmMap';
import type { OsmMapHandle } from './src/components/OsmMap/types';
import RoutePlanner from './src/components/RoutePlanner';
import { useRoute } from './src/hooks/useRoute';

// Harita platforma göre seçilir (iOS: react-native-maps, Android: MapLibre).
// Haritaya basılı tutarak (selectByMap) veya dropdown ile başlangıç/varış seçilir.
function App() {
  const { origin, destination, route, durationSeconds, setOrigin, setDestination, selectByMap, reset } =
    useRoute();
  const mapRef = useRef<OsmMapHandle>(null);

  // Rota geldiğinde haritayı iki noktayı da görecek şekilde uzaklaştır.
  useEffect(() => {
    if (route.length > 0) {
      mapRef.current?.fitToRoute(route);
    }
  }, [route]);

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <OsmMap ref={mapRef} route={route} onLongPress={selectByMap} />
        <RoutePlanner
          origin={origin}
          destination={destination}
          onSelectOrigin={setOrigin}
          onSelectDestination={setDestination}
        />
        <MapControls
          onZoomIn={() => mapRef.current?.zoomIn()}
          onZoomOut={() => mapRef.current?.zoomOut()}
          onClear={reset}
        />
        <JourneyInfo
          origin={origin}
          destination={destination}
          durationSeconds={durationSeconds}
        />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
