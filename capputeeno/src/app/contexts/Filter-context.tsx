"use client"

import {FilterType} from "@/app/types/Filter-types";
import { ReactNode, createContext, useState } from "react";
import { PriorityTypes } from "../types/Priority-types";
export const FilterContext = createContext({
    search:'',
    page:0,
    type:FilterType.ALL,
    priority:PriorityTypes.POPULARITY,
    setPriority:(value: PriorityTypes)=>{},
    setSearch:(value:string)=>{},
    setPage:(value:number)=>{},
    setType:(value: FilterType)=>{},
})

interface ProviderProps{
    children:ReactNode
}

export function FilterContextProvider({children}:ProviderProps){
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(0)
    const [type, setType] = useState(FilterType.ALL)
    const [priority,setPriority] = useState(PriorityTypes.POPULARITY)
    
    return(
        <FilterContext.Provider value={{search, page, type , priority, setPriority ,setSearch , setPage , setType}}>
            {children}
        </FilterContext.Provider>
    )
}