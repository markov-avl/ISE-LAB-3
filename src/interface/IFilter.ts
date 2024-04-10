import IData from "./IData";

interface IFilter {
    label: string;
    fieldName: keyof IData;
    values: string[];
    selectedValues: string[];
}

export default IFilter
