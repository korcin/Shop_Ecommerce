import { Link } from "react-router-dom";
import styled from "styled-components";
import ScrollToTop from "../ScrollToTop";

const Container = styled.div`
	flex: 1;
	margin: 3px;
	height: 55vh;
	position: relative;
`;
const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
const Info = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const Title = styled.h1`
	color: white;
	margin-bottom: 10px;
`;
const Button = styled.button`
	border: none;
	padding: 10px;
	background-color: #fff;
	color: gray;
	cursor: pointer;
	font-weight: 600;
`;

const CategoryItem = ({ item }) => {
	return (
		<Container>
			<Image src={item.img} />
			<Info>
				<Title>{item.title}</Title>
				<ScrollToTop />
				<Link to={`/products/${item.cat}`}>
					<Button>KUP TERAZ</Button>
				</Link>
			</Info>
		</Container>
	);
};

export default CategoryItem;
