import IData from "./IData";

interface IFilter {
    field: keyof IData;
    selectedValues: string[];
}

export default IFilter
