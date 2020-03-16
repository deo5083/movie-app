import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Poster from './Poster'
import Title from './Title'
import TextArea from './TextArea'
import { Jumbotron, Container, Col, Row} from 'react-bootstrap';

class Body extends React.Component {

  render() {
    const { selectedSearchResult, selectionDetails } = this.props;

    return (
      <Container fluid style={{ height: "100%", width: "100%", position: "absolute", zIndex: "0" }}>

        {(selectionDetails !== undefined && selectedSearchResult !== undefined) &&
          <Fragment>
            <Jumbotron>
            <br/>
              <Row className="row">
                <Col className="col">
                  <Title
                    selectedSearchResult={selectedSearchResult}
                    selectionDetails={selectionDetails}
                  />
                  <TextArea
                    selectedSearchResult={selectedSearchResult}
                    selectionDetails={selectionDetails}
                  />
                </Col>
                
                <Col className="col d-flex justify-content-center">
                  <Poster
                    selectedSearchResult={selectedSearchResult}
                  />
                </Col>

              </Row>

            </Jumbotron>
          </Fragment>
        }
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedSearchResult: state.reducer.selected_result,
    selectionDetails: state.reducer.selected_details
  }
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Body);