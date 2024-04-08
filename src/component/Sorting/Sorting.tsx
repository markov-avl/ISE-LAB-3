import React, {useState} from "react";
import ISortSelector from "../../interface/ISortSelector";
import ISort from "../../interface/ISort";
import styles from "./Sorting.module.css";
import SortSelector from "../SortSelector";
import SortState from "../../enum/SortState";
import {selector} from "d3";

interface IProps {
    sorts: ISort[];
}

export const Sorting: React.FC<IProps> = ({sorts}: IProps) => {
    const [sortSelectors, setSortSelectors] = useState<ISortSelector[]>([
        {label: 'weekly sales', fieldName: 'weeklySales', state: SortState.DISABLED},
        {label: 'fuel price', fieldName: 'fuelPrice', state: SortState.DISABLED},
        {label: 'CPI', fieldName: 'cpi', state: SortState.DISABLED},
        {label: 'unemployment', fieldName: 'unemployment', state: SortState.DISABLED},
    ])

    const setState = (order: number, state: SortState) => {
        setSortSelectors(sortSelectors.map((selector, i): ISortSelector => {
            if (i === order) return {...selector, state: state}
            return selector
        }))
    }

    const raiseOrder = (order: number) => {
        if (order > 0) {
            setSortSelectors(sortSelectors.map((selector, i) => {
                if (i === order) return sortSelectors[order - 1]
                if (i === order - 1) return sortSelectors[order]
                return selector
            }))
        }
    }

    const lowerOrder = (order: number) => {
        if (order < sortSelectors.length - 1) {
            setSortSelectors(sortSelectors.map((selector, i) => {
                if (i === order) return sortSelectors[order + 1]
                if (i === order + 1) return sortSelectors[order]
                return selector
            }))
        }
    }

    return (
        <div className={styles.sorting}>
            <h2>Sorting</h2>
            <div className={styles.sortSelectors}>
                {
                    sortSelectors?.map(({label, fieldName, state}, i) =>
                        <SortSelector key={`sort-selector-${i}`}
                                      label={label}
                                      fieldName={fieldName}
                                      state={state}
                                      order={i}
                                      setState={setState}
                                      raiseOrder={raiseOrder}
                                      lowerOrder={lowerOrder}/>)
                }
            </div>
        </div>
    )
}
