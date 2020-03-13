import React from 'react';

class SearchResult extends React.Component {

    doThis(val) {
        debugger
        console.log(val)
    }

    generateListItem(result) {
        if (result.img === undefined) {
            result.img = "http://placehold.jp/24/cccccc/ffffff/40x50.png?text=N/A"
        }
        return (
            <li className="list-group-item list-group-item-action" style={{ cursor: "pointer" }} onClick={() => this.props.handleSearchClick(result)}>
                <div className="media">
                    <img src={result.img} className="align-self-center mr-3" alt={result.label} style={{ width: "40px", height: "50px" }} />
                    <div className="media-body">
                        <h6 className="mb-0">{result.label}</h6>
                        {
                            result.details !== undefined && (
                                <small className="text-muted" style={{ width: "100%" }}>{result.details}</small>
                            )
                        }
                    </div>
                </div>
            </li>
        )
    }

    render() {
        let { searchResult } = this.props;
        if (searchResult === undefined || searchResult === null) searchResult = [];
        var list = [];
        searchResult.forEach(sr => {
            list.push(this.generateListItem({ label: sr.label, img: sr.img, details: sr.details, id: sr.id }));
        })
        return (
            <div style={{ width: "80%" }}>
                <ul className="list-group">
                    {list}
                </ul>
            </div>
        );
    }
}

export default SearchResult;