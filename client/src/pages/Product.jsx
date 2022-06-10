import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons'
import Announcement from '../components/Announcement'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { publicRequest } from '../requestMethods'
import { addProduct } from '../redux/cartRedux'
import { useDispatch } from 'react-redux'

const Container = styled.div``

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const ImgContainer = styled.div`
    flex: 1;
`

const Image = styled.img`
    width: 80%;
    height: 70vh;
    object-fit: cover;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px ;
`

const Title = styled.h1`
    font-weight: 700;
`

const Desc = styled.p`
    font-weight: 400;
    margin: 20px 0px;
`

const Price = styled.span`
    font-weight: 600;
    font-size: 40px;
`

const FilterContainer = styled.div`
    margin: 30px 0;
    width: 55%;
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 20px;
`

const FilterRam = styled.select`
    margin: 10px;
    padding: 5px;
`

const FilterRamOption = styled.option``

const FilterSdd = styled.select`
    margin: 10px;
    padding: 5px;
`

const FilterSsdOption = styled.option``

const AddContainer = styled.div`
    width: 54%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
`

const Button = styled.button`
    font-weight: 500;
    padding: 15px;
    border: 2px solid teal;
    background-color: #fff;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover{
        background-color: teal;
        color: white;
    }
`

const Product = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [status, setStatus] = useState("");
    const [purpose, setPurpose] = useState("");
    const dispatch = useDispatch();

    useEffect(()=>{
        const getProduct = async () => {
            try{
                const res = await publicRequest.get("/products/find/"+id)
                setProduct(res.data);
            }catch{}
        };
        getProduct();
    },[id]);

    const handleQuantity = (type) => {
        if(type === "dec"){
            quantity>1 && setQuantity(quantity-1);
        }else{
            setQuantity(quantity+1);
        }
    }

    const handleClick = () => {
        dispatch(
            addProduct({...product, quantity, status, purpose})
        )
    }

  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src={product.img}/>
            </ImgContainer>
            <InfoContainer>
                <Title>{product.title}</Title>
                <Desc>{product.desc}</Desc>
                <Price>{product.price} zł</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Status</FilterTitle>
                        <FilterRam onChange={(e)=>setStatus(e.target.value)}>
                        {product.status?.map((s) =>(
                            <FilterRamOption key={s}>{s}</FilterRamOption>
                            ))}
                        </FilterRam>
                    </Filter>
                    <Filter>
                        <FilterTitle>Przeznaczenie</FilterTitle>
                        <FilterSdd onChange={(e)=>setPurpose(e.target.value)}>
                        {product.purpose?.map((p) =>(
                            <FilterSsdOption key={p}>{p}</FilterSsdOption>
                            ))}
                        </FilterSdd>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove style={{cursor:'pointer'}} onClick={()=>handleQuantity("dec")}/>
                        <Amount>{quantity}</Amount>
                        <Add style={{cursor:'pointer'}} onClick={()=>handleQuantity("inc")}/>
                    </AmountContainer>
                    <Button onClick={handleClick}>DODAJ DO KOSZYKA</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product