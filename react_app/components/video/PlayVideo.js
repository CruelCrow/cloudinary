import React from 'react';
import {Component} from 'react';
import {Video} from './../../models';
import Error from './../Error';
import Loading from './../Loading';
import Plyr from 'react-plyr';

class PlayVideo extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.error) {
            return <figure className="video">
                <Error error={this.props.error}></Error>
            </figure>
        } else if (this.props.isLoading || !this.props.video) {
            return <figure className="video">
                <Loading visible={true}/>
            </figure>
        } else {
            return <figure className="video">
                <Plyr type='video' url={this.props.video.url}/>
                <figcaption>
                    {this.props.video.name}
                </figcaption>
                <div className='description'>{this.props.video.description}</div>
            </figure>
        }
    }
}

PlayVideo.defaultProps = {
    video: null,
    isLoading: true,
    error: null
};

PlayVideo.propTypes = {
    video: React.PropTypes.object,
    isLoading: React.PropTypes.bool,
    error: React.PropTypes.object
};

export default PlayVideo;