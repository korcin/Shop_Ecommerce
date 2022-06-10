import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("images/login.jpg") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: #fff;
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    cursor: pointer;
    background-color: #91baa0;
    color: white;
    margin-bottom: 10px;
`

const Link = styled.a`
    margin: 5px 0;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>ZALOGUJ SIĘ</Title>
            <Form>
                <Input placeholder="Nazwa użytkownika"/>
                <Input placeholder="Hasło"/>
                <Button>ZALOGUJ</Button>
                <Link>Zapomniałaś/eś hasło?</Link>
                <Link>Stwórz nowe konto</Link>
            </Form>
        </Wrapper>
    </Container>
  ) 
}

export default Login