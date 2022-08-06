import { Link, useLocation, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet-async';
import { useContext, useEffect, useState } from 'react';
import { Store } from '../Store';
import { toast } from 'react-toastify';
import { getError } from '../util';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  background: linear-gradient(#ffffff83, #d4d4d4ac);
  height: 70vh;
  width: 50%;
  justify-content: center;
  display: flex;
  margin-bottom: 50px;
`;

export default function LoginScreen() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios.post('/api/users/signin', {
        email,
        password,
      });
      ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate(redirect || '/');
    } catch (err) {
      toast.error(getError(err));
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    <MainContainer>
      <Wrapper>
        <Container className="small-container">
          <Helmet>
            <title>Log In</title>
          </Helmet>
          <h1 className="my-3">Sign In</h1>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                placeholder="Enter Your Email"
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              placeholder="Enter Your Email"
              className="mb-3"
              controlId="password"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                placeholder="Password"
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div className="mb-3">
              <Button type="submit" variant="dark">
                Sign In
              </Button>
            </div>
            <div className="mb-3">
              New customer?{' '}
              <Link to={`/signup?redirect=${redirect}`}>
                Create your account
              </Link>
            </div>
          </Form>
        </Container>
      </Wrapper>
    </MainContainer>
  );
}
