import React, { Component } from 'react';
import './Home.css';
import GlobalSearch from './GlobalSearch.js';
import { Container, Row, Col} from 'react-bootstrap';

class Home extends Component {
    render() {
      return (
        <div style={{'padding': '1rem', height: ''}}>
          <Container fluid id="main-title-page">
            <Row>
              <Col>
                <h1 class="text-center">Prime Parts Tracker</h1>
              </Col>
            </Row>
            <GlobalSearch />
          </Container>
        </div>
      );
    }
  }
  
export default Home;