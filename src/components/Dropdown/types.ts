import type { Location } from '../../types/location';

export type DropdownProps = {
    options: Location[];
    placeholder: string;
    onSelect: (option: Location) => void;
};
