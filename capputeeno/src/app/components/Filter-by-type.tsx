"use client"

import { styled } from "styled-components"
import { useFilter } from "../hooks/useFilter"
import { FilterType } from "../types/Filter-types"


interface FilterItemProps {
    selected: boolean
}

const FilterList = styled.ul`
display:flex;
align-items: center;
justify-content:center;
gap:40px;
list-style:none;
`

const FilterItem = styled.li<FilterItemProps>`
text-align:center;
font-size:1rem;
font-family:inherit;
font-weight:${props => props.selected ? '600' : '400'}
text-align:center;
line-height:22px;
text-transform:uppercase;
color:var(--text-dark);
cursor:pointer;
border-bottom:${props => props.selected ? '4px solid  var(--orange-low)' : ''}
`

export function FilterbyType() {
    const { type, setType } = useFilter()
    const handleChangeType = (value: FilterType) => {
        setType(value)
    }
    return (
        <FilterList>
            <FilterItem
                selected={type === FilterType.ALL}
                onClick={() => handleChangeType(FilterType.ALL)}
            >
                Todos os produtos
            </FilterItem>

            <FilterItem
                selected={type === FilterType.SHIRT}
                onClick={() => handleChangeType(FilterType.SHIRT)}
            >
                Camisetas
            </FilterItem>

            <FilterItem
                selected={type === FilterType.MUG}
                onClick={() => handleChangeType(FilterType.MUG)}
            >
                Canecas
            </FilterItem>
        </FilterList>
    )

}