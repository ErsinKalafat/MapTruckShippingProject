import { StyleSheet, View } from 'react-native';

import OsmMap from './src/components/OsmMap';
import RoutePlanner from './src/components/RoutePlanner';
import { useRoute } from './src/hooks/useRoute';

// Harita platforma göre seçilir (iOS: react-native-maps, Android: MapLibre).
// Haritaya basılı tutarak (selectByMap) veya dropdown ile başlangıç/varış seçilir.
function App() {
  const { origin, destination, setOrigin, setDestination, selectByMap } = useRoute();

  return (
    <View style={styles.container}>
      <OsmMap onLongPress={selectByMap} />
      <RoutePlanner
        origin={origin}
        destination={destination}
        onSelectOrigin={setOrigin}
        onSelectDestination={setDestination}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
