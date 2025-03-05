import { Mainbody_styled, Mainbodypicture, Footer_styled, FooterText } from "./Home.styled";

const MainBody = () => {
    return (
        <Mainbody_styled>
            <Mainbodypicture />
        </Mainbody_styled>
    )
}

export const Footer = () => {
    return (
        <Footer_styled>
            <FooterText size="2rem" padding="0px 0px 0px 0px" alignment="center">SHOP AT THE BANDIT'S STASH</FooterText>
            <FooterText size="1rem" padding="0px 0px 0px -100px" alignment="flex-start">SHIT SO CHEAP WE MAKE IT STOLEN</FooterText>
            <FooterText size="1rem" padding="0px -50px 0px 0px" alignment="flex-end">SHIT SO BAD ITS A BANDIT’S DOING</FooterText>
            <FooterText size="1rem" padding="0px 0px 0px -20px" alignment="center">THE BANDIT - KINGS OF LEON.</FooterText>
        </Footer_styled>
    )
}

export const Home = () => {

    return (
        <>
            <MainBody />
            <Footer />
        </>
    )
}