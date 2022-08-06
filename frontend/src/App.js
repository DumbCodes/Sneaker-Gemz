import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext } from 'react';
import { Store } from './Store';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import RegisterScreen from './screens/RegisterScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrder from './screens/PlaceOrder';
import OrderScreen from './screens/OrderScreen';
import OrderHistory from './screens/OrderHistory';
import styled from 'styled-components';
import AboutUs from './screens/AboutUs';
import Booking from './screens/Booking';
import { ShoppingCartOutlined } from '@mui/icons-material';

const MainContainer = styled.div`
  background: linear-gradient(#1313137d, #0000007d),
    url('./images/bgimg.jpg') center;
  background-size: cover;
  background-attachment: fixed;
  padding: 1rem;
  flex: 1;
`;

const NavigationBar = styled.div``;

const NavItem = styled.div`
  margin: 0px 20px;
  justify-content: center;
  display: flex;
`;

const RoutesContainer = styled.div``;

const Footer = styled.div`
  color: lightgray;
`;

const Logo = styled.img`
  width: 40%;
  cursor: pointer;
`;

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
  };
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <ToastContainer position="bottom-center" limit={1} />
        <NavigationBar>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>
                  <Logo src="./images/logo.png" alt="Sneakr Gemz" />
                </Navbar.Brand>
              </LinkContainer>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto  w-100  justify-content-end">
                  <NavItem>
                    <Link to="/booking" className="nav-link">
                      Booking
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/aboutus" className="nav-link">
                      AboutUs
                    </Link>
                  </NavItem>

                  <NavItem>
                    <Link to="/cart" className="nav-link">
                      <ShoppingCartOutlined />
                      {cart.cartItems.length > 0 && (
                        <Badge pill bg="primary">
                          {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                        </Badge>
                      )}
                    </Link>
                  </NavItem>
                  <NavItem>
                    {userInfo ? (
                      <NavDropdown
                        title={userInfo.name}
                        id="basic-nav-dropdown"
                      >
                        <LinkContainer to="/profile">
                          <NavDropdown.Item>User Profile</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/orderhistory">
                          <NavDropdown.Item>Order History</NavDropdown.Item>
                        </LinkContainer>
                        <NavDropdown.Divider />
                        <Link
                          className="dropdown-item"
                          to="#signout"
                          onClick={signoutHandler}
                        >
                          Sign Out
                        </Link>
                      </NavDropdown>
                    ) : (
                      <Link className="nav-link" to="/signin">
                        Sign In
                      </Link>
                    )}
                  </NavItem>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </NavigationBar>
        <MainContainer>
          <RoutesContainer>
            <Container className="mt-5">
              <Routes>
                <Route path="/product/:aka" element={<ProductScreen />} />
                <Route path="/cart" element={<CartScreen />} />
                <Route path="/signin" element={<LoginScreen />} />
                <Route path="/signup" element={<RegisterScreen />} />
                <Route path="/placeorder" element={<PlaceOrder />} />
                <Route path="/order/:id" element={<OrderScreen />}></Route>
                <Route path="/orderhistory" element={<OrderHistory />}></Route>
                <Route path="/aboutus" element={<AboutUs />}></Route>
                <Route path="/booking" element={<Booking />}></Route>
                <Route
                  path="/shipping"
                  element={<ShippingAddressScreen />}
                ></Route>
                <Route path="/payment" element={<PaymentScreen />}></Route>
                <Route path="/" element={<HomeScreen />} />
              </Routes>
            </Container>
          </RoutesContainer>
          <Footer>
            <div className="text-center">
              Sneakr Gemz | All Rights Reserved{' '}
            </div>
          </Footer>
        </MainContainer>
      </div>
    </BrowserRouter>
  );
}

export default App;
