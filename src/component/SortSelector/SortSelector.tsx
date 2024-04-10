import React from "react";
import styles from './SortSelector.module.css';
import IData from "../../interface/IData";
import SortOption from "../../enum/SortOption";

interface IProps {
    label: string;
    fieldName: keyof IData;
    option: SortOption;
    order: number;
    setOption: (order: number, state: SortOption) => void;
    raiseOrder: (order: number) => void;
    lowerOrder: (order: number) => void;
}

const SortSelector: React.FC<IProps> = ({
                                            label,
                                            fieldName,
                                            option,
                                            order,
                                            setOption,
                                            raiseOrder,
                                            lowerOrder
                                        }: IProps) => {
    return (
        <div className={styles.sortSelector}>
            <button onClick={() => raiseOrder(order)}>↑</button>
            <button onClick={() => lowerOrder(order)}>↓</button>
            <span className={styles.sortLabel}>Sort by {label}</span>
            {
                Object.values(SortOption).map(sortOption => <>
                    <input type='radio'
                           name={`${fieldName}-${sortOption}`}
                           value={sortOption}
                           checked={option === sortOption}
                           onClick={() => setOption(order, sortOption as SortOption)}/>
                    <label htmlFor={`${fieldName}-${sortOption}`}>{sortOption.toUpperCase()}</label>
                </>)
            }
        </div>
    )
}

export default SortSelector
