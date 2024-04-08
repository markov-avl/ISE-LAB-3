import React from "react";
import FilterSelector from "../FilterSelector";
import styles from "./Filtering.module.css"
import IFilterSelector from "../../interface/IFilterSelector";
import IFilter from "../../interface/IFilter";
import IData from "../../interface/IData";
import * as d3 from "d3";

interface IProps {
    data: IData[];
    filters: IFilter[];
}

export const Filtering: React.FC<IProps> = ({data, filters}: IProps) => {
    const getValues = (data: IData[], key: keyof IData) => {
        const keys = Array.from(d3.group(data, row => row[key]).keys())
            .map(key => key.toString())
        return d3.sort(keys)
    }

    const filterSelectors: IFilterSelector[] = [
        {label: 'Store ID', values: getValues(data, 'store')},
        {label: 'Date', values: getValues(data, 'date')},
        {label: 'Holiday', values: getValues(data, 'holiday')}
    ]

    return (
        <div className={styles.filtering}>
            <h2>Filtering</h2>
            <div className={styles.filterSelectors}>
                {
                    filterSelectors?.map(({label, values}, i) =>
                        <FilterSelector key={`filter-selector-${i}`}
                                        label={label}
                                        values={values}/>)
                }
            </div>
        </div>
    )
}
