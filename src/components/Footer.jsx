import React from 'react';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { AiFillPhone } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaFacebook, FaFacebookF, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const FooterDiv = styled.div``;

const Container = styled.div``;
const NavLink = styled(Link)`
    text-decoration: none;
    color: white;
    
`;
const Row = styled.div``;
const Col = styled.div``;
const Title = styled.h2`
	color: white;
	border-bottom: 1px solid #2d343f;
`;
const TextAndIconWrapper = styled.div`
	color: white;
	font-size: 1.1rem;
`;

const Line = styled.div`border-top: 1px solid #2d343f;`;
const Input = styled.input`
	color: white;
	background-color: #2d343f;
`;
const Button = styled.button`width: 150px;`;
const SocialIconWrapper = styled.div`
	border: 1px solid #2d343f;
	border-radius: 50%;
	padding: 10px;
`;
const ALink = styled.a`
    text-decoration: none;
    color:white;
`
const SubTitle = styled.p`color: white;`;

const Footer = () => {
	const productsLinks = [
		'Luxury',
		'Sport Wear',
		"Men's Shoes",
		"Women's Shoes",
		'Popular Dress',
		'Gym Accessories',
		'Sport Shoes'
	];
	const furtherInfoLinks = [ 'Home', 'About Us', 'Shop Locations', 'FAQs', 'Contact' ];
	const socialIcons = [
		{
			id: 1,
			icon: <FaFacebookF size={30} />,
			to: '/facebook'
		},
		{
			id: 1,
			icon: <FaInstagram size={30} />,
			to: '/Instagram'
		},
		{
			id: 1,
			icon: <FaTwitter size={30} />,
			to: '/twitter'
		},
		{
			id: 1,
			icon: <FaLinkedin size={30} />,
			to: '/linkedIn'
		}
	];
	return (
		<FooterDiv className="bg-dark">
			<Container className="container">
				<Row className="row">
					<Col className="col-md-4 pt-5">
						<Title className=" pb-3 logo">Z-Shop</Title>
						<TextAndIconWrapper className="my-2">
							{' '}
							<MdLocationOn />212 Hayatabad-Peshawar, 25100
						</TextAndIconWrapper>
						<TextAndIconWrapper className="my-2">
							{' '}
							<AiFillPhone /> <NavLink> 091-502120</NavLink>{' '}
						</TextAndIconWrapper>
						<TextAndIconWrapper className="my-2">
							{' '}
							<MdEmail /> <NavLink>z-tech@gmail.com </NavLink>{' '}
						</TextAndIconWrapper>
					</Col>
					<Col className="col-md-4 pt-5">
						<Title className=" pb-3 logo">Products</Title>
						{productsLinks.map((item) => {
							return (
								<TextAndIconWrapper className="my-2">
									{' '}
									<NavLink>{item}</NavLink>{' '}
								</TextAndIconWrapper>
							);
						})}
					</Col>
					<Col className="col-md-4 pt-5">
						<Title className=" pb-3 logo">Further Info</Title>
						{furtherInfoLinks.map((item) => {
							return (
								<TextAndIconWrapper className="my-2">
									{' '}
									<NavLink>{item}</NavLink>{' '}
								</TextAndIconWrapper>
							);
						})}
					</Col>
				</Row>
				<Row className="row mb-4">
					<Col className="col-12 my-4">
						<Line className="" />
					</Col>
					<Col className="col-auto me-auto mt-2 d-flex">
						{socialIcons.map((social) => {
							return (
								<SocialIconWrapper className="mx-3" key={social.id}>
									<NavLink to={social.link}>{social.icon}</NavLink>
								</SocialIconWrapper>
							);
						})}
					</Col>
					<Col className="col-auto d-flex mt-2">
						<Input className="form-control border-light" placeholder="Email Address" />
						<Button className="btn btn-success mx-1">Subscribe</Button>
					</Col>
				</Row>
			</Container>
			<Container className="w-100 bg-black py-3">
				<Container className="container">
					<Row className="row">
						<Col className="col-12 d-flex">
							<SubTitle>Copyright © 2022 Z-Tech | Designed by</SubTitle>
							<NavLink className="mx-2 text-bold" to="https://templatemo.com/">
								<strong>TempleteMo,</strong>
							</NavLink>
                            <SubTitle>
                            coded by M.Zafar with ReactJS
                            </SubTitle>   
                            <ALink className='mx-2' target='_blank' href='http://github.com/mzafar1999'>
                                <FaGithub size={25}/>
                            </ALink>                            
						</Col>
					</Row>
				</Container>
			</Container>
		</FooterDiv>
	);
};

export default Footer;
