import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  color: white;
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
const Title = styled.h1`
  font-size: 40px;
  //margin-bottom: 100px;
  margin-left: 20px;
`;
const Description = styled.p`
  margin: 25px 20px;
  font-size: 20px;
  letter-spacing: 3px;
`;

const AboutUs = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Title> Sneakr Gemz </Title>

          <Description>
            One Stop for all your sneaker needs. Buy, Customize, Clean and
            Repair your shoes with SneakrGemz.
          </Description>
        </Left>
      </Wrapper>

      <Right></Right>
    </Container>
  );
};

export default AboutUs;
