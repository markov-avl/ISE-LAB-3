import IData from "./IData";
import SortOption from "../enum/SortOption";

interface ISort {
    label: string;
    fieldName: keyof IData;
    option: SortOption;
}

export default ISort
