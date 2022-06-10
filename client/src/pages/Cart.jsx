import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Container = styled.div``

const Wrapper = styled.div`
    padding: 20px;
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
    color: ${props=>props.type === "filled" && "white"};
`

const TopTexts = styled.div``

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`

const Info = styled.div`
  flex: 3;
`

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`

const Image = styled.img`
  width: 200px;
`

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const ProductName = styled.span``

const ProductId = styled.span``

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 300;
`

const ProductStatus = styled.div``

const ProductPurpose = styled.div``

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  margin-bottom: 15px;
`

const SummaryTitle = styled.h1`
  font-weight: 500;
`

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props=>props.type === "total" && "700"};
  font-size: ${props=>props.type === "total" && "24px"};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`

const Cart = () => {
  const cart = useSelector((state) => state.cart)
  return (
    <Container>
      <Navbar/>
        <Wrapper>
            <Title>TWÓJ KOSZYK</Title>
            <Top>
                <Link to="/products">
                  <TopButton>KONTYNUUJ ZAKUPY</TopButton>
                </Link>
                <TopTexts>
                    <TopText>Koszyk (2)</TopText>
                    <TopText>Twoja lista życzeń (0)</TopText>
                </TopTexts>
                <TopButton type="filled">PRZEJDŹ DO KASY</TopButton>
            </Top>
            <Bottom>
              <Info>
                {cart.products.map(product=>(
                  <Product>
                  <ProductDetail>
                    <Image src={product.img}/>
                    <Details>
                      <ProductName><b>Produkt:</b> {product.title}</ProductName>
                      <ProductId><b>ID:</b> {product._id}</ProductId>
                      <ProductStatus>
                        <b>Status:</b> {product.status}
                      </ProductStatus>
                      <ProductPurpose>
                        <b>Przeznaczenie:</b> {product.purpose}
                      </ProductPurpose>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                    <Remove/>
                        <ProductAmount>{product.quantity}</ProductAmount>
                      <Add/>
                    </ProductAmountContainer>
                    <ProductPrice>{product.price * product.quantity} zł</ProductPrice>
                  </PriceDetail>
                </Product>
                ))}
                <Hr/>
              </Info>
              <Summary>
                <SummaryTitle>PODSUMOWANIE ZAMÓWIENIA</SummaryTitle>
                <SummaryItem>
                  <SummaryItemText>SUMA</SummaryItemText>
                  <SummaryItemPrice>{cart.total} zł</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>DOSTAWA</SummaryItemText>
                  <SummaryItemPrice>7.99 zł</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                  <SummaryItemText>RAZEM</SummaryItemText>
                  <SummaryItemPrice>{cart.total + 7.99} zł</SummaryItemPrice>
                </SummaryItem>
                <Button>KUP</Button>
              </Summary>
            </Bottom>
        </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Cart