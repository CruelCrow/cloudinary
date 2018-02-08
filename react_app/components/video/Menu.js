import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
import {callAction} from "../../actions";
import {Consts} from "../../constants";

class Menu extends Component {

    constructor(props) {
        super(props);

        this.logOut = this.logOut.bind(this);
    }

    logOut() {
        this.props.callAction(Consts.ACTIONS.LOG_OUT);
        window.location = '/';
    }

    render() {
        return (
            <ul className="menu">
                <li className='welcome'>Welcome, {this.props.user.name}</li>
                <li className='history'><Link to={'/user'}>History</Link></li>
                <li className='logout' onClick={this.logOut}>Log out</li>
            </ul>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(Menu);