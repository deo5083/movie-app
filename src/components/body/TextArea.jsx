import React from 'react';

class TextArea extends React.Component {
    render() {
        const { selectionDetails } = this.props;
        return (
            <div>
                <p>{selectionDetails.Plot}</p>
            </div>
        );
    }
}

export default TextArea;