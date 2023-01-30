import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../actions/auth';
import axios from 'axios';

import Logo from "../assets/icone.png";

import { FcGoogle } from 'react-icons/fc';

const Signup = ({ signup, isAuthenticated }) => {
    const [accountCreated, setAccountCreated] = useState(false);
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        adress:'',
        phone:'',
        email: '',
        password: '',
        re_password: ''
    });

    const { first_name, last_name, adress,phone, email, password, re_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if (password === re_password) {
            signup(first_name, last_name,adress,phone, email, password, re_password);
            setAccountCreated(true);
        }
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
    if (accountCreated) {
        return <Redirect to='/login' />
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
                            <input type="text" id="typeEmailX-2" className="form-control form-control-lg" placeholder='Nom' name='last_name' value={last_name} onChange={e => onChange(e)} required/>
                            </div>

                            <div className="form-outline mb-4">
                            <input type="text" id="typeEmailX-2" className="form-control form-control-lg" placeholder='Prénom' name='first_name' value={first_name} onChange={e => onChange(e)} required/>
                            </div>

                            <div className="form-outline mb-4">
                            <input type="email" id="typeEmailX-2" className="form-control form-control-lg" placeholder='Email' name='email' value={email} onChange={e => onChange(e)} required/>
                            </div>

                            <div className="form-outline mb-4">
                            <input type="text" id="typeEmailX-2" className="form-control form-control-lg" placeholder='Adresse' name='adress' value={adress} onChange={e => onChange(e)} required/>
                            </div>

                            <div className="form-outline mb-4">
                            <input type="text" id="typeEmailX-2" className="form-control form-control-lg" placeholder='Téléphone' name='phone' value={phone} onChange={e => onChange(e)} required/>
                            </div>

                            <div className="form-outline mb-4">
                            <input type="password" id="typePasswordX-2" className="form-control form-control-lg" placeholder='Mot de passe' name='password' value={password} onChange={e => onChange(e)} minLength='6' required />
                            </div>

                            <div className="form-outline mb-4">
                            <input type="password" id="typePasswordX-2" className="form-control form-control-lg" placeholder='Confirmer le mot de passe' name='re_password' value={re_password} onChange={e => onChange(e)} minLength='6' required />
                            </div>

                            <button className="btn btn-primary " type="submit" style={{backgroundColor:"#BE958E",borderColor:"#BE958E"}}>Créer</button>
                        </form>
                        <p className='mt-3'>Ou vous pouvez continuer avec</p>

                        <button className="btn btn-lg btn-block btn-primary" style={{ backgroundColor:"#ffffff", color:"#4285F4",borderColor:"#4285F4" }} type="submit" onClick={continueWithGoogle}><FcGoogle size={'1.3em'}/>&nbsp;&nbsp;&nbsp;Continuer avec Google</button>
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

export default connect(mapStateToProps, { signup })(Signup);
