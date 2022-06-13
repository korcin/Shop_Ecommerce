import { Search } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { Badge } from "@mui/material";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ScrollToTop from "../ScrollToTop";

const Container = styled.div`
	height: 60px;
`;

const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`;
const Language = styled.span`
	font-size: 14px;
	cursor: pointer;
`;

const SearchContainer = styled.div`
	border: 0.5px solid lightgray;
	display: flex;
	align-items: center;
	margin-left: 25px;
	padding: 5px;
`;

const Input = styled.input`
	border: none;
`;

const Center = styled.div`
	flex: 1;
	text-align: center;
`;

const Logo = styled.h1`
	font-weight: bold;
	color: black;
`;

const Right = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;
`;

const MenuItem = styled.div`
	font-size: 14px;
	cursor: pointer;
	margin-left: 25px;
`;

const Navbar = () => {
	const quantity = useSelector((state) => state.cart.quantity);
	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>EN</Language>
					<SearchContainer>
						<Input></Input>
						<Search style={{ color: "gray", fontSize: 16 }}></Search>
					</SearchContainer>
				</Left>
				<Center>
					<Link to="/" style={{ textDecoration: "none" }}>
						<Logo>KORCIN-KOM.</Logo>
					</Link>
				</Center>
				<Right>
					<Link
						style={{ textDecoration: "none", color: "black" }}
						to="/register"
					>
						<MenuItem>ZAREJESTRUJ</MenuItem>
					</Link>
					<Link style={{ textDecoration: "none", color: "black" }} to="/login">
						<MenuItem>ZALOGUJ SIĘ</MenuItem>
					</Link>
					<Link to="/cart">
						<MenuItem>
							<Badge badgeContent={quantity} color="primary">
								<ShoppingCartOutlined color="action" />
							</Badge>
						</MenuItem>
					</Link>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
