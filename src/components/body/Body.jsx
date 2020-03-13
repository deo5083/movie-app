import React from 'react';
// import SearchBar from './SearchBar';
// import SearchButton from './SearchButton';
// import SearchResult from './SearchResult';
import { searchOMDB } from '../../utlis/apis'
// import { selectSearchResult } from '../../../actions/actions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Body extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data:null
    }
  }

  render() {
    
    if(this.props.selectedSearchResult !== undefined){
      const _this=this;
      // searchOMDB(this.props.selectedSearchResult.id).then(res => {
      //   _this.setState({data:res})
      // });
      console.log("data",this.state.data)
    }
    return (
      <div className="container" style={{ height: "100%" }}>

        {this.props.selectedSearchResult !== undefined &&

          <h3>{this.props.selectedSearchResult.id}</h3>
          







        }



      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedSearchResult: state.simpleReducer.result
  }
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Body);



