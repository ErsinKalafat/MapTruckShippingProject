import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import type { Location } from '../../types/location';
import { styles } from './styles';
import type { DropdownProps } from './types';

function Dropdown({ options, placeholder, onSelect }: DropdownProps) {
    const [open, setOpen] = useState(false);

    const handleSelect = (option: Location) => {
        onSelect(option);
        setOpen(false);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.8}
                onPress={() => setOpen(!open)}>
                <Text style={styles.buttonText} numberOfLines={1}>
                    {placeholder}
                </Text>
                <Text style={styles.chevron}>{open ? '▴' : '▾'}</Text>
            </TouchableOpacity>

            {open && (
                <View style={styles.list}>
                    {options.map(option => (
                        <TouchableOpacity
                            key={option.id}
                            style={styles.item}
                            onPress={() => handleSelect(option)}>
                            <Text style={styles.itemText}>{option.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );
}

export default Dropdown;
