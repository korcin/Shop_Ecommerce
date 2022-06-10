import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Announcement from '../components/Announcement'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

const Container = styled.div`

`

const Title = styled.h1`
    margin: 20px;
    
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    margin: 20px;
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`

const Select =styled.select`
    padding: 10px;
    margin-right: 20px;
`
const Option =styled.option``

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2]
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
             [e.target.name]: value,
        });
    };

  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>{cat}</Title>
        <FilterContainer>
            <Filter><FilterText>Filtruj</FilterText>
            <Select name="status" onChange={handleFilters}>
                <Option disabled>
                    Status
                </Option>
                <Option>Promocja</Option>
                <Option>Polecamy</Option>
                <Option>Wyprzedaż</Option>
            </Select>
            <Select name="purpose" onChange={handleFilters}>
                <Option disabled>
                    Przeznaczenie produktu
                </Option>
                <Option>Dla graczy</Option>
                <Option>Dla profesjonalistów</Option>
                <Option>Do biura</Option>
            </Select>
            </Filter>
            <Filter><FilterText>Sortuj produkty</FilterText>
            <Select onChange={e=>setSort(e.target.value)}>
                <Option value="newest">Najnowsze</Option>
                <Option value="asc">Cena (od najniższej)</Option>
                <Option value="desc">Cena (od najwyższej)</Option>
            </Select>
            </Filter>
        </FilterContainer>
        <Products cat={cat} filters={filters} sort={sort}/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList