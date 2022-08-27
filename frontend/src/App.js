import { MDBFooter, MDBContainer, MDBIcon } from 'mdb-react-ui-kit';
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
import styled from 'styled-components';
import AboutUs from './screens/AboutUs';
import Booking from './screens/BookingScreen';
import { ShoppingCartOutlined } from '@mui/icons-material';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import AnnouncementScreen from './screens/AnnouncementScreen';
import ProfileScreen from './screens/ProfileScreen';
import ProtectedRoute from './components/ProtectedRoute';
import DashboardScreen from './screens/DashboardScreen';
import AdminRoute from './components/AdminRoute';
import OrderHistoryScreen from './screens/OrderHistory';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen.js';
import OrderListScreen from './screens/OrderListScreen';
import UserListScreen from './screens/UserListScreen';

const AppJsContainer = styled.div``;

const MainContainer = styled.div`
  background: linear-gradient(#1313137d, #0000007d),
    url('./images/bgimg.jpg') center;
  background-size: cover;
  background-attachment: fixed;
  padding: 1rem;
  flex: 1;
`;
const Announcement = styled.div`
  height: 40px;
  background-color: lightgreen;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 20px;
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

const Button = styled.button`
  background: none;
  border: none;
  margin-right: 1em;
`;

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
    window.location.href = '/signin';
  };
  return (
    <BrowserRouter>
      <AppJsContainer className="d-flex flex-column site-container">
        <ToastContainer position="bottom-center" limit={1} />
        <NavigationBar>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>
                  <Logo
                    src="./images/logo.png"
                    alt="Sneakr Gemz"
                    className="logo"
                  />
                </Navbar.Brand>
              </LinkContainer>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto  w-100  justify-content-end">
                  <NavItem>
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </NavItem>
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
                    {userInfo && userInfo.isAdmin && (
                      <NavDropdown title="Action" id="admin-nav-dropdown">
                        <LinkContainer to="/admin/dashboard">
                          <NavDropdown.Item>Dashboard</NavDropdown.Item>
                        </LinkContainer>
                        <NavDropdown.Divider />
                        <LinkContainer to="/admin/products">
                          <NavDropdown.Item>Products</NavDropdown.Item>
                        </LinkContainer>
                        <NavDropdown.Divider />
                        <LinkContainer to="/admin/orders">
                          <NavDropdown.Item>Orders</NavDropdown.Item>
                        </LinkContainer>
                        <NavDropdown.Divider />
                        <LinkContainer to="/admin/users">
                          <NavDropdown.Item>Users</NavDropdown.Item>
                        </LinkContainer>
                      </NavDropdown>
                    )}
                  </NavItem>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </NavigationBar>
        <Link to="/announcement">
          <Announcement>
            <marquee scrollamount="20" behavior="scroll">
              <Button>New Product Release Date Announced. ! .</Button>
              <Button>Checkout new upcoming products.</Button>
            </marquee>
          </Announcement>
        </Link>
        <MainContainer>
          <RoutesContainer>
            <Container className="mt-5">
              <Routes>
                <Route path="/product/:aka" element={<ProductScreen />} />
                <Route path="/cart" element={<CartScreen />} />
                <Route path="/signin" element={<LoginScreen />} />
                <Route path="/signup" element={<RegisterScreen />} />
                <Route path="/placeorder" element={<PlaceOrder />} />

                <Route
                  path="/order/:id"
                  element={
                    <ProtectedRoute>
                      <OrderScreen />
                    </ProtectedRoute>
                  }
                ></Route>

                <Route path="/aboutus" element={<AboutUs />}></Route>

                <Route path="/booking" element={<Booking />}></Route>

                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <ProfileScreen />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/orderhistory"
                  element={
                    <ProtectedRoute>
                      <OrderHistoryScreen />
                    </ProtectedRoute>
                  }
                ></Route>

                <Route
                  path="/announcement"
                  element={<AnnouncementScreen />}
                ></Route>

                <Route
                  path="/shipping"
                  element={<ShippingAddressScreen />}
                ></Route>

                <Route path="/payment" element={<PaymentScreen />}></Route>

                <Route
                  path="/admin/dashboard"
                  element={
                    <AdminRoute>
                      <DashboardScreen />
                    </AdminRoute>
                  }
                ></Route>

                <Route
                  path="/admin/products"
                  element={
                    <AdminRoute>
                      <ProductListScreen />
                    </AdminRoute>
                  }
                ></Route>

                <Route
                  path="/admin/users"
                  element={
                    <AdminRoute>
                      <UserListScreen />
                    </AdminRoute>
                  }
                ></Route>

                <Route
                  path="/admin/orders"
                  element={
                    <AdminRoute>
                      <OrderListScreen />
                    </AdminRoute>
                  }
                ></Route>

                <Route
                  path="/admin/product/:id"
                  element={
                    <AdminRoute>
                      <ProductEditScreen />
                    </AdminRoute>
                  }
                ></Route>

                <Route path="/" element={<HomeScreen />} />
              </Routes>
            </Container>
          </RoutesContainer>
        </MainContainer>
        <MDBFooter className="bg-dark text-white">
          <MDBContainer className="p-4">
            <Row>
              <Col lg="6" md="12" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Sneakr Gemz</h5>

                <p>
                  One Stop for all your sneaker needs. <br />
                  Buy, Customize, Clean and Repair your shoes with Sneakr Gemz.!
                </p>
              </Col>

              <Col lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">Useful Links</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <Link to="/" className="nav-link mb-3">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/booking" className="nav-link mb-3">
                      Booking
                    </Link>
                  </li>
                  <li>
                    <Link to="/aboutus" className="nav-link mb-3">
                      About Us
                    </Link>
                  </li>
                </ul>
              </Col>

              <Col md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact Us</h6>
                <p>
                  <MDBIcon icon="home" className="me-2" />
                  6/127 Rundle Mall, Adelaide SA 5000
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  sneakrgemz@gmail.com
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" /> + 61 123 456 789
                </p>
                <p>
                  <MDBIcon icon="print" className="me-3" /> + 61 123 456 789
                </p>
              </Col>
            </Row>
          </MDBContainer>

          <Footer
            className="text-center p-3"
            style={{ backgroundColor: 'rgba(1, 1, 1, 0.7)' }}
          >
            © Copyright 2022 : SNEAKR GEMZ | All Rights Reserved
          </Footer>
        </MDBFooter>
      </AppJsContainer>
    </BrowserRouter>
  );
}

export default App;
