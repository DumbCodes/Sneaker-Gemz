import styled from 'styled-components';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

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

const BookingScreen = () => {
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
          <Form.Group className="mb-3">
            <Form.Control placeholder="Name" name="first_name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control placeholder="Last Name" name="last_name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control placeholder="Email" name="email" type="email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Enter Booking Date</Form.Label>
          </Form.Group>s
          <Form.Group className="mb-3">
            <Form.Control type="date" placeholder="Booking date" name="date" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control placeholder="Reason for booking" name="message" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              You can cancel or update booking via the confirmation email sent
              to you.
            </Form.Label>
          </Form.Group>
          <div>
            <Button value="send" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default BookingScreen;
