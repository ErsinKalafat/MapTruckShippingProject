import type { Location } from '@app-types';

export type DropdownProps = {
    options: Location[];
    placeholder: string;
    onSelect: (option: Location) => void;
};
