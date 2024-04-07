import React from "react";
import Filtering from "../Filtering";
import styles from "./Parameters.module.css";
import IData from "../../interface/IData";
import Sorting from "../Sorting";
import IFilter from "../../interface/IFilter";
import ISort from "../../interface/ISort";


interface IProps {
    data: IData[];
    filters: IFilter[];
    setFilters: (filters: IFilter[]) => void;
    sorts: ISort[];
    setSorts: (sorts: ISort[]) => void;
}


const Parameters: React.FC<IProps> = ({data, filters, sorts}: IProps) => {
    return (
        <div className={styles.parameterization}>
            <Filtering data={data} filters={filters}/>
            <Sorting sorts={sorts}/>
        </div>
    )
}

export default Parameters
