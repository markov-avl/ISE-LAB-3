import React, {useState} from "react";
import styles from './SortSelector.module.css';
import SortState from "../../enum/SortState";

interface IProps {
    label: string;
    // state: SortState;
    order: number;
    // setState: (order: number, state: SortState) => void;
    raiseOrder: (order: number) => void;
    lowerOrder: (order: number) => void;
}

const SortSelector: React.FC<IProps> = ({label, order, raiseOrder, lowerOrder}: IProps) => {
    const [state, setState] = useState<SortState>(SortState.DISABLED)

    console.log(label, state)
    return (
        <div className={styles.sortSelector}>
            <button onClick={() => raiseOrder(order)}>↑</button>
            <button onClick={() => lowerOrder(order)}>↓</button>
            <span className={styles.sortLabel}>Sort by {label}</span>
            <input type="radio"
                   name={label}
                   value={label}
                   checked={state === SortState.ASC}
                   onClick={() => setState(SortState.ASC)}/>
            <label>ASC</label>
            <input type="radio"
                   name={label}
                   value={label}
                   checked={state === SortState.DESC}
                   onClick={() => setState(SortState.DESC)}/>
            <label>DESC</label>
            <input type="radio"
                   name={label}
                   value={label}
                   checked={state === SortState.DISABLED}
                   onClick={() => setState(SortState.DISABLED)}/>
            <label>DISABLED</label>
        </div>
    )
}

export default SortSelector
