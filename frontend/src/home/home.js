import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import background from '../images/background.jpg';
import './home.css';

function Home() {
    return (
        <div>
            <img src={background} alt="Background" className="background" />
            <header className="header">
                <a href="#" className="logo">Mina De Aço</a>

                <nav>
                    <a href="#" className="active">Home</a>
                    <a href="servicos">Serviços</a>
                    <a href="sobre">Sobre</a>
                    <a href="contato">Contato</a>
                    <a href='register'>Cadastrar-se</a>
                </nav>
            </header>
            <section className="home">
                <div className="homeContent">
                    <h1>Olá, seja bem-vindo(a) ao nosso projeto. <span>Mina De Aço</span></h1>
                    <p>Reciclar é fazer nossa parte para um mundo mais sustentável!</p>
                    <a href="servicos" className="btn">Serviços</a>
                </div>
            </section>
        </div>
    );
}

export default Home;
