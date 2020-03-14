import React from 'react';
import loading from '../icons/loading.gif'

class Poster extends React.Component {

    render() {
        const { selectedSearchResult } = this.props;

        return (
            <div style={{ display: "grid" }}>

                <div className="d-flex justify-content-center align-items-center" style={{ gridArea: "1 / 1", backgroundColor: "white", width: "400px", height: "500px" }}>
                    <img
                        src={loading}
                        alt="loading..."
                    />
                </div>

                <div style={{ gridArea: "1 / 1" }}>
                    <img
                        src={selectedSearchResult.img}
                        className="align-self-center mr-3"
                        alt={selectedSearchResult.label}
                        style={{ width: "400px", height: "500px" }}
                    />
                </div>

            </div>
        );
    }
}

export default Poster;



