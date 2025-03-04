import {styled} from 'styled-components';
import homebodypicture from '../assets/homebodypicture.svg'

export const Header = styled.div`
    height: 82.567px;
    color: red;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto Condensed', sans-serif;
`

export const Mainbody_styled = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1rem;   
    margin-bottom: 1rem;
`

export const Mainbodypicture = styled.img.attrs({
    src: homebodypicture
})`
    max-width: 850px;
    height: auto;
`

export const Footer_styled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    position: relative;
    gap: 20px;
`

export const FooterText = styled.p`
    box-sizing: border-box;
    margin:0px;
    font-size: ${prop => prop.size};
    margin: ${prop => prop.padding};
    align-self: ${prop => prop.alignment};
    font-weight: 900;
`

FooterText.defaultProps = {
    size : "1rem",
    padding: "0px 0px 0px 0px",
    alignment: "flex-start",
}

/* top */

// position: absolute;
// width: 137px;
// height: 26px;
// left: calc(50% - 137px/2 + 0.5px);
// top: 158px;

