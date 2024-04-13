import React from "react";
import styles from "./Sorting.module.css";
import ISort from "../../interface/ISort";
import SortOption from "../../enum/SortOption";
import SortSelector from "../SortSelector";
import ClearButton from "../ClearButton";

interface IProps {
    sorts: ISort[];
    setSorts: (sorts: ISort[]) => void;
}

const Sorting: React.FC<IProps> = ({sorts, setSorts}: IProps) => {
    const setOption = (order: number, option: SortOption) => {
        setSorts(sorts.map((sort, index) => {
            if (index === order) return {...sort, option: option}
            return sort
        }))
    }

    const raiseOrder = (order: number) => {
        if (order > 0) {
            setSorts(sorts.map((sort, index) => {
                if (index === order) return sorts[order - 1]
                if (index === order - 1) return sorts[order]
                return sort
            }))
        }
    }

    const lowerOrder = (order: number) => {
        if (order < sorts.length - 1) {
            setSorts(sorts.map((sort, index) => {
                if (index === order) return sorts[order + 1]
                if (index === order + 1) return sorts[order]
                return sort
            }))
        }
    }

    const clearSorts = () => {
        setSorts(sorts.map(sort => ({...sort, option: SortOption.DISABLED})))
    }

    return (
        <div className={styles.sorting}>
            <h2>Sorting</h2>
            <div className={styles.sortSelectors}>
                {
                    sorts?.map(({label, fieldName, option}, i) =>
                        <SortSelector key={`${fieldName}-sort-selector`}
                                      label={label}
                                      fieldName={fieldName}
                                      option={option}
                                      order={i}
                                      setOption={setOption}
                                      raiseOrder={raiseOrder}
                                      lowerOrder={lowerOrder}/>)
                }
            </div>
            <ClearButton label={'Clear sorting'}
                         onClick={clearSorts}/>
        </div>
    )
}

export default Sorting