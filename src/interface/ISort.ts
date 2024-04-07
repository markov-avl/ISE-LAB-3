import IData from "./IData";

interface ISort {
    field: keyof IData;
    ascending: boolean;
}

export default ISort
