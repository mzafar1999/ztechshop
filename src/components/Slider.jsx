import React from 'react';
import styled from 'styled-components';
import { sliderdata } from './sliderdata';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
const Container = styled.div``;
const Wrapper = styled.div`
    @media (max-width:786px) {
        display: flex;
        flex-direction: column-reverse;
    }
`;
const ColumnLeft = styled.div``;
const ColumnRight = styled.div`
@media (max-width:786px) {
       width: 80%; 
    }
`;
const Image = styled.img`
	width: 80%;
	height: 100%;
    @media (max-width:786px) {
       width: 100%; 
    }
`;
const Title = styled.h1``;
const SubTitle = styled.h3``;
const Description = styled.p``;

const handleDragStart = (e) => e.preventDefault();

const Slider = () => {
	return (
		<AliceCarousel
			mouseTracking
			items={sliderdata.map((item) => {
				return (
					<Container className="container">
						<Wrapper className="row align-items-center">
							<ColumnLeft className="col-md-6">
								<Title> {item.title} </Title>
								<SubTitle> {item.subtitle} </SubTitle>
								<Description> {item.desc} </Description>
							</ColumnLeft>
							<ColumnRight className="col-md-6">
								<Image src={item.img} onDragStart={handleDragStart} />
							</ColumnRight>
						</Wrapper>
					</Container>
				);
			})}
		/>
	);
};

export default Slider;

