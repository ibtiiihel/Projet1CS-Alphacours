import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <section style={{backgroundColor:"#FEFCF3"}}>
    <br/>
    <div className='container' style={{backgroundColor:"#FEFCF3"}}>
        <div className='jumbotron mt-5' style={{backgroundColor:"#F0DBDB"}}>
            <h1 class='display-4'>Bienvenue sur AlphaCours</h1>
            <p class='lead'>Le site ou vous allez trouver toute l'aide dont vous avez besoin!</p>
            <hr class='my-4' />
            <p>Appuyer ici pour vous connecter</p>
            <Link class='btn btn-primary btn-lg' to='/login' role='button' style={{backgroundColor:"#BE958E",borderColor:"#BE958E"}}>Se connecter</Link>
        </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    </section>
);

export default Home;
