import React, {ReactElement, useEffect} from "react";
import {ReactFauxDomProps, withFauxDOM} from 'react-faux-dom'
import './Diagram.module.css'
import IData from "../../interface/IData";
import DiagramGroupBy from "../../enum/DiagramGroupBy";
import DiagramDataType from "../../enum/DiagramDataType";
import DiagramAggregator from "../../enum/DiagramAggregator";
import * as d3 from "d3";


interface IProps extends ReactFauxDomProps {
    data: IData[];
    groupBy: DiagramGroupBy;
    dataType: DiagramDataType;
    aggregator: DiagramAggregator;
    content?: ReactElement;
}

const Diagram: React.FC<IProps> = ({
                                       data,
                                       groupBy,
                                       dataType,
                                       aggregator,
                                       content,
                                       connectFauxDOM,
                                       drawFauxDOM,
                                       animateFauxDOM,
                                       stopAnimatingFauxDOM
                                   }: IProps) => {
    useEffect(() => {
        const animationDuration = 500
        const width = 1800;
        const height = 600;
        const margin = {top: 20, right: 20, bottom: 100, left: 100};
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;

        const dateGroups = {
            [DiagramGroupBy.WEEK]: (row: IData) => row.date,
            [DiagramGroupBy.MONTH]: (row: IData) => row.date.substring(3)
        }
        const aggregators = {
            [DiagramAggregator.MIN]: d3.min as (a: IData[], b: (c: IData) => any) => number,
            [DiagramAggregator.MAX]: d3.max as (a: IData[], b: (c: IData) => any) => number,
            [DiagramAggregator.MEAN]: d3.mean as (a: IData[], b: (c: IData) => any) => number
        }

        const groupedData = d3.group(data, dateGroups[groupBy])
        const value = (d: IData[]) => aggregators[aggregator](d, row => row[dataType])

        const xScale = d3.scaleBand()
            .domain(groupedData.keys())
            .range([0, innerWidth])
            .padding(1);
        const yScale = d3.scaleLinear()
            // @ts-ignore
            .domain([0.95 * d3.min(groupedData.values(), value), 1.05 * d3.max(groupedData.values(), value)])
            .range([innerHeight, 0]);
        // @ts-ignore
        const line = d3.line<[string, IData[]]>()
            .x(d => xScale(d[0]))
            .y(d => yScale(value(d[1])));

        const faux = connectFauxDOM('svg', 'content')
        animateFauxDOM(animationDuration)

        d3.select(faux)
            .selectAll('*')
            .remove()

        const svg = d3.select(faux)
            .attr("width", width)
            .attr("height", height);

        const graph = svg.append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top})`)

        graph.append("path")
            .datum(groupedData)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 2)
            .attr("d", line)

        graph.append("g")
            .attr("class", "x-axis")
            .attr("transform", `translate(0, ${innerHeight})`)
            .call(d3.axisBottom(xScale))
            .selectAll("text")
            .attr("transform", "rotate(-70)")
            .style("text-anchor", "end")
            .attr("dx", "-0.8em")
            .attr("dy", "-0.15em")
            .attr("opacity", 1)

        graph.append("g")
            .attr("class", "y-axis")
            .call(d3.axisLeft(yScale))

        graph.append("text")
            .attr("class", "x-axis-label")
            .attr("x", innerWidth / 2)
            .attr("y", height - 30)
            .attr("text-anchor", "middle")
            .text(groupBy)

        graph.append("text")
            .attr("class", "y-axis-label")
            .attr("x", -innerHeight / 2)
            .attr("y", -70)
            .attr("text-anchor", "middle")
            .attr("transform", "rotate(-90)")
            .text(dataType)

        drawFauxDOM()
    }, [data, groupBy, dataType, aggregator, connectFauxDOM, drawFauxDOM, animateFauxDOM, stopAnimatingFauxDOM])

    return (
        content || <></>
    )
}

// @ts-ignore
export default withFauxDOM(Diagram)
