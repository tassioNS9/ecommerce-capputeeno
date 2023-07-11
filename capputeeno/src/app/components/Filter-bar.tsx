"use client"

import { FilterbyPriority } from "./Filter-by-priority"
import { FilterbyType } from "./Filter-by-type"
import {styled} from "styled-components"

interface FilterBarProps {

}

const FilterContainer = styled.div`
    display:flex;
    width:100%;
    align-items:start;
    justify-content:space-between;
    
`

export function FilterBar(props: FilterBarProps) {
    return (
        <FilterContainer>
            <FilterbyType/>
            <FilterbyPriority/>
        </FilterContainer>
    )
}