import { useState } from "react";
import PropTypes from 'prop-types';
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

export const Cart = ({counter}) => {
    return (
        <Cart_styled>
            <img src = {cart} />
            <div className = "cart_counter">{counter}</div>
        </Cart_styled>
    )
}

export const Card = ({
        incrementCounter, 
        decrementCounter,
        prodLink = "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg", 
        prodTitle = "Mens Casual \nSlim Fit", 
        prodCost = 500, 
        prodQuantity = 0,
    }) => {
    const[quantity, setQuantity] = useState(0);

    return (
        <Card_Styled>
            <div className = "imageContainer">
                <img src = {prodLink}></img>
            </div>
            <div className = "contentContainer">
                <div className = "content">
                    <FooterText size = "1.1rem" weight = "300">{prodTitle}</FooterText>
                    <FooterText size = "1.1rem" weight = "300">${prodCost}</FooterText>
                </div>
            </div>
            <div className = "counter">
                <img src = {negative} onClick={() => {
                    decrementCounter()
                    setQuantity((prev) => prev-1);
                }}></img>
                <FooterText size = "1.5rem" weight = "100">{quantity}</FooterText>
                <img src = {positive} onClick={() => {
                    incrementCounter()
                    setQuantity((prev) => prev+1);
                }}></img>
            </div>
        </Card_Styled>
    )
}

Card.propTypes = {
    incrementCounter: PropTypes.func,
    decrementCounter: PropTypes.func,
    prodLink: PropTypes.string,
    prodTitle: PropTypes.string,
    prodCost: PropTypes.number,
    prodQuantity: PropTypes.number
}

export const Card_Container = ({incrementCounter, decrementCounter}) => {
    return (
        <Card_Container_Styled>
            <Card incrementCounter = {incrementCounter} decrementCounter = {decrementCounter}/>
            <Card incrementCounter = {incrementCounter} decrementCounter = {decrementCounter}/>
        </Card_Container_Styled>
    )
}

export const Shop = () => {
    const [counter, setCounter] = useState(0);

    function incrementCounter() {
        setCounter((prev) => prev+1);
    }

    function decrementCounter() {
        setCounter((prev) => prev-1);
    }

    return (
        <>
            <Cart counter={counter}/>
            <Card_Container incrementCounter = {incrementCounter} decrementCounter = {decrementCounter}/>
            <Footer />
        </>
    )
}

