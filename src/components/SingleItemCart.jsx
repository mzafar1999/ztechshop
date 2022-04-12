import styled from "styled-components";
import { Box, Title, Text } from "../components/styledComponents";
import { BiMinusCircle } from "react-icons/bi";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { qtyDec, qtyInc, removeItemFromCart } from "../redux/cartSlice";
import { newPriceCalculate } from "./CardComp";
const Card = styled.div`
  min-height: 120px;
  width: 100%;
  @media (max-width:768px) {
    justify-content: center !important;
    align-items: center !important;
  }
`;
const ImageWrapper = styled.div`
  height: 110px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const PriceBox = styled.div`
  @media (max-width:768px) {
    margin: 10px auto;
    text-align: center;
  }
`
const ItemDetailsBox = styled.div`
  @media (max-width:768px) {
    margin: 10px auto;
    justify-content: center;
  }
`


const SingleItemCart = ({ _id,phoneImages,phoneFullName,phonePrice,qauntity}) => {
  const dispatch = useDispatch();
  let increaseQty = (id) => {
    dispatch(qtyInc(id));
  };
  const decreaseQty = (id) => {
    dispatch(qtyDec(id));
  };

  const removeItem = (id) => {
    dispatch(removeItemFromCart(id)) 
  }

  let thumbnail
  if(phoneImages){
      if(phoneImages.length>0){
          thumbnail = phoneImages[0]
      }else{
          thumbnail = '/images/loading.jpg'
      }
  }else{
      thumbnail = '/images/loading.jpg'
  }

  return (
    <Card className="row d-flex border-bottom align-items-center">
      <ItemDetailsBox className="d-flex align-items-center col-md-5 col-sm-12">
        <ImageWrapper>
          <Image src={thumbnail}></Image>
        </ImageWrapper>
        <Box className="w100">
          <Title className="h6 mx-4 text-capitalize w-100" noPadding noBorder>
            {phoneFullName}
          </Title>
          <Text className="mx-4">${phonePrice}</Text>
        </Box>
      </ItemDetailsBox>

      <Box className="d-flex align-items-center justify-content-center col-md-4">
        <MdOutlineAddCircleOutline
          className="mx-2"
          style={{fontSize:'30px'}}
          role="button"
          onClick={() => increaseQty(_id)}
        />
        <Box className="border px-3 py-1 border-success rounded font-weight-bold">
          {qauntity}
        </Box>
        <BiMinusCircle
          onClick={() => decreaseQty(_id)}
          className="mx-2"
          style={{fontSize:'30px'}}
          role="button"
        />
      </Box>
      <PriceBox className="col-md-2 mt-sm-3 col-sm-12  text-center">
        <Title className="h5">${newPriceCalculate(phonePrice,phonePrice)* qauntity}</Title>
      </PriceBox>
      <Box className="col-1 mb-2">
      <TiDeleteOutline onClick={()=> removeItem(_id)} size={30} style={{color:'red'}} role='button' />
      </Box>
    </Card>
  );
};

export default SingleItemCart;
