import React from 'react';
import Search from './search/Search'
import { Navbar, Container, Row, Col } from 'react-bootstrap';

class Header extends React.Component {

  render() {
    return (

      <Navbar bg="light" fixed="top" >
        <Navbar.Collapse id="basic-navbar-nav">
          <Container>
            <Row>
              <Col>
                <Navbar.Brand href="#home">MovieLook</Navbar.Brand>
              </Col>
              <Col xs={6}>
                <Search />
              </Col>
              <Col />
            </Row>
          </Container>
        </Navbar.Collapse>
      </Navbar>

    );
  }
}

export default Header;