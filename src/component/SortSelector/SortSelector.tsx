import React from "react";
import styles from './SortSelector.module.css';
import SortState from "../../enum/SortState";
import IData from "../../interface/IData";

interface IProps {
    label: string;
    fieldName: keyof IData;
    state: SortState;
    order: number;
    setState: (order: number, state: SortState) => void;
    raiseOrder: (order: number) => void;
    lowerOrder: (order: number) => void;
}

const SortSelector: React.FC<IProps> = ({label, fieldName, state, order, setState, raiseOrder, lowerOrder}: IProps) => {
    return (
        <div className={styles.sortSelector}>
            <button onClick={() => raiseOrder(order)}>↑</button>
            <button onClick={() => lowerOrder(order)}>↓</button>
            <span className={styles.sortLabel}>Sort by {label}</span>
            {
                Object.values(SortState).map(sortState => <>
                    <input type='radio'
                           name={`${fieldName}-${sortState}`}
                           value={sortState}
                           checked={state === sortState}
                           onClick={() => setState(order, sortState as SortState)}/>
                    <label htmlFor={`${fieldName}-${sortState}`}>{sortState.toUpperCase()}</label>
                </>)
            }
        </div>
    )
}

export default SortSelector
