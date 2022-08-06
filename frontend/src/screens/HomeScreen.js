import { useEffect, useReducer } from 'react';
import axios from 'axios';
import logger from 'use-reducer-logger';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../components/Product';
import { Helmet } from 'react-helmet-async';
import LoadingMessage from '../components/LoadingMessage';
import MessageBox from '../components/MessageBox';
import styled from 'styled-components';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';

const MainContainer = styled.div`
  padding: 1rem;
  flex: 1;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  color: white;
`;

const Title = styled.h1`
  color: white;
  font-size: 50px;
  margin-bottom: 50px;
`;
const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Info = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  color: white;
  align-items: flex-start;
`;

const Wrapper = styled.div`
  flex: 1;
`;

// Left Side

const Left = styled.div`
  flex: 0.3;
  width: 100%;
  height: 100%;
`;

//Right Side
const Right = styled.div`
  width: 100%;
  height: 100%;
  flex: 1.7;
`;
const InfoTitle = styled.h1`
  font-size: 40px;
  margin-bottom: 100px;
  margin-left: 20px;
`;
const Description = styled.p`
  margin-left: 20px;
  margin-bottom: 100px;

  font-size: 20px;
  letter-spacing: 3px;
`;

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };
    fetchData();
  }, []);

  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();

    navigate('/aboutus');
  };

  return (
    <MainContainer>
      <Helmet>
        <title>Sneakr Gemz</title>
      </Helmet>

      <Container>
        <Info>
          <Wrapper>
            <Left>
              <InfoTitle> Style Meets Comfort </InfoTitle>

              <Description>
                One Stop for all your sneaker needs. Buy, Customize, Clean and
                Repair your shoes with SneakrGemz.
              </Description>

              <Button size="lg" onClick={handleClick}>
                Find Out More
              </Button>
            </Left>
          </Wrapper>
          <Right></Right>
        </Info>
      </Container>
      <Title>Featured Products</Title>
      <Products>
        {loading ? (
          <LoadingMessage />
        ) : error ? (
          <MessageBox variant="danger"> {error}</MessageBox>
        ) : (
          <Row>
            {products.map((product) => (
              <Col key={product.aka} sm={6} md={4} lg={4} className="mb-3">
                <Product product={product}></Product>
              </Col>
            ))}
          </Row>
        )}
      </Products>
    </MainContainer>
  );
}
export default HomeScreen;
