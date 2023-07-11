"use client"

import { styled } from "styled-components"
import { Saira_Stencil_One } from 'next/font/google'
import { PrimaryInputWSearchIcon } from "./Primary-Input"
import { CartControl } from "./Cart-Control"
import { useFilter } from "../hooks/useFilter"
const saira_Stencil_One = Saira_Stencil_One({
    weight: ['400'],
    subsets: ['latin']
})
interface HeaderProps {

}

const TagHeader = styled.header`
    display: flex;
    align-items:center;
    justify-content:space-between;
    padding:20px 160px;

    > div{
        display:flex;
        align-items:center;
        justify-content:center;
        gap:20px;
    }
`

const Logo = styled.a`

    color:var(--logo-color);
    font-weight:400;
    font-size:2.5rem;
    line-height:150%;
`

export function Header(props: HeaderProps) {
    const {setSearch, search} = useFilter()
    return (
        <TagHeader>
            <Logo className={saira_Stencil_One.className}>Capputeeno</Logo>
            <div>
                <PrimaryInputWSearchIcon value={search} handleChange={setSearch} placeholder="Procurando por algo específico?" />
                <CartControl />
            </div>
        </TagHeader>
    )
}