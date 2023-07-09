import { useContext } from "react";
import { FilterContext } from "../contexts/Filter-context";

export function useFilter(){
    return useContext(FilterContext)
}