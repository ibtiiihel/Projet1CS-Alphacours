import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import axios from 'axios';

import Logo from "../assets/icone.png";
import { FcGoogle } from 'react-icons/fc';

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '' 
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        login(email, password);
    };

    const continueWithGoogle = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_API_URL}/google`)

            window.location.replace(res.data.authorization_url);
        } catch (err) {

        }
    };

    const continueWithFacebook = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/o/facebook/?redirect_uri=${process.env.REACT_APP_API_URL}/facebook`)

            window.location.replace(res.data.authorization_url);
        } catch (err) {

        }
    };

    if (isAuthenticated) {
        return <Redirect to='/' />
    }

    return (
            <section className="vh-100" style={{ backgroundColor:"#FEFCF3"}}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card shadow-2-strong" style={{ borderRadius:"1rem",backgroundColor:"#F0DBDB"}}>
                    <div className="card-body p-5 text-center">
                    <img src={Logo} alt="Logo AlphaCours" width={80} height={69.03}/>
                    <br/>
                    <br/>
                        <form onSubmit={e => onSubmit(e)}>
                            <div className="form-outline mb-4">
                            <input type="email" id="typeEmailX-2" className="form-control form-control-lg" placeholder='Email' name='email' value={email} onChange={e => onChange(e)} required/>
                            </div>

                            <div className="form-outline mb-4">
                            <input type="password" id="typePasswordX-2" className="form-control form-control-lg" placeholder='Mot de passe' name='password' value={password} onChange={e => onChange(e)} minLength='6' required />
                            <p className='mt-3'><Link to='/reset-password'>Mot de passe oublié?</Link></p>
                            </div>

                            <button className="btn btn-primary " type="submit" style={{backgroundColor:"#BE958E",borderColor:"#BE958E"}}>Se connecter</button>
                        </form>
                        <hr class="my-4"></hr>

                        <button className="btn btn-lg btn-block btn-primary" style={{ backgroundColor:"#ffffff", color:"#4285F4",borderColor:"#4285F4" }} type="submit" onClick={continueWithGoogle}><FcGoogle size={'1.3em'}/>&nbsp;&nbsp;&nbsp;Continuer avec Google</button>
                        <p className='mt-3'>Vous n'avez pas de compte? <Link to='/signup'>Créer un compte</Link></p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);


