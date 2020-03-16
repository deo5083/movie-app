import React from 'react';

class Title extends React.Component {

    render() {
        const { selectedSearchResult, selectionDetails } = this.props;
        return (
            <div>
                <h3>
                    {selectedSearchResult.label}
                    <br />
                    <small>{selectionDetails.Year ? "(" + selectionDetails.Year + ")" : ""}</small>
                </h3>
                <hr />
            </div>
        );
    }
}

export default Title;



