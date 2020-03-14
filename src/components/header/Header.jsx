import React from 'react';
import Search from './search/Search'


class Header extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">

          </div>
          <div className="col-6">
            <Search />
          </div>
          <div className="col">

          </div>
        </div>

      </div>

    );
  }
}

export default Header;