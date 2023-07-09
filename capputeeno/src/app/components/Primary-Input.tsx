"use client"


import { styled } from "styled-components"
import { SearchIcon } from "./Search-Icon"
import { InputHTMLAttributes } from "react"

export const PrimaryInput = styled.input`
width:352px;
border-radius:8px;
font-family:'inherit';
background-color:var(--bg-secondary);
padding:10px 16px;
font-size:0.9rem;
line-height:22px;
font-weight:400;
color:var(--text-dark);
border:none;
`

export const InputContainer = styled.div`
position:relative;
width:352px;

    svg{
        position: absolute;
        right:20px;
        top:50%;
        transform:translateY(-50%);

    }
`
interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

export function PrimaryInputWSearchIcon(props: InputProps) {
    return (
        <InputContainer>
        <PrimaryInput {...props}/>
            <SearchIcon />
        </InputContainer>
    )
}