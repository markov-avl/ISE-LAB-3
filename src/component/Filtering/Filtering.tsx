import React from "react";
import FilterSelector from "../FilterSelector";
import styles from "./Filtering.module.css"
import IFilter from "../../interface/IFilter";

interface IProps {
    filters: IFilter[];
    setFilters: (filters: IFilter[]) => void;
}

export const Filtering: React.FC<IProps> = ({filters, setFilters}: IProps) => {
    const setSelectedValues = (label: string, selectedValues: string[]) => {
        setFilters(filters.map(filter => {
            if (filter.label === label) return {...filter, selectedValues: selectedValues}
            return filter
        }))
    }

    return (
        <div className={styles.filtering}>
            <h2>Filtering</h2>
            <div className={styles.filterSelectors}>
                {
                    filters?.map(({label, fieldName, values, selectedValues}) =>
                        <FilterSelector key={`${fieldName}-filter-selector`}
                                        label={label}
                                        values={values}
                                        selectedValues={selectedValues}
                                        setSelectedValues={selectedValues => setSelectedValues(label, selectedValues)}/>)
                }
            </div>
        </div>
    )
}
