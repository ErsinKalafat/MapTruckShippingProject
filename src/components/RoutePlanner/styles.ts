import { StyleSheet, type ViewStyle } from 'react-native';

export const styles = StyleSheet.create({
    // Başlangıç dropdown'ı açıldığında alttaki Varış'ın üzerine binebilsin diye daha yüksek zIndex.
    origin: {
        zIndex: 20,
    },
    destination: {
        marginTop: 8,
        zIndex: 10,
    },
});

// Üst güvenli alana (insets.top) göre konumlanan kapsayıcı.
export const containerStyle = (insetTop: number): ViewStyle => ({
    position: 'absolute',
    top: insetTop + 12,
    left: 12,
    right: 12,
});
