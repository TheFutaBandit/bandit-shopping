import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import cart from '../assets/cart.svg';
import negative from '../assets/negative.svg'
import positive from '../assets/positive.svg'
import { Cart_styled, Card_Container_Styled, FooterText, Footer_Styled, Card_Styled, ContentText } from './shop.styled.js'

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
            <p className = "buy_text">Click To Steal!</p>
            <div data-testid="cart_counter" className = "cart_counter">{counter}</div>
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
    let fontSize = "1.1rem";

    return (
        <Card_Styled>
            <div className = "imageContainer">
                <img src = {prodLink}></img>
            </div>
            <div className = "contentContainer">
                <div className = "content">
                    <ContentText size = {fontSize} weight = "300">{prodTitle}</ContentText>
                    <ContentText size = "1.1rem" weight = "300">${prodCost}</ContentText>
                </div>
            </div>
            <div className = "counter">
                <img alt="decrement_button" src = {negative} onClick={() => {
                    if(quantity > 0) {
                        decrementCounter()
                        setQuantity((prev) => prev-1);
                    }
                }}></img>
                <FooterText data-testid = "card_counter" size = "1.5rem" weight = "100">{quantity}</FooterText>
                <img alt="increment_button" src = {positive} onClick={() => {
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
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [storeUrl, setStoreUrl] = useState('https://fakestoreapi.com/products');
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(storeUrl, { mode: "cors" });
                if(response.status >= 400) {
                    throw new Error("server error");
                }
                const data = await response.json();
                console.log(data);
                setProductList(JSON.parse(JSON.stringify(data.slice(0,4))));
                setLoading(false);
                
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        getData();   
        
    }, [storeUrl]);

    if(loading) return <p>Loading...</p>;
    if(error) return <p>A network error was encountered</p>;
    console.log(productList)

    return (
        <Card_Container_Styled>
            {productList.map((item) => {
                return (
                    <Card 
                        key = {item.id}
                        incrementCounter = {incrementCounter} 
                        decrementCounter = {decrementCounter} 
                        prodLink = {item.image}
                        prodCost = {item.price}
                        prodTitle = {item.title}
                    />
                )
            })}
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

