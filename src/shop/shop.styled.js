import {styled} from 'styled-components'

export const Cart_styled = styled.div`
    display: flex;
    justify-content: flex-start;
    position: relative;
    margin-top: 2rem;

    img {
        min-width: 4rem;
        height: auto;
    }

    .cart_counter {
        position: absolute;
        font-weight: 100;
        font-size: 1rem;
        top: 0;
        right: 0;
        border: 0.5px solid black;
        width: 22px;
        height: 22px;
        border-radius: 100%;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const Card_Container_Styled = styled.div`
    display: grid;
    max-width: 100%;
    grid-template-columns: repeat(auto-fit, 224px);
    margin-top: 2rem;
    column-gap: 32px;
`
export const Card_Styled = styled.div`
    border: 1px solid black;
    height: 280px;
    display: flex;
    flex-direction: column;
    .imageContainer {
        flex: 0 0 184px;
        border-bottom: 1px solid black;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            max-width:100px;
            height: auto;
        }
    }
    .contentContainer {
        
        padding: 7px;
        .content {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0px;
        }
    }
    .counter {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        img {
            height: auto;
            max-width: 27px;
            cursor: pointer;
        }
    }
    
`

export const FooterText = styled.p`
    font-size: ${prop => prop.size};
    font-weight: ${prop => prop.weight};
    margin: 0px;
    white-space: pre;
`

export const Footer_Styled = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 30px;
`


