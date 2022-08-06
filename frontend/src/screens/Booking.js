import styled from 'styled-components';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  min-width: 40%;
  padding: 25px;
  margin-bottom: 50px;
  background: linear-gradient(#ffffff83, #d4d4d4ac);
`;

const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  margin-bottom: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  //min-width: 40%;
  outline: none;
  border: none;
  padding: 15px;
  border-radius: 10px;
  background-color: #dedede;
  margin: 10px 10px;
  font-size: 14px;
`;

const Agreement = styled.span`
  font-size: 14px;
  margin: 20px 0px;
`;

const Button = styled.button`
  border: none;
  outline: none;
  padding: 12px 0;
  background-color: white;
  border-radius: 20px;
  width: 180px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  background-color: #1c1c1c;
  color: white;
  margin: 5px;
`;

const Booking = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_hn1w1lr',
        'template_yelm3oe',
        form.current,
        '2Eef6riUuAKD01Njd'
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('Email sent!');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  //const user = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate('/');
  };

  return (
    <Container>
      <Wrapper>
        <Title> Book an Appointment </Title>
        <Form ref={form} onSubmit={(sendEmail, handleSubmit)}>
          <Input placeholder="Name" name="first_name" />
          <Input placeholder="Last Name" name="last_name" />
          <Input placeholder="Email" name="email" />
          <p>Enter Booking Date</p>
          <Input type="date" placeholder="Booking date" name="date" />
          <Input placeholder="Reason for booking" name="message" />

          <Agreement>
            You can cancel or update booking via the confirmation email sent to
            you.
          </Agreement>

          <Button value="send" type="submit">
            Submit
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Booking;
