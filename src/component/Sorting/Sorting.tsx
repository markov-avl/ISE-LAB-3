import React, {useState} from "react";
import ISortSelector from "../../interface/ISortSelector";
import ISort from "../../interface/ISort";
import styles from "./Sorting.module.css";
import SortSelector from "../SortSelector";
import SortState from "../../enum/SortState";

interface IProps {
    sorts: ISort[];
}

export const Sorting: React.FC<IProps> = ({sorts}: IProps) => {
    const [sortSelectors, setSortSelectors] = useState<ISortSelector[]>([
        {label: 'weekly sales', state: SortState.DISABLED},
        {label: 'fuel price', state: SortState.DISABLED},
        {label: 'CPI', state: SortState.DISABLED},
        {label: 'unemployment', state: SortState.DISABLED},
    ])

    // const setState = (order: number, state: SortState) => {
    //     const sortSelectorsCopy = [...sortSelectors]
    //     sortSelectorsCopy[order].state = state
    //     setSortSelectors(sortSelectors)
    // }

    const raiseOrder = (order: number) => {
        if (order > 0) {
            const sortSelectorsCopy = [...sortSelectors]
            sortSelectorsCopy[order] = sortSelectors[order - 1]
            sortSelectorsCopy[order - 1] = sortSelectors[order]
            setSortSelectors(sortSelectorsCopy)
        }
    }

    const lowerOrder = (order: number) => {
        if (order < sortSelectors.length - 1) {
            const sortSelectorsCopy = [...sortSelectors]
            sortSelectorsCopy[order] = sortSelectors[order + 1]
            sortSelectorsCopy[order + 1] = sortSelectors[order]
            setSortSelectors(sortSelectorsCopy)
        }
    }

    return (
        <div className={styles.sorting}>
            <h2>Sorting</h2>
            <div className={styles.sortSelectors}>
                {
                    sortSelectors?.map(({label, state}, i) =>
                        <SortSelector key={`sort-selector-${i}`}
                                      label={label}
                                      // state={state}
                                      order={i}
                                      // setState={setState}
                                      raiseOrder={raiseOrder}
                                      lowerOrder={lowerOrder}/>)
                }
            </div>
        </div>
    )
}
