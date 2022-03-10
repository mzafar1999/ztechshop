import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { FaOpencart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
const Container = styled.div`
  height: ${(props) => props.large && "90px"};
  width: 100%;
  background-color: #ffffff;
  -webkit-box-shadow: -1px 8px 10px -4px #0000004b;
  box-shadow: -1px 8px 10px -4px #00000068;
  z-index: 100;
  display:flex ;
@media (max-width:960px) {
	flex-direction:column ;
}
`;
const Left = styled.div`
	@media (max-width:960px) {
	width: 100% ;
}
`;
const Center = styled.div`
	  display:flex ;
	  flex-direction:row ;
	  @media (max-width:960px) {
	flex-direction:column ;
	;
	width:100% ;
}
`;
const Right = styled.div`
	  display:flex ;
	  @media (max-width:960px) {
	width:100% ;
	  }
`;
const ImageWrapper = styled.div`
  width: 15rem;
  padding: 20px; ;
`;
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
  &:hover{
    text-decoration: none;
  }
`;

const AccountBox = styled.div`
  position:absolute;
  display:none;
  width: 100px;
  height:80px;
  border:1px solid gray ;
  border-radius:10px ;
  background-color:white ;
  z-index:1000 ;
`
const ReactIconWrapper = styled.div`
  margin: 0 10px;
  padding: 5px;
  cursor: pointer;
  &:hover ${AccountBox}{
    display:block ;
  }
`;

const Box = styled.div`
	cursor: pointer;
	@media (min-width:960px) {
	display:none ;
}
`;
const Text = styled.p`
  margin: 10px;
`
const Navbar = () => {
  const [smallScreen, setSmallScreen] = useState(false);
  let width;
  window.onresize = window.onload = function () {
    width = this.innerWidth;
    if (width <= 960) {
      setSmallScreen(true);
    } else {
      setSmallScreen(false);
    }
  };
  const [showNav, setShowNav] = useState(false);
  return (
    <>
		{smallScreen? <Container className=" justify-content-around align-items-center">
        <Left className="d-flex justify-content-between align-items-center">
          <ImageWrapper className="">
            <Image src="/images/logo.png" />
          </ImageWrapper>
    	<Box>
			<GiHamburgerMenu onClick={()=>setShowNav(!showNav)} size={35} className='mx-3'/>
		</Box>
        </Left>
          <Center className={showNav?'d-flex':'d-none'}>
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
              <NavLink to="/cart">Contact</NavLink>
            </LinkWrapper>
          </Center>
          <Right className={showNav?'d-block d-flex mb-3 px-3 ':'d-none'}>
            <ReactIconWrapper >
              <BiSearch />
            </ReactIconWrapper>
            <ReactIconWrapper>
              <FaOpencart />
            </ReactIconWrapper>
            <ReactIconWrapper>
              <MdAccountCircle />
            </ReactIconWrapper>
        </Right>
      </Container>: 
	  
	  <Container className=" justify-content-around align-items-center">
        <Left className="d-flex justify-content-between align-items-center">
          <ImageWrapper className="">
            <Image src="/images/logo.png" />
          </ImageWrapper>
        </Left>
          <Center className={'d-flex'}>
            <LinkWrapper>
              <NavLink to="/">Home</NavLink>
            </LinkWrapper>
            <LinkWrapper>
              <NavLink to="/shop">Shop</NavLink>
            </LinkWrapper>
            <LinkWrapper>
              <NavLink to="/about-us">About Us</NavLink>
            </LinkWrapper>
            <LinkWrapper>
              <NavLink to="/contact">Contact</NavLink>
            </LinkWrapper>
          </Center>
          <Right className={'d-block d-flex mb-3 px-3 '}>
            <ReactIconWrapper >
              <BiSearch />
            </ReactIconWrapper>
            <ReactIconWrapper>
              <NavLink to='/cart'>
              <FaOpencart />
              </NavLink>
            </ReactIconWrapper>
            <ReactIconWrapper>
              <MdAccountCircle />
              <AccountBox>
                <NavLink to='/sign-up'>
                <Text>Sign-Up</Text>
                </NavLink>
                <NavLink to='/sign-in'>
                <Text >Sign-In</Text>
                </NavLink>
                </AccountBox>
            </ReactIconWrapper>
        </Right>
      </Container>}
    </>
  );
};

export default Navbar;
