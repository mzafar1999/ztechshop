import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineMail, AiFillPhone } from 'react-icons/ai';
import { GrFacebook, GrInstagram, GrTwitter, GrLinkedin } from 'react-icons/gr';
import { Container } from './styledComponents';
const Wrapper = styled.div`
	background-color: #212934;
	height: 45px;
`;
const ContactWrapper = styled.div``;
const Text = styled.p`
	color: white;
	font-size: 12px;
	padding-top: 12px;
`;

const SocialWrapper = styled.div``;
const Social = styled.div`
	cursor: pointer;
	display: flex;
	align-items: center;
	margin-right: 10px;
	@media (max-width:786px) {
		display: ${props=>props.none?'none':null} ;
	}
`;

const TopNav = () => {
	return (
		<Wrapper>
			<Container className="container d-flex align-items-center justify-content-between">
				<ContactWrapper className="d-flex ">
					<Social style={{ color: 'white' }}>
						<AiOutlineMail />
						<Text className="mx-2">z-tech@gmail.com</Text>
					</Social>
					<Social none style={{ color: 'white' }}>
						<AiFillPhone />
						<Text className="mx-2">0304 943 6671</Text>
					</Social>
				</ContactWrapper>
				<SocialWrapper className="d-flex">
					<Social>
						<GrFacebook className="mx-2" style={{ color: 'white' }} />
					</Social>
					<Social>
						<GrInstagram className="mx-2" style={{ color: 'white' }} />
					</Social>
					<Social>
						<GrTwitter className="mx-2" style={{ color: 'white' }} />
					</Social>
					<Social>
						<GrLinkedin className="mx-2" style={{ color: 'white' }} />
					</Social>
				</SocialWrapper>
			</Container>
		</Wrapper>
	);
};

export default TopNav;
