import { useLocalStorage } from "../hooks/useLocalStorage";
import { styled } from "styled-components"
import { CartIcon } from "./Cart-Icon";

const CartCount = styled.span`
 
   
    width:20px;
    height:20px;
    background-color:var(--delete-color);
    color:white;
    border-radius:100%;
    padding: 0px 5px;
    font-size:12px;
    margin-left:-12px;
    `
const Container = styled.div`
    position:relative;

`
export function CartControl() {
    const { value } = useLocalStorage('cart-items')
    return (
        <Container>
            <CartIcon />
            {value.length && <CartCount>{value.length}</CartCount>}
        </Container>
    )
}