import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import type { MapControlsProps } from './types';

// Harita üzerinde yakınlaştır (+), uzaklaştır (-) ve temizle (×) butonları.
function MapControls({ onZoomIn, onZoomOut, onClear }: MapControlsProps) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onZoomIn}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onZoomOut}>
                <Text style={styles.buttonText}>−</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onClear}>
                <Text style={styles.buttonText}>×</Text>
            </TouchableOpacity>
        </View>
    );
}

export default MapControls;
