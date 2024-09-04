import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import background from '../images/background.jpg';
import '../global.css';
import Navbar from '../navbar.js';
import Footer from '../footer.js';

function Home() {
    return (
        <div>
            <img src={background} alt="Background" className="background" />
            <Navbar />
            <section className="home">
                <div className="homeContent">
                    <h1>Olá, seja bem-vindo(a) ao nosso projeto. <span>Mina De Aço</span></h1>
                    <p>Reciclar é fazer nossa parte para um mundo mais sustentável!</p>
                    <a href="servicos" className="btn">Serviços</a>
                </div>
            </section>
            <Footer/>
        </div>

    );
}

export default Home;
