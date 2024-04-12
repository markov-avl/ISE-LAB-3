import React, {ChangeEvent} from "react";
import styles from './FilterSelector.module.css';

interface IProps {
    label: string;
    values: string[];
    selectedValues: string[];
    setSelectedValues: (selectedValues: string[]) => void;
}

const FilterSelector: React.FC<IProps> = ({label, values, selectedValues, setSelectedValues}: IProps) => {
    const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedValues(Array.from(event.currentTarget.selectedOptions).map(option => option.value))
    }

    return (
        <div className={styles.filterSelector}>
            <p>{label}</p>
            <select multiple size={20} onChange={onChange}>
                {
                    (values || []).map(value =>
                        <option value={value}
                                selected={selectedValues.includes(value)}>
                            {value}
                        </option>)
                }
            </select>
        </div>
    )
}

export default FilterSelector
