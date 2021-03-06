import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router';
import Menu from './Menu';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header>
                <Link to='/'>
                    <img className='logo' src='/images/logo/cloudinary_logo_for_white_bg.svg' alt='Cloudinary logo' />
                    <img className='logo-small' src='/images/logo/cloudinary_logo_small.png' alt='Cloudinary logo' />
                </Link>
                <Menu />
            </header>
        );
    }
}

export default Header;