import { useState } from "react";
import {PropTypes} from 'prop-types';
import cart from '../assets/cart.svg';
import negative from '../assets/negative.svg'
import positive from '../assets/positive.svg'
import { Cart_styled, Card_Container_Styled, FooterText, Footer_Styled, Card_Styled } from './shop.styled.js'

export const Footer = () => {
    return (
        <Footer_Styled>
            <FooterText size = "1rem" weight = "900">WE HAVE ALL THE RIGHTS YOU KNOW?</FooterText>
            <FooterText size = "0.8rem" weight = "400">DON’T TRY ANYTHING FUNNY.</FooterText>
        </Footer_Styled>
    )
}

export const Cart = () => {
    return (
        <Cart_styled>
            <img src = {cart} />
            <div className = "cart_counter">0</div>
        </Cart_styled>
    )
}

export const Card = ({prodLink, prodTitle, prodCost, prodQuantity}) => {
    return (
        <Card_Styled>
            <div className = "imageContainer"></div>
            <div className = "contentContainer">
                <div className = "content">
                    <FooterText size = "1.1rem" weight = "300">Mens Casual <br />Slim Fit</FooterText>
                    <FooterText size = "1.1rem" weight = "300">$500</FooterText>
                </div>
            </div>
            <div className = "counter">
                <img src = {negative}></img>
                <FooterText size = "1.5rem" weight = "100">0</FooterText>
                <img src = {positive}></img>
            </div>
        </Card_Styled>
    )
}

export const Card_Container = () => {
    return (
        <Card_Container_Styled>
            <Card />
            <Card />
            <Card />
            <Card />
        </Card_Container_Styled>
    )
}

export const Shop = () => {
    return (
        <>
            <Cart />
            <Card_Container />
            <Footer />
        </>
    )
}

Card.defaultProps = {
    prodLink: "",
    prodTitle: "Mens Casual Slim Fit",
    prodCost: 500,
    prodQuantity: 0,
}

Card.PropTypes = {
    prodLink: PropTypes.string,
    prodTitle: PropTypes.string,
    prodCost: PropTypes.number,
    prodQuantity: PropTypes.number
}