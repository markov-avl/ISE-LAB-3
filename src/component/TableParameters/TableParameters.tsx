import React from "react";
import styles from "./TableParameters.module.css";
import IFilter from "../../interface/IFilter";
import ISort from "../../interface/ISort";
import Filtering from "../Filtering";
import Sorting from "../Sorting";


interface IProps {
    filters: IFilter[];
    setFilters: (filters: IFilter[]) => void;
    sorts: ISort[];
    setSorts: (sorts: ISort[]) => void;
}


const TableParameters: React.FC<IProps> = ({filters, setFilters, sorts, setSorts}: IProps) => {
    return (
        <div className={styles.parameterization}>
            <Filtering filters={filters}
                       setFilters={setFilters}/>
            <Sorting sorts={sorts}
                     setSorts={setSorts}/>
        </div>
    )
}

export default TableParameters
