import React from 'react';
import styled from 'styled-components';
import { sliderdata } from './sliderdata';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
const Container = styled.div`
    background-color: #EFEFEF;
`;
const Wrapper = styled.div`
    @media (max-width:786px) {
        display: flex;
        flex-direction: column-reverse;
    }
`;
const ColumnLeft = styled.div`
    padding-left: 100px;
    @media (max-width:786px) {
        padding-left: 0px;

    }
`;
const ColumnRight = styled.div`
@media (max-width:786px) {
       width: 80%; 
    }
`;
const Image = styled.img`
	width: 80%;
	height: 100%;
    position: relative;
    left: 40px;
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
		<AliceCarousel autoPlay={true} infinite={true} animationDuration={2000} autoPlayInterval={1500} animationType={'fadeout'}
			mouseTracking
			items={sliderdata.map((item) => {
				return (
					<Container className="container-fluid">
						<Wrapper className="row align-items-center p-5 d-flex justify-content-around">
							<ColumnLeft className="col-md-6 col-lg-6">
								<Title> {item.title} </Title>
								<SubTitle> {item.subtitle} </SubTitle>
								<Description> {item.desc} </Description>
							</ColumnLeft>
							<ColumnRight className="col-md-6 col-lg-6">
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

