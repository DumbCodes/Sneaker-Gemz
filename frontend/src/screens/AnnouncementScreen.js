import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rating from '../components/Rating';
import data from '../data';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Container = styled.div``;
const MainContainer = styled.div`
  color: White;
  height: 100vh;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const Timer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 7em;
  padding-top: 2em;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;

const HeadingContainer = styled.div`
  text-align: center;
`;

const TimerContainer = styled.div`
  border: 3px solid white;
  border-radius: 5px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-top: 3em;
  padding: 3em;
  text-align: center;
`;

const Heading = styled.h2`
  font-weight: 800;
  margin-bottom: 0.5em;
  font-size: 3em;
`;
const CountdownContainer = styled.section``;

const Time = styled.section`
  font-size: 3em;
  font-weight: 600;
`;

const HeadingText = styled.p`
  color: lightgray;
  font-size: 2em;
  font-weight: 600;
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
const Product = styled.div`
  border: 1px #202020 solid;
  margin: 1rem;
`;

const ProductInfo = styled.div`
  padding: 1rem;
  background: #fff;
`;

const AnnouncementScreen = () => {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countDate = new Date('November 30,2022').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
  });

  return (
    <Container>
      <MainContainer>
        <Helmet>
          <title>Announcement</title>
        </Helmet>
        <Timer>
          <HeadingContainer>
            <Heading>COMING SOON!!</Heading>
            <HeadingText>Sale Starts In</HeadingText>
          </HeadingContainer>
          <TimerContainer>
            <CountdownContainer>
              <Time>{timerDays}</Time>
              <Time>
                <small>Days</small>
              </Time>
            </CountdownContainer>
            <Time>:</Time>
            <CountdownContainer>
              <Time>{timerHours}</Time>
              <Time>
                <small>Hours</small>
              </Time>
            </CountdownContainer>
            <Time>:</Time>
            <CountdownContainer>
              <Time>{timerMinutes}</Time>
              <Time>
                <small>Minutes</small>
              </Time>
            </CountdownContainer>
            <Time>:</Time>
            <CountdownContainer>
              <Time>{timerSeconds}</Time>
              <Time>
                <small>Seconds</small>
              </Time>
            </CountdownContainer>
          </TimerContainer>
        </Timer>
      </MainContainer>
      <Title>Upcoming Products</Title>
      <Row>
        <Products>
          {data.upcomingproducts.map((product) => (
            <Col className="product" key={product.aka}>
              <img src={product.image} alt={product.name} />
              <ProductInfo>
                <p>{product.name}</p>
                <p>
                  <strong>${product.price}</strong>
                </p>
                <Button className="disable">Coming Soon</Button>
              </ProductInfo>
            </Col>
          ))}
        </Products>
      </Row>
    </Container>
  );
};

export default AnnouncementScreen;
