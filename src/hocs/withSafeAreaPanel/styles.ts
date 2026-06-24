import type { ViewStyle } from 'react-native';

import type { PanelEdge } from './types';

// Güvenli alana (notch) göre konumlanan absolute kapsayıcı.
export const panelStyle = (edge: PanelEdge, inset: number): ViewStyle => ({
    position: 'absolute',
    left: 12,
    right: 12,
    [edge]: inset + 12,
});
