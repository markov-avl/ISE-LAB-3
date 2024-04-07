import React, {useState} from "react";
import styles from './FilterSelector.module.css';

interface IProps {
    label: string;
    values: string[]
}

const FilterSelector: React.FC<IProps> = ({label, values}: IProps) => {
    const [selectedValues, setSelectedValues] = useState<string[]>([])

    const onSelect = (value: string) => {
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
                    values.map(value => <option value={value}
                                                selected={selectedValues.includes(value)}
                                                onClick={() => onSelect(value)}>{value}</option>)
                }
            </select>
        </div>
    )
}

export default FilterSelector
