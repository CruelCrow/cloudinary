import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Consts} from './../../constants';
import Error from './../Error';
import Loading from './../Loading';
import {Link} from 'react-router';
import Preview from './Preview';
import PlayVideo from './PlayVideo';
 import {callAction} from "../../actions";

class VideoList extends Component {

    constructor(props) {
        super(props);

        this.setPageTitle = this.setPageTitle.bind(this);
    }

    setPageTitle() {
        document.title = 'Cloudinary';
        if (this.props.currentVideo) {
            document.title = `${this.props.currentVideo.name} - Cloudinary`;
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);

        this.props.callAction(Consts.ACTIONS.LIST_VIDEOS, null, true);

        this.props.callAction(Consts.ACTIONS.CLEAR_VIDEO);

        if (this.props.params['vid']) {
            this.props.callAction(Consts.ACTIONS.GET_VIDEO, atob(this.props.params['vid']), true);
        }

        this.setPageTitle();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.params['vid'] != nextProps.params['vid']) {
            window.scrollTo(0, 0);
            if (nextProps.params['vid']) {
                this.props.callAction(Consts.ACTIONS.GET_VIDEO, atob(nextProps.params['vid']), true);
            } else {
                this.props.callAction(Consts.ACTIONS.CLEAR_VIDEO);
            }
        }
    }

    componentDidUpdate(prevProps, prevState) {
        this.setPageTitle();
    }

    render() {
        return (
            <div className="video-page">
                <header>
                    <Link to='/'><img className='logo' src='/images/logo/cloudinary_logo_for_white_bg.svg' alt='Cloudinary logo' /></Link>
                </header>

                {this.props.params['vid'] &&
                <PlayVideo video={this.props.currentVideo} isLoading={this.props.isLoadingVideo} error={this.props.errorVideo} />}

                <div className="video-list">
                    {this.props.errorList && <Error error={this.props.errorList}></Error>}
                    {this.props.isLoadingListOfVideos ? <Loading visible={true}/> :
                        <ul>
                            {this.props.listOfVideos.map((v, i) => {
                                return <li className={this.props.params['vid'] == v.videoDataUrlEncoded ? 'selected' : ''} key={`Preview${i}`}><Preview videoPreview={v}/></li>
                            })}
                        </ul>
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        listOfVideos: state.video.listOfVideos,
        errorList: state.video.errorList,
        currentVideo: state.video.currentVideo,
        errorVideo: state.video.errorVideo,
        isLoadingListOfVideos: state.loading.has(Consts.ACTIONS.LIST_VIDEOS),
        isLoadingVideo: state.loading.has(Consts.ACTIONS.GET_VIDEO)
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({callAction}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);