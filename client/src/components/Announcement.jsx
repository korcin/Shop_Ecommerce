import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: #a39e92;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>
        Ser KORCIN-KOM. oferuje dziś tańsze produkty!
    </Container>
  )
}

export default Announcement