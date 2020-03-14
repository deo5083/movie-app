import React from 'react';

class Title extends React.Component {

    render() {
        const { selectedSearchResult, selectionDetails } = this.props;
        return (
            <div>
                <h3>{selectedSearchResult.label} <small>{selectionDetails.Year ? "(" + selectionDetails.Year + ")" : ""}</small></h3>

            </div>
        );
    }
}

export default Title;



