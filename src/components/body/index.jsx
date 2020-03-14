import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Poster from './Poster'
import Title from './Title'
import TextArea from './TextArea'

class Body extends React.Component {

  render() {
    const { selectedSearchResult, selectionDetails } = this.props;

    return (
      <div className="container-fluid" style={{ height: "100%", width: "100%", position: "absolute", zIndex: "0" }}>

        {(selectionDetails !== undefined && selectedSearchResult !== undefined) &&
          <Fragment>
            <div className="jumbotron">

              <div className="row">
                <div className="col">
                  <Title
                    selectedSearchResult={selectedSearchResult}
                    selectionDetails={selectionDetails}
                  />
                  <hr />
                  <TextArea
                    selectedSearchResult={selectedSearchResult}
                    selectionDetails={selectionDetails}
                  />
                  <hr />
                </div>

                <div className="col d-flex justify-content-center">
                  <Poster
                    selectedSearchResult={selectedSearchResult}
                  />
                </div>

              </div>

            </div>
          </Fragment>
        }
      </div>
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



