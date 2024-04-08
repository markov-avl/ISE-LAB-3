import IData from "./IData";

interface IFilterSelector {
    label: string;
    fieldName: keyof IData;
    values: string[];
}

export default IFilterSelector
