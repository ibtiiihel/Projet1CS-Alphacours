import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';

const Navbar = ({ logout, isAuthenticated }) => {
    const [redirect, setRedirect] = useState(false);

    const logout_user = () => {
        logout();
        setRedirect(true);
    };

    const guestLinks = () => (
        <Fragment>
            <li className='nav-item'>
                <Link className='nav-link' to='/login'>Se connecter</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to='/signup'>Créer un compte</Link>
            </li>
        </Fragment>
    );

    const authLinks = () => (
        <li className='nav-item'>
            <a className='nav-link' href='#!' onClick={logout_user}>Logout</a>
        </li>
    );

    return (
        <Fragment style={{backgroundColor:"#F5EBE0"}}>
            <nav className='navbar navbar-expand-lg navbar-light' style={{backgroundColor:"#F5EBE0",borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
                <Link className='navbar-brand' to='/' style={{backgroundColor:"#F5EBE0"}}>AlphaCours</Link>
                <button 
                    className='navbar-toggler' 
                    type='button' 
                    data-toggle='collapse' 
                    data-target='#navbarNav' 
                    aria-controls='navbarNav' 
                    aria-expanded='false' 
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav' style={{backgroundColor:"#F5EBE0"}}>
                    <ul className='navbar-nav'>
                        
                        {isAuthenticated ? authLinks() : guestLinks()}
                    </ul>
                </div>
            </nav>
            {redirect ? <Redirect to='/' /> : <Fragment></Fragment>}
        </Fragment>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(Navbar);
