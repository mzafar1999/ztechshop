import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';
import { FaOpencart } from 'react-icons/fa';
import { MdAccountCircle } from 'react-icons/md';

const Container = styled.div`
	height: 90px;
	width: 100%;
	background-color: #ffffff;
	margin-bottom: 8px;
	padding: 30px 0;
`;
const Left = styled.div`
	/* flex: 1; */
`;
const Center = styled.div`
	/* flex: 1; */
`;
const Right = styled.div`
	/* flex: 1; */
`;
const ImageWrapper = styled.div`
	height: 6rem;
	width:15rem;
	padding: 30px;
;`;
const Image = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;
const LinkWrapper = styled.div`
	margin: 0 20px;
	padding: 10px;
`;
const NavLink = styled(Link)`
    text-decoration: none;
    color: black;
`;

const ReactIconWrapper = styled.div`
	margin: 0 10px;
	padding: 5px;
	cursor: pointer;
`;

const Navbar = () => {
	return (
		<Container className="shadow d-flex justify-content-around align-items-center">
			<Left>
				<ImageWrapper>
					<Image src="/images/logo.png" />
				</ImageWrapper>
			</Left>
			<Center className="d-flex">
				<LinkWrapper>
					<NavLink to="/">Home</NavLink>
				</LinkWrapper>
				<LinkWrapper>
					<NavLink to="/product/:id">Item</NavLink>
				</LinkWrapper>
				<LinkWrapper>
					<NavLink to="/shop">Shop</NavLink>
				</LinkWrapper>
				<LinkWrapper>
					<NavLink to="/contact">Contact</NavLink>
				</LinkWrapper>
			</Center>

			<Right className="d-flex ">
				<ReactIconWrapper>
					<BiSearch />
				</ReactIconWrapper>
				<ReactIconWrapper>
					<FaOpencart />
				</ReactIconWrapper>
				<ReactIconWrapper>
					<MdAccountCircle />
				</ReactIconWrapper>
			</Right>
		</Container>
	);
};

export default Navbar;
