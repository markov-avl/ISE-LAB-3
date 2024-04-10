import React from "react";
import styles from './FilterSelector.module.css';

interface IProps {
    label: string;
    values: string[];
    selectedValues: string[];
    setSelectedValues: (selectedValues: string[]) => void;
}

const FilterSelector: React.FC<IProps> = ({label, values, selectedValues, setSelectedValues}: IProps) => {
    const onClick = (value: string) => {
        setSelectedValues(
            selectedValues.includes(value)
                ? selectedValues.filter(item => item !== value)
                : [...selectedValues, value]
        )
    }

    return (
        <div className={styles.filterSelector}>
            <p>{label}</p>
            <select multiple size={20}>
                {
                    values?.map(value => <option value={value}
                                                 selected={selectedValues.includes(value)}
                                                 onClick={() => onClick(value)}>{value}</option>)
                }
            </select>
        </div>
    )
}

export default FilterSelector
