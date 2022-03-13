import styled from "styled-components";
import { Box, Title, Text } from "../components/styledComponents";
import { BiMinusCircle } from "react-icons/bi";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { qtyDec, qtyInc } from "../redux/cartSlice";
const Card = styled.div`
  height: 120px;
  width: 100%;
`;
const ImageWrapper = styled.div`
  height: 110px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const SingleItemCart = ({ id, name, price, images, qauntity }) => {
  const dispatch = useDispatch();
  let increaseQty = (id) => {
    dispatch(qtyInc(id));
  };
  const decreaseQty = (id) => {
    dispatch(qtyDec(id));
  };
  return (
    <Card className="row d-flex border-bottom align-items-center justify-content-between">
      <Box className="d-flex align-items-center col-6">
        <ImageWrapper>
          <Image src={images[0].imageLink}></Image>
        </ImageWrapper>
        <Box className="w100">
          <Title className="h6 mx-4 text-capitalize w-75" noPadding noBorder>
            {name}
          </Title>
          <Text className="mx-4">${price}</Text>
        </Box>
      </Box>

      <Box className="d-flex align-items-center justify-content-center col-4">
        <MdOutlineAddCircleOutline
          className="mx-2"
          size={30}
          role="button"
          onClick={() => increaseQty(id)}
        />
        <Box className="border px-3 py-1 border-success rounded font-weight-bold">
          {qauntity}
        </Box>
        <BiMinusCircle
          onClick={() => decreaseQty(id)}
          className="mx-2"
          size={30}
          role="button"
        />
      </Box>
      <Box className="col-2">
        <Title className="h5">${price * qauntity}</Title>
      </Box>
    </Card>
  );
};

export default SingleItemCart;
