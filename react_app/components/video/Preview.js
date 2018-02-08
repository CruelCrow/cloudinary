import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router';
import {VideoPreview} from './../../models';

class Preview extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <figure className="video-preview">
                <Link to={`/video/${this.props.videoPreview.videoDataUrlEncoded}`}>
                    <div className='preview-image' style={{backgroundImage: `url(${this.props.videoPreview.image})`}}></div>
                    <figcaption>
                        {this.props.videoPreview.name}
                    </figcaption>
                </Link>
            </figure>
        );
    }
}

VideoPreview.defaultProps = {
    videoPreview: new VideoPreview()
};

VideoPreview.propTypes = {
    videoPreview: React.PropTypes.object.isRequired
};

export default Preview;