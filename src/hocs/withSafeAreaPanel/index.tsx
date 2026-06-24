import type { ComponentType } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { panelStyle } from './styles';
import type { PanelEdge } from './types';

// Verilen bileşeni, güvenli alana göre konumlanan absolute bir panele sarar.
// edge='top' -> insets.top'a, edge='bottom' -> insets.bottom'a yaslanır.
export function withSafeAreaPanel<P extends object>(
    Component: ComponentType<P>,
    edge: PanelEdge,
) {
    return function SafeAreaPanel(props: P) {
        const insets = useSafeAreaInsets();
        const inset = edge === 'top' ? insets.top : insets.bottom;

        return (
            <View style={panelStyle(edge, inset)}>
                <Component {...props} />
            </View>
        );
    };
}
