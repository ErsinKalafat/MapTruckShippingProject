// Harita kütüphanelerini platforma göre ayır:
// - iOS  -> react-native-maps (Apple MapKit, API key gerekmez)
// - Android -> @maplibre/maplibre-react-native (Google yok, API key gerekmez)
module.exports = {
    dependencies: {
        'react-native-maps': {
            platforms: { android: null },
        },
        '@maplibre/maplibre-react-native': {
            platforms: { ios: null },
        },
    },
};
