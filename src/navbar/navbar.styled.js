import styled from "styled-components"

import navline from "../assets/navline.png"

export const Navbar_Style = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
    margin-top: 4rem;
    
`

export const Delimiter = styled.img.attrs({
    src: navline
})`
    max-height: 26px;
`