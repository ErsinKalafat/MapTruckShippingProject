import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

// mapType="none" -> Google/Apple harita karoları çizilmez, tuval boş kalır.
function App() {
  return <MapView style={styles.map} mapType="none" />;
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default App;
