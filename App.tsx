import { SafeAreaProvider } from 'react-native-safe-area-context';

import MapPage from './src/pages/MapPage';

// Uygulamanın kök bileşeni: güvenli alan sağlayıcısı + harita sayfası.
function App() {
  return (
    <SafeAreaProvider>
      <MapPage />
    </SafeAreaProvider>
  );
}

export default App;
