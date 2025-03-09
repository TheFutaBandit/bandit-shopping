import {styled} from 'styled-components'

export const Cart_styled = styled.div`
    display: flex;
    justify-content: flex-start;
    position: relative;
    margin-top: 2rem;
    cursor: pointer;

    img {
        min-width: 4rem;
        height: auto;
    }

    .buy_text {
        position: absolute;
        top: -20px;
        left: -30px;
        transform: rotate(-45deg);
        font-size: 0.8rem;
        font-weight: 300;
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
    row-gap: 32px;
    margin-bottom: 2rem;
`
export const Card_Styled = styled.div`
    border: 1px solid black;
    height: 280px;
    display: flex;
    flex-direction: column;
    max-height: inherit;
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
        flex-grow: 1;
        overflow-y: auto;
    }
    .counter {
        display: flex;
        justify-self: flex-end;
        align-items: center;
        justify-content: center;
        gap: 8px;
        img {
            height: auto;
            max-width: 27px;
            cursor: pointer;
        }
        margin-bottom: 4px;
    }
    
`

export const FooterText = styled.p`
    font-size: ${prop => prop.size};
    font-weight: ${prop => prop.weight};
    margin: 0px;
`

export const ContentText = styled.p`
    font-size: ${prop => prop.size};
    font-weight: ${prop => prop.weight};
    max-width: 100px;
    white-space: pre-line;
    margin: 0px;
`

export const Footer_Styled = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 30px;
`


