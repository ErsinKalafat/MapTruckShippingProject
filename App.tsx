import { SafeAreaProvider } from 'react-native-safe-area-context';

import { MapPage } from '@pages';

// Uygulamanın kök bileşeni: güvenli alan sağlayıcısı + harita sayfası.
function App() {
  return (
    <SafeAreaProvider>
      <MapPage />
    </SafeAreaProvider>
  );
}

export default App;
