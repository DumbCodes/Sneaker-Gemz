import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  //align-items: center;
  color: white;
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
`;

// Left Side

const Left = styled.div`
  flex: 0.7;
  width: 100%;
  height: 100%;
`;

//Right Side
const Right = styled.div`
  width: 100%;
  height: 100%;
  flex: 1.3;
  //align-items: center;
  justify-content: flex-end;
  display: flex;
`;

const Image = styled.img`
  width: 70%;
  height: 60%;
`;

const Title = styled.h1`
  font-size: 40px;
  //margin-bottom: 100px;
  margin-left: 20px;
`;
const Description = styled.p`
  margin: 25px 25px;
  font-size: 20px;
  letter-spacing: px;
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
          <Description>
            We champion continual progress for athletes and sport by taking
            action to help athletes reach their potential. Every job at Sneakr
            Gemz is grounded in a team-first mindset, cultivating a culture of
            innovation and a shared purpose to leave an enduring impact.
          </Description>
        </Left>
        <Right>
          <Image src="./images/shoe.gif" />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default AboutUs;
