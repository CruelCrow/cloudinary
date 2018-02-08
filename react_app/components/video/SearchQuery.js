import React from 'react';
import {Component} from 'react';

class SearchQuery extends Component {

    constructor(props) {
        super(props);

        this.state = {
            lastChangeTimestamp: null
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        if (e.target.value.length == 1) {
            return;
        }

        this.props.onChange(e.target.value);
    }

    render() {
        return (
            <div className="search-query">
                <input type="text" placeholder="Search a video" onChange={this.onChange} disabled={this.props.disabled} autoFocus={this.props.autoFocus} />
            </div>
        )
    }
}

SearchQuery.defaultProps = {
    onChange: ()=>{},
    disabled: false,
    loading: false,
    autoFocus: false
};

SearchQuery.propTypes = {
    onChange: React.PropTypes.func.isRequired,
    disabled: React.PropTypes.bool,
    autoFocus: React.PropTypes.bool
};

export default SearchQuery;