import React from 'react';
import styled from 'styled-components';
import { allProducts } from './products';
import { sliderdata } from './sliderdata';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { SubTitle, Text, Title } from './styledComponents';
const Container = styled.div`
    background: rgb(88,228,172);
background: linear-gradient(90deg, rgba(88,228,172,1) 0%, rgba(36,227,151,1) 35%, rgba(65,199,180,1) 100%);
color: white;
font-weight: 500;
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
		position: relative;
		right: 50px;
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


const handleDragStart = (e) => e.preventDefault();
const images = allProducts? allProducts.map((item) => {
	return item.images[0]
}):null;
const Slider = () => {
	return (
		<AliceCarousel autoPlay={true} infinite={true} animationDuration={3000} autoPlayInterval={2000} animationType={'fadeout'}
			mouseTracking
			items={allProducts.slice(0,3).map((item) => {
				return (
					<Container className="container-fluid">
						<Wrapper className="row align-items-center p-5 d-flex justify-content-around">
							<ColumnLeft className="col-md-6 col-lg-6 ">
								<Title className='display-2 text-center'> {item.model_name} </Title>
								<Text className='h4 text-center'> {item.name} </Text>
							</ColumnLeft>
							<ColumnRight className="col-md-6 col-lg-6">
								<Image src={item.images[0].imageLink} onDragStart={handleDragStart} />
							</ColumnRight>
						</Wrapper>
					</Container>
				);
			})}
		/>
	);
};

export default Slider;

