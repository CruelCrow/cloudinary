import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header>
                <Link to='/'><img className='logo' src='/images/logo/cloudinary_logo_for_white_bg.svg' alt='Cloudinary logo' /></Link>
            </header>
        );
    }
}

export default Header;