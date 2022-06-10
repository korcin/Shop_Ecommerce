import { Facebook, Instagram, Mail, Phone, Room, Twitter } from '@material-ui/icons'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1``

const Desc = styled.p`
    margin: 20px 0px;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    cursor: pointer;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0; 
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const ContactItem = styled.div`
    margin-bottom: 20px;;
    display: flex;
    align-items: center;

`

const Payments = styled.img`
    width: 60%;
`
    

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>KORCIN-KOM.</Logo>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima alias id totam nostrum mollitia accusantium, voluptatem, facere inventore quidem voluptas perspiciatis. Similique repellat velit delectus accusamus veritatis dignissimos! Tempora, ab?</Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Przydatne linki</Title>
            <List>
                <ListItem>Strona domowa</ListItem>
                <ListItem>Koszyk</ListItem>
                <ListItem>Komputery</ListItem>
                <ListItem>Komponenty</ListItem>
                <ListItem>Urządzenia</ListItem>
                <ListItem>Moje Konto</ListItem>
                <ListItem>Śledzenie zamówienia</ListItem>
                <ListItem>Lista życzeń</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Kontakt</Title>
            <ContactItem><Room style={{marginRight:"10px"}}/> Ulica Buchalteryjna 28a, 04-431 Warszawa</ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}}/> (12) 44 667 80 </ContactItem>
            <ContactItem><Mail style={{marginRight:"10px"}}/> contact@korcin.dev</ContactItem>
            <Payments src="images/platnosci.png"/>
        </Right>
    </Container>
  )
}

export default Footer