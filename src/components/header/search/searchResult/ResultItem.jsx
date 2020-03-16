import React from 'react';
import loading from '../../../icons/loading_small.gif'

class ResultItem extends React.Component {

    render() {
        let { result } = this.props;

        return (
            <div className="media">
                <div style={{ display: "grid" }}>
                    <div className="d-flex justify-content-center align-items-center" style={{ gridArea: "1 / 1", backgroundColor: "white", width: "40px", height: "50px" }}>
                        <img
                            src={loading}
                            alt="loading..."
                        />
                    </div>
                    <div style={{ gridArea: "1 / 1" }}>
                        <img
                            src={result.img}
                            className="align-self-center mr-3"
                            alt={result.label}
                            style={{ width: "40px", height: "50px" }}
                        />
                    </div>
                </div>

                <div className="media-body">
                    <h6 className="mb-0">{result.label} {result.year !== undefined && "(" + result.year + ")"} </h6>
                    {
                        result.details !== undefined && (
                            <small className="text-muted" style={{ width: "100%" }}>{result.details}</small>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default ResultItem;