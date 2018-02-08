import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Consts} from './../../constants';
import {Link} from 'react-router';
import {callAction} from "../../actions";
import Header from "./Header";
import moment from 'moment';
import VideoPreview from "../../models/VideoPreview";

class UserPage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 0);

        this.props.callAction(Consts.ACTIONS.CLEAR_VIDEO);
    }

    render() {
        return <div className="user-page">
            <Header />
            <div className="user-history">
                <ul>
                    {(()=>{
                        let ret = [];
                        for (let k in this.props.user.history) {
                            let h = new VideoPreview(this.props.user.history[k]);
                            console.log(h);
                            ret.push(
                                <li key={`History${k}`}>
                                    <time>{new Date(parseInt(k)).toString()}</time>
                                    <Link to={`/video/${h.videoDataUrlEncoded}`}>{h.name}</Link>
                                </li>
                            );
                        }
                        return ret.reverse(); //from latest to oldest
                    })()}
                </ul>
            </div>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({callAction}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);