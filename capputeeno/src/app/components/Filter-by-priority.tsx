import React, { useState } from 'react'
import {styled} from "styled-components"
import { ArrowIcon } from './Arrow-icon'
import { useFilter } from '../hooks/useFilter'
import { PriorityTypes } from '../types/Priority-types'

const FilterContainer = styled.div`
    display:flex;
    align-items:center;
    position:relative;

    button{
        border:none;
        background:transparent;
        font-family:inherit;
        cursor:pointer;
        font-weight:400;
        font-size:14px;
        line-height:22px;
        color:var(--text-dark);
        display:flex;
        align-items:center;
        justify-content:center;

        svg{
            margin-left:16px;
        }

    }
`
const PriorityFilter = styled.ul`
    position:absolute;
    top:100%;

    width:250px;
    list-style:none;
    z-index:999;
    li{
        color:var(--text-dark)
        font-size:14px;
        line-height:22px;
        cursor:pointer;
    }
    li + li{
        margin-top:4px;
    }
`

export function FilterbyPriority(){
    const [isOpen, setIsOpen] = useState(false)
    const {setPriority} = useFilter()
    const handleOpen = ()=>setIsOpen(prev=>!prev)

    const handleUpdatePriority = (value:PriorityTypes)=>{
        setPriority(value);
        setIsOpen(false);
    }


    return(
        <FilterContainer>
            <button onClick={handleOpen}>Organizar por
                <ArrowIcon/>
            </button>
        {isOpen && <PriorityFilter>
            <li onClick={()=>handleUpdatePriority(PriorityTypes.NEWS)}>Novidades</li>
            <li onClick={()=>handleUpdatePriority(PriorityTypes.BIGGEST_PRICE)}>Preço: Maior - menor</li>
            <li onClick={()=>handleUpdatePriority(PriorityTypes.MINOR_PRICE)}>Preço: Menor - maior</li>
            <li onClick={()=>handleUpdatePriority(PriorityTypes.POPULARITY)}>Mais vendidos</li>
            </PriorityFilter>}
        </FilterContainer>
    )
} 

