import React, {ReactElement, useEffect} from "react";
import {ReactFauxDomProps, withFauxDOM} from 'react-faux-dom'
import * as d3 from "d3";
import './TableContent.module.css'
import IData from "../../interface/IData";
import IFilter from "../../interface/IFilter";
import ISort from "../../interface/ISort";
import SortOption from "../../enum/SortOption";
import TableRow from "../TableRow";


interface IProps extends ReactFauxDomProps {
    data: IData[];
    filters: IFilter[];
    sorts: ISort[];
    content?: ReactElement;
}

const TableContent: React.FC<IProps> = ({data, filters, sorts, content, connectFauxDOM, drawFauxDOM}: IProps) => {
    useEffect(() => {
        const comparators = {
            [SortOption.ASC]: d3.ascending,
            [SortOption.DESC]: d3.descending,
            [SortOption.DISABLED]: () => 0
        }
        const faux = connectFauxDOM('tbody', 'content')

        d3.select(faux)
            .selectAll('tr')
            .remove()

        d3.select(faux)
            .selectAll('tr')
            .data(data)
            .join('tr')
            .filter(row => filters
                .filter(({selectedValues}) => selectedValues.length)
                .every(({fieldName, selectedValues}) => selectedValues.includes(row[fieldName].toString()))
            )
            .sort((a, b) => sorts
                .filter(({option}) => option !== SortOption.DISABLED)
                .map(({fieldName, option}) => comparators[option](a[fieldName], b[fieldName]))
                .reduce((direction1, direction2) => direction1 || direction2, 0)
            )
            // @ts-ignore
            .html(row => <TableRow data={row}/>)
        drawFauxDOM()
    }, [data, filters, sorts, connectFauxDOM, drawFauxDOM])

    return (
        content || <></>
    )
}

// @ts-ignore
export default withFauxDOM(TableContent)
